# Education OS

Modular university ERP covering academics, administration, sports, finance, campus life,
governance and support. Built as a **monorepo of independent modules**: every feature is a
self-contained folder that can be copied into another repository and run there.

Architecture diagram: [docs/architecture/diagrams/high-level-architecture.png](docs/architecture/diagrams/high-level-architecture.png)

## Repo map

| Folder | What lives here | Portable? |
|---|---|---|
| [`modules/`](modules/) | Business feature modules, grouped by domain (suite) | Yes, one folder each |
| [`platform/`](platform/) | Shared services: identity, events, notification, workflow, audit, search, documents, reporting, scheduler, gateway, integration hub | Yes |
| [`integrations/`](integrations/) | Adapters to external systems (payment, DigiLocker, NAD, government portals, messaging, video, wearables) | Yes |
| [`packages/`](packages/) | Shared libraries: contracts, ui-kit, core, sdk, testing | Versioned |
| [`apps/`](apps/) | Composition roots: web, mobile, api. No business logic | No |
| [`data/`](data/) | Data-layer conventions and shared reference data | No |
| [`infra/`](infra/) | Docker, Kubernetes, Terraform, monitoring, backup/DR | No |
| [`docs/`](docs/) | Architecture, ADRs, team ownership, onboarding | No |
| [`tools/`](tools/) | Scaffolding and repo scripts | No |

## The one rule

A module may import only from **its own folder** and from **`packages/`**.
It talks to other modules through their published **API contracts** and **events**, never through code.
That rule is what makes every module liftable. Details: [docs/architecture/module-standard.md](docs/architecture/module-standard.md).

## Start here
1. [ARCHITECTURE.md](ARCHITECTURE.md) — layers and how they map to folders
2. [docs/architecture/module-standard.md](docs/architecture/module-standard.md) — anatomy of a module
3. [docs/architecture/adr/](docs/architecture/adr/) — decisions made and pending
4. [docs/team/ownership.md](docs/team/ownership.md) — who owns what
5. [CONTRIBUTING.md](CONTRIBUTING.md) — branching, PRs, definition of done

## Create a module
```
tools/scaffold-module.sh feature academics new-module "One line description"
```

## Tech stack
React + TypeScript (web, React Native proposed for mobile), FastAPI (Python), PostgreSQL.
Full table and follow-up decisions: [ADR-0002](docs/architecture/adr/0002-tech-stack.md).

## Status
Scaffold only. No implementation yet.
