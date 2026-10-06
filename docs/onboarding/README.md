# Onboarding

1. Read [README.md](../../README.md), then [ARCHITECTURE.md](../../ARCHITECTURE.md).
2. Read [module-standard.md](../architecture/module-standard.md). You will be held to it in review.
3. Find your modules in [team/ownership.md](../team/ownership.md).
4. Read the ADRs in [architecture/adr/](../architecture/adr/). Stack: React, FastAPI, PostgreSQL (ADR-0002).
5. For each module you own, write `docs/prd.md` and `contracts/*.yaml` before any code.
6. Local setup: Python 3.12 + uv, Node 20 + pnpm, Docker.
   Frontend today: `pnpm install` at the repo root, then `pnpm --filter @eos/web dev` and open
   `http://localhost:5173/?role=student`. No pnpm installed? `npx pnpm@9 install` works.
   `pnpm test` and `pnpm typecheck` run every package.
