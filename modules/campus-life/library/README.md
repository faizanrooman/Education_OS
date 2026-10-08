# library

**Domain:** campus-life
**Kind:** feature
**Status:** in-progress (contracts proposed)

Catalogue, circulation, digital library, fines, reservations.

## Scope
Owner: Tejaswini (@tejaswini-rooman). Requirements: [docs/prd.md](docs/prd.md).

**In scope:** catalogue of titles and copies; members and loan policies; circulation (issue, return,
renew, lost); reservations and holds; fines paid at the desk or waived; a list of digital resources
(links only). Publishes fine events that fees-accounts may use to invoice fines.

**Not in scope:** buying books and subscriptions (procurement), hosting digital content, inter-library
loans and RFID gates (later integrations), reading-room seat booking (facility-booking).

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
