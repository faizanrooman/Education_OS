# Role dashboard layouts

One file per role. The dashboard shell in `apps/web` reads the file for the signed-in user's
role and renders the listed widgets in order. Adding, removing or reordering a widget on a
dashboard is an edit here, not code.

```yaml
role: athlete            # must match a role id in packages/contracts/src/roles.ts
title: "Athlete"
extends: student         # optional: that role's widgets come first
widgets:
  - athlete-performance.training-schedule   # <module>.<widget>, exported by that module
```

Two layouts are platform-level rather than academy-level: `org-admin` (one per organisation,
created at registration) and `super-admin` (the operator, served by `apps/admin`).

Rules
- A widget id must be exported by exactly one module's `frontend/src/widgets/index.ts`.
  Until the module ships it, the shell renders a "not built yet" card with the id, so a
  dashboard owner can see what is missing.
- The shell hides any widget whose permission key the viewer does not hold. Two roles may
  share a layout and still see different cards.
- `extends` is one level deep. Do not chain.
- Owner of this folder: Architecture and platform lead. A dashboard owner edits their own
  role's file in the same PR as the widgets.
