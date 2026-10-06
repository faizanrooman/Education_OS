# CI workflows

Planned jobs (stack: FastAPI + React + PostgreSQL, see ADR-0002):

| Job | Purpose |
|---|---|
| `module-boundaries` | import-linter (Python) + ESLint no-restricted-imports (TS): fail on imports outside the module and `packages/` |
| `manifest-check` | Fail if `module.yaml` dependencies don't match actual imports |
| `contracts-lint` | Validate every `contracts/*.yaml` |
| `test-changed-modules` | Run tests only for modules touched by the PR |
| `build-apps` | Build `apps/*` with their enabled module lists |
