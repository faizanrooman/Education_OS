from __future__ import annotations

import hashlib
import hmac
import os
from datetime import timedelta

import jwt

from .db import utcnow
from .settings import settings

_ITER = 200_000


def hash_password(password: str) -> str:
    salt = os.urandom(16)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, _ITER)
    return f"pbkdf2${_ITER}${salt.hex()}${digest.hex()}"


def verify_password(password: str, stored: str) -> bool:
    try:
        _, iters, salt, digest = stored.split("$")
        calc = hashlib.pbkdf2_hmac("sha256", password.encode(), bytes.fromhex(salt), int(iters))
        return hmac.compare_digest(calc.hex(), digest)
    except ValueError:
        return False


def create_token(*, user_id: str, organisation_id: str | None, roles: list[str], super_admin: bool = False,
                 impersonated_by: str | None = None, ttl_minutes: int | None = None) -> str:
    now = utcnow()
    payload = {
        "sub": user_id,
        "org": organisation_id,
        "roles": roles,
        "sa": super_admin,
        "iat": int(now.timestamp()),
        "exp": int((now + timedelta(minutes=ttl_minutes or settings.jwt_ttl_minutes)).timestamp()),
    }
    if impersonated_by:
        payload["imp"] = impersonated_by
    return jwt.encode(payload, settings.jwt_secret, algorithm="HS256")


def decode_token(token: str) -> dict:
    return jwt.decode(token, settings.jwt_secret, algorithms=["HS256"])
