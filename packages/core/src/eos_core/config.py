"""Loaders for the repo's YAML configuration: academy profiles, plans, permission catalogues."""
from __future__ import annotations

from functools import lru_cache
from pathlib import Path

import yaml

from .settings import settings


def _root() -> Path:
    return settings.repo_root


@lru_cache(maxsize=1)
def load_profiles() -> dict[str, dict]:
    out: dict[str, dict] = {}
    for f in sorted((_root() / "platform/identity/config/profiles").glob("*.yaml")):
        data = yaml.safe_load(f.read_text())
        out[data["profile"]] = data
    return out


@lru_cache(maxsize=1)
def load_plans() -> dict[str, dict]:
    data = yaml.safe_load((_root() / "platform/billing/config/plans.yaml").read_text())
    return {p["id"]: p for p in data["plans"]}


@lru_cache(maxsize=1)
def load_role_grants() -> dict[str, set[str]]:
    """role name -> permission keys, from every contracts/permissions.yaml in the repo."""
    grants: dict[str, set[str]] = {}
    for f in _root().glob("*/*/contracts/permissions.yaml"):
        data = yaml.safe_load(f.read_text()) or {}
        for role in data.get("roles") or []:
            grants.setdefault(role["name"], set()).update(role.get("grants") or [])
    for f in _root().glob("modules/*/*/contracts/permissions.yaml"):
        data = yaml.safe_load(f.read_text()) or {}
        for role in data.get("roles") or []:
            grants.setdefault(role["name"], set()).update(role.get("grants") or [])
    return grants


def permissions_for(roles: list[str], super_admin: bool = False) -> set[str]:
    grants = load_role_grants()
    out: set[str] = set()
    for r in roles:
        out |= grants.get(r, set())
    if super_admin:
        out |= {k for ks in grants.values() for k in ks if k.startswith("platform:")}
    return out
