# ADR-0002: Technology stack

- **Status:** accepted
- **Date:** 2026-10-06
- **Deciders:** Education OS team

## Context
The repo structure is language-agnostic. One stack must be fixed so `packages/`, the module
template and CI are concrete and every module is built the same way.

## Decision

| Concern | Choice | Notes |
|---|---|---|
| Backend | **Python 3.12 + FastAPI** | Each module's `backend/` is a Python package exposing one `APIRouter`. Pydantic models generated from / validated against `contracts/openapi.yaml` |
| Frontend | **React + TypeScript** (Vite) | Each module's `frontend/` exports its routes and pages. `apps/web` composes them. PWA via Vite PWA plugin |
| Mobile | **React Native** (proposed) | Keeps the React skill set. Confirm at kickoff; `apps/mobile` stays empty until then |
| Primary database | **PostgreSQL 16** | Schema-per-module. SQLAlchemy 2 + Alembic per module, migrations in `<module>/db/migrations` |
| Cache | Redis | Per diagram |
| Search | OpenSearch / Elasticsearch | Per diagram, hosted by `platform/search` |
| Object storage | S3-compatible (MinIO on-prem) | Behind `platform/documents` |
| Event broker | PostgreSQL outbox → broker (pending: Redis Streams vs RabbitMQ vs Kafka) | Outbox is mandatory either way; broker choice is a follow-up ADR |
| Workflow engine | Build on `platform/workflow` (pending: evaluate Temporal) | Follow-up ADR |
| Auth | OIDC via `platform/identity` (pending: Keycloak vs custom) | Follow-up ADR |
| API style | REST + OpenAPI 3.1, generated TS clients | GraphQL only at gateway if ever needed |
| Python tooling | uv, ruff, mypy, pytest | One `pyproject.toml` per module and per package |
| JS tooling | pnpm workspaces, ESLint, Vitest, Playwright | One `package.json` per module frontend and per package |
| Containers | Docker + Kubernetes | Per diagram |

## Consequences
- `modules/_template` gains `backend/pyproject.toml` and `frontend/package.json` placeholders.
- `packages/core`, `packages/sdk` and `packages/testing` are Python packages. `packages/ui-kit` is a React package. `packages/contracts` holds OpenAPI/JSON Schema and generates both Pydantic and TypeScript types.
- `apps/api` is a FastAPI app that includes each enabled module's router. `apps/web` is a Vite React app that mounts each enabled module's routes.
- Import boundary is enforced with `import-linter` (Python) and ESLint `no-restricted-imports` (TS) in CI.
- Three follow-up ADRs needed: event broker, workflow engine, identity provider.

## Alternatives considered
- Node/NestJS backend — single language across the stack, but the team's backend strength is Python.
- Django — batteries included, but FastAPI's router-per-module model fits portable modules better.
- Flutter for mobile — rejected for now to keep one UI skill set.
