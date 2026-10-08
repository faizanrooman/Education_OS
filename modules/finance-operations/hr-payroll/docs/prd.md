# hr-payroll: product requirements

Owner: Gokula Lakshmi (@gokulalakshmirooman-source) · Status: draft for review · Issue #66
Suite E, Finance & operations · tier `common`

## Purpose

The institution's staff from joining to exit: employee master, leave, salary and monthly payroll,
payslips, appraisals and the service book. Contract: `contracts/openapi.yaml`, `events.yaml`, `permissions.yaml`.

## Users

| Role | Needs | Dashboard widget |
|---|---|---|
| HR staff | Maintain employees, approve leave, prepare payroll, record service events | `hr-payroll.leave-requests` (`GET /leave-requests?status=pending`), `hr-payroll.payroll-run-status` (`GET /payroll-runs/current`), `hr-payroll.joinings-and-exits` (`GET /reports/joinings-and-exits`) |
| Finance staff | Approve the payroll prepared by HR, mark it paid | — |
| Department admin / HoD | Approve leave and review appraisals for their department | — |
| Management | Approve leave and payroll, see HR reports | — |
| Every employee | See own record, leave balance and payslips; apply for leave; self review | — |

## Main flows

1. **Joining.** HR adds the employee with code, designation, department, type and bank details.
   `hr-payroll.employee.joined` lets identity create or link the user account.
2. **Leave.** Leave types with yearly days and carry-forward. The employee applies; the reporting manager,
   HoD or HR approves; the balance updates. Nobody approves their own request.
3. **Payroll.** Each employee has a salary made of earning and deduction lines from an effective date.
   HR starts the month's run; payslips are computed with loss of pay for unpaid leave; HR adjusts with
   reasons and submits; finance or management approves (never the preparer); payslips are published;
   finance marks the run paid.
4. **Appraisals.** HR opens a cycle; employees write a self review; the reviewer rates; completed.
5. **Service book.** Promotions, transfers, increments, awards and other orders, each with its document.
6. **Exit.** HR records the kind and last working day; on that day `hr-payroll.employee.exited` is published
   and identity disables the user.

## Rules

- Salary data is visible only to the employee and to holders of `hr-payroll:payroll:read`. It never appears in events.
- Bank account numbers and PAN are stored encrypted and returned masked.
- An approved payroll run is locked; corrections go into the next month as arrears or deductions.
- Every table carries `organisation_id` with row-level security; every event carries `organisation_id`.
- Every state change writes an audit record through `packages/sdk`.
- Money is exact decimal; no floating point.

## Integration points

| Direction | With | How |
|---|---|---|
| Publishes | identity | `employee.joined`, `employee.exited` (account creation and disabling) |
| Publishes | notification | leave and payroll events |
| Publishes | budget-grants and others | `payroll-run.paid` (salary expense), `leave-request.approved` |
| Platform | identity, audit, documents, notification, scheduler | through `packages/sdk` |

## Out of scope

- Recruitment.
- Statutory return filing (PF, ESI, TDS and professional tax returns). Deductions appear as salary lines only.
- Student attendance and timetables (timetable-attendance).

## Open questions (for review)

1. Statutory deductions: entered as fixed salary lines for now. Whether they need computed rules is to be decided with the institution.
2. Should identity create the user account from `employee.joined`, or does HR invite the user separately? Owner of identity to confirm.
3. `hr-payroll:self:use` must reach every staff role in every profile (coach, chef-instructor and so on).
   Is there a base employee role in identity to grant it to once? The roles listed now are the management institute's.
4. Staff attendance: no module records it today, so loss of pay comes from unpaid leave only.
