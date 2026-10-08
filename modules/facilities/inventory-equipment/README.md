# inventory-equipment

**Domain:** facilities
**Kind:** feature
**Status:** planned

Generic inventory pattern (ADR-0004). Keeps track of movable things an organisation stores, lends and uses up: catalogue, individually tagged units, stock per store, the stock ledger, low stock and loans. Each academy names the item in its profile vocabulary (`inventory-equipment.item`), for example "Instrument", "Costume / prop" or "Lab equipment".

## Scope
Responsible for: categories and items, units with tag and condition, store locations, stock
levels and the append-only stock ledger, low-stock detection, loans (request, approval, hand-out,
return, extension, overdue, lost).

Not responsible for: fixed assets and depreciation (`asset-management`), repairs (`maintenance`),
purchasing (`procurement`), booking spaces (`facility-booking`), library books (`library`).
Those modules react to this module's events.

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
