## Module
<!-- one module: modules/<domain>/<module>, platform/<service> or integrations/<adapter> -->

## Task
Closes #<!-- issue number -->

## What
<!-- one paragraph -->

## Time spent
Time spent: <!-- e.g. 6h -->

## Contract change?
- [ ] No
- [ ] Yes — consumers notified:

## Checklist
- [ ] No imports outside the module and `packages/`
- [ ] Tests pass with the module alone
- [ ] Every new table has `organisation_id` and an RLS policy; cross-tenant leak test passes
- [ ] `config/env.example` updated
- [ ] CHANGELOG updated
- [ ] Audit events emitted for state changes
- [ ] Cross-module tests added under root `tests/` (if contract changed)
