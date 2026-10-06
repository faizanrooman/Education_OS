#!/usr/bin/env bash
# Runs every minute on the nginx container (systemd timer). Pulls the `web-dist` branch,
# which GitHub Actions rebuilds on every push to main, and swaps it into the web root.
set -euo pipefail

REPO="${EOS_REPO:-https://github.com/faizanrooman/Education_OS.git}"
SRC=/opt/eos-web-dist
WWW=/var/www/education-os

if [ ! -d "$SRC/.git" ]; then
  git clone -q --branch web-dist --single-branch --depth 1 "$REPO" "$SRC"
fi
cd "$SRC"
git fetch -q --depth 1 origin web-dist
remote="$(git rev-parse origin/web-dist)"
if [ "$(git rev-parse HEAD)" = "$remote" ] && [ -f "$WWW/VERSION" ]; then
  exit 0
fi
git reset -q --hard "$remote"

rm -rf "$WWW.new"
mkdir -p "$WWW.new"
tar -C "$SRC" --exclude=.git -cf - . | tar -C "$WWW.new" -xf -
rm -rf "$WWW.old"
[ -d "$WWW" ] && mv "$WWW" "$WWW.old"
mv "$WWW.new" "$WWW"

nginx -t -q && nginx -s reload
logger -t eos-web-autodeploy "deployed $(cat "$WWW/VERSION")"
