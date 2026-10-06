import { describe, expect, it } from "vitest";
import { computeEntitlement, loadPlans, loadProfiles, type AcademyProfile, type Plan } from "../src/tenant/entitlements";

const profile: AcademyProfile = {
  profile: "sports-college",
  title: "Sports College",
  suites: { common: ["academics", "finance-operations", "support"], specialized: ["sports"] },
  modules: ["academics/lms", "academics/examinations", "finance-operations/fees-accounts", "support/helpdesk", "sports/athlete-performance"],
  integrations: [],
  roles: [],
};

const plan = (over: Partial<Plan>): Plan => ({
  id: "x",
  title: "x",
  price_per_month: 0,
  currency: "INR",
  suites: [],
  modules: [],
  specialized_suites: 0,
  integrations: [],
  limits: { users: 1, students: 1, storage_gb: 1 },
  ...over,
});

describe("computeEntitlement", () => {
  it("is profile ∩ plan, with the rest listed as upgradable", () => {
    const e = computeEntitlement(profile, plan({ id: "trial", suites: ["academics", "support"], specialized_suites: 1 }));
    expect([...e.modules]).toEqual(["academics/lms", "academics/examinations", "support/helpdesk", "sports/athlete-performance"]);
    expect(e.upgradableModules).toEqual(["finance-operations/fees-accounts"]);
    expect(e.moduleNames.has("fees-accounts")).toBe(false);
    expect(e.moduleNames.has("lms")).toBe(true);
  });

  it("locks specialized suites when the plan allows none", () => {
    const e = computeEntitlement(profile, plan({ suites: ["academics"], specialized_suites: 0 }));
    expect(e.modules.has("sports/athlete-performance")).toBe(false);
    expect(e.upgradableModules).toContain("sports/athlete-performance");
  });

  it("'*' unlocks everything and a super-admin override unlocks one module", () => {
    expect(computeEntitlement(profile, plan({ suites: ["*"], specialized_suites: "all" })).upgradableModules).toEqual([]);
    const e = computeEntitlement(profile, plan({ suites: ["academics"] }), ["finance-operations/fees-accounts"]);
    expect(e.modules.has("finance-operations/fees-accounts")).toBe(true);
  });
});

describe("real profile and plan files", () => {
  const profiles = loadProfiles();
  const plans = loadPlans();

  it("ship a sports-college profile and trial, standard, premium plans", () => {
    expect(Object.keys(profiles)).toContain("sports-college");
    expect(Object.keys(plans).sort()).toEqual(["premium", "standard", "trial"]);
    expect(plans.trial!.trial_days).toBe(30);
  });

  it("premium unlocks the whole profile; trial locks finance and campus life", () => {
    const sc = profiles["sports-college"]!;
    expect(computeEntitlement(sc, plans.premium!).upgradableModules).toEqual([]);
    const trial = computeEntitlement(sc, plans.trial!);
    expect(trial.upgradableModules).toContain("finance-operations/fees-accounts");
    expect(trial.upgradableModules).toContain("campus-life/hostel");
    expect(trial.modules.has("sports/athlete-performance")).toBe(true);
  });
});
