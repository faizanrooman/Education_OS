from __future__ import annotations

from sqlalchemy import select
from sqlalchemy.orm import Session

from eos_core import events
from eos_core.db import scoped
from eos_core.security import create_token, hash_password, verify_password
from eos_core.settings import settings
from eos_core.tenant import get_current_organisation, platform_scope

from ..domain.models import User


class AuthError(Exception):
    pass


def create_user(db: Session, *, organisation_id: str | None, email: str, name: str, password: str,
                roles: list[str], is_super_admin: bool = False) -> User:
    user = User(organisation_id=organisation_id, email=email.lower(), name=name,
                password_hash=hash_password(password), roles=roles, is_super_admin=is_super_admin)
    db.add(user)
    db.flush()
    events.publish(db, "identity.user.created", organisation_id, {"user_id": user.id, "roles": roles})
    return user


def list_users(db: Session) -> list[User]:
    return list(db.scalars(scoped(db, select(User), User).order_by(User.created_at)))


def get_user(db: Session, user_id: str) -> User | None:
    with platform_scope():
        return db.get(User, user_id)


def authenticate(db: Session, *, email: str, password: str, organisation_slug: str | None) -> tuple[User, str]:
    """Pre-auth lookup runs in platform scope (no organisation known yet); the result is one user."""
    from eos_tenancy.domain.models import Organisation  # platform -> platform, declared in module.yaml

    with platform_scope():
        q = select(User).where(User.email == email.lower(), User.status == "active")
        if organisation_slug:
            org = db.scalar(select(Organisation).where(Organisation.slug == organisation_slug))
            if not org:
                raise AuthError("unknown organisation")
            q = q.where(User.organisation_id == org.id)
        users = list(db.scalars(q))
    if len(users) > 1:
        raise AuthError("email exists in more than one organisation; pass organisation_slug")
    if not users or not verify_password(password, users[0].password_hash):
        raise AuthError("invalid credentials")
    user = users[0]
    if user.organisation_id:
        with platform_scope():
            org = db.get(Organisation, user.organisation_id)
        if org is None or org.status not in ("active",):
            raise AuthError(f"organisation is {org.status if org else 'missing'}")
    token = create_token(user_id=user.id, organisation_id=user.organisation_id, roles=list(user.roles or []),
                         super_admin=user.is_super_admin)
    return user, token


def seed_super_admin(db: Session) -> None:
    if not settings.super_admin_email or not settings.super_admin_password:
        return
    with platform_scope():
        exists = db.scalar(select(User).where(User.email == settings.super_admin_email.lower(), User.is_super_admin.is_(True)))
        if exists:
            return
        create_user(db, organisation_id=None, email=settings.super_admin_email, name="Super Admin",
                    password=settings.super_admin_password, roles=["super-admin"], is_super_admin=True)
        db.commit()


def current_org_or_none() -> str | None:
    return get_current_organisation()
