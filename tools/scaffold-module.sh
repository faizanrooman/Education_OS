#!/usr/bin/env bash
# Create a new module from modules/_template.
# Usage: tools/scaffold-module.sh <kind> <domain> <module-name> "<description>" [tier] [field]
#   kind:   feature | platform | integration
#   domain: folder under modules/ (for feature), "platform", or "integrations"
#   tier:   common (default) | specialized | core   field: required when tier is specialized
set -euo pipefail
KIND="${1:?kind}"; DOMAIN="${2:?domain}"; NAME="${3:?module-name}"; DESC="${4:?description}"
TIER="${5:-common}"; FIELD="${6:-}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
case "$KIND" in
  feature)     DEST="$ROOT/modules/$DOMAIN/$NAME" ;;
  platform)    DEST="$ROOT/platform/$NAME"; TIER=core ;;
  integration) DEST="$ROOT/integrations/$NAME" ;;
  *) echo "kind must be feature, platform or integration"; exit 1 ;;
esac
[ "$TIER" = specialized ] && [ -z "$FIELD" ] && { echo "specialized modules need a field, e.g. sports"; exit 1; }
[ -e "$DEST" ] && { echo "already exists: $DEST"; exit 1; }
cp -r "$ROOT/modules/_template" "$DEST"
UPPER="$(echo "$NAME" | tr '[:lower:]-' '[:upper:]_')"
grep -rl -e __MODULE_NAME__ -e __DOMAIN__ -e MODULE_NAME_ -e '<ONE LINE DESCRIPTION>' "$DEST" | while read -r f; do
  sed -i -e "s/__MODULE_NAME__/$NAME/g" -e "s/__DOMAIN__/$DOMAIN/g" \
         -e "s/MODULE_NAME_/${UPPER}_/g" -e "s/<ONE LINE DESCRIPTION>/$DESC/g" \
         -e "s/^kind: feature/kind: $KIND/" -e "s/^tier: common /tier: $TIER /" "$f"
done
[ -n "$FIELD" ] && sed -i "/^tier: /a field: $FIELD       # only for specialized: sports | music | arts | ..." "$DEST/module.yaml"
sed -i '/canonical module template/,/replaces placeholders\./d' "$DEST/README.md"
echo "created $DEST"
echo "next: add it to CODEOWNERS and docs/team/ownership.md"
