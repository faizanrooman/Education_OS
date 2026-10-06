import os
import tempfile
from pathlib import Path

os.environ.setdefault("EOS_DATABASE_URL", f"sqlite:///{tempfile.mkdtemp()}/test.db")
os.environ.setdefault("EOS_DEV_MODE", "true")
os.environ.setdefault("EOS_SUPER_ADMIN_EMAIL", "root@platform.example.com")
os.environ.setdefault("EOS_SUPER_ADMIN_PASSWORD", "RootPassw0rd!")
os.environ.setdefault("BILLING_PAYMENT_ADAPTER", "none")
os.environ.setdefault("EOS_REPO_ROOT", str(Path(__file__).resolve().parents[3]))

import pytest
from fastapi import APIRouter
from fastapi.testclient import TestClient

from eos_api.main import create_app

# A stand-in feature module so the entitlement gate can be tested before any real module ships.
fees = APIRouter()


@fees.get("/ping")
def fees_ping():
    return {"module": "fees-accounts"}


lms = APIRouter()


@lms.get("/ping")
def lms_ping():
    return {"module": "lms"}


@pytest.fixture(scope="session")
def client():
    app = create_app(extra_routers={"fees-accounts": fees, "lms": lms})
    with TestClient(app) as c:
        yield c
