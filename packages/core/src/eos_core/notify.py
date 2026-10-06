"""Notification stub until platform/notification ships: logs the message and keeps the last ones in memory
so tests and dev mode can read verification tokens."""

from __future__ import annotations

import logging

log = logging.getLogger("eos.notify")
sent: list[dict] = []


def send_email(to: str, subject: str, body: str, **meta) -> None:
    msg = {"to": to, "subject": subject, "body": body, **meta}
    sent.append(msg)
    if len(sent) > 200:
        del sent[:100]
    log.info("email to %s: %s", to, subject)
