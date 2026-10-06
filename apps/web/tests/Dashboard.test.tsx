import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WidgetRegistry, type DashboardWidget } from "@eos/ui-kit";
import { Dashboard } from "../src/dashboard/Dashboard";
import { resolveWidgetIds, type LayoutMap } from "../src/dashboard/layouts";

const layouts: LayoutMap = {
  student: { role: "student", title: "Student", widgets: ["fees-accounts.fee-dues", "library.loans"] },
  athlete: { role: "athlete", title: "Athlete", extends: "student", widgets: ["athlete-performance.training-schedule", "library.loans"] },
};

const feeDues: DashboardWidget = {
  id: "fees-accounts.fee-dues",
  title: "Fee dues",
  permission: "fees-accounts:invoice:read",
  size: "1x1",
  component: () => <span>₹ 1,200 due</span>,
};

describe("resolveWidgetIds", () => {
  it("puts the parent's widgets first and drops duplicates", () => {
    expect(resolveWidgetIds("athlete", layouts)).toEqual([
      "fees-accounts.fee-dues",
      "library.loans",
      "athlete-performance.training-schedule",
    ]);
  });

  it("returns nothing for an unknown role", () => {
    expect(resolveWidgetIds("nobody", layouts)).toEqual([]);
  });
});

describe("Dashboard", () => {
  it("renders registered widgets and a placeholder for unbuilt ones", () => {
    const registry = new WidgetRegistry();
    registry.register([feeDues]);
    render(<Dashboard role="student" layouts={layouts} registry={registry} permissions="all" />);
    expect(screen.getByRole("heading", { level: 1, name: "Student" })).toBeTruthy();
    expect(screen.getByText("₹ 1,200 due")).toBeTruthy();
    expect(screen.getByRole("heading", { name: "library.loans" })).toBeTruthy();
    expect(screen.getByText("Not built yet")).toBeTruthy();
  });

  it("hides a widget the viewer has no permission for", () => {
    const registry = new WidgetRegistry();
    registry.register([feeDues]);
    render(<Dashboard role="student" layouts={layouts} registry={registry} permissions={new Set(["other:thing:read"])} />);
    expect(screen.queryByText("₹ 1,200 due")).toBeNull();
    expect(screen.getByRole("heading", { name: "library.loans" })).toBeTruthy();
  });

  it("reports a role with no layout", () => {
    render(<Dashboard role="ghost" layouts={layouts} registry={new WidgetRegistry()} permissions="all" />);
    expect(screen.getByRole("alert").textContent).toContain('No dashboard layout for role "ghost"');
  });
});
