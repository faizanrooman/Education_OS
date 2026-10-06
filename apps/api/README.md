# apps/api

Backend composition host. Mounts enabled module backends behind the gateway.

The enabled-module list comes from the institution profile
(`platform/identity/config/profiles/<profile>.yaml`); `config/modules.enabled.yaml` is the local
development override. The gateway refuses routes of modules the profile does not list (ADR-0004).
