import type { ComponentType } from "react";

/** Grid footprint of a widget. Columns x rows on a 4-column grid. */
export type WidgetSize = "1x1" | "2x1" | "2x2";

/**
 * The dashboard widget contract.
 *
 * A module exports an array of these from `frontend/src/widgets/index.ts`.
 * The dashboard shell in apps/frontend knows nothing else about the module.
 */
export interface DashboardWidget {
  /** Globally unique. Convention: `<module>.<widget>`, e.g. `fees-accounts.outstanding-dues`. */
  id: string;
  /** Shown in the widget header. */
  title: string;
  /** Permission key the viewer must hold, `<module>:<resource>:<action>`. The shell hides the widget otherwise. */
  permission: string;
  size: WidgetSize;
  /** Renders the widget body. Fetches its own data through the module's generated API client. */
  component: ComponentType<WidgetProps>;
}

/** Props the shell passes to every widget component. */
export interface WidgetProps {
  /** Role the dashboard is rendered for. */
  role: string;
}

/** Declared in a role layout file, platform/identity/config/dashboards/<role>.yaml. */
export interface RoleLayout {
  role: string;
  title: string;
  /** Another role id whose widgets come first. */
  extends?: string;
  widgets: string[];
}
