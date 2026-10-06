# Education OS

**One Education OS platform, configured for the way each institution teaches, trains, manages
and supports its students.**

A configurable higher-education platform: a core, common suites every institution runs
(admissions, academics, examinations, finance, campus life, governance, support), specialized
suites per field (sports first; arts, music, design, film, medical, law, engineering, management,
research planned), and an institution profile that says which are on. It is **multi-tenant SaaS**:
an organisation registers, picks its academy type, starts on a trial and upgrades for more, under
a super admin who runs the platform ([ADR-0005](docs/architecture/adr/0005-multi-tenant-saas.md)).
Built as a **monorepo of independent modules**: every feature is a self-contained folder that can be copied into another
repository and run there.

Architecture diagram: [docs/architecture/diagrams/high-level-architecture.png](docs/architecture/diagrams/high-level-architecture.png)

## Repo map

| Folder | What lives here | Portable? |
|---|---|---|
| [`modules/`](modules/) | Business feature modules, grouped by domain (suite). `practice/` holds the generic patterns every academy type shares | Yes, one folder each |
| [`platform/`](platform/) | Core services: identity, events, notification, workflow, audit, search, documents, reporting, scheduler, gateway, integration hub. Institution profiles and dashboard layouts live under `platform/identity/config/` | Yes |
| [`integrations/`](integrations/) | Adapters to external systems (payment, DigiLocker, NAD, government portals, messaging, video, wearables) | Yes |
| [`packages/`](packages/) | Shared libraries: contracts, ui-kit, core, sdk, testing | Versioned |
| [`apps/`](apps/) | Composition roots: web (incl. super admin screens), api, mobile. One application for every academy. No business logic | No |
| [`data/`](data/) | Data-layer conventions and shared reference data | No |
| [`infra/`](infra/) | Docker, Kubernetes, Terraform, monitoring, backup/DR | No |
| [`docs/`](docs/) | Architecture, ADRs, team ownership, onboarding | No |
| [`tools/`](tools/) | Scaffolding and repo scripts | No |
| [`tests/`](tests/) | Cross-module, contract, full-system e2e and performance suites. Single-module tests stay inside the module | No |

## The one rule

A module may import only from **its own folder** and from **`packages/`**.
It talks to other modules through their published **API contracts** and **events**, never through code.
That rule is what makes every module liftable. Details: [docs/architecture/module-standard.md](docs/architecture/module-standard.md).

## Start here
1. [ARCHITECTURE.md](ARCHITECTURE.md) — layers and how they map to folders
2. [docs/architecture/module-standard.md](docs/architecture/module-standard.md) — anatomy of a module
3. [docs/architecture/adr/](docs/architecture/adr/) — decisions made and pending
4. [docs/architecture/institution-types.md](docs/architecture/institution-types.md) — which institution types we serve and how
5. [docs/team/ownership.md](docs/team/ownership.md) — who owns what
6. [CONTRIBUTING.md](CONTRIBUTING.md) — branching, PRs, definition of done

## Create a module
```
tools/scaffold-module.sh feature academics new-module "One line description"            # common module
tools/scaffold-module.sh feature music practice-rooms "Practice room lessons" specialized music   # field-specific
```

## Tech stack
React + TypeScript (web, React Native proposed for mobile), FastAPI (Python), PostgreSQL.
Full table and follow-up decisions: [ADR-0002](docs/architecture/adr/0002-tech-stack.md).

## Live
https://educationos.futureacad.ae — every merge to `main` deploys there within about two minutes
(see [infra/autodeploy](infra/autodeploy/)). `/VERSION` on the site shows the commit that is live.

## Run the backend
```
tools/scripts/py-setup.sh && source .venv/bin/activate
EOS_SUPER_ADMIN_EMAIL=root@local EOS_SUPER_ADMIN_PASSWORD=change-me uvicorn eos_api.main:app --reload --port 8000
pnpm --filter @eos/web dev      # proxies /api to :8000; sign-up and sign-in become real
```

## Status
Dashboard foundation (widget contract, 59 role layouts, 15 academy profiles, web shell) and the
multi-tenant foundation (identity, tenancy, billing, API host with the entitlement gate, row-level
security, cross-tenant leak test) are built and tested. No business module is implemented yet.
