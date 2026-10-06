from __future__ import annotations

from eos_core.db import Base, TenantMixin, TimestampMixin, new_id
from sqlalchemy import JSON, Boolean, String, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column


class User(Base, TenantMixin, TimestampMixin):
    """A person who can sign in. organisation_id is NULL only for super admins (platform operators)."""

    __tablename__ = "identity_user"
    __table_args__ = (UniqueConstraint("organisation_id", "email", name="uq_identity_user_org_email"),)

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=new_id)
    email: Mapped[str] = mapped_column(String(254), index=True)
    name: Mapped[str] = mapped_column(String(200))
    password_hash: Mapped[str] = mapped_column(String(300))
    roles: Mapped[list] = mapped_column(JSON, default=list)
    is_super_admin: Mapped[bool] = mapped_column(Boolean, default=False)
    status: Mapped[str] = mapped_column(String(20), default="active")  # active | disabled

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "organisation_id": self.organisation_id,
            "email": self.email,
            "name": self.name,
            "roles": list(self.roles or []),
            "is_super_admin": self.is_super_admin,
            "status": self.status,
            "created_at": self.created_at.isoformat() if self.created_at else None,
        }
