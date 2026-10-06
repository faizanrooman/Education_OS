import { WidgetFrame, type WidgetRegistry } from "@eos/ui-kit";
import { resolveWidgetIds, type LayoutMap } from "./layouts";

export interface DashboardProps {
  role: string;
  layouts: LayoutMap;
  registry: WidgetRegistry;
  /** Permission keys the viewer holds, or "all" during development. */
  permissions: ReadonlySet<string> | "all";
}

/**
 * The dashboard shell. Reads the role's layout, looks each widget up in the
 * registry, hides the ones the viewer may not see, and renders the rest in a grid.
 * A widget id with no registered widget renders a placeholder so the gap is visible.
 */
export function Dashboard({ role, layouts, registry, permissions }: DashboardProps) {
  const layout = layouts[role];
  if (!layout) {
    return (
      <p role="alert" className="eos-dashboard__missing">
        No dashboard layout for role "{role}".
      </p>
    );
  }

  const ids = resolveWidgetIds(role, layouts);
  const allowed = (permission: string) => permissions === "all" || permissions.has(permission);

  const cards = ids.flatMap((id) => {
    const widget = registry.get(id);
    if (!widget) {
      return [
        <WidgetFrame key={id} title={id} size="1x1" state="empty" message="Not built yet" />,
      ];
    }
    if (!allowed(widget.permission)) return [];
    const Body = widget.component;
    return [
      <WidgetFrame key={id} title={widget.title} size={widget.size}>
        <Body role={role} />
      </WidgetFrame>,
    ];
  });

  return (
    <section className="eos-dashboard" aria-label={`${layout.title} dashboard`}>
      <h1 className="eos-dashboard__title">{layout.title}</h1>
      {cards.length === 0 ? (
        <p className="eos-dashboard__missing">Nothing to show for this role.</p>
      ) : (
        <div className="eos-dashboard__grid">{cards}</div>
      )}
    </section>
  );
}
