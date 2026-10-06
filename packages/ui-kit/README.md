# packages/ui-kit

Design system components, theme tokens, layout primitives, and the **dashboard widget contract**.

React + TypeScript package consumed by every module frontend and by `apps/web`.

## Widget contract

A module exports its dashboard widgets from `frontend/src/widgets/index.ts`:

```ts
import type { DashboardWidget } from "@eos/ui-kit";

export const widgets: DashboardWidget[] = [
  {
    id: "fees-accounts.outstanding-dues",
    title: "Outstanding dues",
    permission: "fees-accounts:invoice:read",
    size: "1x1",
    component: OutstandingDues,
  },
];
```

| Export | Purpose |
|---|---|
| `DashboardWidget` | The contract: `id`, `title`, `permission`, `size`, `component` |
| `WidgetProps` | Props the shell passes to every widget component |
| `RoleLayout` | Shape of `platform/identity/config/dashboards/<role>.yaml` |
| `WidgetRegistry` | Id → widget map the app fills at startup |
| `WidgetFrame` | The card a widget renders inside; owns loading, empty and error states |

Rules: a widget imports only from its own module and `packages/`. It fetches data through its
module's generated API client. Widget ids are `<module>.<widget>` and must be unique across the repo.

```
pnpm --filter @eos/ui-kit test
```
