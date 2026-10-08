# hostel

**Domain:** campus-life
**Kind:** feature
**Status:** in-progress (contracts proposed)

Room allocation, mess, visitors, discipline and fee linkage.

## Scope
Owner: Tejaswini (@tejaswini-rooman). Requirements: [docs/prd.md](docs/prd.md).

**In scope:** hostels, rooms and beds; room requests, allocation, check-in and check-out; mess menu;
leave (out-pass) requests; visitor log; discipline incidents; notices to residents. Publishes allocation
events that fees-accounts may use to raise hostel fee invoices.

**Not in scope:** charging and collecting hostel or mess fees (fees-accounts), mess inventory and
purchasing (inventory-equipment, procurement), room repairs (maintenance), guest-room booking
(facility-booking).

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
