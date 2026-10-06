# packages/

Shared, versioned libraries. The **only** code a module may import besides its own.

| Package | Contents |
|---|---|
| [contracts](contracts/) | Shared schemas and generated types: common entities (Person, Org Unit, Academic Year), error formats, pagination. |
| [ui-kit](ui-kit/) | Design system components, theme tokens, layout primitives. |
| [core](core/) | Framework-agnostic helpers: config loading, logging, validation, date/money utils. |
| [sdk](sdk/) | Client SDKs for platform services (identity, notification, documents, events, workflow). |
| [testing](testing/) | Test utilities, fixtures, factories, contract-test harness. |

Rule: a package never imports from `modules/`, `platform/`, `apps/` or `integrations/`.
