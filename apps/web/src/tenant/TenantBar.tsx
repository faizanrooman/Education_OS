import type { AcademyProfile, Entitlement, Plan } from "./entitlements";

export interface TenantBarProps {
  organisation: string;
  profile: AcademyProfile;
  profiles: Record<string, AcademyProfile>;
  entitlement: Entitlement;
  plans: Record<string, Plan>;
  onChangePlan: (plan: string) => void;
  onChangeAcademy: (profile: string) => void;
  /** In a signed-in session the academy is fixed at registration. */
  lockAcademy?: boolean;
  /** Extra text such as the trial end date. */
  note?: string | null;
}

/**
 * Shows which organisation, academy type and plan the dashboard is rendered for.
 * Until platform/tenancy ships, academy and plan are switchable here to preview each one.
 */
export function TenantBar({ organisation, profile, profiles, entitlement, plans, onChangePlan, onChangeAcademy, lockAcademy = false, note }: TenantBarProps) {
  const plan = plans[entitlement.plan];
  const locked = entitlement.upgradableModules.length;
  return (
    <div className="eos-tenant" aria-label="Organisation and plan">
      <span className="eos-tenant__org">{organisation}</span>
      {lockAcademy ? (
        <span className="eos-tenant__meta">{profile.title}</span>
      ) : (
        <label className="eos-tenant__plan">
          Academy
          <select value={profile.profile} onChange={(e) => onChangeAcademy(e.target.value)}>
            {Object.values(profiles).map((p) => (
              <option key={p.profile} value={p.profile}>
                {p.title}
              </option>
            ))}
          </select>
        </label>
      )}
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
      {plan?.trial_days ? <span className="eos-tenant__trial">{note ?? `Trial · ${plan.trial_days} days`}</span> : null}
      {locked > 0 ? (
        <span className="eos-tenant__upgrade">
          {locked} module{locked === 1 ? "" : "s"} locked · <a href="#upgrade">Upgrade</a>
        </span>
      ) : null}
    </div>
  );
}
