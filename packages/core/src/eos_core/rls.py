"""Row-level security for every table that carries organisation_id (Postgres only)."""
from __future__ import annotations

from sqlalchemy import text
from sqlalchemy.engine import Engine

from .db import Base

POLICY = """
ALTER TABLE {table} ENABLE ROW LEVEL SECURITY;
ALTER TABLE {table} FORCE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS tenant_isolation ON {table};
CREATE POLICY tenant_isolation ON {table}
  USING (current_setting('app.bypass_rls', true) = 'on'
         OR organisation_id::text = current_setting('app.organisation_id', true))
  WITH CHECK (current_setting('app.bypass_rls', true) = 'on'
         OR organisation_id::text = current_setting('app.organisation_id', true));
"""


def tenant_tables() -> list[str]:
    return [t.name for t in Base.metadata.sorted_tables if "organisation_id" in t.columns]


def apply_rls(engine: Engine) -> None:
    with engine.begin() as conn:
        for table in tenant_tables():
            conn.execute(text(POLICY.format(table=table)))
