import { api, setToken } from "../api/client";
import type { Entitlement } from "../tenant/entitlements";

export interface Me {
  id: string;
  organisation_id: string | null;
  email: string;
  name: string;
  roles: string[];
  is_super_admin: boolean;
  permissions: string[];
  impersonated_by: string | null;
}

export interface Organisation {
  id: string;
  name: string;
  slug: string;
  academy_type: string;
  status: string;
}

export interface ServerEntitlement {
  organisation_id: string;
  academy_type: string;
  plan: string;
  modules: string[];
  module_names: string[];
  integrations: string[];
  limits: { users: number; students: number; storage_gb: number };
  upgradable_modules: string[];
  status: string;
  subscription_status: string | null;
  trial_ends_at: string | null;
}

export interface Session {
  me: Me;
  organisation: Organisation | null;
  entitlement: Entitlement | null;
  trialEndsAt: string | null;
  subscriptionStatus: string | null;
}

export function toEntitlement(e: ServerEntitlement): Entitlement {
  return {
    plan: e.plan,
    academyType: e.academy_type,
    modules: new Set(e.modules),
    moduleNames: new Set(e.module_names),
    upgradableModules: e.upgradable_modules,
    limits: e.limits,
  };
}

export async function loadSession(): Promise<Session> {
  const me = await api<Me>("/identity/auth/me");
  if (!me.organisation_id) {
    return { me, organisation: null, entitlement: null, trialEndsAt: null, subscriptionStatus: null };
  }
  const [organisation, ent] = await Promise.all([
    api<Organisation>("/tenancy/organisation"),
    api<ServerEntitlement>("/tenancy/organisation/entitlement"),
  ]);
  return { me, organisation, entitlement: toEntitlement(ent), trialEndsAt: ent.trial_ends_at, subscriptionStatus: ent.subscription_status };
}

export async function login(email: string, password: string, organisationSlug?: string): Promise<void> {
  const r = await api<{ token: string }>("/identity/auth/login", {
    method: "POST",
    json: { email, password, organisation_slug: organisationSlug || undefined },
  });
  setToken(r.token);
}

export function logout(): void {
  setToken(null);
}

export async function upgrade(plan: string): Promise<{ activated: boolean; payment_url: string | null }> {
  return api("/billing/subscription/upgrade", { method: "POST", json: { plan } });
}
