import { describe, expect, it } from "vitest";
import { WidgetRegistry } from "../src/widget/registry";
import type { DashboardWidget } from "../src/widget/types";

const widget = (id: string): DashboardWidget => ({
  id,
  title: id,
  permission: "x:y:read",
  size: "1x1",
  component: () => null,
});

describe("WidgetRegistry", () => {
  it("registers and looks up by id", () => {
    const r = new WidgetRegistry();
    r.register([widget("a.one"), widget("a.two")]);
    expect(r.has("a.one")).toBe(true);
    expect(r.get("a.two")?.title).toBe("a.two");
    expect(r.ids()).toEqual(["a.one", "a.two"]);
  });

  it("rejects duplicate ids", () => {
    const r = new WidgetRegistry();
    r.register([widget("a.one")]);
    expect(() => r.register([widget("a.one")])).toThrow(/Duplicate widget id/);
  });
});
