# apps/

Deployable composition roots. Apps contain **no business logic**. They:
1. mount every module listed in `config/modules.enabled.yaml` (what is built in); at runtime the signed-in
   organisation's entitlement (academy profile ∩ plan, ADR-0005) decides which of them are on,
2. mount each enabled module's backend routes / frontend routes / mobile screens,
3. wire platform services via `packages/sdk`.

Removing a module from an app = removing one line from the enabled list.

| App | Purpose |
|---|---|
| [web](web/) | Responsive web client (also served as PWA). Composes module frontends. |
| [mobile](mobile/) | Android / iOS client. Composes module mobile screens. |
| [api](api/) | Backend composition host. Mounts every module; the entitlement decides per organisation what answers. |
| [admin](admin/) | Super admin console: organisations, plans, subscriptions, overrides, audit. |
