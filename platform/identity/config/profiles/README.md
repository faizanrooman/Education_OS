# Institution profiles

One file per institution type. A profile is the single document that says what an
installation of Education OS enables: suites, modules, integrations, roles, their dashboard
layouts and the field vocabulary. Format and rationale: [ADR-0004](../../../../docs/architecture/adr/0004-institution-profiles.md).

| Profile | Field roles |
|---|---|
| [sports-college.yaml](sports-college.yaml) | athlete, coach, medical-staff, nutritionist (reference profile, first customer) |
| [arts-academy.yaml](arts-academy.yaml) | artist, studio-instructor, exhibition-manager |
| [design-fashion-institute.yaml](design-fashion-institute.yaml) | designer, design-mentor, industry-liaison |
| [music-academy.yaml](music-academy.yaml) | musician, music-teacher, ensemble-director |
| [dance-academy.yaml](dance-academy.yaml) | dancer, choreographer, production-manager |
| [theatre-academy.yaml](theatre-academy.yaml) | actor, director, stage-manager |
| [film-media-institute.yaml](film-media-institute.yaml) | filmmaker, production-supervisor, equipment-manager |
| [medical-college.yaml](medical-college.yaml) | medical-student, clinical-supervisor, hospital-coordinator |
| [law-college.yaml](law-college.yaml) | law-student, legal-mentor, moot-court-coordinator |
| [engineering-college.yaml](engineering-college.yaml) | engineering-student, project-guide, lab-in-charge |
| [management-institute.yaml](management-institute.yaml) | management-student, corporate-mentor, placement-officer |
| [agriculture-college.yaml](agriculture-college.yaml) | field-trainee, farm-supervisor, research-lead |
| [hospitality-institute.yaml](hospitality-institute.yaml) | hospitality-trainee, chef-instructor, industry-coordinator |
| [teacher-education-college.yaml](teacher-education-college.yaml) | teacher-trainee, mentor-teacher, practicum-coordinator |
| [research-university.yaml](research-university.yaml) | research-scholar, research-supervisor, research-office |

Since ADR-0005 a profile is also an **academy type** offered at registration. The organisation's
entitlement is this profile filtered by its plan (`platform/billing/config/plans.yaml`).

Rules
- Apps take their enabled-module list from the profile. The API gateway refuses routes of
  modules the profile does not list, so disabling a suite is enforced server-side.
- Every role id must have a layout in [../dashboards/](../dashboards/).
- Every module path must exist under `modules/`. CI will fail a profile that lists one that does not.
- A new institution type starts as a new profile here, before any specialized module is written.
  See [institution-types.md](../../../../docs/architecture/institution-types.md) for the planned ones.
