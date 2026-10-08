# library: product requirements

Owner: Tejaswini (@tejaswini-rooman) · Status: draft for review · Issue #67
Suite F, Campus life · tier `common` (every academy type enables it)

## Purpose

The institution's library: the catalogue of titles and their physical copies, members and loan policies,
circulation (issue, return, renew, lost), reservations, fines, and a list of digital resources. The contract
is `contracts/openapi.yaml`, `events.yaml` and `permissions.yaml`.

## Users and what they need

| Role | Needs | Dashboard widget |
|---|---|---|
| Student, faculty, staff (member) | Search the catalogue, see their loans and due dates, renew, reserve, see fines, open digital resources | `library.loans` (`GET /me/loans`) |
| Librarian | Catalogue titles and copies, issue and return at the desk, manage reservations, waive or collect fines, manage members | — (later wave) |
| Library admin | Loan policies per member category, digital resources, reports | — (later wave) |
| Management, org admin | Holdings and circulation overview, read only | — |

## Main flows

1. **Catalogue.** A librarian creates a title (ISBN, title, authors, publisher, year, subjects, kind such as book,
   journal, thesis or media) and adds copies with an accession number, barcode and shelf location. A copy
   can be withdrawn; it is then not issued.
2. **Members and policies.** Every person who borrows is a member with a category (from the organisation,
   such as student, faculty or staff). A loan policy per category sets the maximum copies on loan, loan days,
   renewals allowed and the fine per overdue day. A librarian can block a member, with a reason.
3. **Issue.** At the desk, a librarian scans a copy and identifies the member. The loan is refused if the
   member is blocked, at their loan limit, has unpaid fines above the policy limit, or the copy is held for
   someone else. The due date comes from the policy.
4. **Return.** The librarian scans the copy. If it is late, a fine is raised for the overdue days. If the
   title has a waiting reservation, the copy goes on hold for the first in the queue and they are notified.
5. **Renew.** A member renews from the app, or a librarian renews at the desk, if renewals remain and no
   one is waiting for the title.
6. **Reserve.** A member reserves a title with no available copy. When a copy comes back, it is held for
   them for a set number of days; then the reservation expires and the next in the queue gets it.
7. **Overdue and lost.** A daily job publishes `library.loan.overdue` once per loan and notification sends
   reminders. A librarian marks a copy lost, which raises a replacement fine.
8. **Fines.** Fines are paid at the desk (recorded with a receipt reference) or waived by a librarian with a
   reason. `library.fine.raised` lets fees-accounts invoice fines instead, if the organisation wants that.
9. **Digital resources.** The library lists e-books, journals and databases with their access link and
   access type (open, on campus, licensed). The module stores links only, not content.

## Rules

- Every table carries `organisation_id` with row-level security; every event carries `organisation_id`.
- Every state change writes an audit record through `packages/sdk`.
- A person sees only their own loans, reservations and fines (`/me/*`); staff access needs the permission in `permissions.yaml`.
- Money is stored and exchanged as exact decimals (decimal strings in the API); no floating point.
- A copy has at most one active loan and at most one active hold.
- Nothing is deleted: copies are withdrawn, loans returned or lost, fines paid or waived, reservations cancelled or expired.
- No real member data in tests or seeds.
- No dependency on another module being enabled: fines can always be settled at the desk.

## Data model (summary)

| Entity | Key fields |
|---|---|
| Title | id, isbn, title, authors, publisher, year, subjects, kind |
| Copy | id, title_id, accession_no, barcode, location, status (available, on-loan, on-hold, lost, withdrawn) |
| LoanPolicy | member_category, max_loans, loan_days, max_renewals, fine_per_day, max_unpaid_fines, hold_days |
| Member | person_id, category, blocked, block_reason |
| Loan | id, copy_id, person_id, issued_at, due_on, returned_at, renewals, status (active, returned, lost) |
| Reservation | id, title_id, person_id, position, held_copy_id, hold_expires_on, status (waiting, ready, fulfilled, cancelled, expired) |
| Fine | id, person_id, loan_id, reason (overdue, lost, damage), amount, status (open, paid, waived), receipt_ref |
| DigitalResource | id, title, provider, kind, url, access (open, campus, licensed), active |

## Integration points

| Direction | With | How |
|---|---|---|
| Publishes | fees-accounts and anyone | `library.fine.raised`, `library.loan.overdue` and the rest of `events.yaml` |
| Platform | identity, audit, notification, scheduler, search | through `packages/sdk` (due and hold reminders, the daily overdue and hold-expiry jobs, the catalogue index) |
| References | student-information, hr-payroll | `person_id` by id; names and member category cached from their events |

## Out of scope

- Buying books and subscriptions (procurement) and paying vendors (fees-accounts, procurement).
- Hosting digital content; the module stores links and access type only.
- Inter-library loans and RFID gates (later, as integrations).
- Reading rooms and seat booking (facility-booking).

## Open questions (for review)

1. Should library fines be invoiced by fees-accounts from `library.fine.raised`, or settled only at the desk?
   Proposed: both are possible; the organisation chooses. To agree with Gokula Lakshmi.
2. Which event gives a person's member category (student, faculty, staff) when they join? Until agreed,
   librarians set the category when they add a member.
3. How many days is a returned copy held for a reservation? Proposed: `hold_days` in the loan policy, default 3.
