# asset-management: product requirements

**Owner:** Ashritha (@Ashritharooman) · **Tier:** common · **Status:** contract draft (week 1, issue #65)

## 1. Purpose

asset-management is the organisation's **fixed asset register**: every long-lived, valuable thing
it owns (furniture, machines, vehicles, IT, studio and lab equipment), where it is, who is
responsible for it, what it cost, what it is worth now, and when it was last physically checked.
It serves every academy type the same way; nothing in it depends on the field.

## 2. Scope

**In scope**
- Asset categories with depreciation and verification defaults
- Asset register: tag, details, location, department, custodian, acquisition, warranty, status, condition
- Transfers between locations, departments and custodians, with history
- Physical audit: verification cycles in which staff confirm each asset is present and in what
  condition; assets due for verification. In the API this is called **verification**, to avoid
  confusion with the platform audit log.
- Depreciation: straight-line or written-down-value schedules, period runs that are drafted, then
  posted and locked
- Disposal: request, approval, completion (sale, scrap, donation, write-off, transfer out), with
  book value and gain or loss

**Out of scope**
- Lending and stock of movable items: `inventory-equipment`. A unit there may point to an asset here
- Repairs and preventive maintenance: `maintenance`. Its tickets may point to an asset here
- Buying: `procurement`. An asset stores a reference to its purchase order
- Accounting ledgers: `fees-accounts` / `budget-grants`. They may listen for depreciation and
  disposal events
- Vendor AMC contracts: `amc-vendor-support`. An asset may store the AMC reference

## 3. Users and roles

| Who | What they do | Default module role |
|---|---|---|
| Custodian (HoD, lab in-charge, any staff given an asset) | See assets in their care, request transfer or disposal | `asset-management-custodian` |
| Verifier (store or department staff on a verification cycle) | Record found, missing, damaged or moved for each asset | `asset-management-verifier` |
| Facility / Inventory Staff | Register and edit assets, transfers, status, run verification cycles | `asset-management-manager` |
| Finance Staff | Run and post depreciation, approve disposals | `asset-management-finance` |

## 4. Main concepts

| Concept | Meaning |
|---|---|
| **Category** | Organisation-defined class of asset with defaults: depreciation method, useful life, residual value, rate, verification interval. |
| **Asset** | One registered thing: unique tag, name, category, serial, make, model, location text, department (`org_unit_id`), custodian, status, condition, acquisition (date, cost, currency, supplier, purchase reference), warranty, depreciation settings, last and next verification. |
| **Transfer** | One change of location, department or custodian, with reason and date. Append-only history. |
| **Verification cycle** | A physical audit over a set of assets (by category, department or location) with a due date. Has one line per asset. |
| **Verification line** | Result for one asset: `pending`, `found`, `missing`, `damaged`, `relocated`, with note and observed location. |
| **Depreciation run** | Depreciation for all assets for one period (month or year end). `draft` until posted; `posted` runs are locked. |
| **Disposal** | Request to retire an asset, with method, reason, approval and outcome. |

Every record carries `organisation_id`. People are identity user ids; departments are org unit ids
from `packages/contracts`. No foreign keys to other modules' tables.

## 5. Statuses

Asset status: `in_service`, `in_repair`, `idle`, `missing`, `disposal_pending`, `disposed`.
Asset condition: `new`, `good`, `fair`, `poor`, `damaged`.
Cycle status: `planned`, `in_progress`, `closed`.
Disposal status: `requested`, `approved`, `rejected`, `completed`, `cancelled`.

## 6. Business rules

1. **Tags are unique** within an organisation. If none is given, one is generated with
   `ASSET_MANAGEMENT_TAG_PREFIX` and a running number.
2. **Every transfer is recorded.** Location, department and custodian change only through a transfer,
   never by plain edit.
3. **Verification due.** Each asset's `next_verification_due` = last verification + its category's
   `verification_interval_months` (default from config). Assets due within
   `ASSET_MANAGEMENT_VERIFICATION_DUE_SOON_DAYS` show on the audit-due widget; overdue assets
   publish `asset-management.asset.verification-overdue` once.
4. **Verification cycles.** Starting a cycle snapshots the assets in scope as `pending` lines.
   Closing it needs every line decided, or `close_with_pending: true` (pending lines become
   `missing`). On close, `found` and `damaged` assets get a new verification date; `missing` assets
   move to status `missing`; `relocated` assets get a transfer.
5. **Depreciation.**
   - Methods: `straight_line` ((cost − residual) / useful life, monthly), `written_down_value`
     (rate % of opening book value), `none` (land, artworks).
   - Starts from `in_service_date`; pro-rated by month; never takes book value below residual.
   - A run covers one period; there is at most one posted run per period. A draft can be
     recalculated or deleted; a posted run cannot change. Corrections go into the next period.
6. **Disposal.** A custodian or manager requests; a finance user approves or rejects with a reason.
   The asset is `disposal_pending` meanwhile. Completing records the date, proceeds and recipient,
   takes depreciation up to that date, computes gain or loss against book value and sets the asset
   `disposed`. A disposed asset is read-only.
7. **Status from other modules** (repairs, missing units) is set by staff through the status
   endpoint in v1. Once the maintenance and inventory-equipment contracts are merged, this module
   may subscribe to their events instead.
8. **Tenant isolation.** Every table has `organisation_id` with a row-level-security policy on
   `app.organisation_id`; every event carries `organisation_id`.
9. **Audit.** Every state change (register, edit, transfer, status, verification result, cycle
   start and close, depreciation post, every disposal step) is written to audit through `packages/sdk`.

## 7. Dashboard widgets

| Widget id | Layouts | Shows | API |
|---|---|---|---|
| `asset-management.audit-due` | facility-staff | Assets overdue or due for physical verification soon, and open verification cycles with progress | `GET /verifications/due`, `GET /summary` |

## 8. Integration points

- **Platform services (through `packages/sdk`):** identity (users, org units, permissions), audit,
  notification (verification due, disposal requested and decided), scheduler (verification-overdue
  sweep), documents (invoices, photos, disposal certificates).
- **Events published:** `contracts/events.yaml`. Expected consumers: finance modules (depreciation
  posted, asset disposed), maintenance (asset registered, status), reporting.
- **Events consumed:** none in v1 (see rule 7).
- **References held:** purchase reference (procurement), AMC reference (amc-vendor-support), inventory
  unit id (inventory-equipment). Stored as `{ module, entity, id }`, never as foreign keys.

## 9. Configuration

`config/env.example`: `ASSET_MANAGEMENT_DEFAULT_CURRENCY`, `ASSET_MANAGEMENT_TAG_PREFIX`,
`ASSET_MANAGEMENT_DEFAULT_VERIFICATION_INTERVAL_MONTHS`, `ASSET_MANAGEMENT_VERIFICATION_DUE_SOON_DAYS`,
`ASSET_MANAGEMENT_FINANCIAL_YEAR_START_MONTH`.

## 10. Non-functional

- Money is stored as decimal with currency, never as float.
- A depreciation run for 10,000 assets completes in under a minute as a background job.
- Times are stored in UTC; dates of acquisition, service and disposal are plain dates.

## 11. Open questions (for review)

1. Which depreciation rules must be supported first: Indian Companies Act / income-tax WDV rates,
   or only straight-line? This draft supports both methods with rates set per category.
2. Should transfers between departments need the receiving custodian to accept? Not in this draft.
3. Should finance post depreciation here, or only read it and post in their own ledger? This draft
   posts here and publishes the totals.
