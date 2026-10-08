# transport: product requirements

Owner: Tejaswini (@tejaswini-rooman) · Status: draft for review · Issue #67
Suite F, Campus life · tier `common` (every academy type enables it)

## Purpose

Institution transport for students and staff: routes and stops, vehicles and their compliance dates,
drivers, transport passes, live vehicle position and service notices such as delays and cancellations.
Transport fees are not charged here; transport publishes pass events that fees-accounts may use to raise
invoices. The contract is `contracts/openapi.yaml`, `events.yaml` and `permissions.yaml`.

## Users and what they need

| Role | Needs | Dashboard widget |
|---|---|---|
| Student, staff (rider) | Find a route and stop, request a pass, see their pass, see where the vehicle is, read service notices | `transport.notices` (`GET /me/notices`) |
| Transport office (admin) | Set up routes, stops, vehicles and drivers; issue and cancel passes; publish notices; see expiring vehicle documents | — (later wave) |
| Driver | Start and end a trip, send position, report a delay | — (later wave) |
| Management, org admin | Routes, ridership and fleet overview, read only | — |

## Main flows

1. **Set up.** The office creates stops (name, optional coordinates), routes (code, name, ordered stops with
   scheduled times, direction) and vehicles (registration number, capacity, type, compliance dates such as
   insurance, fitness and permit expiry). Drivers are recorded with licence number and expiry; a driver may
   also be a staff `person_id`.
2. **Assign.** A route has one current vehicle and driver. Reassigning publishes `transport.route.reassigned`
   and notifies the route's pass holders.
3. **Request a pass.** A rider requests a pass for a route and boarding stop for a period. The office issues
   or rejects it. Issuing publishes `transport.pass.issued`, which carries what fees-accounts needs to raise a
   transport fee invoice. A route's issued passes never exceed its vehicle's capacity unless the office overrides with a reason.
4. **Cancel and expire.** The office or the rider cancels a pass. A daily job expires passes past their end
   date (`transport.pass.expired`).
5. **Trips and tracking.** The driver starts a trip on a route, sends positions while it runs, and ends it.
   Riders with a pass on the route see the latest position and the trip's delay. Positions older than the
   retention period are purged.
6. **Notices.** The office, or a driver for their own trip, publishes a notice to one route or to all routes:
   delay, cancellation, route change or general. A rider sees notices for the routes of their current
   passes plus notices to all routes.
7. **Compliance.** A daily job publishes `transport.document.expiry-flagged` once per document 30 days
   before expiry, and the office sees a list of vehicles and drivers with expiring documents.

## Rules

- Every table carries `organisation_id` with row-level security; every event carries `organisation_id`.
- Every state change writes an audit record through `packages/sdk`.
- A person sees only their own passes and notices (`/me/*`); staff access needs the permission in `permissions.yaml`.
- Live positions are visible only to pass holders of that route and to transport staff, and only while a trip runs.
- A vehicle whose insurance or fitness has expired cannot be assigned to a route.
- Nothing is deleted: passes are cancelled or expire, routes and vehicles are deactivated, notices expire.
- No real rider or driver data in tests or seeds.
- No dependency on another module being enabled: if fees-accounts is off, transport works without fee invoices.

## Data model (summary)

| Entity | Key fields |
|---|---|
| Stop | id, name, latitude, longitude |
| Route | id, code, name, direction, stops (stop_id, sequence, scheduled_time), vehicle_id, driver_id, active |
| Vehicle | id, registration_no, type, capacity, insurance_expires_on, fitness_expires_on, permit_expires_on, active |
| Driver | id, person_id (optional), name, licence_no, licence_expires_on, phone, active |
| Pass | id, person_id, route_id, stop_id, valid_from, valid_to, status (requested, issued, rejected, cancelled, expired) |
| Trip | id, route_id, vehicle_id, driver_id, started_at, ended_at, delay_minutes, status (running, completed) |
| Position | trip_id, recorded_at, latitude, longitude, speed |
| Notice | id, route_id (null = all routes), kind, title, body, published_at, expires_at |

## Integration points

| Direction | With | How |
|---|---|---|
| Publishes | fees-accounts and anyone | `transport.pass.issued`, `cancelled`, `expired` and the rest of `events.yaml` |
| Platform | identity, audit, notification, scheduler | through `packages/sdk` (notices, reassignments, the daily expiry jobs) |
| References | student-information, hr-payroll | `person_id` by id; names cached from their events |

## Out of scope

- Charging and collecting transport fees (fees-accounts).
- Fuel, spare parts and vehicle purchase (inventory-equipment, procurement); vehicle repairs (maintenance).
- Driver payroll and HR records (hr-payroll).
- A GPS device integration. Devices or the driver's phone post positions to the API; an adapter in
  `integrations/` can come later.

## Open questions (for review)

1. Does fees-accounts want to raise the transport invoice from `transport.pass.issued`, and is the payload
   (person, route, stop, period) enough? To agree with Gokula Lakshmi.
2. How long should positions be kept? Proposed: 30 days, then purged.
3. Should staff passes be free (no `pass.issued` invoice)? Proposed: the event carries `rider_type` and
   fees-accounts decides.
