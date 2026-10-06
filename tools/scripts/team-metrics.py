#!/usr/bin/env python3
"""Per-person status from GitHub: issues, PRs, time to merge, cycle time, time spent, CI pass rate.
Writes docs/team/STATUS.md and docs/team/status.json. Needs GH_TOKEN or a logged-in gh CLI."""

from __future__ import annotations

import json
import os
import re
import statistics
import subprocess
import sys
from collections import defaultdict
from datetime import UTC, datetime
from pathlib import Path

REPO = os.environ.get("GITHUB_REPOSITORY", "faizanrooman/Education_OS")
ROOT = Path(__file__).resolve().parents[2]
TIME_RE = re.compile(r"time spent:\s*([\d.]+)\s*h", re.I)
EST_RE = re.compile(r"estimate:\s*([\d.]+)\s*([hd])", re.I)


def gh(args: list[str]):
    out = subprocess.run(["gh", *args], check=True, capture_output=True, text=True).stdout
    return json.loads(out) if out.strip() else []


def iso(s: str | None) -> datetime | None:
    return datetime.fromisoformat(s.replace("Z", "+00:00")) if s else None


def hours(a: datetime | None, b: datetime | None) -> float | None:
    return round((b - a).total_seconds() / 3600, 1) if a and b else None


def main() -> int:
    issues = gh(
        [
            "issue",
            "list",
            "-R",
            REPO,
            "--state",
            "all",
            "--limit",
            "1000",
            "--json",
            "number,title,state,assignees,labels,createdAt,closedAt,body",
        ]
    )
    prs = gh(
        [
            "pr",
            "list",
            "-R",
            REPO,
            "--state",
            "all",
            "--limit",
            "1000",
            "--json",
            "number,title,state,author,createdAt,mergedAt,closedAt,body,reviews,statusCheckRollup,additions,deletions",
        ]
    )
    people: dict[str, dict] = defaultdict(
        lambda: {
            "issues_open": 0,
            "issues_in_progress": 0,
            "issues_closed": 0,
            "cycle_hours": [],
            "prs_open": 0,
            "prs_merged": 0,
            "merge_hours": [],
            "time_spent_h": 0.0,
            "ci_pass": 0,
            "ci_total": 0,
            "reviews_given": 0,
            "last_activity": None,
            "lines_changed": 0,
        }
    )

    def touch(p: dict, when: str | None):
        if when and (p["last_activity"] is None or when > p["last_activity"]):
            p["last_activity"] = when

    for it in issues:
        names = [a["login"] for a in it["assignees"]] or ["unassigned"]
        labels = {lab["name"] for lab in it["labels"]}
        for n in names:
            p = people[n]
            if it["state"] == "CLOSED":
                p["issues_closed"] += 1
                h = hours(iso(it["createdAt"]), iso(it["closedAt"]))
                if h is not None:
                    p["cycle_hours"].append(h)
            elif "status:in-progress" in labels:
                p["issues_in_progress"] += 1
            else:
                p["issues_open"] += 1
            touch(p, it["closedAt"] or it["createdAt"])
    for pr in prs:
        n = pr["author"]["login"]
        p = people[n]
        if pr["mergedAt"]:
            p["prs_merged"] += 1
            h = hours(iso(pr["createdAt"]), iso(pr["mergedAt"]))
            if h is not None:
                p["merge_hours"].append(h)
        elif pr["state"] == "OPEN":
            p["prs_open"] += 1
        m = TIME_RE.search(pr.get("body") or "")
        if m:
            p["time_spent_h"] += float(m.group(1))
        p["lines_changed"] += (pr.get("additions") or 0) + (pr.get("deletions") or 0)
        checks = pr.get("statusCheckRollup") or []
        for c in checks:
            if c.get("conclusion") in ("SUCCESS", "FAILURE"):
                p["ci_total"] += 1
                p["ci_pass"] += c["conclusion"] == "SUCCESS"
        for r in pr.get("reviews") or []:
            people[r["author"]["login"]]["reviews_given"] += 1
        touch(p, pr["mergedAt"] or pr["createdAt"])

    now = datetime.now(UTC)
    rows = []
    for name, p in sorted(people.items()):
        total = p["issues_open"] + p["issues_in_progress"] + p["issues_closed"]
        rows.append(
            {
                "person": name,
                "tasks_done": p["issues_closed"],
                "tasks_in_progress": p["issues_in_progress"],
                "tasks_pending": p["issues_open"],
                "done_pct": round(100 * p["issues_closed"] / total) if total else 0,
                "avg_task_cycle_h": round(statistics.mean(p["cycle_hours"]), 1) if p["cycle_hours"] else None,
                "prs_merged": p["prs_merged"],
                "prs_open": p["prs_open"],
                "avg_time_to_merge_h": round(statistics.mean(p["merge_hours"]), 1) if p["merge_hours"] else None,
                "time_spent_h": round(p["time_spent_h"], 1),
                "ci_pass_rate_pct": round(100 * p["ci_pass"] / p["ci_total"]) if p["ci_total"] else None,
                "reviews_given": p["reviews_given"],
                "lines_changed": p["lines_changed"],
                "last_activity": p["last_activity"],
            }
        )
    out_dir = ROOT / "docs/team"
    (out_dir / "status.json").write_text(
        json.dumps({"generated_at": now.isoformat(), "repo": REPO, "people": rows}, indent=2)
    )
    md = [
        "# Team status\n",
        f"Generated {now:%Y-%m-%d %H:%M} UTC from GitHub issues and pull requests in `{REPO}`. "
        "Regenerated every 6 hours by `.github/workflows/metrics.yml`. Rules: `docs/team/RULES.md`.\n",
        "| Person | Done | In progress | Pending | Done % | Avg task cycle (h) | PRs merged | PRs open | Avg time to merge (h) | Time spent (h) | CI pass % | Reviews given | Lines changed | Last activity |",
        "|---|---|---|---|---|---|---|---|---|---|---|---|---|---|",
    ]
    for r in rows:
        md.append(
            "| {person} | {tasks_done} | {tasks_in_progress} | {tasks_pending} | {done_pct} | {avg_task_cycle_h} | {prs_merged} | {prs_open} | {avg_time_to_merge_h} | {time_spent_h} | {ci_pass_rate_pct} | {reviews_given} | {lines_changed} | {last_activity} |".format(
                **{
                    k: ("" if v is None else (v[:10] if k == "last_activity" and isinstance(v, str) else v))
                    for k, v in r.items()
                }
            )
        )
    md.append(
        "\nHow to read it: *Done* counts closed issues assigned to the person. *Avg task cycle* is hours from issue "
        "creation to close. *Avg time to merge* is hours from PR open to merge. *Time spent* sums `Time spent: Nh` "
        "lines from PR bodies. *CI pass %* is the share of green checks on the person's PRs."
    )
    (out_dir / "STATUS.md").write_text("\n".join(md) + "\n")
    print(f"wrote STATUS.md for {len(rows)} people")
    return 0


if __name__ == "__main__":
    sys.exit(main())
