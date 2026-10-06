# apps/web

Responsive web client (also served as PWA). Composes module frontends. No business logic.

## Dashboard shell

`src/dashboard/` renders the role-based dashboard:

1. `layouts.ts` reads every `platform/identity/config/dashboards/<role>.yaml` at build time.
2. `modules.ts` registers the widgets of every module listed in `config/modules.enabled.yaml`.
3. `Dashboard.tsx` resolves the role's widget ids, hides those the viewer lacks permission
   for, and renders the rest in a 4-column grid (2 on tablet, 1 on phone). An id with no
   registered widget shows a "Not built yet" card so gaps are visible.

Until `platform/identity` ships, the role comes from `?role=<id>` (switcher in the top bar)
and every permission is granted. See `App.tsx`.

```
pnpm install                      # repo root, once
pnpm --filter @eos/web dev        # http://localhost:5173/?role=student
pnpm --filter @eos/web test
pnpm --filter @eos/web build
```
