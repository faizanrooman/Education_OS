import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WidgetFrame } from "../src/widget/WidgetFrame";

describe("WidgetFrame", () => {
  it("renders children when ready", () => {
    render(
      <WidgetFrame title="Fee dues" size="1x1">
        <span>₹ 1,200</span>
      </WidgetFrame>,
    );
    expect(screen.getByRole("heading", { name: "Fee dues" })).toBeTruthy();
    expect(screen.getByText("₹ 1,200")).toBeTruthy();
  });

  it("shows the loading, empty and error states instead of children", () => {
    const { rerender } = render(
      <WidgetFrame title="t" size="1x1" state="loading">
        <span>body</span>
      </WidgetFrame>,
    );
    expect(screen.getByText("Loading…")).toBeTruthy();
    expect(screen.queryByText("body")).toBeNull();

    rerender(<WidgetFrame title="t" size="1x1" state="empty" message="No dues" />);
    expect(screen.getByText("No dues")).toBeTruthy();

    rerender(<WidgetFrame title="t" size="1x1" state="error" />);
    expect(screen.getByRole("alert").textContent).toBe("Could not load");
  });

  it("spans the grid according to size", () => {
    const { container } = render(<WidgetFrame title="t" size="2x2" />);
    const el = container.querySelector("section") as HTMLElement;
    expect(el.style.gridColumn).toBe("span 2");
    expect(el.style.gridRow).toBe("span 2");
  });
});
