#!/usr/bin/env python3
"""Fail if any package.json or pyproject.toml declares a dependency outside docs/architecture/approved-stack.yaml."""

from __future__ import annotations

import fnmatch
import json
import re
import sys
import tomllib
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[2]
RULES = yaml.safe_load((ROOT / "docs/architecture/approved-stack.yaml").read_text())
SKIP = {"node_modules", ".venv", "dist", ".git"}


def allowed(name: str, patterns: list[str]) -> bool:
    return any(fnmatch.fnmatchcase(name, p) for p in patterns)


def py_name(spec: str) -> str:
    return re.split(r"[\[<>=!~; ]", spec.strip(), maxsplit=1)[0].lower()


def check_pyproject(path: Path) -> list[str]:
    data = tomllib.loads(path.read_text())
    deps = list(data.get("project", {}).get("dependencies", []))
    for extra in data.get("project", {}).get("optional-dependencies", {}).values():
        deps += extra
    problems = []
    pats = [p.lower() for p in RULES["python"]["allowed"]]
    bad = [b.lower() for b in RULES["forbidden_everywhere"]]
    for d in deps:
        n = py_name(d)
        if allowed(n, bad):
            problems.append(f"{path}: {n} is forbidden")
        elif not allowed(n, pats):
            problems.append(f"{path}: {n} is not in the approved stack")
    return problems


def check_package_json(path: Path) -> list[str]:
    data = json.loads(path.read_text())
    problems = []
    pats = RULES["node"]["allowed"]
    bad = RULES["forbidden_everywhere"]
    for section in ("dependencies", "devDependencies", "peerDependencies"):
        for n in data.get(section, {}):
            if allowed(n, bad):
                problems.append(f"{path}: {n} is forbidden")
            elif not allowed(n, pats):
                problems.append(f"{path}: {n} is not in the approved stack")
    return problems


def main() -> int:
    problems: list[str] = []
    for path in ROOT.rglob("pyproject.toml"):
        if SKIP & set(path.parts):
            continue
        problems += check_pyproject(path)
    for path in ROOT.rglob("package.json"):
        if SKIP & set(path.parts):
            continue
        problems += check_package_json(path)
    if problems:
        print("Stack check failed. Add the package to docs/architecture/approved-stack.yaml in its own PR, or drop it.")
        print("\n".join(sorted(problems)))
        return 1
    print("stack check ok")
    return 0


if __name__ == "__main__":
    sys.exit(main())
