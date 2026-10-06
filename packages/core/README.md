# packages/core

Python package `eos_core`. The only shared code a backend module may import besides its own and `eos_sdk`.

| Module | Purpose |
|---|---|
| `settings` | Environment-driven settings (`EOS_DATABASE_URL`, `EOS_JWT_SECRET`, `EOS_DEV_MODE`, `EOS_SUPER_ADMIN_*`, `BILLING_PAYMENT_ADAPTER`) |
| `db` | SQLAlchemy base, `TenantMixin` (organisation_id on every table), session factory, `scoped()` query helper, `init_db()` |
| `tenant` | Request-scoped organisation context; `organisation_scope()` and the audited `platform_scope()` bypass |
| `rls` | Row-level-security policies for every tenant table on Postgres (`app.organisation_id`, `app.bypass_rls`) |
| `security` | Password hashing (PBKDF2), JWT create and decode |
| `config` | Loaders for academy profiles, plans and permission catalogues from the repo's YAML |
| `entitlement` | The rule `profile ∩ plan ∪ overrides − disabled`, identical to the web shell's copy |
| `events` | Transactional outbox (`publish()`), relayed by platform/event-bus |
| `notify` | Email stub until platform/notification ships |

Tenant scoping is enforced twice on purpose: in Postgres by RLS and in code by `scoped()`, so SQLite
tests catch a missing filter and production catches a missing `scoped()`.
