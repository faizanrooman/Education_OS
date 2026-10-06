# modules/

Business feature modules, grouped by domain. **Each leaf folder is independent and portable.**
Domain folders are for navigation only and contain no shared code.

| Domain | Suite in diagram | Modules |
|---|---|---|
| [student-lifecycle/](student-lifecycle/) | A | web-portal-cms, admissions, student-information, enrolment-registration |
| [academics/](academics/) | B | academic-management, lms, examinations, timetable-attendance |
| [sports/](sports/) | C | athlete-performance, training-video-analysis, sports-nutrition-health, tournament-events |
| [facilities/](facilities/) | D | sports-facilities, facility-booking, inventory-equipment, asset-management, maintenance |
| [finance-operations/](finance-operations/) | E | fees-accounts, budget-grants, procurement, hr-payroll, e-office |
| [campus-life/](campus-life/) | F | hostel, transport, library, placement-career, alumni |
| [governance/](governance/) | G | grievance, rti, iqac-accreditation, regulatory-reports |
| [support/](support/) | Global | helpdesk, sla-management, knowledge-base, incident-management, amc-vendor-support |
| [_template/](_template/) | — | Canonical template used by `tools/scaffold-module.sh` |

Standard every module follows: [docs/architecture/module-standard.md](../docs/architecture/module-standard.md)
