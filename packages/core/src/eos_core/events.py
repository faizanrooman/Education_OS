"""Transactional outbox. Modules publish here in the same transaction as their state change;
a relay (platform/event-bus) moves rows to the broker. Every event carries organisation_id."""
from __future__ import annotations

from datetime import datetime

from sqlalchemy import JSON, Boolean, DateTime, String
from sqlalchemy.orm import Mapped, Session, mapped_column

from .db import Base, new_id, utcnow


class OutboxEvent(Base):
    __tablename__ = "outbox_event"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=new_id)
    organisation_id: Mapped[str | None] = mapped_column(String(36), index=True, nullable=True)
    name: Mapped[str] = mapped_column(String(120), index=True)
    actor: Mapped[str | None] = mapped_column(String(36), nullable=True)
    payload: Mapped[dict] = mapped_column(JSON, default=dict)
    occurred_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)
    published: Mapped[bool] = mapped_column(Boolean, default=False)


def publish(session: Session, name: str, organisation_id: str | None, payload: dict, actor: str | None = None) -> OutboxEvent:
    ev = OutboxEvent(name=name, organisation_id=organisation_id, payload=payload, actor=actor)
    session.add(ev)
    return ev
