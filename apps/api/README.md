# apps/api

FastAPI host. Mounts every platform service and enabled feature module under `/api/v1/<module>` behind
the **entitlement gate** (ADR-0005): a request to a feature module is refused with 403
`module_not_entitled` unless the caller's organisation is entitled to it, `organisation_inactive` if the
organisation is suspended, and `read_only` for writes after a trial ends. Platform services
(identity, tenancy, billing, ...) are always reachable and do their own permission checks.

| Mounted today | Package |
|---|---|
| `/api/v1/identity` | `platform/identity/backend` |
| `/api/v1/tenancy` | `platform/tenancy/backend` |
| `/api/v1/billing` | `platform/billing/backend` |
| `/api/v1/health` | this host |

Feature modules are added to `PLATFORM_ROUTERS`/`config/modules.enabled.yaml` as they ship.

## Run locally

```
tools/scripts/py-setup.sh            # creates .venv and installs every backend package (editable)
source .venv/bin/activate
EOS_SUPER_ADMIN_EMAIL=root@local EOS_SUPER_ADMIN_PASSWORD=change-me uvicorn eos_api.main:app --reload --port 8000
```

SQLite by default (`EOS_DATABASE_URL=sqlite:///./eos.db`). For Postgres with row-level security:
`EOS_DATABASE_URL=postgresql+psycopg://eos:eos@localhost/eos`. `EOS_DEV_MODE=true` returns the
verification token in the register response so the flow can be driven without email.

## Tests

```
pytest apps/api packages/core platform/identity/backend
```

`apps/api/tests/test_foundation.py` is the phase 1 gate: register, verify, sign in, trial entitlement
enforced by the gate, upgrade unlocks, org admin toggles, super admin overrides, impersonation,
suspension, and the cross-tenant leak check.
