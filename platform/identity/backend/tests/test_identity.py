from eos_core.security import hash_password, verify_password


def test_password_roundtrip():
    h = hash_password("Secret123!")
    assert verify_password("Secret123!", h) and not verify_password("nope", h)
