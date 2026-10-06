# Education OS: instructions for Claude Code

## Repository rules for AI assistants

These apply to every change, whoever or whatever makes it. CI enforces them; a pull request that breaks one cannot merge.

1. **Nothing at the top of the repository.** Only the folders and the four files in `tools/config/repo-layout.yaml` (`.gitignore`, `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`) may exist there. Put every new file in its folder:
   - documentation in `docs/` (architecture in `docs/architecture/`, team process in `docs/team/`)
   - files GitHub reads (README, CONTRIBUTING, CODEOWNERS, workflows) in `.github/`
   - tool configuration in `tools/config/`, scripts in `tools/scripts/`
   - Docker and deployment in `infra/`
   - code inside its module (`modules/<domain>/<module>`, `platform/<service>`, `integrations/<adapter>`), `apps/` or `packages/`
   - tests across modules in `tests/`
   Never create a new top-level folder; that needs a PR to `tools/config/repo-layout.yaml` approved by the lead.
2. **Module boundaries.** A module imports only from itself and `packages/`. Follow `docs/architecture/module-standard.md`: contracts first, own schema, `organisation_id` and row-level security on every table, platform services through the SDK, tests that pass alone.
3. **Approved stack only.** Use only libraries listed in `docs/architecture/approved-stack.yaml`. Do not add a dependency that is not on it.
4. **One module per pull request**, conventional commit messages scoped by module (`feat(admissions): ...`), branch `feat/<module>/<desc>`. Never push to `main`.
5. **Run `tools/scripts/precheck.sh` before every push.** It runs the same checks CI runs.
6. **Use ruff with the shared config:** `ruff check --config tools/config/ruff.toml .`

Full rules: `docs/team/RULES.md`.

A hook in `.claude/settings.json` refuses Write and Edit calls that would create files at the top of the repository.
