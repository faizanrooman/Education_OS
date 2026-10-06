import { useEffect, useMemo, useState } from "react";
import { isRoleId, type RoleId } from "@eos/contracts";
import { Dashboard } from "./dashboard/Dashboard";
import { RoleSwitcher } from "./dashboard/RoleSwitcher";
import { loadLayouts } from "./dashboard/layouts";
import { registry, registerEnabledModules } from "./modules";
import { computeEntitlement, loadPlans, loadProfiles, TenantBar } from "./tenant";

const layouts = loadLayouts();
const profiles = loadProfiles();
const plans = loadPlans();

/** Development stand-in for the signed-in organisation until platform/tenancy ships. */
const DEMO_ORGANISATION = { name: "Demo Sports College", academyType: "sports-college" };

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
 * Until platform/identity and platform/tenancy ship, the role comes from `?role=<id>`, the
 * plan from `?plan=<id>`, and every permission is granted. The entitlement rule itself is the
 * real one (profile ∩ plan), so what each plan unlocks can be previewed here.
 */
export function App() {
  const [role, setRole] = useState<RoleId>(() => fromUrl("role", "student", isRoleId) as RoleId);
  const [planId, setPlanId] = useState(() => fromUrl("plan", "trial", (v) => v in plans));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    registerEnabledModules().then(() => setReady(true));
  }, []);

  const profile = profiles[DEMO_ORGANISATION.academyType];
  const plan = plans[planId];
  const entitlement = useMemo(
    () => (profile && plan ? computeEntitlement(profile, plan) : undefined),
    [profile, plan],
  );

  const changeRole = (next: RoleId) => {
    setUrl("role", next);
    setRole(next);
  };
  const changePlan = (next: string) => {
    setUrl("plan", next);
    setPlanId(next);
  };

  return (
    <main className="eos-app">
      <header className="eos-app__bar">
        <strong>Education OS</strong>
        <RoleSwitcher value={role} onChange={changeRole} />
      </header>
      {entitlement && profile ? (
        <TenantBar
          organisation={DEMO_ORGANISATION.name}
          academyTitle={profile.title}
          entitlement={entitlement}
          plans={plans}
          onChangePlan={changePlan}
        />
      ) : null}
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
