import { useEffect, useState } from "react";
import { isRoleId, type RoleId } from "@eos/contracts";
import { Dashboard } from "./dashboard/Dashboard";
import { RoleSwitcher } from "./dashboard/RoleSwitcher";
import { loadLayouts } from "./dashboard/layouts";
import { registry, registerEnabledModules } from "./modules";

const layouts = loadLayouts();

function roleFromUrl(): RoleId {
  const value = new URLSearchParams(window.location.search).get("role") ?? "student";
  return isRoleId(value) ? value : "student";
}

/**
 * Until platform/identity ships, the role comes from `?role=<id>` and every
 * permission is granted. Replace `permissions` with the identity SDK's set.
 */
export function App() {
  const [role, setRole] = useState<RoleId>(roleFromUrl);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    registerEnabledModules().then(() => setReady(true));
  }, []);

  const changeRole = (next: RoleId) => {
    const url = new URL(window.location.href);
    url.searchParams.set("role", next);
    window.history.replaceState(null, "", url);
    setRole(next);
  };

  return (
    <main className="eos-app">
      <header className="eos-app__bar">
        <strong>Education OS</strong>
        <RoleSwitcher value={role} onChange={changeRole} />
      </header>
      {ready ? (
        <Dashboard role={role} layouts={layouts} registry={registry} permissions="all" />
      ) : (
        <p>Loading modules…</p>
      )}
    </main>
  );
}
