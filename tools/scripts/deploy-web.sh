#!/usr/bin/env bash
# Build apps/web as a Docker image on this machine, ship it to the deployment host over SSH,
# and (re)start it with docker compose. The host needs Docker and SSH only.
#
# Usage:
#   DEPLOY_HOST=root@192.168.1.60 [EOS_WEB_PORT=8080] tools/scripts/deploy-web.sh
set -euo pipefail

HOST="${DEPLOY_HOST:?set DEPLOY_HOST, e.g. root@192.168.1.60}"
PORT="${EOS_WEB_PORT:-8080}"
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
TAG="$(git -C "$ROOT" rev-parse --short HEAD)"
REMOTE_DIR="/opt/education-os"

echo "==> building eos-web:$TAG"
docker build -q -f "$ROOT/infra/docker/web.Dockerfile" -t "eos-web:$TAG" -t eos-web:latest "$ROOT"

echo "==> shipping image to $HOST"
docker save "eos-web:$TAG" eos-web:latest | gzip | ssh "$HOST" 'gunzip | docker load'

echo "==> starting on $HOST (port $PORT)"
ssh "$HOST" "mkdir -p $REMOTE_DIR"
scp -q "$ROOT/infra/docker/docker-compose.yml" "$HOST:$REMOTE_DIR/docker-compose.yml"
ssh "$HOST" "cd $REMOTE_DIR && printf 'EOS_WEB_TAG=%s\nEOS_WEB_PORT=%s\n' '$TAG' '$PORT' > .env && docker compose up -d --remove-orphans && docker image prune -f >/dev/null"

echo "==> deployed eos-web:$TAG. Open http://${HOST#*@}:$PORT/?role=student"
