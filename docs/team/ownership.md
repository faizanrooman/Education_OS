# Module ownership

Ten people. Every module has exactly one owner and at least one backup. Owners approve
PRs to their module and maintain its contracts and docs. Fill in handles, then mirror in `.github/CODEOWNERS`.

## Suggested split (edit freely)

Widget counts come from the 59 role layouts in `platform/identity/config/dashboards/` (110 widgets in
all). The six generic `practice` modules are spread across four members. Full split, build order and
per-widget checklist: the "Dashboard Assignment Plan" doc.

| # | Area | Owner | Backup | Modules | Widgets |
|---|---|---|---|---|---|
| 1 | Architecture & platform lead | Faizan (@faizanrooman) | | `platform/identity`, `api-gateway`, `tenancy`, `billing`, `packages/*` | 10 |
| 2 | Platform services & integrations | Himanshu (@himanshu-rooman) | | `platform/event-bus`, `notification`, `documents`, `workflow`, `audit`, `search`, `scheduler`, `reporting`, `integration-hub`, `modules/practice/productions`, `integrations/*` except payment | 10 |
| 3 | Student lifecycle | Praveen (@praveen-rooman) | | `modules/student-lifecycle/*`, `modules/practice/portfolio`, `modules/practice/selection-process` | 11 |
| 4 | Academics | Shivani (@shivanisinghrooman-09) | | `modules/academics/*` | 15 |
| 5 | Sports | Akshata (@akshatatrathodrooman) | | `modules/sports/*`, `modules/facilities/sports-facilities`, `modules/practice/skill-progress` | 17 |
| 6 | Facilities | Ashritha (@Ashritharooman) | | `modules/facilities/*` except sports-facilities | 8 |
| 7 | Finance & operations | Gokula Lakshmi (@gokulalakshmirooman-source) | | `modules/finance-operations/*`, `integrations/payment-sbiepay` | 13 |
| 8 | Campus life | Tejaswini (@tejaswini-rooman) | | `modules/campus-life/*`, `modules/practice/field-training`, `modules/practice/projects` | 15 |
| 9 | Governance & support | Madhumita (@madhumitha-rooman) | | `modules/governance/*`, `modules/support/*` | 11 |
| 10 | Apps, infra & QA | Srujan (@srujanrooman) | | `apps/*` (web incl. admin screens, api, mobile), `infra/*`, `packages/testing`, CI | 0 |

Institution profiles (`platform/identity/config/profiles/`) and dashboard layouts belong to the Architecture & platform lead.
A specialized suite for a new field gets its own owner row when the field has a customer.

## Dashboard owners (one person, one dashboard, end to end)

One application for every academy. A dashboard owner builds everything their dashboard needs,
across every module it touches, and takes the next only when theirs is Done. Module owners (table
above) review every PR into their modules. All academies are built together: wave A = the 13
common dashboards, then every academy's learner (B), instructor (C) and field staff (D) dashboards.
Each person keeps one academy through B to D. The names-to-areas mapping follows the order the
names were given and can be swapped before kickoff; GitHub handles still need filling in. Live tracker: the "Dashboard Assignment Plan" doc.

| Name (area) | Wave A (common) | Academy for waves B to D |
|---|---|---|
| Faizan (Architecture & platform lead) | Organisation Admin | Research university |
| Himanshu (Platform services & integrations) | Department Admin / HoD | Theatre academy |
| Praveen (Student lifecycle) | Applicant | Arts academy |
| Shivani (Academics) | Faculty / Instructor | Teacher education |
| Akshata (Sports) | Examination Staff | Sports college |
| Ashritha (Facilities) | Facility / Inventory Staff | Music academy |
| Gokula Lakshmi (Finance & operations) | Finance Staff | Management institute |
| Tejaswini (Campus life) | Student | Medical college |
| Madhumita (Governance & support) | Support Staff | Law college |
| Srujan (Apps, infra & QA) | Super Admin | Engineering college |
| pool (first to finish) | Governance, Management, HR Staff | Film / media, Dance, Design / fashion, Agriculture, Hospitality |

Per-person week 1 tasks: [kickoff-tasks.md](kickoff-tasks.md).

## Full module list

| Module | Owner | Backup | Status |
|---|---|---|---|
| `integrations/digilocker` | | | planned |
| `integrations/external-university-portals` | | | planned |
| `integrations/government-portals` | | | planned |
| `integrations/messaging-providers` | | | planned |
| `integrations/nad` | | | planned |
| `integrations/payment-sbiepay` | | | planned |
| `integrations/video-conferencing` | | | planned |
| `integrations/wearables` | | | planned |
| `modules/academics/academic-management` | | | planned |
| `modules/academics/examinations` | | | planned |
| `modules/academics/lms` | | | planned |
| `modules/academics/timetable-attendance` | | | planned |
| `modules/campus-life/alumni` | | | planned |
| `modules/campus-life/hostel` | | | planned |
| `modules/campus-life/library` | | | planned |
| `modules/campus-life/placement-career` | | | planned |
| `modules/campus-life/transport` | | | planned |
| `modules/facilities/asset-management` | | | planned |
| `modules/facilities/facility-booking` | | | planned |
| `modules/facilities/inventory-equipment` | | | planned |
| `modules/facilities/maintenance` | | | planned |
| `modules/facilities/sports-facilities` | | | planned |
| `modules/finance-operations/budget-grants` | | | planned |
| `modules/finance-operations/e-office` | | | planned |
| `modules/finance-operations/fees-accounts` | | | planned |
| `modules/finance-operations/hr-payroll` | | | planned |
| `modules/finance-operations/procurement` | | | planned |
| `modules/governance/grievance` | | | planned |
| `modules/practice/portfolio` | | | planned |
| `modules/practice/projects` | | | planned |
| `modules/practice/selection-process` | | | planned |
| `modules/practice/productions` | | | planned |
| `modules/practice/field-training` | | | planned |
| `modules/practice/skill-progress` | | | planned |
| `modules/governance/iqac-accreditation` | | | planned |
| `modules/governance/regulatory-reports` | | | planned |
| `modules/governance/rti` | | | planned |
| `modules/sports/athlete-performance` | | | planned |
| `modules/sports/sports-nutrition-health` | | | planned |
| `modules/sports/tournament-events` | | | planned |
| `modules/sports/training-video-analysis` | | | planned |
| `modules/student-lifecycle/admissions` | | | planned |
| `modules/student-lifecycle/enrolment-registration` | | | planned |
| `modules/student-lifecycle/student-information` | | | planned |
| `modules/student-lifecycle/web-portal-cms` | | | planned |
| `modules/support/amc-vendor-support` | | | planned |
| `modules/support/helpdesk` | | | planned |
| `modules/support/incident-management` | | | planned |
| `modules/support/knowledge-base` | | | planned |
| `modules/support/sla-management` | | | planned |
| `platform/api-gateway` | | | planned |
| `platform/tenancy` | | | planned |
| `platform/billing` | | | planned |
| `platform/audit` | | | planned |
| `platform/documents` | | | planned |
| `platform/event-bus` | | | planned |
| `platform/identity` | | | planned |
| `platform/integration-hub` | | | planned |
| `platform/notification` | | | planned |
| `platform/reporting` | | | planned |
| `platform/scheduler` | | | planned |
| `platform/search` | | | planned |
| `platform/workflow` | | | planned |
