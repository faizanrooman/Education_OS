# tools/

| Script | Purpose |
|---|---|
| `scaffold-module.sh <kind> <domain> <name> "<desc>"` | Create a module from `modules/_template` |
| `scripts/order-issues.py` | Numbers every roadmap issue `[NNN]` in build order and orders the project board to match (re-run after adding issues) |
| `scripts/precheck.sh [--fix]` | The governance checks CI runs, locally, before you push |
| `scripts/deploy-web.sh` | Build the web image locally and deploy it to `DEPLOY_HOST` over SSH. See `infra/docker/README.md` |
