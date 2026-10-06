"""FastAPI dependencies shared by every router: who is calling, for which organisation, with which permissions."""

from __future__ import annotations

from dataclasses import dataclass, field

import jwt
from eos_core.config import permissions_for
from eos_core.db import get_db
from eos_core.security import decode_token
from fastapi import Depends, Header, HTTPException, status
from sqlalchemy.orm import Session

from ..application.service import get_user


@dataclass
class Principal:
    user_id: str
    organisation_id: str | None
    roles: list[str]
    super_admin: bool
    impersonated_by: str | None = None
    permissions: set[str] = field(default_factory=set)

    def can(self, permission: str) -> bool:
        return permission in self.permissions


def current_principal(authorization: str | None = Header(default=None), db: Session = Depends(get_db)) -> Principal:
    if not authorization or not authorization.lower().startswith("bearer "):
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "missing bearer token")
    try:
        claims = decode_token(authorization.split(" ", 1)[1])
    except jwt.PyJWTError as e:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, f"invalid token: {e}") from e
    user = get_user(db, claims["sub"])
    if user is None or user.status != "active":
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "user disabled")
    roles = list(claims.get("roles") or [])
    p = Principal(
        user_id=user.id,
        organisation_id=claims.get("org"),
        roles=roles,
        super_admin=bool(claims.get("sa")),
        impersonated_by=claims.get("imp"),
        permissions=permissions_for(roles, bool(claims.get("sa"))),
    )
    db.info["organisation_id"] = p.organisation_id  # the request-scoped session carries the tenant
    return p


def require(permission: str):
    def dep(p: Principal = Depends(current_principal)) -> Principal:
        if not p.can(permission):
            raise HTTPException(status.HTTP_403_FORBIDDEN, f"requires {permission}")
        return p

    return dep


def require_organisation(p: Principal = Depends(current_principal)) -> Principal:
    if not p.organisation_id:
        raise HTTPException(status.HTTP_403_FORBIDDEN, "this endpoint needs an organisation user")
    return p
