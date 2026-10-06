from __future__ import annotations

import os
from dataclasses import dataclass, field
from pathlib import Path


def _find_repo_root(start: Path) -> Path:
    for p in [start, *start.parents]:
        if (p / "pnpm-workspace.yaml").exists() and (p / "platform").is_dir():
            return p
    return start


@dataclass(frozen=True)
class Settings:
    database_url: str = field(default_factory=lambda: os.environ.get("EOS_DATABASE_URL", "sqlite:///./eos.db"))
    jwt_secret: str = field(
        default_factory=lambda: os.environ.get("EOS_JWT_SECRET", "dev-only-change-me-dev-only-change-me-32b")
    )
    jwt_ttl_minutes: int = field(default_factory=lambda: int(os.environ.get("EOS_JWT_TTL_MINUTES", "720")))
    repo_root: Path = field(default_factory=lambda: Path(os.environ.get("EOS_REPO_ROOT", _find_repo_root(Path.cwd()))))
    dev_mode: bool = field(default_factory=lambda: os.environ.get("EOS_DEV_MODE", "true").lower() == "true")
    super_admin_email: str = field(default_factory=lambda: os.environ.get("EOS_SUPER_ADMIN_EMAIL", ""))
    super_admin_password: str = field(default_factory=lambda: os.environ.get("EOS_SUPER_ADMIN_PASSWORD", ""))
    payment_adapter: str = field(default_factory=lambda: os.environ.get("BILLING_PAYMENT_ADAPTER", "none"))
    registration_open: bool = field(
        default_factory=lambda: os.environ.get("TENANCY_REGISTRATION_OPEN", "true").lower() == "true"
    )
    # ADR-0005: a super admin approves an organisation's academic package before it goes live.
    auto_approve: bool = field(
        default_factory=lambda: os.environ.get("TENANCY_AUTO_APPROVE", "false").lower() == "true"
    )
    cors_origins: list[str] = field(
        default_factory=lambda: [o for o in os.environ.get("EOS_CORS_ORIGINS", "http://localhost:5173").split(",") if o]
    )

    @property
    def is_postgres(self) -> bool:
        return self.database_url.startswith("postgresql")


settings = Settings()
