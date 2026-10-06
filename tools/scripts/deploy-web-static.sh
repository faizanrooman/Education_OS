#!/usr/bin/env bash
# Deploy apps/frontend as static files into an nginx LXC container on a Proxmox host.
# No Docker needed on the target. nginx serves the build from /var/www/education-os on port 8080.
#
#   PVE_HOST=root@<proxmox-ip> CTID=<container id> tools/scripts/deploy-web-static.sh
#
# Steps: build locally with pnpm, tar the dist folder, copy it to the Proxmox host,
# push it into the container with pct, install the vhost, test and reload nginx.
set -euo pipefail

PVE="${PVE_HOST:?set PVE_HOST, e.g. root@<proxmox-ip>}"
CTID="${CTID:?set CTID, the nginx container id}"
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
TAG="$(git -C "$ROOT" rev-parse --short HEAD)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "==> building apps/frontend at $TAG"
(cd "$ROOT" && pnpm --filter @eos/frontend build >/dev/null)
tar -C "$ROOT/apps/frontend/dist" -czf "$TMP/eos-web.tar.gz" .

echo "==> copying to $PVE"
scp -q "$TMP/eos-web.tar.gz" "$ROOT/infra/docker/nginx.static-vhost.conf" "$PVE:/tmp/"

echo "==> installing into container $CTID"
ssh "$PVE" "set -e
  pct push $CTID /tmp/eos-web.tar.gz /tmp/eos-web.tar.gz
  pct push $CTID /tmp/nginx.static-vhost.conf /etc/nginx/sites-available/education-os.conf
  pct exec $CTID -- sh -c '
    set -e
    mkdir -p /var/www/education-os.new
    tar xzf /tmp/eos-web.tar.gz -C /var/www/education-os.new
    rm -rf /var/www/education-os.old
    [ -d /var/www/education-os ] && mv /var/www/education-os /var/www/education-os.old || true
    mv /var/www/education-os.new /var/www/education-os
    echo $TAG > /var/www/education-os/VERSION
    ln -sfn /etc/nginx/sites-available/education-os.conf /etc/nginx/sites-enabled/education-os.conf
    nginx -t
    nginx -s reload
    rm -f /tmp/eos-web.tar.gz'
  rm -f /tmp/eos-web.tar.gz /tmp/nginx.static-vhost.conf"

echo "==> deployed $TAG. Open http://<container-ip>:8080/?role=student"
