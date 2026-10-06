import { useEffect, useMemo, useState } from "react";
import { rolesForProfile } from "@eos/contracts";
import { apiReachable, getToken } from "./api/client";
import { Login } from "./auth/Login";
import { SignUp } from "./auth/SignUp";
import { loadSession, logout, upgrade, type Session } from "./auth/session";
import { Dashboard } from "./dashboard/Dashboard";
import { RoleSwitcher } from "./dashboard/RoleSwitcher";
import { loadLayouts } from "./dashboard/layouts";
import { registry, registerEnabledModules } from "./modules";
import { computeEntitlement, loadPlans, loadProfiles, TenantBar } from "./tenant";

const layouts = loadLayouts();
const profiles = loadProfiles();
const plans = loadPlans();

type Mode = "loading" | "preview" | "login" | "signup" | "app";

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
 * With the API reachable: real sign-up, sign-in, organisation and entitlement (ADR-0005).
 * Without it, or with `?preview=1`: preview mode, where academy, role and plan come from the URL and
 * the entitlement rule runs locally. The rule is the same in both cases.
 */
export function App() {
  const [mode, setMode] = useState<Mode>("loading");
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [loginSlug, setLoginSlug] = useState<string | undefined>();

  // preview-mode state
  const [academy, setAcademy] = useState(() => fromUrl("academy", "sports-college", (v) => v in profiles));
  const [planId, setPlanId] = useState(() => fromUrl("plan", "trial", (v) => v in plans));
  const [role, setRole] = useState(() => fromUrl("role", "student", () => true));

  useEffect(() => {
    registerEnabledModules().then(() => setReady(true));
    const preview = new URLSearchParams(window.location.search).get("preview") === "1";
    (async () => {
      if (preview || !(await apiReachable())) {
        setMode("preview");
        return;
      }
      if (!getToken()) {
        setMode(window.location.hash === "#signup" ? "signup" : "login");
        return;
      }
      try {
        setSession(await loadSession());
        setMode("app");
      } catch {
        logout();
        setMode("login");
      }
    })();
  }, []);

  const previewProfile = profiles[academy]!;
  const previewEntitlement = useMemo(() => computeEntitlement(previewProfile, plans[planId]!), [previewProfile, planId]);

  const profile = mode === "app" && session?.organisation ? profiles[session.organisation.academy_type] : previewProfile;
  const roles = useMemo(() => rolesForProfile(profile?.roles ?? []), [profile]);
  const entitlement = mode === "app" ? session?.entitlement ?? undefined : previewEntitlement;

  useEffect(() => {
    if (mode === "app" && session) {
      const own = session.me.is_super_admin ? "super-admin" : session.me.roles[0] ?? "student";
      setRole(own);
    } else if (!roles.some((r) => r.id === role)) {
      setRole("student");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, session, roles]);

  const changeRole = (next: string) => {
    setUrl("role", next);
    setRole(next);
  };
  const changePlan = async (next: string) => {
    if (mode === "app") {
      const r = await upgrade(next);
      if (r.activated) setSession(await loadSession());
      else if (r.payment_url) window.location.assign(r.payment_url);
      return;
    }
    setUrl("plan", next);
    setPlanId(next);
  };
  const changeAcademy = (next: string) => {
    setUrl("academy", next);
    setAcademy(next);
  };
  const signOut = () => {
    logout();
    setSession(null);
    setMode("login");
  };

  if (mode === "loading") return <main className="eos-app"><p style={{ padding: 16 }}>Loading…</p></main>;
  if (mode === "signup") return <main className="eos-app"><SignUp onDone={(slug) => { setLoginSlug(slug); setMode("login"); }} onLogin={() => setMode("login")} /></main>;
  if (mode === "login") return <main className="eos-app"><Login slug={loginSlug} onDone={async () => { setSession(await loadSession()); setMode("app"); }} onSignUp={() => setMode("signup")} /></main>;

  const canUpgrade = mode === "app"
    ? Boolean(session?.me.permissions.includes("billing:subscription:manage"))
    : role === "org-admin" || role === "management";
  const trialNote = session?.trialEndsAt ? `Trial ends ${new Date(session.trialEndsAt).toLocaleDateString()}` : null;

  return (
    <main className="eos-app">
      {mode === "preview" && (
        <div className="eos-banner">Preview mode: no API connected. Academy, role and plan come from the URL. Add the API to register real organisations.</div>
      )}
      <header className="eos-app__bar">
        <strong>Education OS</strong>
        {mode === "preview" ? (
          <RoleSwitcher roles={roles} value={role} onChange={changeRole} />
        ) : (
          <span className="eos-role-switcher">
            {session?.me.name} · {roles.find((r) => r.id === role)?.title ?? role}
            {session?.me.impersonated_by ? " · impersonated" : ""}
            <button className="eos-tenant__signout" onClick={signOut}>Sign out</button>
          </span>
        )}
      </header>
      {profile && entitlement && (
        <TenantBar
          organisation={mode === "app" ? session?.organisation?.name ?? "Platform" : `Demo ${profile.title.split(" / ")[0]}`}
          profile={profile}
          profiles={profiles}
          entitlement={entitlement}
          plans={plans}
          onChangePlan={changePlan}
          onChangeAcademy={changeAcademy}
          lockAcademy={mode === "app"}
          note={trialNote}
        />
      )}
      {ready ? (
        <Dashboard role={role} layouts={layouts} registry={registry} permissions="all" entitlement={entitlement} canUpgrade={canUpgrade} />
      ) : (
        <p>Loading modules…</p>
      )}
    </main>
  );
}
