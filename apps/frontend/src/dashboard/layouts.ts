import { parse } from "yaml";
import type { RoleLayout } from "@eos/ui-kit";

/** Role layout files, read at build time from platform/identity. */
const files = import.meta.glob<string>("../../../../platform/identity/config/dashboards/*.yaml", {
  query: "?raw",
  import: "default",
  eager: true,
});

export type LayoutMap = Record<string, RoleLayout>;

/** Parse every layout file into a map keyed by role id. */
export function loadLayouts(): LayoutMap {
  const map: LayoutMap = {};
  for (const [path, raw] of Object.entries(files)) {
    const layout = parse(raw) as RoleLayout;
    const fileRole = path.split("/").pop()?.replace(/\.yaml$/, "");
    if (layout.role !== fileRole) {
      throw new Error(`Layout file ${path} declares role "${layout.role}"; file name says "${fileRole}"`);
    }
    map[layout.role] = layout;
  }
  return map;
}

/**
 * The ordered widget ids for a role, with the `extends` parent's widgets first.
 * One level only. Duplicates are removed, first occurrence wins.
 */
export function resolveWidgetIds(role: string, layouts: LayoutMap): string[] {
  const layout = layouts[role];
  if (!layout) return [];
  const ids: string[] = [];
  if (layout.extends) {
    const parent = layouts[layout.extends];
    if (!parent) throw new Error(`Layout "${role}" extends unknown role "${layout.extends}"`);
    if (parent.extends) throw new Error(`Layout "${role}" extends "${layout.extends}", which itself extends; only one level is allowed`);
    ids.push(...parent.widgets);
  }
  ids.push(...layout.widgets);
  return [...new Set(ids)];
}
