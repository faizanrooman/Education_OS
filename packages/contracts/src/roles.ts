/**
 * Roles are data, not code (ADR-0004, ADR-0005). Each academy profile in
 * platform/identity/config/profiles/<profile>.yaml lists its own roles, and every role id
 * has a dashboard layout in platform/identity/config/dashboards/<id>.yaml.
 *
 * Only the platform-level roles that exist regardless of academy are fixed here.
 */
export interface RoleRef {
  id: string;
  title: string;
}

/** Exists in every organisation (org-admin) or outside all of them (super-admin). */
export const PLATFORM_ROLES: readonly RoleRef[] = [
  { id: "org-admin", title: "Organisation Admin" },
  { id: "super-admin", title: "Super Admin (platform operator)" },
] as const;

/** The roles a user of one organisation can hold: the academy's roles plus org-admin. */
export function rolesForProfile(profileRoles: readonly RoleRef[]): RoleRef[] {
  const ids = new Set(profileRoles.map((r) => r.id));
  return [...profileRoles, ...PLATFORM_ROLES.filter((r) => !ids.has(r.id))];
}
