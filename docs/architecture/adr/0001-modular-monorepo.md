# ADR-0001: Modular monorepo with portable feature modules

- **Status:** accepted
- **Date:** 2026-10-06
- **Deciders:** Education OS team

## Context
Eleven people will build a university ERP with roughly 35 feature areas. The same features
(fees, library, helpdesk, LMS) are wanted in other products later. One repo keeps
coordination cheap; strict module boundaries keep the features reusable.

## Decision
A single repository where every feature is a self-contained module folder with its own
contracts, backend, frontend, migrations, config and tests. Modules communicate only through
published APIs and events. Shared code is limited to versioned `packages/`. Apps are thin
composition roots that enable modules by config.

## Consequences
- Any module can be copied to another repo with `packages/` as its only dependency.
- Teams own modules end to end, reducing cross-team merge conflicts.
- Some duplication inside modules is accepted over cross-module imports.
- CI must enforce the import boundary once the stack is chosen.
- Cross-module reporting is done through the warehouse, not cross-schema joins.
- Since [ADR-0005](0005-multi-tenant-saas.md), one deployment serves many organisations; every
  module is tenant-aware.

## Alternatives considered
- Polyrepo per module — too much overhead for 11 people at the start; can be done later by copying folders.
- Classic layered monolith (controllers/services/models folders) — reusing one feature means untangling everything.
