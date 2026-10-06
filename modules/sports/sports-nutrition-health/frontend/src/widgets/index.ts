import type { DashboardWidget } from "@eos/ui-kit";

/**
 * Dashboard widgets exported by sports-nutrition-health.
 * Ids are "sports-nutrition-health.<widget>". The role layouts in
 * platform/identity/config/dashboards/*.yaml refer to them by id.
 * A widget imports only from this module and packages/, and fetches data
 * through this module's generated API client in ../api.
 */
export const widgets: DashboardWidget[] = [];
