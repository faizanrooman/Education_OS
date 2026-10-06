import type { Entitlement, Plan } from "./entitlements";

export interface TenantBarProps {
  organisation: string;
  academyTitle: string;
  entitlement: Entitlement;
  plans: Record<string, Plan>;
  onChangePlan: (plan: string) => void;
}

/**
 * Shows which organisation, academy type and plan the dashboard is rendered for.
 * Until platform/tenancy ships, the plan is switchable here to preview what each plan unlocks.
 */
export function TenantBar({ organisation, academyTitle, entitlement, plans, onChangePlan }: TenantBarProps) {
  const plan = plans[entitlement.plan];
  const locked = entitlement.upgradableModules.length;
  return (
    <div className="eos-tenant" aria-label="Organisation and plan">
      <span className="eos-tenant__org">{organisation}</span>
      <span className="eos-tenant__meta">{academyTitle}</span>
      <label className="eos-tenant__plan">
        Plan
        <select value={entitlement.plan} onChange={(e) => onChangePlan(e.target.value)}>
          {Object.values(plans).map((p) => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
        </select>
      </label>
      {plan?.trial_days ? <span className="eos-tenant__trial">Trial · {plan.trial_days} days</span> : null}
      {locked > 0 ? (
        <span className="eos-tenant__upgrade">
          {locked} module{locked === 1 ? "" : "s"} locked · <a href="#upgrade">Upgrade</a>
        </span>
      ) : null}
    </div>
  );
}
