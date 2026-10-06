"""Request-scoped tenant context. The gateway sets it from the session; every query is scoped to it."""
from __future__ import annotations

from contextlib import contextmanager
from contextvars import ContextVar

_current_org: ContextVar[str | None] = ContextVar("eos_current_org", default=None)
_bypass: ContextVar[bool] = ContextVar("eos_bypass_rls", default=False)


def get_current_organisation() -> str | None:
    return _current_org.get()


def resolve_organisation(session=None) -> str | None:
    """Explicit scope (contextvar) wins; otherwise the organisation the auth dependency pinned on the
    session. FastAPI runs sync dependencies in a thread pool with a copied context, so a contextvar set
    there never reaches the endpoint; the session does."""
    org = _current_org.get()
    if org is not None:
        return org
    if session is not None:
        return session.info.get("organisation_id")
    return None


def require_organisation() -> str:
    org = _current_org.get()
    if not org:
        raise PermissionError("no organisation in context")
    return org


def is_bypass() -> bool:
    return _bypass.get()


@contextmanager
def organisation_scope(organisation_id: str | None):
    """Run a block as one organisation (or none)."""
    token = _current_org.set(organisation_id)
    try:
        yield
    finally:
        _current_org.reset(token)


@contextmanager
def platform_scope():
    """Run a block as the platform itself: super admin and pre-auth lookups. Bypasses RLS; audit it."""
    t1 = _bypass.set(True)
    t2 = _current_org.set(None)
    try:
        yield
    finally:
        _current_org.reset(t2)
        _bypass.reset(t1)
