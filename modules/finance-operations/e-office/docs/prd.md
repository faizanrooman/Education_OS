# e-office: product requirements

Owner: Gokula Lakshmi (@gokulalakshmirooman-source) · Status: draft for review · Issue #66
Suite E, Finance & operations · tier `common`

## Purpose

Paperless office files: a file with its note sheet and attachments moves from person to person until the competent
authority decides and the file is closed. Inward letters are registered and routed; approved letters are dispatched.
Contract: `contracts/openapi.yaml`, `events.yaml`, `permissions.yaml`.

## Users

| Role | Needs | Dashboard widget |
|---|---|---|
| Any staff member (HR staff first) | See files waiting with them, note, attach, forward | `e-office.files-pending` (`GET /me/inbox`) |
| Department admin / HoD, management | Decide proposals; see pendency | — |
| Central registry (HR staff by default) | Register inward correspondence, send outward dispatch | — |
| Org admin | Manage file categories | — |

## Main flows

1. **Open a file.** Subject, category (gives the number), department, priority, confidential or not, first noting.
2. **Work on it.** Only the current holder can add notings (numbered paragraphs, never edited), attach documents and forward.
   Forwarding names the person and the action expected, with an optional due date.
3. **Decide.** A holder with `e-office:file:decide` approves, rejects or returns; the decision becomes a noting.
4. **Close and reopen.** The holder closes when action is complete; a closed file can be reopened with a remark.
5. **Inward.** The registry registers a letter with its scan and sends it to a person, who attaches it to a file or opens a new one.
6. **Outward.** From an approved file, the holder requests dispatch of the approved letter; the registry sends it and records how.
7. **Overdue.** A file held past its due date (or the default days for its priority) is flagged once and the holder reminded.

## Rules

- The note sheet and movement history are append-only.
- A file is visible to everyone who has held it. `e-office:file:read-all` sees every non-confidential file;
  confidential files are visible only to their holders. Note text is never put in events.
- Every table carries `organisation_id` with row-level security; every event carries `organisation_id`.
- Every state change writes an audit record through `packages/sdk`.

## Integration points

| Direction | With | How |
|---|---|---|
| Publishes | notification | `file.forwarded`, `file.overdue`, `receipt.registered` |
| Publishes | others | `file.decided`, `file.closed`, `dispatch.sent` |
| Platform | identity (users), documents (attachments), audit, notification, scheduler | through `packages/sdk` |

## Out of scope

- Approval chains for other modules' records (leave, purchase orders); those modules approve their own records.
- Digital signatures. Decisions are recorded against the signed-in user; signing is a later integration.
- Sending email or post itself; dispatch is recorded after sending.

## Open questions (for review)

1. platform/workflow has no contract yet. When it does, should file movement use it, or stay in this module?
2. `e-office:file:use` must reach every staff role in every profile. Is there a base staff role in identity to grant it once?
3. Is the central registry a separate role, or HR staff as proposed?
