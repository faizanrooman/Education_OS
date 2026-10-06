#!/usr/bin/env python3
"""Module boundary check (module standard rule 1). A module may import only from itself and packages/.
Platform services may import packages/ and other platform services declared in module.yaml.
Scans TypeScript and Python imports under modules/, platform/, integrations/."""

from __future__ import annotations

import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[2]
SKIP = {"node_modules", ".venv", "dist", ".git", "__pycache__"}
TS_IMPORT = re.compile(r"""(?:from|import)\s+['"]([^'"]+)['"]""")
PY_IMPORT = re.compile(r"^\s*(?:from\s+([\w.]+)\s+import|import\s+([\w.]+))", re.M)


def module_root(path: Path) -> tuple[str, Path] | None:
    rel = path.relative_to(ROOT).parts
    if rel[0] == "modules" and len(rel) > 2:
        return "modules", ROOT / rel[0] / rel[1] / rel[2]
    if rel[0] in ("platform", "integrations") and len(rel) > 1:
        return rel[0], ROOT / rel[0] / rel[1]
    return None


def declared_platform_deps(mod: Path) -> set[str]:
    manifest = mod / "module.yaml"
    if not manifest.exists():
        return set()
    data = yaml.safe_load(manifest.read_text()) or {}
    return set((data.get("depends_on") or {}).get("platform") or [])


def check_file(path: Path) -> list[str]:
    info = module_root(path)
    if not info:
        return []
    kind, mod = info
    name = mod.name
    text = path.read_text(errors="ignore")
    problems = []
    if path.suffix in (".ts", ".tsx"):
        for spec in TS_IMPORT.findall(text):
            if spec.startswith("@eos/") and spec[5:].split("/")[0] in {"ui-kit", "contracts", "sdk", "core", "testing"}:
                continue
            if spec.startswith("."):
                target = (path.parent / spec).resolve()
                if not str(target).startswith(str(mod.resolve())):
                    problems.append(f"{path}: relative import leaves the module: {spec}")
                continue
            if spec.startswith("@eos/"):
                problems.append(f"{path}: imports another module's package {spec}")
    elif path.suffix == ".py":
        for a, b in PY_IMPORT.findall(text):
            top = (a or b).split(".")[0]
            if not top.startswith("eos_"):
                continue
            target = top[4:].replace("_", "-")
            if target in ("core", "sdk", "testing") or target == name:
                continue
            if kind == "platform" and target in declared_platform_deps(mod):
                continue
            problems.append(f"{path}: imports {top}, which {name} does not own or declare in module.yaml")
    return problems


def main() -> int:
    problems: list[str] = []
    for base in ("modules", "platform", "integrations"):
        for path in (ROOT / base).rglob("*"):
            if path.suffix in (".ts", ".tsx", ".py") and not (SKIP & set(path.parts)):
                problems += check_file(path)
    if problems:
        print("Boundary check failed (module standard rule 1 and 8):")
        print("\n".join(sorted(problems)))
        return 1
    print("boundary check ok")
    return 0


if __name__ == "__main__":
    sys.exit(main())
