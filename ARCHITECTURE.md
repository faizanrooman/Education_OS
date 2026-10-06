# Architecture

Education OS is a layered system. Each layer in the diagram maps to one folder in this repo.

![High level architecture](docs/architecture/diagrams/high-level-architecture.png)

## Layers to folders

| Diagram layer | Folder | Notes |
|---|---|---|
| Users (roles) | `platform/identity/contracts/permissions.yaml` + each module's `contracts/permissions.yaml` | Roles are compositions of module permissions |
| Access channels | `apps/web` (browser + PWA), `apps/mobile` | Thin shells that compose module UIs |
| Identity & security | `platform/identity`, `platform/api-gateway`, `platform/audit` | SSO, RBAC, MFA, sessions, audit |
| Application layer (suites A–G, Global) | `modules/<domain>/<module>` | One folder per box in the diagram |
| Shared platform services | `platform/*` | Notification, documents, search, workflow, audit, reporting, scheduler, integration hub |
| API & integration layer | `platform/api-gateway`, `platform/integration-hub`, `integrations/*` | Gateway in front, adapters behind |
| Data layer | `data/*` conventions, `<module>/db/` migrations | Schema-per-module |
| Infrastructure | `infra/*` | Containers, k8s, monitoring, LB, DR |
| External systems | `integrations/*` | One adapter per external system |

## Domain grouping of feature modules

| Domain folder | Diagram suite | Modules |
|---|---|---|
| `student-lifecycle` | Suite A | web-portal-cms, admissions, student-information, enrolment-registration |
| `academics` | Suite B | academic-management, lms, examinations, timetable-attendance |
| `sports` | Suite C | athlete-performance, training-video-analysis, sports-nutrition-health, tournament-events |
| `facilities` | Suite D | sports-facilities, facility-booking, inventory-equipment, asset-management, maintenance |
| `finance-operations` | Suite E | fees-accounts, budget-grants, procurement, hr-payroll, e-office |
| `campus-life` | Suite F | hostel, transport, library, placement-career, alumni |
| `governance` | Suite G | grievance, rti, iqac-accreditation, regulatory-reports |
| `support` | Global | helpdesk, sla-management, knowledge-base, incident-management, amc-vendor-support |

Domain folders are grouping only. They hold no shared code. Two modules in the same
domain are as isolated from each other as two modules in different domains.

## Dependency direction

```
apps  ──►  modules  ──►  packages
            │               ▲
            ▼               │
         platform  ─────────┘
            │
            ▼
       integrations
```

Allowed:
- `apps` import modules, platform, packages.
- `modules` import `packages` only. They reach platform services via `packages/sdk`.
- `platform` imports `packages`, and other platform services only when declared.
- `integrations` import `packages` and implement ports from `platform/integration-hub`.
- `packages` import nothing from this repo.

Forbidden, and to be enforced by a lint rule in CI once the stack is chosen:
- module → module code import (any direction, any domain)
- platform → module
- packages → anything in this repo

## How modules talk to each other

1. **Synchronous:** HTTP calls to the other module's published API (its `contracts/openapi.yaml`),
   routed through the gateway. Clients are generated from the contract, never hand-written against internals.
2. **Asynchronous:** domain events on `platform/event-bus`. A module publishes events listed in its
   `contracts/events.yaml` and declares what it consumes in `module.yaml`.
3. **Shared reference data** (academic year, org units, person identity) lives in `packages/contracts`
   as schemas, with `platform/identity` and `modules/student-lifecycle/student-information` as the systems of record.

Example: `fees-accounts` does not query the admissions tables. It subscribes to
`admissions.application.accepted` and creates a fee invoice.

## Data ownership

- Each module owns one database schema named after the module. Only that module's migrations touch it.
- No cross-schema foreign keys. Reference other modules' entities by ID plus a cached copy of the fields you need, refreshed by events.
- Documents and media go through `platform/documents`, never direct bucket access.
- Search indexes are owned by the module that publishes the data; `platform/search` only hosts them.

## Security

- Every request enters via `platform/api-gateway`, which validates the session and attaches the identity.
- Modules check permissions by key (`<module>:<resource>:<action>`) via the identity SDK. They never inspect roles directly.
- Every state change writes to `platform/audit`. Audit records are immutable.
- MFA, SSO (SAML / OAuth2 / OIDC) and session rules are configured once in `platform/identity`.

## Role dashboards

The 15 roles in the diagram each get a dashboard, but there is only one dashboard page.

| Piece | Where | Owner |
|---|---|---|
| Widget contract (`DashboardWidget`, `WidgetFrame`, `WidgetRegistry`) | `packages/ui-kit/src/widget/` | Architecture and platform |
| Role layouts, one YAML per role listing widget ids | `platform/identity/config/dashboards/` | Architecture and platform |
| Dashboard shell that reads the layout and renders the widgets | `apps/web/src/dashboard/` | Apps, infra and QA |
| Widgets themselves | `<module>/frontend/src/widgets/index.ts` | The module's owner |

A widget is module code: it imports only from its module and `packages/`, fetches through the
module's generated client, and declares the permission key it needs. The shell hides widgets the
viewer may not see and shows a "Not built yet" card for ids no enabled module exports.
Assignment and status: the Dashboard Assignment Plan doc.

## Deployment shapes

The same modules can be deployed three ways without code changes:

| Shape | How | When |
|---|---|---|
| Modular monolith | `apps/api` mounts all modules in one process | Default. Lowest ops cost for one university |
| Grouped services | Several `apps/api` instances, each with a different `modules.enabled.yaml` | Scale hot suites (exams, fees) separately |
| Standalone module | Copy one module folder into another repo with `packages/` as a dependency | Reuse in a different product |

## Stack
React + TypeScript frontend, FastAPI backend, PostgreSQL database. See [ADR-0002](docs/architecture/adr/0002-tech-stack.md).

## Open decisions
See [docs/architecture/adr/](docs/architecture/adr/). Pending: event broker, workflow engine, identity provider.
