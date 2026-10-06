from __future__ import annotations

import logging
from contextlib import asynccontextmanager

from fastapi import APIRouter, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from eos_core.db import SessionLocal, init_db
from eos_core.settings import settings

from .gateway import EntitlementGate

log = logging.getLogger("eos.api")

# Platform services this host mounts. Feature modules are added from config/modules.enabled.yaml as they ship.
PLATFORM_ROUTERS = {
    "identity": "eos_identity.api.router",
    "tenancy": "eos_tenancy.api.router",
    "billing": "eos_billing.api.router",
}


def _import_router(dotted: str) -> APIRouter:
    import importlib

    return importlib.import_module(dotted).router


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    from eos_billing.application.service import seed_plans
    from eos_identity.application.service import seed_super_admin

    db = SessionLocal()
    try:
        seed_plans(db)
        seed_super_admin(db)
    finally:
        db.close()
    yield


def create_app(extra_routers: dict[str, APIRouter] | None = None) -> FastAPI:
    app = FastAPI(title="Education OS API", version="0.1.0", lifespan=lifespan)
    app.add_middleware(EntitlementGate)
    app.add_middleware(CORSMiddleware, allow_origins=settings.cors_origins, allow_credentials=True,
                       allow_methods=["*"], allow_headers=["*"])

    @app.get("/api/v1/health")
    def health():
        return {"status": "ok", "database": "postgres" if settings.is_postgres else "sqlite", "dev_mode": settings.dev_mode}

    for name, dotted in PLATFORM_ROUTERS.items():
        app.include_router(_import_router(dotted), prefix=f"/api/v1/{name}")
    for name, router in (extra_routers or {}).items():
        app.include_router(router, prefix=f"/api/v1/{name}")
    return app


app = create_app()
