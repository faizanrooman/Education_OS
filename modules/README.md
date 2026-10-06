# modules/

Business feature modules, grouped by domain. **Each leaf folder is independent and portable.**
Domain folders are for navigation only and contain no shared code.

| Domain | Suite in diagram | Tier | Modules |
|---|---|---|---|
| [student-lifecycle/](student-lifecycle/) | A | common | web-portal-cms, admissions, student-information, enrolment-registration |
| [academics/](academics/) | B | common | academic-management, lms, examinations, timetable-attendance |
| [practice/](practice/) | — | common | portfolio, projects, selection-process, productions, field-training, skill-progress (the generic patterns every academy's field needs reduce to) |
| [sports/](sports/) | C | specialized (sports) | athlete-performance, training-video-analysis, sports-nutrition-health, tournament-events |
| [facilities/](facilities/) | D | common (sports-facilities is specialized) | sports-facilities, facility-booking, inventory-equipment, asset-management, maintenance |
| [finance-operations/](finance-operations/) | E | common | fees-accounts, budget-grants, procurement, hr-payroll, e-office |
| [campus-life/](campus-life/) | F | common | hostel, transport, library, placement-career, alumni |
| [governance/](governance/) | G | common | grievance, rti, iqac-accreditation, regulatory-reports |
| [support/](support/) | Global | common | helpdesk, sla-management, knowledge-base, incident-management, amc-vendor-support |
| [_template/](_template/) | — | — | Canonical template used by `tools/scaffold-module.sh` |

Tiers: `core` is `platform/`; `common` runs at every institution; `specialized` is one field's
layer and is enabled by the institution profile. Future fields (music, arts, film, medical, law,
engineering, management, research) get their own domain folder only for modules the generic
patterns cannot cover. See [ADR-0004](../docs/architecture/adr/0004-institution-profiles.md) and
[institution-types.md](../docs/architecture/institution-types.md).

Standard every module follows: [docs/architecture/module-standard.md](../docs/architecture/module-standard.md)
