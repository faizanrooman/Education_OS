# Institution profiles

One file per institution type. A profile is the single document that says what an
installation of Education OS enables: suites, modules, integrations, roles, their dashboard
layouts and the field vocabulary. Format and rationale: [ADR-0004](../../../../docs/architecture/adr/0004-institution-profiles.md).

| Profile | Status |
|---|---|
| [sports-college.yaml](sports-college.yaml) | Reference profile, matches the first customer |

Rules
- Apps take their enabled-module list from the profile. The API gateway refuses routes of
  modules the profile does not list, so disabling a suite is enforced server-side.
- Every role id must have a layout in [../dashboards/](../dashboards/).
- Every module path must exist under `modules/`. CI will fail a profile that lists one that does not.
- A new institution type starts as a new profile here, before any specialized module is written.
  See [institution-types.md](../../../../docs/architecture/institution-types.md) for the planned ones.
