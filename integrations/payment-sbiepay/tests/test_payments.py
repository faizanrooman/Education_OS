"""Starting payments: validation, idempotency, merchant accounts, who may read a payment."""

from eos_core import settings as core_settings_module
from eos_payment_sbiepay.infrastructure import config
from sbiepay_support import PREFIX, payment_body, start


def test_start_returns_a_session(client, org):
    s = start(client, org.admin)
    assert s["reference"].startswith("EOS")
    assert s["payment_url"].endswith(f"{PREFIX}/payments/{s['reference']}/redirect")
    assert s["expires_at"]
    p = client.get(f"{PREFIX}/payments/{s['reference']}", headers=org.admin).json()
    assert p["status"] == "created"
    assert p["amount"] == "1500.00" and p["refunded_amount"] == "0.00" and p["currency"] == "INR"
    assert p["organisation_id"] == org.id and p["source_module"] == "billing"


def test_payment_url_uses_the_public_base_url(client, org, monkeypatch):
    monkeypatch.setenv("PAYMENT_SBIEPAY_CALLBACK_BASE_URL", "https://eos.example.com/")
    s = start(client, org.admin)
    assert s["payment_url"] == f"https://eos.example.com{PREFIX}/payments/{s['reference']}/redirect"


def test_second_start_for_the_same_source_returns_the_open_session(client, org):
    body = payment_body()
    first = client.post(f"{PREFIX}/payments", json=body, headers=org.admin)
    again = client.post(f"{PREFIX}/payments", json=body, headers=org.admin)
    assert first.status_code == 201 and again.status_code == 409
    assert again.json()["reference"] == first.json()["reference"]


def test_invalid_amount_currency_or_purpose_is_rejected(client, org):
    for bad in ({"amount": "0"}, {"amount": "12.345"}, {"amount": "-5"}, {"currency": "USD"}, {"purpose": "donation"}):
        r = client.post(f"{PREFIX}/payments", json=payment_body(**bad), headers=org.admin)
        assert r.status_code == 422, (bad, r.text)


def test_return_and_notify_hosts_must_be_allowed(client, org, monkeypatch):
    monkeypatch.setenv("PAYMENT_SBIEPAY_ALLOWED_RETURN_HOSTS", "college.example.com, api.example.com")
    assert client.post(f"{PREFIX}/payments", json=payment_body(), headers=org.admin).status_code == 201
    r = client.post(f"{PREFIX}/payments", json=payment_body(return_url="https://evil.example.net/x"), headers=org.admin)
    assert r.status_code == 422
    r = client.post(f"{PREFIX}/payments", json=payment_body(notify_url="https://evil.example.net/x"), headers=org.admin)
    assert r.status_code == 422
    r = client.post(f"{PREFIX}/payments", json=payment_body(return_url="javascript:alert(1)"), headers=org.admin)
    assert r.status_code == 422


def test_fee_payment_needs_the_organisations_merchant_account(client, org):
    fee = {"purpose": "fee", "source_module": "fees-accounts"}
    r = client.post(f"{PREFIX}/payments", json=payment_body(**fee), headers=org.student)
    assert r.status_code == 503
    client.put(f"{PREFIX}/merchant-account", json={"merchant_id": "M1", "mode": "sandbox"}, headers=org.admin)
    assert client.post(f"{PREFIX}/payments", json=payment_body(**fee), headers=org.student).status_code == 201
    client.put(
        f"{PREFIX}/merchant-account", json={"merchant_id": "M1", "mode": "sandbox", "active": False}, headers=org.admin
    )
    assert client.post(f"{PREFIX}/payments", json=payment_body(**fee), headers=org.student).status_code == 503


def test_permissions(client, org, other_org):
    assert client.post(f"{PREFIX}/payments", json=payment_body()).status_code == 401
    assert client.post(f"{PREFIX}/payments", json=payment_body(), headers=org.staff).status_code == 403
    assert client.get(f"{PREFIX}/payments", headers=org.student).status_code == 403
    assert client.get(f"{PREFIX}/payments", headers=org.staff).status_code == 200


def test_the_payer_may_read_their_own_payment_but_not_another(client, org):
    from eos_core.security import create_token
    from sbiepay_support import auth

    client.put(f"{PREFIX}/merchant-account", json={"merchant_id": "M2", "mode": "sandbox"}, headers=org.admin)
    s = start(client, org.student, purpose="fee", source_module="fees-accounts")
    assert client.get(f"{PREFIX}/payments/{s['reference']}", headers=org.student).status_code == 200
    classmate = auth(create_token(user_id="someone-else", organisation_id=org.id, roles=["student"]))
    assert client.get(f"{PREFIX}/payments/{s['reference']}", headers=classmate).status_code == 403


def test_list_filters_and_pages(client, org):
    refs = [start(client, org.admin)["reference"] for _ in range(3)]
    page = client.get(f"{PREFIX}/payments?limit=2", headers=org.admin).json()
    assert len(page["items"]) == 2 and page["next_cursor"]
    rest = client.get(f"{PREFIX}/payments?limit=2&cursor={page['next_cursor']}", headers=org.admin).json()
    seen = {p["reference"] for p in page["items"] + rest["items"]}
    assert set(refs) <= seen
    assert client.get(f"{PREFIX}/payments?status=succeeded", headers=org.admin).json()["items"] == []


def test_mock_mode_is_refused_outside_dev_mode(monkeypatch):
    import dataclasses

    import pytest

    monkeypatch.setattr(config, "core_settings", dataclasses.replace(core_settings_module.settings, dev_mode=False))
    with pytest.raises(config.ConfigError):
        config.load()


def test_sandbox_mode_stops_at_the_gateway_until_the_kit_is_implemented(client, org, monkeypatch):
    monkeypatch.setenv("PAYMENT_SBIEPAY_MODE", "sandbox")
    monkeypatch.setenv("PAYMENT_SBIEPAY_MERCHANT_ID", "PLATFORM1")
    monkeypatch.setenv("PAYMENT_SBIEPAY_ALLOWED_RETURN_HOSTS", "college.example.com,api.example.com")
    s = start(client, org.admin)
    r = client.get(s["payment_url"])
    assert r.status_code == 503 and "integration kit" in r.json()["detail"]
