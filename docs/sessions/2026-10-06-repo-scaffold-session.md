# Session log — 2026-10-06 — Repo scaffold and architecture

Record of the Claude Code session that created this repository's structure.
Kept here so the context is not lost when the folder is opened in a new session.

---

## 1. Connect to the repo

**User:** `https://github.com/faizanrooman/Education_OS.git` connect to the repo

**Done:**
- Verified `gh` auth as `faizanrooman`.
- Cloned to `/home/faizan/Education_OS`. The GitHub repo was brand new and empty (no commits, no default branch).
- Local branch `main` is unborn until the first commit.

---

## 2. Create the modular file structure and architecture

**User:** this is the new product which i have to built with the team including me it 11 people so dont do any thing just create the file structure, architecture and i want this repo to be completely modular repo each feature will be a module kind of project so whenever we need any module or feature for other app we can pick and put to the other repo.
Attached: `MBSPSU ERP – High Level Architecture` diagram (saved at `docs/architecture/diagrams/high-level-architecture.png`).

**Diagram contents (what the product is):**
- Users/roles: Applicant, Student, Athlete, Faculty, Coach, Medical staff, Nutritionist, Exam staff, Dept admin/HoD, Finance, HR, Facility/Inventory, Governance (Grievance/RTI/IQAC), Support/Helpdesk, Management.
- Access channels: web (responsive), mobile (Android/iOS), PWA, on-campus and off-campus.
- Identity & security: SSO (SAML/OAuth2/OIDC), RBAC, MFA, session management & audit, encryption & compliance.
- Application suites:
  - A Pre-Admission, Web Presence & Student Information: Web Portal & CMS, Admission & Application, SIS, Enrolment & Registration
  - B Academic & Learning: Academic Management, LMS, Examination Management, Timetable & Attendance
  - C Sports & Athletic Performance: Athlete Performance, Training & Video Analysis, Sports Nutrition & Health, Tournament & Event Management
  - D Facility & Resource: Sports Facilities, Facility Booking, Inventory & Equipment, Asset Management, Maintenance
  - E Finance & Institutional Ops: Fees & Accounts (SBIePay), Budget & Grants, Procurement, HR & Payroll, E-Office & File Management
  - F Campus Life & Student Services: Hostel, Transport, Library, Placement & Career, Alumni
  - G Governance, Grievance & Compliance: Grievance (SGRC/Anti-ragging/POSH-ICC), RTI, IQAC/Accreditation, Reports & Regulatory Compliance
  - Global Support: Helpdesk/Ticketing, SLA Management, Knowledge Base, Incident & Problem Management, User Support & AMC
- Shared platform services: Notification, Document & Media, Search, Workflow & Approval, Audit Log, Reporting & Analytics, Scheduler, Integration Service.
- API & integration layer: Internal APIs (REST/GraphQL), Integration Adapters, Data Exchange (XML/JSON/CSV), API Gateway.
- Data layer: PostgreSQL/MySQL, S3/MinIO, Redis, Elasticsearch, Warehouse, Backup/DR.
- Infrastructure: Cloud/on-prem, Docker/Kubernetes, compute/storage/network, monitoring, load balancing, DR.
- External systems: SBIePay, DigiLocker, NAD, Government systems (UGC/AISHE/NAAC), Email/SMS/WhatsApp, Video conferencing, Wearables, Other university portals.

**Done — repo layout created (docs and manifests only, no code):**

| Folder | Contents |
|---|---|
| `modules/<domain>/<module>/` | 36 feature modules in 8 domain folders (student-lifecycle, academics, sports, facilities, finance-operations, campus-life, governance, support) |
| `modules/_template/` | canonical module template |
| `platform/` | 11 services: identity, api-gateway, event-bus, notification, documents, search, workflow, audit, reporting, scheduler, integration-hub |
| `integrations/` | 8 adapters: payment-sbiepay, digilocker, nad, government-portals, messaging-providers, video-conferencing, wearables, external-university-portals |
| `apps/` | web, mobile, api — composition roots with `config/modules.enabled.yaml`, no business logic |
| `packages/` | contracts, ui-kit, core, sdk, testing — the only shared code a module may import |
| `data/` | primary-db, object-storage, cache, search-index, warehouse, reference-data conventions |
| `infra/` | docker, kubernetes, terraform, monitoring, backup-dr, load-balancing |
| `docs/` | architecture (module-standard, ADRs, diagrams), team/ownership.md, onboarding |
| `tools/` | `scaffold-module.sh` |
| root | README.md, ARCHITECTURE.md, CONTRIBUTING.md, CODEOWNERS, .gitignore, .editorconfig, .github templates |

**Every module has the same anatomy:**
```
module.yaml  README.md  CHANGELOG.md
docs/  contracts/{openapi,events,permissions}.yaml
backend/src/{domain,application,infrastructure,api}  backend/tests
frontend/src/{pages,components,api}  frontend/tests
mobile/src  db/{migrations,seeds}  config/env.example  tests/e2e
```

**The one rule (what makes modules portable):**
A module imports only from its own folder and from `packages/`. It talks to other modules only via their published OpenAPI contract (sync) or domain events on `platform/event-bus` (async). One DB schema per module, no cross-schema foreign keys. Platform services are reached via `packages/sdk`. Full checklist: `docs/architecture/module-standard.md`.

**Dependency direction:** apps → modules → packages; modules → platform (via sdk); platform → packages; integrations → packages and implement ports from platform/integration-hub; packages import nothing from the repo. Forbidden: module → module, platform → module.

**Decisions recorded as ADRs:**
- ADR-0001 Modular monorepo with portable modules — accepted
- ADR-0002 Tech stack — was left pending at this step
- ADR-0003 Modules communicate only via contracts and events — accepted

**Judgment call flagged:** modules grouped by domain folder instead of flat. Domain folders are navigation only, no shared code, so portability is unaffected.

**Team docs:** `docs/team/ownership.md` has a suggested 11-person split and a row per module for owner/backup. `CODEOWNERS` mirrors it. `CONTRIBUTING.md` sets branching (`feat/<module>/..`, `contract/<module>/..`), contract-first ordering, definition of done.

**Verified:** `tools/scaffold-module.sh feature academics zz-test "..."` creates a module with placeholders replaced; test module removed afterwards.

---

## 3. Tech stack

**User:** add the tech stack as react, fastapi and postgres

**Done — ADR-0002 accepted:**

| Concern | Choice |
|---|---|
| Backend | Python 3.12 + FastAPI; each module exports one `APIRouter`; SQLAlchemy 2 + Alembic per module |
| Frontend | React + TypeScript (Vite); each module exports `routes`; PWA via Vite PWA plugin |
| Mobile | React Native — **proposed only**, confirm at kickoff |
| Database | PostgreSQL 16, schema-per-module |
| Cache / Search / Storage | Redis / OpenSearch / S3-compatible (MinIO) — diagram defaults |
| Event broker | Postgres outbox mandatory; broker choice (Redis Streams / RabbitMQ / Kafka) is a follow-up ADR |
| Workflow engine | build on platform/workflow; evaluate Temporal — follow-up ADR |
| Auth | OIDC via platform/identity; Keycloak vs custom — follow-up ADR |
| API | REST + OpenAPI 3.1, generated TS clients |
| Python tooling | uv, ruff, mypy, pytest |
| JS tooling | pnpm workspaces, ESLint, Vitest, Playwright |
| Boundary enforcement | import-linter (Python), ESLint no-restricted-imports (TS) in CI |

**Also done:**
- Every module/platform service got placeholder `backend/pyproject.toml` (`eos-<module>`) and `frontend/package.json` (`@eos/<module>`).
- `modules/_template` uses `__MODULE_NAME__` placeholders in those files; scaffold script re-tested.
- Stack mapping section appended to `docs/architecture/module-standard.md`.
- README, ARCHITECTURE, onboarding, package READMEs, CI plan updated to reflect the stack.
- `.gitignore` extended for uv / pnpm caches.

---

## 4. Current state and next steps

- **Nothing is committed or pushed yet.** All work is in the working tree of `/home/faizan/Education_OS`.
- To publish:
  ```
  cd ~/Education_OS
  git add -A
  git commit -m "Scaffold modular monorepo with React/FastAPI/PostgreSQL stack"
  git push -u origin main
  ```
- Open decisions for the team: mobile (React Native?), event broker, workflow engine, identity provider.
- First real work per module owner: write `docs/prd.md`, then `contracts/*.yaml`, before any code.
- CI workflows (`.github/workflows/`) are planned, not yet written.

---

## 5. Later the same day: tests folder, dashboards, deployment, institution profiles

- **Root `tests/`** for cross-module, contract, e2e and performance suites. Single-module tests stay in the module.
- **Dashboards:** 15 roles from the diagram → one dashboard shell in `apps/web`, widget contract in
  `packages/ui-kit`, one layout YAML per role in `platform/identity/config/dashboards/`. Assignment
  of the 15 dashboards to 11 people is in the "Dashboard Assignment Plan" doc (round 1: one each;
  round 2: pool of 4, claimed on finishing).
- **Deployment:** live at https://educationos.futureacad.ae. Static build served by the LAN's nginx
  reverse-proxy container. Auto deploy: `.github/workflows/web.yml` builds and tests on every push,
  publishes `apps/web/dist` to the `web-dist` branch on `main`; a systemd timer in the container
  (`infra/autodeploy/`) pulls it every minute. Host details are deliberately not in the repo.
- **ADR-0004 Institution profiles:** Education OS is one configurable platform for many institution
  types, not a sports ERP. Modules carry `tier` (core / common / specialized) and `field`. An
  institution is a profile (`platform/identity/config/profiles/`). Fifteen institution types reduce
  to eight generic patterns built once as common modules. Reference: `docs/architecture/institution-types.md`.
- **ADR-0005 Multi-tenant SaaS:** the product owner chose one shared deployment over an instance
  per organisation (the alternative was raised and declined). Organisations self-register, pick
  an academy type, start on a 30-day trial and upgrade; a super admin runs the platform via
  `apps/admin`. New core services `platform/tenancy` (organisations, registration, entitlements)
  and `platform/billing` (plans, trials, subscriptions). Every module becomes tenant-aware
  (`organisation_id` + RLS, module standard rule 11). Roles `org-admin` and `super-admin` added.
- **Every academy gets its own roles and dashboards:** new common suite `modules/practice/`
  (portfolio, projects, selection-process, productions, field-training, skill-progress) = the eight
  generic patterns. 15 academy profiles, each with a learner role extending `student`, an instructor
  role extending `faculty` and a field staff role; 44 field role layouts. Roles moved out of code:
  `packages/contracts` keeps only org-admin and super-admin; the web shell reads roles from the
  profile and has an academy switcher.
- **Phase 1 foundation built:** `eos_core` (settings, tenant-scoped DB base, RLS, JWT, config loaders,
  entitlement rule, outbox), backends for identity, tenancy and billing, `apps/api` with the
  entitlement gate, `eos_testing` with the cross-tenant leak check, 11 foundation tests (register →
  verify → login → trial entitlement enforced by the gate → upgrade unlocks → org admin toggles →
  super admin overrides, impersonation, suspension). Web shell gained sign-up and sign-in with
  preview mode as fallback. Found and fixed a real leak: contextvars set in sync FastAPI dependencies
  do not reach the endpoint; the organisation now rides on the DB session and scoping fails closed.
  `api.yml` CI runs the tests on SQLite and Postgres. API deploy is prepared (`api.Dockerfile`,
  `docker-compose.api.yml`) but needs a Docker host; the web app stays in preview mode until then.
