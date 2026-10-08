# sla-management: product requirements

Owner: Madhumita (@madhumitha-rooman) · Status: draft for review · Week 1 task (issue linked in the PR)
Global support suite · tier `common` (every academy type enables it)

## Purpose

Service-level targets for helpdesk tickets: how fast support must first respond and how fast it must
resolve, counted in the organisation's business hours. sla-management owns business-hours calendars, SLA
policies, one response clock and one resolution clock per ticket, warnings before a target is missed,
breach records and escalation notices. It never changes a ticket: it learns everything from helpdesk's
events and publishes its own. The contract is `contracts/openapi.yaml`, `events.yaml` and `permissions.yaml`.

v1 covers helpdesk tickets only. Other modules keep their own targets (see Out of scope).

## Users and what they need

| Role (profile role → module role) | Needs | Dashboard widget |
|---|---|---|
| Support Staff (`support-staff` → `sla-management-agent`) | See which of their tickets have breached or are about to, and the due times on a ticket | `sla-management.breaches` (`GET /stats/breaches`) |
| Support lead (→ `sla-management-lead`) | The same across every ticket; waive a breach that was not support's fault; compliance figures | `sla-management.breaches` with `scope=all` |
| Org admin (`org-admin` → `sla-management-admin`) | Set up business-hours calendars and SLA policies with escalation levels | — |
| Management (`management` → `sla-management-viewer`) | Compliance by priority and category over a period, read only | — (later wave) |
| Requesters | Nothing directly in v1; helpdesk may show a due time later | — |

## Main flows

1. **Set up calendars.** The org admin creates business-hours calendars: a time zone, working intervals per
   weekday (more than one per day is allowed, for example 09:00–13:00 and 14:00–18:00) and dated holidays.
   A calendar can be marked `always_open` for round-the-clock cover. One calendar is the organisation default.
2. **Set up policies.** A policy applies to one helpdesk priority and either one category or every category
   (`category_id` null). It names a calendar, a response target and a resolution target in business minutes,
   a warning threshold (percent of the target elapsed), which hold reasons pause the clocks, and up to
   `SLA_MANAGEMENT_MAX_ESCALATION_LEVELS` escalation levels. At most one active policy per
   (priority, category) pair. Editing a policy affects tickets created afterwards; running clocks keep the
   targets they started with.
3. **Start clocks** (`helpdesk.ticket.created`). The most specific active policy is chosen: category and
   priority first, then priority with every category. If none matches, the ticket is not tracked and nothing
   is published. Otherwise a response clock and a resolution clock start at the ticket's `created_at`, with
   due times computed in the policy's calendar. Publishes `sla-management.clock.started` per clock.
4. **Stop the response clock** (`helpdesk.ticket.responded`) at `responded_at`. Publishes
   `sla-management.clock.stopped` with outcome `met` or `breached`.
5. **Pause and resume** (`helpdesk.ticket.status-changed`). Moving to `on_hold` with a hold reason the policy
   lists pauses every running clock of the ticket (`clock.paused`); moving off hold resumes them with a
   new due time (`clock.resumed`). Holds for other reasons do not pause.
6. **Recalculate** (`helpdesk.ticket.reclassified`). Running and paused clocks switch to the policy for the
   new category and priority, keep the business time already used, and get a new due time
   (`clock.recalculated`). A breach already recorded stays recorded. If no policy matches the new values, the
   clocks keep their current targets.
7. **Warn** (timer). When the warning threshold of a running clock passes, publishes `clock.warning-raised`
   and notifies the assignee through notification.
8. **Breach and escalate** (timer). When the due time of a running clock passes, the clock is marked breached
   (`clock.breached`) and keeps running so lateness is measured. Escalation level 1 fires at the breach,
   later levels after their configured business minutes past the due time. Each level notifies its
   recipients (the ticket's assignee if the level says so, plus named people) through notification and
   publishes `clock.escalated`.
9. **Resolve** (`helpdesk.ticket.resolved`). Stops the resolution clock (`clock.stopped`). If the response
   clock is still running, resolving counts as the response and stops it too.
10. **Reopen** (`helpdesk.ticket.reopened`). Resumes the resolution clock from where it stopped, with a new due
    time; a met clock can still breach after a reopen.
11. **Close or cancel.** `helpdesk.ticket.closed` makes the clocks final. `helpdesk.ticket.cancelled` cancels
    every clock that is still open (`clock.cancelled`); cancelled clocks never count in compliance.
12. **Waive.** A lead waives a recorded breach with a reason (for example a campus-wide outage). The clock keeps
    its breach for history but no longer counts against compliance (`clock.waived`).
13. **Track assignment** (`helpdesk.ticket.assigned`). The cached assignee and queue are updated so the widget's
    "mine" scope and escalation recipients are current.

### Clock states

```
running ──pause──► paused ──resume──► running
   │                                     │
   ├──stop──► stopped ──reopen (resolution only)──► running
   └──cancel (also from paused)──► cancelled

breached: a flag set once when due_at passes; the clock keeps running until stopped.
waived:   a flag a lead sets on a breached clock; it no longer counts against compliance.
```

## Rules

- Every table carries `organisation_id` with row-level security; every event carries `organisation_id`.
- Every state change, escalation and waiver writes an audit record through `packages/sdk`.
- Clocks use the times in helpdesk's payloads (`created_at`, `responded_at`, `changed_at`, `resolved_at`,
  `reopened_at`, `closed_at`, `cancelled_at`), or the event envelope's `occurred_at` when a payload has none,
  never the time an event happens to be processed. Each helpdesk event is applied once (idempotent by event id).
- Business time counts only inside the calendar's working intervals, in its time zone, skipping its holidays.
  An `always_open` calendar counts every minute.
- A clock's targets are copied from the policy when the clock starts or is recalculated.
- sla-management stores ticket ids, numbers, category, priority, queue and assignee only. It never holds ticket
  titles, descriptions or replies, and none appear in its events.
- Nothing is deleted: calendars and policies are deactivated; clocks are stopped or cancelled.
- No dependency on another module being enabled: if helpdesk is off, no clocks start and the module is idle.
- No real ticket data in tests or seeds.

## Data model (summary)

| Entity | Key fields |
|---|---|
| Calendar | id, name, time_zone, always_open, working_hours [weekday, start, end], holidays [date, name], is_default, active |
| Policy | id, name, priority, category_id (null = every category), calendar_id, response_target_minutes, resolution_target_minutes, warning_percent, pause_on_hold_reasons, escalation_levels [level, after_breach_minutes, notify_assignee, notify_person_ids], active |
| Clock | id, ticket_id, ticket_number, kind (response, resolution), policy_id, calendar_id, target_minutes, warning_percent, state (running, paused, stopped, cancelled), started_at, due_at, warn_at, paused_at, business_minutes_used, stopped_at, outcome (met, breached), breached_at, waived, waived_reason, waived_by |
| TicketRef | ticket_id, number, category_id, priority, queue_id, assignee_id, status (cached from helpdesk events) |
| Escalation | id, clock_id, level, sent_at, recipient_ids |
| ProcessedEvent | event_id, processed_at (idempotency) |

## Dashboard widget

| Widget id | Dashboard | Endpoint | Permission | Shows |
|---|---|---|---|---|
| `sla-management.breaches` | Support Staff | `GET /stats/breaches?scope=mine\|all` | `sla-management:clock:read` | Counts of breached and at-risk clocks still running, breaches today, and the most overdue clocks with ticket number, kind, priority and due time; each links to the ticket in helpdesk |

The widget itself is built in week 2 or later in `frontend/src/widgets/`; this PR only fixes the endpoint.

## Integration points

| Direction | With | How |
|---|---|---|
| Consumes | helpdesk | `helpdesk.ticket.created`, `assigned`, `responded`, `status-changed`, `reclassified`, `resolved`, `reopened`, `closed`, `cancelled` (helpdesk `contracts/events.yaml`) |
| Publishes | helpdesk, notification, reporting, anyone | `sla-management.clock.started`, `paused`, `resumed`, `recalculated`, `warning-raised`, `breached`, `escalated`, `stopped`, `cancelled`, `waived` (`events.yaml`) |
| Platform | identity, audit, notification, scheduler | through `packages/sdk`: permission checks; audit; warning and escalation notices; timers at `warn_at`, `due_at` and each escalation time (open question 1) |
| Serves | helpdesk frontend | `GET /tickets/{ticket_id}` gives a ticket's clocks, so helpdesk screens can show due times without caching them (helpdesk open question 2) |

## Configuration

`config/env.example`: `SLA_MANAGEMENT_DEFAULT_WARNING_PERCENT`, `SLA_MANAGEMENT_MAX_ESCALATION_LEVELS`,
`SLA_MANAGEMENT_BREACH_LIST_LIMIT`.

## Non-functional

- A warning or breach is detected within one minute of its time.
- Due times are computed for any target up to a year ahead, across holidays and time zones with daylight saving.
- The widget endpoint reads only open clocks, from an index on (organisation_id, state, breached, due_at).
- Times are stored in UTC, RFC 3339 with offset.

## Out of scope (v1)

- Tickets themselves, their status and assignment (`helpdesk`). sla-management never calls helpdesk to change a ticket.
- SLAs of other modules: maintenance work orders keep their own targets (`maintenance.ticket.sla-breached`);
  incident-management and amc-vendor-support response times stay in those modules.
- Deadlines on approval steps (`platform/workflow`).
- Escalation through workflow (reassigning, approvals). v1 escalation is notification only; reassigning stays a
  person's decision in helpdesk.
- Requester-facing SLA promises and penalties, and per-requester or per-group SLAs.
- Shared academic calendars as holiday sources; v1 calendars are maintained here.

## Open questions (for review)

1. **Timers (Himanshu, scheduler contract).** The scheduler contract is still empty. Proposed: sla-management asks
   the scheduler for a one-off job at each `warn_at`, `due_at` and escalation time, and cancels or reschedules it
   on pause, resume, recalculate and stop. Is that the scheduler's model, and how is the job delivered (an event
   to consume, or a callback through the gateway)? Until it is agreed, nothing scheduler-related is in `openapi.yaml`
   or `consumes_events`.
2. **Boundary with workflow (Himanshu, Faizan).** `platform/workflow` describes itself as handling "SLAs" for state
   machines and approvals. Proposed: workflow keeps deadlines on its own steps; sla-management covers support
   tickets only.
3. **Maintenance SLAs (Ashritha).** Maintenance computes its own SLA in its merged contract. Should it move to
   sla-management later, which would need policies keyed by module rather than by helpdesk category? v1: no.
4. **Who sees which clocks.** Clock data carries no ticket text, so this draft lets anyone with
   `sla-management:clock:read` see every clock. Should visibility follow helpdesk queue membership instead? That
   would need helpdesk to publish queue membership.
5. **Untracked tickets.** When no policy matches, the ticket has no clocks. Should every organisation be required
   to have a policy per priority for every category, so that this cannot happen?
6. **Role convention (Faizan).** Same question as helpdesk: module roles (`sla-management-agent`) mapped to profile
   roles, or roles named after profile roles (`support-staff`)?
