#!/usr/bin/env python3
"""Claude Code PreToolUse hook: refuse to create or edit files at the top of the repository, or in a
top-level folder that tools/config/repo-layout.yaml does not allow. Exit code 2 blocks the tool call and
shows the message to the agent. Paths outside the repository are not this hook's concern."""

from __future__ import annotations

import json
import os
import sys
from pathlib import Path


def load_layout(path: Path) -> dict:
    """Read the lists and the `where` map from repo-layout.yaml without PyYAML, so the guard works on any
    machine with plain python3 (a missing library must not silently disable the rule)."""
    out: dict = {"root_files": [], "root_dirs": [], "where": {}}
    section = None
    for line in path.read_text().splitlines():
        text = line.split(" #", 1)[0].rstrip()
        if not text or text.lstrip().startswith("#"):
            continue
        if not line.startswith(" ") and text.endswith(":"):
            section = text[:-1]
            continue
        item = text.strip()
        if section in ("root_files", "root_dirs") and item.startswith("- "):
            out[section].append(item[2:].strip())
        elif section == "where" and ":" in item:
            k, v = item.split(":", 1)
            out["where"][k.strip()] = v.strip()
    return out


root = Path(os.environ.get("CLAUDE_PROJECT_DIR") or Path(__file__).resolve().parents[2]).resolve()
try:
    data = json.load(sys.stdin)
except ValueError:
    sys.exit(0)
tool_input = data.get("tool_input") or {}
raw = tool_input.get("file_path") or tool_input.get("notebook_path")
if not raw:
    sys.exit(0)
path = Path(raw)
path = (path if path.is_absolute() else root / path).resolve()
try:
    rel = path.relative_to(root)
except ValueError:
    sys.exit(0)

layout = load_layout(root / "tools/config/repo-layout.yaml")
parts = rel.parts
if len(parts) == 1 and parts[0] not in layout["root_files"]:
    reason = f"'{rel}' would be a file at the top of the repository"
elif len(parts) > 1 and parts[0] not in layout["root_dirs"]:
    reason = f"'{parts[0]}/' is not an allowed top-level folder"
else:
    sys.exit(0)
where = "; ".join(f"{k}: {v}" for k, v in layout["where"].items())
print(
    f"Blocked by the repo layout rule (docs/team/RULES.md rule 11): {reason}. "
    f"Put it inside its folder instead. {where}. Allowed top-level files: {', '.join(layout['root_files'])}.",
    file=sys.stderr,
)
sys.exit(2)
