# ADR-0005: Multi-tenant SaaS with self-service registration, plans and a super admin

- **Status:** accepted
- **Date:** 2026-10-06
- **Deciders:** Education OS team (product owner's call; the per-instance alternative was raised and declined)
- **Supersedes:** the "one deployment per institution" consequence in ADR-0001 and the
  "multi-tenancy out of scope" line in ADR-0004

## Context
Organisations should be able to sign up on their own, choose their academy type, use the
platform on a trial, and upgrade to a paid plan for more features. A platform operator
(super admin) must control every organisation, plan and feature from one place. That is a
SaaS, and a SaaS with many small academies is only economical when they share one deployment.

## Decision
One deployment serves many organisations.

1. **Organisation is the tenant.** Every row in every module table carries `organisation_id`.
   Every query is scoped to it, enforced in PostgreSQL by row-level security on the session
   setting `app.organisation_id`, which the gateway sets from the authenticated session. Every
   event carries `organisation_id` in its envelope (the `tenant` field already in the template).
   Documents, search indexes and cache keys are prefixed by organisation.
2. **Registration and the academic package.** A public flow in `platform/tenancy`: organisation
   name, academy type, admin user. The academy type selects the organisation's **academic
   package**: the academy profile (ADR-0004) with its suites, roles and dashboards, filtered by
   the plan. There is one application; a package is configuration inside it, never a separate
   deployment. After email verification the organisation is `pending_approval` until a **super
   admin approves the package**; only then can its users sign in. A later package change is a
   request the super admin approves the same way. The organisation starts on the `trial` plan.
3. **Plans and entitlements.** `platform/billing` defines plans (`trial`, `standard`,
   `premium`, editable by the super admin) as a set of allowed modules, integrations and
   limits. An organisation's **entitlement** is: modules in its profile that its plan allows,
   plus super-admin overrides, minus suspended ones. The API gateway evaluates the entitlement
   on every request and refuses routes of modules outside it. Apps hide what the entitlement
   excludes and show an upgrade prompt where it makes sense.
4. **Trial and upgrade.** Trial is time-limited and capped. Upgrade is self-service through
   `platform/billing` and the payment adapter; the entitlement changes the moment the
   subscription does, with no redeploy.
5. **Super admin.** A platform-level role outside any organisation, served by the admin
   screens of the same application. Approves academic packages at registration and on change,
   lists and suspends organisations, edits plans and subscriptions, grants feature overrides,
   views usage, and may impersonate an organisation user with every action audited. Super
   admin permissions are `platform:*` keys and are never grantable inside an organisation.
6. **Organisation admin.** A per-organisation role created at registration. Manages the
   organisation's users, roles, settings and subscription. Cannot see other organisations.

## Consequences
- Every module must be tenant-aware from its first migration. The module standard gains the
  rule; CI will fail a migration that creates a table without `organisation_id` and a policy.
- Platform services `tenancy` and `billing` become part of the core and are the first backend
  work, before any feature module, because the gateway depends on entitlements.
- Two more dashboards: organisation admin and super admin. The super admin screens live in `apps/frontend/src/admin`; there is no separate admin application.
- Data isolation now depends on code discipline and RLS, not on separate databases. Tests in
  `packages/testing` must include a cross-tenant leak check that every module runs.
- Backups, exports and deletion must work per organisation.
- Self-service sign-up brings pricing, billing, trials and support for unknown customers.
  The product owner accepts this.

## Alternatives considered
- One instance per organisation, provisioned on sign-up — zero leak risk and no module changes,
  but slower onboarding and a container per academy. Declined by the product owner in favour of
  shared hosting.
- Schema per tenant — clean isolation inside one database, but 36 modules × N tenants of
  migrations. Rejected; schema per module with a tenant column and RLS is the standard choice.
