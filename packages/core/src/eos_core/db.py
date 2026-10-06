from __future__ import annotations

import uuid
from datetime import datetime, timezone

from sqlalchemy import DateTime, String, create_engine, event, text
from sqlalchemy.orm import DeclarativeBase, Mapped, Session, mapped_column, sessionmaker

from .settings import settings
from .tenant import is_bypass, resolve_organisation


class Base(DeclarativeBase):
    pass


def new_id() -> str:
    return str(uuid.uuid4())


def utcnow() -> datetime:
    return datetime.now(timezone.utc)


class TenantMixin:
    """Every module table carries organisation_id (module standard rule 11)."""

    organisation_id: Mapped[str | None] = mapped_column(String(36), index=True, nullable=True)


class TimestampMixin:
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)


_connect_args = {"check_same_thread": False} if settings.database_url.startswith("sqlite") else {}
engine = create_engine(settings.database_url, connect_args=_connect_args, future=True)
SessionLocal = sessionmaker(bind=engine, autoflush=False, expire_on_commit=False, class_=Session)


@event.listens_for(Session, "after_begin")
def _set_tenant(session: Session, transaction, connection) -> None:
    """On Postgres, row-level security reads these settings. SQLite scoping is done in the repositories."""
    if connection.dialect.name != "postgresql":
        return
    org = resolve_organisation(session) or ""
    connection.execute(text("SELECT set_config('app.organisation_id', :org, true)"), {"org": org})
    connection.execute(text("SELECT set_config('app.bypass_rls', :b, true)"), {"b": "on" if is_bypass() else "off"})


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def scoped(db: Session, query, model):
    """Apply tenant scoping to a query for a TenantMixin model. On Postgres RLS does this too; here it is
    explicit so SQLite tests enforce the same rule and a missing filter is a visible bug.
    With no organisation resolvable the query matches nothing, never everything."""
    if is_bypass():
        return query
    org = resolve_organisation(db)
    if org is None:
        return query.filter(False)
    return query.filter(model.organisation_id == org)


def init_db() -> None:
    import eos_core.events  # noqa: F401  ensure outbox table is registered

    Base.metadata.create_all(engine)
    if settings.is_postgres:
        from .rls import apply_rls

        apply_rls(engine)
