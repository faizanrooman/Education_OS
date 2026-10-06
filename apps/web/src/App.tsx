import { useEffect, useMemo, useState } from "react";
import { rolesForProfile } from "@eos/contracts";
import { Dashboard } from "./dashboard/Dashboard";
import { RoleSwitcher } from "./dashboard/RoleSwitcher";
import { loadLayouts } from "./dashboard/layouts";
import { registry, registerEnabledModules } from "./modules";
import { computeEntitlement, loadPlans, loadProfiles, TenantBar } from "./tenant";

const layouts = loadLayouts();
const profiles = loadProfiles();
const plans = loadPlans();

function fromUrl(key: string, fallback: string, valid: (v: string) => boolean): string {
  const value = new URLSearchParams(window.location.search).get(key) ?? fallback;
  return valid(value) ? value : fallback;
}

function setUrl(key: string, value: string) {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.replaceState(null, "", url);
}

/**
 * Until platform/identity and platform/tenancy ship, the academy comes from `?academy=<profile>`,
 * the role from `?role=<id>`, the plan from `?plan=<id>`, and every permission is granted.
 * The entitlement rule itself is the real one (profile ∩ plan).
 */
export function App() {
  const [academy, setAcademy] = useState(() => fromUrl("academy", "sports-college", (v) => v in profiles));
  const [planId, setPlanId] = useState(() => fromUrl("plan", "trial", (v) => v in plans));
  const profile = profiles[academy]!;
  const roles = useMemo(() => rolesForProfile(profile.roles), [profile]);
  const [role, setRole] = useState(() => fromUrl("role", "student", (v) => roles.some((r) => r.id === v)));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    registerEnabledModules().then(() => setReady(true));
  }, []);

  const plan = plans[planId]!;
  const entitlement = useMemo(() => computeEntitlement(profile, plan), [profile, plan]);

  const changeRole = (next: string) => {
    setUrl("role", next);
    setRole(next);
  };
  const changePlan = (next: string) => {
    setUrl("plan", next);
    setPlanId(next);
  };
  const changeAcademy = (next: string) => {
    setUrl("academy", next);
    setAcademy(next);
    const nextRoles = rolesForProfile(profiles[next]!.roles);
    if (!nextRoles.some((r) => r.id === role)) changeRole("student");
  };

  return (
    <main className="eos-app">
      <header className="eos-app__bar">
        <strong>Education OS</strong>
        <RoleSwitcher roles={roles} value={role} onChange={changeRole} />
      </header>
      <TenantBar
        organisation={`Demo ${profile.title.split(" / ")[0]}`}
        profile={profile}
        profiles={profiles}
        entitlement={entitlement}
        plans={plans}
        onChangePlan={changePlan}
        onChangeAcademy={changeAcademy}
      />
      {ready ? (
        <Dashboard
          role={role}
          layouts={layouts}
          registry={registry}
          permissions="all"
          entitlement={entitlement}
          canUpgrade={role === "org-admin" || role === "management"}
        />
      ) : (
        <p>Loading modules…</p>
      )}
    </main>
  );
}
