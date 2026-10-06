# Contributing

## Branches
- `main` — always deployable. Protected. PR + 1 owner approval required.
- `feat/<module>/<short-desc>` — feature work inside one module.
- `platform/<service>/<short-desc>` — platform work.
- `contract/<module>/<short-desc>` — contract changes. Reviewed by the owner of every consuming module.

A PR touches **one module** unless it is a contract change plus its consumers.

## Order of work for a new feature
1. `docs/prd.md` and `docs/user-stories.md` in the module.
2. `contracts/openapi.yaml`, `events.yaml`, `permissions.yaml`. Open a `contract/` PR.
3. `db/migrations` for the module's own schema.
4. Backend domain → application → infrastructure → api, with tests.
5. Frontend pages against the generated client.
6. `tests/e2e`.
7. Update `CHANGELOG.md` and `module.yaml` status.

## Definition of done
- [ ] Contracts updated and reviewed
- [ ] Tests pass with the module alone (platform stubs)
- [ ] No imports outside the module and `packages/`
- [ ] `config/env.example` complete
- [ ] README and CHANGELOG updated
- [ ] Audit events emitted for every state change
- [ ] Permission keys registered

## Commits
Conventional commits scoped by module: `feat(admissions): add merit list generation`.

## Decisions
Anything that affects more than one module gets an ADR in `docs/architecture/adr/`.
