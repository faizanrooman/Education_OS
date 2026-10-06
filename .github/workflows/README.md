# CI workflows

Live: `api.yml` installs every Python package and runs the foundation tests on SQLite and on Postgres with row-level security, on every push and PR. `web.yml` runs typecheck, tests and the web build on every push and PR, and on `main` publishes the build to the `web-dist` branch for the server to pull (see `infra/autodeploy/`).

Planned jobs (stack: FastAPI + React + PostgreSQL, see ADR-0002):

| Job | Purpose |
|---|---|
| `module-boundaries` | import-linter (Python) + ESLint no-restricted-imports (TS): fail on imports outside the module and `packages/` |
| `manifest-check` | Fail if `module.yaml` dependencies don't match actual imports |
| `contracts-lint` | Validate every `contracts/*.yaml` |
| `test-changed-modules` | Run tests only for modules touched by the PR |
| `test-contract` | Run root `tests/contract` on every PR |
| `test-system` | Run root `tests/integration` and `tests/e2e` on merge to `main`; `tests/performance` on demand |
| `build-apps` | Build `apps/*` with their enabled module lists |
