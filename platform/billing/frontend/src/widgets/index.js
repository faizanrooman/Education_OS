"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.widgets = void 0;
/**
 * Dashboard widgets exported by billing.
 * Ids are "billing.<widget>". The role layouts in
 * platform/identity/config/dashboards/*.yaml refer to them by id.
 * A widget imports only from this module and packages/, and fetches data
 * through this module's generated API client in ../api.
 */
exports.widgets = [];
