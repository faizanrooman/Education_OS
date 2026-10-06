#!/usr/bin/env python3
"""Fail if anything sits at the top of the repository that tools/config/repo-layout.yaml does not allow.

check-root.py              # tracked files (what CI sees)
check-root.py --worktree   # also untracked, not-ignored files (what precheck sees before you commit)
"""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[2]
LAYOUT = yaml.safe_load((ROOT / "tools/config/repo-layout.yaml").read_text())


def main() -> int:
    args = ["git", "ls-files", "--cached"]
    if "--worktree" in sys.argv:
        args += ["--others", "--exclude-standard"]
    paths = subprocess.run(args, cwd=ROOT, check=True, capture_output=True, text=True).stdout.splitlines()
    files, dirs = set(LAYOUT["root_files"]), set(LAYOUT["root_dirs"])
    bad_files = sorted({p for p in paths if "/" not in p and p not in files})
    bad_dirs = sorted({p.split("/", 1)[0] for p in paths if "/" in p and p.split("/", 1)[0] not in dirs})
    if not bad_files and not bad_dirs:
        print("root layout ok")
        return 0
    print("Root layout check failed: nothing may live at the top of the repository except the folders and files")
    print("listed in tools/config/repo-layout.yaml. Move these into their folder:")
    for p in bad_files:
        print(f"  file   {p}")
    for d in bad_dirs:
        print(f"  folder {d}/  (new top-level folders need a PR to tools/config/repo-layout.yaml)")
    print("Where things go:")
    for k, v in LAYOUT["where"].items():
        print(f"  {k}: {v}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
