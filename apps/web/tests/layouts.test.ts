import { describe, expect, it } from "vitest";
import { PLATFORM_ROLES } from "@eos/contracts";
import { loadLayouts, resolveWidgetIds } from "../src/dashboard/layouts";
import { loadProfiles } from "../src/tenant/entitlements";

/** Reads the real files in platform/identity/config. */
describe("academy profiles and role layouts", () => {
  const layouts = loadLayouts();
  const profiles = loadProfiles();
  const allRoleIds = new Set([...Object.values(profiles).flatMap((p) => p.roles.map((r) => r.id)), ...PLATFORM_ROLES.map((r) => r.id)]);

  it("ships one profile per planned academy type", () => {
    expect(Object.keys(profiles).length).toBe(15);
    expect(profiles["music-academy"]!.roles.map((r) => r.id)).toContain("musician");
    expect(profiles["arts-academy"]!.roles.map((r) => r.id)).toContain("artist");
  });

  it("has a layout for every role of every profile, and every layout belongs to a role", () => {
    for (const p of Object.values(profiles)) {
      for (const r of p.roles) expect(layouts[r.id], `${p.profile} role ${r.id}`).toBeDefined();
    }
    for (const id of Object.keys(layouts)) expect(allRoleIds.has(id), `layout ${id} has no role`).toBe(true);
  });

  it("gives every academy its own learner and instructor roles that extend student and faculty", () => {
    for (const p of Object.values(profiles)) {
      const learner = p.roles.find((r) => layouts[r.id]?.extends === "student");
      const instructor = p.roles.find((r) => layouts[r.id]?.extends === "faculty");
      expect(learner, `${p.profile} learner role`).toBeDefined();
      expect(instructor, `${p.profile} instructor role`).toBeDefined();
    }
  });

  it("only extends known roles and resolves without error", () => {
    for (const role of Object.keys(layouts)) {
      const layout = layouts[role]!;
      if (layout.extends) expect(allRoleIds.has(layout.extends), `${role} extends ${layout.extends}`).toBe(true);
      expect(resolveWidgetIds(role, layouts).length).toBeGreaterThan(0);
    }
  });

  it("uses <module>.<widget> ids of modules the profile enables, with no duplicates", () => {
    for (const p of Object.values(profiles)) {
      const enabled = new Set(p.modules.map((m) => m.split("/").pop()));
      const platform = new Set(["identity", "billing", "tenancy", "audit", "workflow", "reporting", ...p.integrations]);
      for (const r of p.roles) {
        const ids = layouts[r.id]!.widgets;
        expect(new Set(ids).size).toBe(ids.length);
        for (const id of ids) {
          expect(id).toMatch(/^[a-z0-9-]+\.[a-z0-9-]+$/);
          const mod = id.split(".")[0]!;
          expect(enabled.has(mod) || platform.has(mod), `${p.profile}/${r.id}: ${id} is not in the profile`).toBe(true);
        }
      }
    }
  });
});
