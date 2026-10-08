# maintenance: product requirements

**Owner:** Ashritha (@Ashritharooman) · **Tier:** common · **Status:** contract draft (week 1, issue #65)

## 1. Purpose

maintenance keeps the organisation's buildings, spaces and equipment working. Anyone can report a
fault; maintenance staff triage it, assign it to a technician or an outside vendor, track the work
to completion and record what it cost. Recurring checks (servicing, inspections) are planned as
preventive schedules that raise tickets on their own. It serves every academy type the same way.

The unit of work is a **ticket** (what the `maintenance.tickets` widget shows). A ticket is either
`corrective` (something broke), `preventive` (raised by a schedule) or `inspection`.

## 2. Scope

**In scope**
- Fault reporting by any user, with photos
- Ticket categories (electrical, plumbing, IT, equipment, ...) defined by the organisation, with
  default priority and default assignees
- Triage, priority, assignment to a technician or a vendor, status tracking, on-hold reasons
- Response and resolution targets per priority, with breach detection
- Work log: notes, time spent, parts used, vendor cost
- Resolution confirmation by the reporter, reopen, auto-close
- Preventive schedules on a fixed interval, raising tickets ahead of the due date
- What a ticket is about (its **target**): an asset (asset-management), a bookable resource
  (facility-booking), an inventory unit (inventory-equipment), or just a described location

**Out of scope**
- General IT or service requests that are not repairs: `helpdesk` (Madhumita)
- Vendor contracts and AMC renewals: `amc-vendor-support` (Madhumita). A ticket may reference an AMC
- Issuing spare parts from stock: `inventory-equipment` (parts used here are recorded for cost only)
- Purchasing: `procurement`
- Taking a resource or asset out of use: done by its own module, which may react to this module's
  events (`blocks_use`)

## 3. Users and roles

| Who | What they do | Default module role |
|---|---|---|
| Anyone (learner, staff) | Report a fault, follow own tickets, confirm or reopen when resolved | `maintenance-reporter` |
| Technician | Work on assigned tickets: start, put on hold, log work, resolve | `maintenance-technician` |
| Facility / Inventory Staff, equipment manager, lab in-charge | Triage, assign, set priority, close, cancel; manage categories and schedules; see every ticket | `maintenance-manager` |

## 4. Main concepts

| Concept | Meaning |
|---|---|
| **Category** | Organisation-defined kind of work, with default priority, default assignee users and optional SLA override. |
| **Ticket** | One piece of work: kind, category, title, description, target, priority, status, assignee (user or vendor), SLA due times, `blocks_use`, photos. |
| **Target** | What the ticket is about: `{ kind: asset \| resource \| unit \| location, id, label }`. For `location`, only the label (free text). The id belongs to the other module; never a foreign key. |
| **Vendor assignment** | Name and contact of an outside vendor, optional AMC reference (amc-vendor-support) and vendor job number. |
| **Work entry** | A note, time spent, parts used (optional inventory item id and quantity) or a cost, with who and when. Append-only. |
| **Schedule** | Preventive plan: target, category, title, checklist, interval (every N days, weeks or months), lead days, default assignee, next due date, active flag. |

Every record carries `organisation_id`. People are identity user ids. No foreign keys to other
modules' tables.

## 5. Ticket lifecycle

```
raise ──► open ──assign──► assigned ──start──► in_progress ──resolve──► resolved ──confirm / auto-close──► closed
                                ▲                 │   ▲                     │
                                └──── hold ◄──────┘   └──── resume          └── reopen (within window) ──► assigned
          open / assigned / on_hold ──cancel──► cancelled
```

Statuses: `open`, `assigned`, `in_progress`, `on_hold`, `resolved`, `closed`, `cancelled`.
Priorities: `low`, `medium`, `high`, `urgent`.

## 6. Business rules

1. **Anyone can report** with `maintenance:ticket:create`. The category's default priority and
   assignees apply unless a manager changes them. If the category has exactly one default
   assignee, the ticket goes straight to `assigned`.
2. **SLA.** Each priority has a response target (until `in_progress`) and a resolution target
   (until `resolved`) in hours, from config or the category override. Time on hold does not count.
   A breach publishes `maintenance.ticket.sla-breached` once per target.
3. **Assignment** is to one technician (identity user) or one vendor. Reassigning is recorded.
4. **On hold** needs a reason: `waiting_parts`, `waiting_vendor`, `waiting_access`, `other`.
5. **Resolve** needs a resolution note. The reporter is asked to confirm; with no answer the
   ticket closes after `MAINTENANCE_AUTO_CLOSE_DAYS`. The reporter or a manager may reopen within
   `MAINTENANCE_REOPEN_WINDOW_DAYS` of resolving.
6. **Duplicate guard.** Raising a ticket on a target that already has an open ticket in the same
   category returns the existing ticket ids so the reporter can follow it instead (warning, not
   refusal).
7. **Preventive schedules.** The scheduler raises a `preventive` ticket `lead_days` before each due
   date, with the checklist copied. The next due date moves from the scheduled date, not from
   completion, so the plan does not drift. A schedule never has two open tickets at once.
8. **blocks_use.** When true, the ticket says the target cannot be used until resolved. This module
   does not change other modules; facility-booking, asset-management and inventory-equipment may
   react to the events.
9. **Costs.** Work entries carry time and money; the ticket shows totals. Money is decimal with
   currency.
10. **Tenant isolation.** Every table has `organisation_id` with a row-level-security policy on
    `app.organisation_id`; every event carries `organisation_id`.
11. **Audit.** Every state change (raise, assign, start, hold, resume, resolve, close, reopen,
    cancel, priority change, schedule change) is written to audit through `packages/sdk`.

## 7. Dashboard widgets

| Widget id | Layouts | Shows | API |
|---|---|---|---|
| `maintenance.tickets` | facility-staff, equipment-manager, lab-in-charge | Open tickets the viewer manages or is assigned, urgent and SLA-breached first, with counts | `GET /tickets?scope=managed&open=true`, `GET /summary` |

## 8. Integration points

- **Platform services (through `packages/sdk`):** identity, audit, notification (ticket raised,
  assigned, resolved, SLA breach), scheduler (preventive tickets, SLA checks, auto-close),
  documents (photos, vendor reports).
- **Events published:** `contracts/events.yaml`. Expected consumers: asset-management and
  facility-booking (set in repair / under maintenance when `blocks_use`), inventory-equipment (unit
  back in service), helpdesk (link from a helpdesk request), reporting.
- **Events consumed:** none in v1. Once the inventory-equipment contract is merged, this module may
  subscribe to `inventory-equipment.unit.condition-changed` to open a ticket for damaged units.
- **Other modules raising tickets** call `POST /tickets` with a `target` and an optional `source`.

## 9. Configuration

`config/env.example`: `MAINTENANCE_SLA_RESPONSE_HOURS_<PRIORITY>`,
`MAINTENANCE_SLA_RESOLUTION_HOURS_<PRIORITY>` for each priority, `MAINTENANCE_AUTO_CLOSE_DAYS`,
`MAINTENANCE_REOPEN_WINDOW_DAYS`, `MAINTENANCE_DEFAULT_LEAD_DAYS`, `MAINTENANCE_DEFAULT_CURRENCY`.

## 10. Non-functional

- Reporting a fault works from a phone in under a minute (title, category, target, photo).
- SLA timers use business time only if configured later; v1 uses wall-clock hours minus time on hold.
- Times are stored in UTC, RFC 3339 with offset.

## 11. Open questions (for review)

1. Should SLA hours count only working hours (organisation calendar)? This draft: wall-clock hours.
2. Should parts used here issue stock in inventory-equipment automatically (through its API), or
   stay a cost record only? This draft: cost record only.
3. Boundary with helpdesk: should helpdesk forward repair requests here through the API? To agree
   with Madhumita.
