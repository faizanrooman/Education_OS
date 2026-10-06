#!/usr/bin/env python3
"""Continuous assignment: one open issue per person, the next one handed out the moment the last closes.

Queue order for a person: Week 1 task, foundation tasks (phase:foundation), their modules to build
(type:module, in dependency order), their dashboards by wave A, B, C, D, production readiness
(phase:production), then the pool (label `pool`) in the same order. Run by
.github/workflows/auto-assign.yml on every issue close and on demand (kickoff).

  next-issue.py --event closed --issue 42      # the person who closed #42 gets their next issue
  next-issue.py --event kickoff                # everyone with a handle and no open issue gets their first
  add --dry-run to print without changing anything
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[2]
REPO = "faizanrooman/Education_OS"
# Queue order per person. Lower first. Within a rank, lowest issue number first (issues were created in dependency order).
WAVE_ORDER = {
    "week-1": 0,
    "phase:foundation": 1,
    "type:module": 2,
    "wave:A": 3,
    "wave:B": 4,
    "wave:C": 5,
    "wave:D": 6,
    "phase:production": 7,
}
IN_PROGRESS = "status:in-progress"
OWNER_RE = re.compile(r"\*\*Owner:\*\*\s*([^\n·]+?)\s*(?:·|$)", re.M)


def gh(*args: str, check: bool = True) -> str:
    return subprocess.run(["gh", *args], check=check, capture_output=True, text=True).stdout


def members() -> list[dict]:
    data = yaml.safe_load((ROOT / "docs/team/members.yaml").read_text())
    return [m for m in data["members"] if m.get("handle")]


def open_issues() -> list[dict]:
    raw = gh(
        "issue",
        "list",
        "-R",
        REPO,
        "--state",
        "open",
        "--limit",
        "1000",
        "--json",
        "number,title,body,labels,assignees",
    )
    issues = json.loads(raw)
    for it in issues:
        it["labels"] = {lab["name"] for lab in it["labels"]}
        it["assignees"] = {a["login"] for a in it["assignees"]}
        m = OWNER_RE.search(it.get("body") or "")
        it["owner"] = m.group(1).strip() if m else ""
    return issues


def wave_rank(it: dict) -> tuple[int, int]:
    rank = min((WAVE_ORDER[lab] for lab in it["labels"] if lab in WAVE_ORDER), default=9)
    return (rank, it["number"])


def queue_for(name: str, issues: list[dict]) -> list[dict]:
    own = [it for it in issues if not it["assignees"] and it["owner"] == name]
    pool = [it for it in issues if not it["assignees"] and "pool" in it["labels"] and it["owner"].startswith("pool")]
    return sorted(own, key=wave_rank) + sorted(pool, key=wave_rank)


def busy(handle: str, issues: list[dict]) -> list[dict]:
    return [it for it in issues if handle in it["assignees"]]


def assign(it: dict, member: dict, reason: str, dry: bool) -> None:
    msg = f"Assigned automatically to @{member['handle']}: {reason}. One issue at a time; the next one arrives when this closes."
    print(f"-> #{it['number']} {it['title']} => {member['name']} (@{member['handle']})")
    if dry:
        return
    gh("issue", "edit", str(it["number"]), "-R", REPO, "--add-assignee", member["handle"], "--add-label", IN_PROGRESS)
    gh("issue", "comment", str(it["number"]), "-R", REPO, "--body", msg)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--event", choices=["closed", "kickoff"], required=True)
    ap.add_argument("--issue", type=int, default=0)
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()
    team = members()
    by_handle = {m["handle"]: m for m in team}
    issues = open_issues()

    if a.event == "closed":
        closed = json.loads(
            gh("issue", "view", str(a.issue), "-R", REPO, "--json", "number,title,assignees,stateReason")
        )
        if closed.get("stateReason") == "NOT_PLANNED":
            print(f"#{a.issue} closed as not planned; nothing assigned")
            return 0
        handles = [x["login"] for x in closed["assignees"]] or []
        if not handles:
            print(f"#{a.issue} had no assignee; nothing to hand on")
            return 0
        targets = [by_handle[h] for h in handles if h in by_handle]
        reason = f"#{a.issue} ({closed['title']}) was closed"
    else:
        targets = team
        reason = "kickoff: first issue in your queue"

    for member in targets:
        open_for = busy(member["handle"], issues)
        if open_for:
            print(f"{member['name']} still has open: " + ", ".join(f"#{x['number']}" for x in open_for))
            continue
        q = queue_for(member["name"], issues)
        if not q:
            print(f"{member['name']}: queue empty, nothing left to assign")
            continue
        nxt = q[0]
        assign(nxt, member, reason, a.dry_run)
        nxt["assignees"].add(member["handle"])  # so a later member in this run does not take the same pool issue
        if not a.dry_run and a.event == "closed":
            gh(
                "issue",
                "comment",
                str(a.issue),
                "-R",
                REPO,
                "--body",
                f"Next for @{member['handle']}: #{nxt['number']} {nxt['title']}",
                check=False,
            )
    return 0


if __name__ == "__main__":
    sys.exit(main())
