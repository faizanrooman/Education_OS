# apps/admin

Super admin console. The platform operator's app, outside every organisation. React + TypeScript,
same shell pattern as `apps/web`, but it mounts only platform screens.

| Screen | Source |
|---|---|
| Organisations: list, search, status, academy type, plan, usage; suspend / activate / archive | `platform/tenancy` |
| Organisation detail: entitlement, overrides, impersonate (audited) | `platform/tenancy` |
| Plans: create and edit; what each plan unlocks | `platform/billing` |
| Subscriptions and trials: set plan, extend trial, comp; revenue by plan and month | `platform/billing` |
| Academy types: which institution profiles are offered at registration | `platform/identity/config/profiles` |
| Audit: every super admin action | `platform/audit` |

Access requires a `platform:*` permission; those are never grantable inside an organisation.
Decision: [ADR-0005](../../docs/architecture/adr/0005-multi-tenant-saas.md).
