# ADR-0004: Institution profiles and specialized suites

- **Status:** accepted
- **Date:** 2026-10-06
- **Deciders:** Education OS team

## Context
The first customer is a sports university, and the module list mirrors its architecture diagram.
The same foundation is wanted for other institution types: arts, design, music, dance, theatre,
film, medical, law, engineering, management, agriculture, hospitality, teacher education and
research universities (see [institution-types.md](../institution-types.md)). Each needs the same
identity, admissions, academics, examinations, finance, governance and support, plus a thin layer
that is specific to how it teaches and trains. Building a separate product per type, or a
separate suite per type, is beyond an 11-person team and would duplicate the same eight patterns
under different names.

## Decision
Education OS is positioned as **one configurable higher-education platform**, not an ERP for
sports colleges. Three things change:

1. **Modules carry a tier.** `module.yaml` gains `tier: core | common | specialized` and, for
   specialized modules, `field: <sports | music | ...>`. Core is `platform/`. Common is every
   module any institution would run. Specialized is the field-specific layer. Folders do not move.
2. **An institution is a profile.** `platform/identity/config/profiles/<profile>.yaml` lists the
   suites and modules enabled, the integrations, the roles, their dashboard layouts, and the
   field vocabulary. Installing Education OS for an institution means choosing a profile. Apps
   read their `modules.enabled` from the profile, and the API gateway refuses routes of modules
   the profile does not enable, so a disabled suite is blocked server-side, not only hidden.
3. **Specialized needs are met by generic common modules first.** The fifteen institution types
   reduce to eight recurring patterns: resource booking, portfolio, selection process,
   productions and events, projects, field training, specialized inventory, and skill progress.
   These are built once as common modules with vocabulary from the profile. A specialized module
   is created only for behaviour a generic pattern cannot express.

Roles and dashboards stay configuration. The role list in `packages/contracts` is the sports
profile's list today and moves into the profile as the identity service is built.

## Consequences
- A new institution type is a profile plus, at most, a few specialized modules. No fork.
- `facility-booking` and `inventory-equipment` are the first modules to generalise: they become
  the resource-booking and specialized-inventory patterns with field vocabulary.
- Sports stays the reference specialization and ships first. A second institution type is taken
  only when there is a second customer; its first deliverable is a profile file.
- The gateway needs a module-enabled check per route, and CI should fail a profile that
  references a module or role that does not exist.
- Each institution remains a separate deployment (modular monolith per institution, per
  ADR-0001). Multi-tenancy in one deployment is out of scope.

## Alternatives considered
- One suite per institution type — fifteen suites, mostly duplicates, never finished.
- Feature flags inside modules instead of profiles — flags scatter across code and cannot be
  reviewed as one document per institution.
- Multi-tenant SaaS from the start — a different product with data-isolation work the first
  customer does not need.
