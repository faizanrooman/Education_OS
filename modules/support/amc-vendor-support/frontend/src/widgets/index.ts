import type { DashboardWidget } from "@eos/ui-kit";

/**
 * Dashboard widgets exported by amc-vendor-support.
 * Ids are "amc-vendor-support.<widget>". The role layouts in
 * platform/identity/config/dashboards/*.yaml refer to them by id.
 * A widget imports only from this module and packages/, and fetches data
 * through this module's generated API client in ../api.
 */
export const widgets: DashboardWidget[] = [];
