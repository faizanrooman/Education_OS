# tenancy

**Kind:** platform (core)
**Status:** planned

Organisations (tenants), self-service registration, academy type, entitlements. Decision: [ADR-0005](../../docs/architecture/adr/0005-multi-tenant-saas.md).

## Scope
- Public registration: organisation + academy type (the **academic package**, an institution profile) + first admin user. Starts on the trial plan.
- Approval: after email verification the organisation is `pending_approval`; a super admin approves the package before anyone can sign in. A package change is requested by the org admin and approved the same way. `TENANCY_AUTO_APPROVE=true` skips this in development.
- The organisation record and its status (pending, active, suspended, archived).
- The **entitlement**: the modules, integrations and limits an organisation may use right now,
  computed as `profile.modules ∩ plan.modules ∪ overrides − disabled`. The API gateway asks for
  it on every request and refuses anything outside it; apps hide it and show upgrade prompts.
- Super admin operations over organisations: list, suspend, overrides, audited impersonation.

Not in scope: plans, prices, subscriptions and payments (`platform/billing`); users and roles inside an organisation (`platform/identity`).

## Public surface
- API: [contracts/openapi.yaml](contracts/openapi.yaml)
- Events: [contracts/events.yaml](contracts/events.yaml)
- Permissions: [contracts/permissions.yaml](contracts/permissions.yaml)

## Data
Schema `tenancy`: `organisation`, `organisation_module` (toggles and overrides), `registration_token`,
`impersonation_session`. This is the one schema whose tables are not themselves tenant-scoped,
because they define the tenants.

## Porting this module to another repo
Follow [docs/architecture/module-standard.md](../../docs/architecture/module-standard.md#portability-checklist).
