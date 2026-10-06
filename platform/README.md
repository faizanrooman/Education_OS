# platform/

Shared platform services used by every feature module. Each service is itself a
portable module (same layout, same manifest) but sits one layer below `modules/`.

Rules:
- Feature modules call platform services only through `packages/sdk`.
- A platform service never depends on a feature module.
- A platform service may depend on another platform service only if declared in `module.yaml`.

| Service | Responsibility |
|---|---|
| [identity](identity/) | SSO (SAML / OAuth2 / OIDC), RBAC with fine-grained permissions, MFA, session management. |
| [api-gateway](api-gateway/) | Edge routing, auth enforcement, rate limiting, request logging and monitoring. |
| [event-bus](event-bus/) | Domain event contracts and broker abstraction. The only async channel between modules. |
| [notification](notification/) | Email, SMS, WhatsApp, push and in-app notifications with templates. |
| [documents](documents/) | Document and media management: storage abstraction, versioning, access control. |
| [search](search/) | Global search indexing and query (Elasticsearch-class engine). |
| [workflow](workflow/) | Configurable workflow and approval engine (state machines, SLAs, delegation). |
| [audit](audit/) | Immutable, append-only audit log for every state-changing action. |
| [reporting](reporting/) | Dashboards, MIS reports, analytics and warehouse ETL. |
| [scheduler](scheduler/) | Jobs, cron, reminders and alert dispatch. |
| [integration-hub](integration-hub/) | Adapter registry, data exchange (XML / JSON / CSV), webhooks, retries. |
