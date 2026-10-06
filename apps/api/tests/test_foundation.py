"""Phase 1 gate: an organisation registers, verifies, signs in, and sees its academy's entitlement
enforced by the gateway, not the UI. Then upgrades and the lock opens."""

from eos_testing import assert_no_cross_tenant_leak, register_and_login
from eos_testing.tenancy import auth


def test_health(client):
    assert client.get("/api/v1/health").json()["status"] == "ok"


def test_academy_types_are_the_profiles(client):
    types = client.get("/api/v1/tenancy/academy-types").json()
    assert {t["id"] for t in types} >= {"sports-college", "music-academy", "medical-college"}


def test_register_verify_login_and_trial_entitlement(client):
    a = register_and_login(client, slug="harmony", academy_type="music-academy")
    assert a["org"]["status"] == "pending_verification"
    me = client.get("/api/v1/identity/auth/me", headers=auth(a["token"])).json()
    assert me["roles"] == ["org-admin"] and "tenancy:organisation:manage" in me["permissions"]
    org = client.get("/api/v1/tenancy/organisation", headers=auth(a["token"])).json()
    assert org["status"] == "active" and org["academy_type"] == "music-academy"
    ent = client.get("/api/v1/tenancy/organisation/entitlement", headers=auth(a["token"])).json()
    assert ent["plan"] == "trial" and "academics/lms" in ent["modules"] and "practice/portfolio" in ent["modules"]
    assert "finance-operations/fees-accounts" in ent["upgradable_modules"]
    assert ent["limits"]["users"] == 25


def test_gateway_blocks_modules_outside_the_plan_and_upgrade_unlocks(client):
    a = register_and_login(client, slug="rhythm", academy_type="dance-academy")
    h = auth(a["token"])
    assert client.get("/api/v1/lms/ping", headers=h).status_code == 200
    r = client.get("/api/v1/fees-accounts/ping", headers=h)
    assert r.status_code == 403 and r.json()["code"] == "module_not_entitled" and r.json()["upgradable"] is True
    assert client.get("/api/v1/fees-accounts/ping").status_code == 401
    plans = {p["id"] for p in client.get("/api/v1/billing/plans").json()}
    assert plans == {"trial", "standard", "premium"}
    up = client.post("/api/v1/billing/subscription/upgrade", json={"plan": "standard"}, headers=h)
    assert up.status_code == 201 and up.json()["activated"] is True
    sub = client.get("/api/v1/billing/subscription", headers=h).json()
    assert sub["plan"] == "standard" and sub["status"] == "active"
    assert client.get("/api/v1/fees-accounts/ping", headers=h).status_code == 200


def test_org_admin_can_toggle_only_entitled_modules(client):
    a = register_and_login(client, slug="canvas", academy_type="arts-academy")
    h = auth(a["token"])
    r = client.put("/api/v1/tenancy/organisation/modules/academics/lms", json={"enabled": False}, headers=h)
    assert r.status_code == 200 and "academics/lms" not in r.json()["modules"]
    assert client.get("/api/v1/lms/ping", headers=h).status_code == 403
    r = client.put(
        "/api/v1/tenancy/organisation/modules/finance-operations/fees-accounts", json={"enabled": True}, headers=h
    )
    assert r.status_code == 402


def test_no_cross_tenant_leak_and_users_are_scoped(client):
    a = register_and_login(client, slug="alpha-sports")
    b = register_and_login(client, slug="beta-law", academy_type="law-college")
    client.post(
        "/api/v1/identity/users",
        json={"email": "s1@alpha.example.com", "name": "S", "password": "Passw0rd!x", "roles": ["student"]},
        headers=auth(a["token"]),
    )
    assert_no_cross_tenant_leak(client, "/api/v1/identity/users", a["token"], b["token"])
    users_b = client.get("/api/v1/identity/users", headers=auth(b["token"])).json()
    assert {u["email"] for u in users_b} == {b["email"]}
    # an org admin cannot grant platform roles
    r = client.post(
        "/api/v1/identity/users",
        json={"email": "x@alpha.example.com", "name": "X", "password": "Passw0rd!x", "roles": ["super-admin"]},
        headers=auth(a["token"]),
    )
    assert r.status_code == 403


def test_super_admin_controls_organisations(client):
    a = register_and_login(client, slug="gamma-eng", academy_type="engineering-college")
    r = client.post(
        "/api/v1/identity/auth/login", json={"email": "root@platform.example.com", "password": "RootPassw0rd!"}
    )
    assert r.status_code == 200, r.text
    sa = auth(r.json()["token"])
    orgs = client.get("/api/v1/tenancy/admin/organisations", headers=sa).json()
    assert any(o["slug"] == "gamma-eng" and o["plan"] == "trial" for o in orgs)
    assert client.get("/api/v1/tenancy/admin/organisations", headers=auth(a["token"])).status_code == 403
    org_id = a["org"]["id"]
    # override: grant a module outside the plan
    r = client.put(
        f"/api/v1/tenancy/admin/organisations/{org_id}/overrides",
        json={"grant_modules": ["finance-operations/fees-accounts"], "reason": "pilot"},
        headers=sa,
    )
    assert r.status_code == 200 and "finance-operations/fees-accounts" in r.json()["modules"]
    assert client.get("/api/v1/fees-accounts/ping", headers=auth(a["token"])).status_code == 200
    # set plan and extend trial as super admin
    r = client.put(
        f"/api/v1/billing/admin/subscriptions/{org_id}", json={"plan": "premium", "reason": "comp"}, headers=sa
    )
    assert r.status_code == 200 and r.json()["plan"] == "premium"
    # impersonate, audited
    users = client.get("/api/v1/identity/users", headers=auth(a["token"])).json()
    r = client.post(
        f"/api/v1/tenancy/admin/organisations/{org_id}/impersonate",
        json={"user_id": users[0]["id"], "reason": "support"},
        headers=sa,
    )
    assert r.status_code == 201
    me = client.get("/api/v1/identity/auth/me", headers=auth(r.json()["token"])).json()
    assert me["impersonated_by"] and me["organisation_id"] == org_id
    # suspend: the organisation's users are shut out of feature modules and cannot log in
    r = client.put(
        f"/api/v1/tenancy/admin/organisations/{org_id}/status",
        json={"status": "suspended", "reason": "unpaid"},
        headers=sa,
    )
    assert r.status_code == 200 and r.json()["status"] == "suspended"
    assert client.get("/api/v1/lms/ping", headers=auth(a["token"])).json()["code"] == "organisation_inactive"
    r = client.post(
        "/api/v1/identity/auth/login",
        json={"email": a["email"], "password": a["password"], "organisation_slug": "gamma-eng"},
    )
    assert r.status_code == 401


def test_registration_validation(client):
    body = {
        "organisation_name": "Xy College",
        "slug": "admin",
        "academy_type": "music-academy",
        "admin": {"name": "A", "email": "a@x.example.com", "password": "Passw0rd!x"},
        "accepted_terms": True,
    }
    assert client.post("/api/v1/tenancy/register", json=body).status_code == 400
    body["slug"] = "harmony"
    assert client.post("/api/v1/tenancy/register", json=body).status_code == 409
    body.update(slug="fresh-one", academy_type="nope")
    assert client.post("/api/v1/tenancy/register", json=body).status_code == 400
