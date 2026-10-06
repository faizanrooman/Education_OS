import type { DashboardWidget } from "./types";

/**
 * Widget registry. The app composition root registers every enabled module's
 * widgets at startup; the shell looks widgets up by id when rendering a layout.
 */
export class WidgetRegistry {
  private readonly byId = new Map<string, DashboardWidget>();

  register(widgets: readonly DashboardWidget[]): void {
    for (const w of widgets) {
      if (this.byId.has(w.id)) {
        throw new Error(`Duplicate widget id "${w.id}"`);
      }
      this.byId.set(w.id, w);
    }
  }

  get(id: string): DashboardWidget | undefined {
    return this.byId.get(id);
  }

  has(id: string): boolean {
    return this.byId.has(id);
  }

  ids(): string[] {
    return [...this.byId.keys()];
  }

  clear(): void {
    this.byId.clear();
  }
}
