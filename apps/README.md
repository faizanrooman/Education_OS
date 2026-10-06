# apps/

Deployable composition roots. Apps contain **no business logic**. They:
1. read the enabled-module list from the institution profile (`platform/identity/config/profiles/`),
   with `config/modules.enabled.yaml` as the local override during development,
2. mount each enabled module's backend routes / frontend routes / mobile screens,
3. wire platform services via `packages/sdk`.

Removing a module from an app = removing one line from the enabled list.

| App | Purpose |
|---|---|
| [web](web/) | Responsive web client (also served as PWA). Composes module frontends. |
| [mobile](mobile/) | Android / iOS client. Composes module mobile screens. |
| [api](api/) | Backend composition host. Mounts enabled module backends behind the gateway. |
