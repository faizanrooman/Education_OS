import type { ReactNode } from "react";
import type { WidgetSize } from "./types";

export type WidgetState = "ready" | "loading" | "empty" | "error";

export interface WidgetFrameProps {
  title: string;
  size: WidgetSize;
  state?: WidgetState;
  /** Message for the empty or error state. */
  message?: string;
  children?: ReactNode;
}

const SPAN: Record<WidgetSize, { col: number; row: number }> = {
  "1x1": { col: 1, row: 1 },
  "2x1": { col: 2, row: 1 },
  "2x2": { col: 2, row: 2 },
};

/**
 * The card every widget renders inside. Owns the header and the loading,
 * empty and error states so individual widgets do not repeat them.
 */
export function WidgetFrame({ title, size, state = "ready", message, children }: WidgetFrameProps) {
  const span = SPAN[size];
  return (
    <section
      className="eos-widget"
      data-state={state}
      style={{ gridColumn: `span ${span.col}`, gridRow: `span ${span.row}` }}
      aria-busy={state === "loading"}
    >
      <header className="eos-widget__header">
        <h2 className="eos-widget__title">{title}</h2>
      </header>
      <div className="eos-widget__body">
        {state === "loading" && <p className="eos-widget__status">Loading…</p>}
        {state === "empty" && <p className="eos-widget__status">{message ?? "Nothing to show"}</p>}
        {state === "error" && (
          <p className="eos-widget__status eos-widget__status--error" role="alert">
            {message ?? "Could not load"}
          </p>
        )}
        {state === "ready" && children}
      </div>
    </section>
  );
}
