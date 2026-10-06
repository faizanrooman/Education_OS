# billing

**Kind:** platform (core)
**Status:** planned

Plans, trials, subscriptions, upgrades and invoices. Decision: [ADR-0005](../../docs/architecture/adr/0005-multi-tenant-saas.md).

## Scope
- Plans as data ([config/plans.yaml](config/plans.yaml) seeds them; the super admin edits them in the admin screens of `apps/frontend`).
  A plan is a set of suites, modules, specialized-suite count, integrations and limits.
- Every organisation has one subscription: trialing, active, past_due, cancelled or read_only.
- Trial: starts at registration, reminders at 7, 3 and 1 days, then read-only or suspended.
- Upgrade: self-service through the payment adapter; the entitlement widens the moment the
  payment webhook confirms. Downgrades apply at period end.
- Invoices as PDFs in `platform/documents`.
- Super admin: edit plans, set any organisation's plan, extend trials, comp, revenue reports.

Not in scope: deciding what an organisation may use (`platform/tenancy` computes the entitlement from the plan).

## Public surface
- API: [contracts/openapi.yaml](contracts/openapi.yaml)
- Events: [contracts/events.yaml](contracts/events.yaml)
- Permissions: [contracts/permissions.yaml](contracts/permissions.yaml)

## Porting this module to another repo
Follow [docs/architecture/module-standard.md](../../docs/architecture/module-standard.md#portability-checklist).
