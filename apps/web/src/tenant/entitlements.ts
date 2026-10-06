import { parse } from "yaml";

/** Shape of platform/identity/config/profiles/<profile>.yaml (the parts the shell needs). */
export interface AcademyProfile {
  profile: string;
  title: string;
  suites: { common: string[]; specialized: string[] };
  modules: string[];
  integrations: string[];
  roles: { id: string; title: string }[];
}

/** Shape of one entry in platform/billing/config/plans.yaml. */
export interface Plan {
  id: string;
  title: string;
  description?: string;
  trial_days?: number;
  price_per_month: number;
  currency: string;
  suites: string[];
  modules: string[];
  specialized_suites: number | "all";
  integrations: string[];
  limits: { users: number; students: number; storage_gb: number };
}

/** What an organisation may use right now. Mirrors tenancy's Entitlement contract. */
export interface Entitlement {
  plan: string;
  academyType: string;
  /** <domain>/<module> paths that are on. */
  modules: Set<string>;
  /** Module names (last path segment) that are on; widget ids start with these. */
  moduleNames: Set<string>;
  /** In the profile but not in the plan: show an upgrade prompt. */
  upgradableModules: string[];
  limits: Plan["limits"];
}

const profileFiles = import.meta.glob<string>("../../../../platform/identity/config/profiles/*.yaml", {
  query: "?raw",
  import: "default",
  eager: true,
});
const plansFile = import.meta.glob<string>("../../../../platform/billing/config/plans.yaml", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function loadProfiles(): Record<string, AcademyProfile> {
  const out: Record<string, AcademyProfile> = {};
  for (const raw of Object.values(profileFiles)) {
    const p = parse(raw) as AcademyProfile;
    out[p.profile] = p;
  }
  return out;
}

export function loadPlans(): Record<string, Plan> {
  const raw = Object.values(plansFile)[0];
  if (!raw) return {};
  const parsed = parse(raw) as { plans: Plan[] };
  return Object.fromEntries(parsed.plans.map((p) => [p.id, p]));
}

const suiteOf = (modulePath: string) => modulePath.split("/")[0] ?? "";
const nameOf = (modulePath: string) => modulePath.split("/").pop() ?? modulePath;

/**
 * entitlement = profile.modules ∩ plan.modules (∪ overrides). Pure, so it is unit tested and
 * will match the server-side rule in platform/tenancy.
 */
export function computeEntitlement(profile: AcademyProfile, plan: Plan, overrides: string[] = []): Entitlement {
  const allSuites = plan.suites.includes("*");
  const specializedAllowed = new Set<string>(
    plan.specialized_suites === "all"
      ? profile.suites.specialized
      : profile.suites.specialized.slice(0, plan.specialized_suites),
  );
  const allowed = (m: string) => {
    const suite = suiteOf(m);
    if (plan.modules.includes(m)) return true;
    if (profile.suites.specialized.includes(suite)) return allSuites || specializedAllowed.has(suite);
    return allSuites || plan.suites.includes(suite);
  };
  const on = profile.modules.filter((m) => allowed(m) || overrides.includes(m));
  const off = profile.modules.filter((m) => !on.includes(m));
  return {
    plan: plan.id,
    academyType: profile.profile,
    modules: new Set(on),
    moduleNames: new Set(on.map(nameOf)),
    upgradableModules: off,
    limits: plan.limits,
  };
}

/** The module a widget belongs to: `<module>.<widget>` → `<module>`. */
export function moduleOfWidget(widgetId: string): string {
  return widgetId.split(".")[0] ?? widgetId;
}
