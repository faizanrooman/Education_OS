# inventory-equipment: product requirements

**Owner:** Ashritha (@Ashritharooman) · **Tier:** common · **Status:** contract draft (week 1, issue #65)

## 1. Purpose

inventory-equipment is the **generic inventory pattern** of Education OS (ADR-0004). It keeps
track of movable things an organisation stores, lends and uses up: what exists, where it is, how
many are left, who has borrowed what and when it is due back. The same module serves every
academy type; the word people see for an item comes from the profile vocabulary:

| Profile | `inventory-equipment.item` |
|---|---|
| music-academy | Instrument |
| dance-academy, theatre-academy | Costume / prop |
| engineering-college | Lab equipment |
| arts-academy | Material |
| film-media-institute, sports-college | Equipment |

The contract never uses a field-specific word: it speaks of **items**, **units**, **stock** and
**loans**.

## 2. Scope

**In scope**
- Catalogue of items in organisation-defined categories
- Two ways of tracking an item:
  - **individual**: each piece is a **unit** with its own tag or serial number, condition and
    status (for example one camera)
  - **quantity**: only a count per store location (for example cables, paint)
- Store locations and stock levels per location
- Stock ledger: receipt, consumption (issue), transfer, adjustment, write-off
- Low-stock detection against a reorder level
- Loans: request, approval (optional per item), hand-out, return with condition check, extension,
  overdue, lost
- Condition tracking of units, with damage recorded on return

**Out of scope**
- Fixed asset register, depreciation, disposal: `asset-management`. A unit may carry the id of its
  asset record there
- Repairs: `maintenance`. It can listen for damaged units and open a ticket
- Purchasing and suppliers: `procurement` (Gokula Lakshmi). It may listen for low-stock events
- Booking rooms and spaces: `facility-booking`
- Library books: `library`
- Fines for late or lost items: not in v1; the events carry what a fees module would need

## 3. Users and roles

| Who | What they do | Default module role |
|---|---|---|
| Learner or instructor (each academy's learner and instructor roles) | Browse what can be borrowed, request loans, see own loans and due dates | `inventory-equipment-borrower` |
| Approver (instructor, HoD, ensemble or production lead) | Approve or reject loan requests for items that need approval | `inventory-equipment-approver` |
| Store staff (Facility / Inventory Staff, equipment manager, lab in-charge) | Run the catalogue and stores, receive and issue stock, hand out and take back loans, record damage and loss | `inventory-equipment-manager` |

The academy profile maps its roles to these module roles.

## 4. Main concepts

| Concept | Meaning |
|---|---|
| **Category** | Organisation-defined grouping in its own words. Holds default loan rules and approvers. |
| **Item** | A catalogue entry: name, category, tracking (`individual` or `quantity`), unit of measure, `loanable`, `consumable`, reorder level and quantity, loan rules, attributes. |
| **Unit** | One physical piece of an individually tracked item: tag, serial number, condition, status, current location, optional `asset_id` (asset-management). |
| **Location** | A store: room, cupboard, locker, van. Free-text address. |
| **Stock level** | On-hand, on-loan and reserved quantity of a quantity-tracked item at one location. |
| **Movement** | One append-only ledger line: receipt, issue, transfer, adjustment, write-off, loan out, loan return. Never edited; corrections are new lines. |
| **Loan** | One borrowing by one person, with one or more lines (a unit, or an item and quantity) and a due date. |

Every record carries `organisation_id`. People are referenced by identity user id only. No foreign
keys to other modules' tables.

## 5. Statuses

Unit status: `available`, `reserved`, `on_loan`, `in_repair`, `missing`, `retired`.
Unit condition: `new`, `good`, `fair`, `poor`, `damaged`.

Loan lifecycle:

```
request ──► requested ──approve──► approved ──hand out──► on_loan ──return all──► returned
               │   (no approval needed: straight to approved)    │
             reject                             due date passes ──► overdue ──return──► returned
               ▼                                                 │
            rejected     requested/approved ──cancel──► cancelled    mark lost ──► closed_with_loss
```

Statuses: `requested`, `approved`, `rejected`, `cancelled`, `on_loan`, `partially_returned`,
`overdue`, `returned`, `closed_with_loss`.

## 6. Business rules

1. **Stock never goes negative.** An issue, transfer or loan that needs more than is available at
   the location is refused (409).
2. **Every change to quantity is a movement.** Stock levels are the sum of the ledger; there is no
   direct edit. An adjustment or write-off needs a reason.
3. **Low stock.** When the available quantity across all locations falls to or below the item's
   `reorder_level`, `inventory-equipment.stock.low` is published once; `stock.replenished` follows
   when it rises above again. Individually tracked items count their `available` units.
4. **Loan rules per item** (falling back to category, then config): `requires_approval`,
   `max_loan_days`, `max_quantity_per_loan`, `borrower_role_ids` (empty means anyone with
   `inventory-equipment:loan:request`). Each person has at most
   `INVENTORY_EQUIPMENT_MAX_OPEN_LOANS_PER_PERSON` open loans.
5. **Approval** is by a listed approver of the item's category, or a holder of
   `inventory-equipment:loan:manage`. Rejecting needs a reason.
6. **Hand-out** picks the exact units (or quantity and location) and records the condition of each
   unit going out. Approved loans not handed out within `INVENTORY_EQUIPMENT_PICKUP_EXPIRY_HOURS`
   are cancelled by the scheduler.
7. **Return** records the condition of each unit. A unit returned `damaged` becomes `in_repair` and
   `inventory-equipment.unit.condition-changed` is published so maintenance can open a ticket.
   Returns can be partial.
8. **Overdue.** The scheduler marks a loan `overdue` when its due date passes and publishes
   `inventory-equipment.loan.overdue`. It sends a reminder `INVENTORY_EQUIPMENT_DUE_REMINDER_HOURS`
   before the due date.
9. **Extension.** The borrower may extend once if no request is waiting for the same item; staff
   may extend at any time.
10. **Lost.** Staff can mark a loan line lost: the unit becomes `missing` (or the quantity is written
    off) and the loan closes as `closed_with_loss` when nothing else is out.
11. **Consumables** (`consumable: true`) are issued, not lent; they leave stock and do not come back.
12. **Tenant isolation.** Every table has `organisation_id` with a row-level-security policy on
    `app.organisation_id`; every event carries `organisation_id`.
13. **Audit.** Every state change (catalogue, unit status and condition, movements, every loan
    transition) is written to audit through `packages/sdk`.

## 7. Dashboard widgets

| Widget id | Layouts | Shows | API |
|---|---|---|---|
| `inventory-equipment.low-stock` | 9: facility-staff, equipment-manager, lab-in-charge, stage-manager, production-manager, exhibition-manager, ensemble-director, chef-instructor, farm-supervisor | Items at or below reorder level, with available and reorder quantity | `GET /low-stock` |
| `inventory-equipment.my-loans` | 6: musician, artist, dancer, actor, filmmaker, hospitality-trainee | The viewer's open loans with due dates, overdue first | `GET /loans?scope=mine&open=true` |
| `inventory-equipment.overdue-loans` | 2: equipment-manager, lab-in-charge | Overdue loans with borrower and days late | `GET /loans?scope=managed&status=overdue` |

Widget titles use the vocabulary term (for example "My instruments on loan" in a music academy).
Each `Loan` carries a `can` list of the actions the viewer may take.

## 8. Integration points

- **Platform services (through `packages/sdk`):** identity, audit, notification (loan requested,
  approved, ready for pickup, due soon, overdue), scheduler (overdue sweep, reminders, pickup
  expiry), documents (item photos).
- **Events published:** `contracts/events.yaml`. Expected consumers: maintenance (damaged units),
  procurement (low stock), asset-management (linked unit retired or missing), notification,
  reporting.
- **Events consumed:** none in v1.
- A unit may store `asset_id` from asset-management. The two modules never read each other's tables.

## 9. Configuration

`config/env.example`: `INVENTORY_EQUIPMENT_DEFAULT_MAX_LOAN_DAYS`,
`INVENTORY_EQUIPMENT_DUE_REMINDER_HOURS`, `INVENTORY_EQUIPMENT_PICKUP_EXPIRY_HOURS`,
`INVENTORY_EQUIPMENT_MAX_OPEN_LOANS_PER_PERSON`.

## 10. Non-functional

- Stock changes run in one transaction with a row lock on the stock level, so two requests cannot
  both take the last item.
- The ledger is append-only; on-hand quantity can be rebuilt from it at any time.
- Times are stored in UTC and sent as RFC 3339 with offset.

## 11. Open questions (for review)

1. Should borrowers be able to reserve a unit for a future date, or only borrow from now? This
   draft: from now only.
2. Sports equipment: stays here (vocabulary "Equipment"), as ADR-0004 lists it under this pattern.
   To confirm with Akshata (sports-facilities).
3. Fines for late or lost items: leave to a fees module listening to events (this draft), or build in?
