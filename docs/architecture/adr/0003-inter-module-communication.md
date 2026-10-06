# ADR-0003: Modules communicate only via contracts and events

- **Status:** accepted
- **Date:** 2026-10-06
- **Deciders:** Education OS team

## Context
Portability fails the moment one module imports another's code or reads its tables.

## Decision
- Synchronous: call the other module's OpenAPI contract through the gateway using a generated client.
- Asynchronous: publish domain events to `platform/event-bus`; consumers declare subscriptions in `module.yaml`.
- Data: each module keeps a read-only cached copy of the foreign fields it needs, updated from events. Reference by ID.
- Cross-module reports: built in `platform/reporting` from the warehouse, not from live joins.

## Consequences
- Eventual consistency between modules is normal and must be designed for.
- Every module needs an outbox or equivalent to publish events reliably.
- Contract changes are reviewed like public API changes.

## Alternatives considered
- Shared database with cross-schema joins — fast to build, impossible to lift out.
- Shared "common models" package holding every entity — becomes a hidden coupling point.
