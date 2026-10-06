import { describe, expect, it } from "vitest";
import { isRoleId, ROLES } from "@eos/contracts";
import { loadLayouts, resolveWidgetIds } from "../src/dashboard/layouts";

/** Reads the real files in platform/identity/config/dashboards. */
describe("role layout files", () => {
  const layouts = loadLayouts();

  it("has one layout per role in packages/contracts", () => {
    expect(Object.keys(layouts).sort()).toEqual(ROLES.map((r) => r.id).sort());
  });

  it("only extends known roles and resolves without error", () => {
    for (const role of Object.keys(layouts)) {
      const layout = layouts[role]!;
      if (layout.extends) expect(isRoleId(layout.extends)).toBe(true);
      expect(resolveWidgetIds(role, layouts).length).toBeGreaterThan(0);
    }
  });

  it("uses <module>.<widget> ids with no duplicates inside a file", () => {
    for (const layout of Object.values(layouts)) {
      for (const id of layout.widgets) expect(id).toMatch(/^[a-z0-9-]+\.[a-z0-9-]+$/);
      expect(new Set(layout.widgets).size).toBe(layout.widgets.length);
    }
  });
});
