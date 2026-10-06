#!/usr/bin/env bash
# Create .venv and install every Python package in the repo in editable mode, in dependency order.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"
[ -d .venv ] || python3 -m venv .venv
. .venv/bin/activate
pip install -q --upgrade pip
pip install -q ruff
pip install -q -e packages/core -e packages/testing \
  -e platform/identity/backend -e platform/billing/backend -e platform/tenancy/backend \
  -e "apps/api[test]"
echo "ok: $(python --version), packages installed into .venv"
