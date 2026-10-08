# facility-booking

**Domain:** facilities
**Kind:** feature
**Status:** planned

Generic resource-booking pattern (ADR-0004). People find a bookable resource, see when it is free and book it, with optional approval. Each academy names the resource in its profile vocabulary (`facility-booking.resource`), for example "Practice room", "Lab / skills room" or "Edit suite / studio".

## Scope
Responsible for: resource types and resources, opening hours and closures, availability,
single and recurring bookings, approval, conflict prevention, check-in and no-show.

Not responsible for: sports grounds (`sports-facilities`), fixed assets (`asset-management`),
repairs (`maintenance`), lending movable items (`inventory-equipment`), class timetables
(`timetable-attendance`). Those modules may book through this module's API.

Requirements: [docs/prd.md](docs/prd.md).

## Public surface
- API: [contracts/openapi.yaml](contracts/openapi.yaml)
- Events: [contracts/events.yaml](contracts/events.yaml)
- Permissions: [contracts/permissions.yaml](contracts/permissions.yaml)

## Dependencies
See `module.yaml`. This module must not import code from any other module under `modules/`.

## Layout
| Path | Purpose |
|---|---|
| `docs/` | PRD, user stories, data model, screen list |
| `contracts/` | OpenAPI, event schemas, permission catalogue |
| `backend/` | Domain, application, infrastructure, API layers + unit tests |
| `frontend/` | Pages, components, API client + tests |
| `mobile/` | Mobile screens (optional) |
| `db/` | Migrations and seed data, own schema only |
| `config/` | `env.example`, feature flags |
| `tests/e2e` | End-to-end tests runnable in isolation |

## Porting this module to another repo
Follow [docs/architecture/module-standard.md](../../../docs/architecture/module-standard.md#portability-checklist).
