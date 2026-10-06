from eos_core.entitlement import compute_entitlement, module_entitled

PROFILE = {
    "profile": "sports-college",
    "suites": {"common": ["academics", "finance-operations", "support"], "specialized": ["sports"]},
    "modules": ["academics/lms", "finance-operations/fees-accounts", "support/helpdesk", "sports/athlete-performance"],
    "integrations": ["payment-sbiepay", "messaging-providers"],
}


def plan(**over):
    base = {"id": "x", "suites": [], "modules": [], "specialized_suites": 0, "integrations": [], "limits": {"users": 1}}
    base.update(over)
    return base


def test_profile_intersect_plan():
    e = compute_entitlement(PROFILE, plan(id="trial", suites=["academics", "support"], specialized_suites=1, integrations=["messaging-providers"]))
    assert e["modules"] == ["academics/lms", "support/helpdesk", "sports/athlete-performance"]
    assert e["upgradable_modules"] == ["finance-operations/fees-accounts"]
    assert e["integrations"] == ["messaging-providers"]
    assert module_entitled(e, "lms") and not module_entitled(e, "fees-accounts")
    assert module_entitled(e, "identity")


def test_star_overrides_disabled():
    assert compute_entitlement(PROFILE, plan(suites=["*"], specialized_suites="all"))["upgradable_modules"] == []
    e = compute_entitlement(PROFILE, plan(suites=["academics"]), overrides=["finance-operations/fees-accounts"], disabled=["academics/lms"])
    assert "finance-operations/fees-accounts" in e["modules"] and "academics/lms" not in e["modules"]
