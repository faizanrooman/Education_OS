#!/usr/bin/env bash
# Create a new module from modules/_template.
# Usage: tools/scaffold-module.sh <kind> <domain> <module-name> "<description>"
#   kind:   feature | platform
#   domain: folder under modules/ (for feature) or "platform"
set -euo pipefail
KIND="${1:?kind}"; DOMAIN="${2:?domain}"; NAME="${3:?module-name}"; DESC="${4:?description}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
case "$KIND" in
  feature)  DEST="$ROOT/modules/$DOMAIN/$NAME" ;;
  platform) DEST="$ROOT/platform/$NAME" ;;
  *) echo "kind must be feature or platform"; exit 1 ;;
esac
[ -e "$DEST" ] && { echo "already exists: $DEST"; exit 1; }
cp -r "$ROOT/modules/_template" "$DEST"
UPPER="$(echo "$NAME" | tr '[:lower:]-' '[:upper:]_')"
grep -rl -e __MODULE_NAME__ -e __DOMAIN__ -e MODULE_NAME_ -e '<ONE LINE DESCRIPTION>' "$DEST" | while read -r f; do
  sed -i -e "s/__MODULE_NAME__/$NAME/g" -e "s/__DOMAIN__/$DOMAIN/g" \
         -e "s/MODULE_NAME_/${UPPER}_/g" -e "s/<ONE LINE DESCRIPTION>/$DESC/g" \
         -e "s/^kind: feature/kind: $KIND/" "$f"
done
sed -i '/canonical module template/,/replaces placeholders\./d' "$DEST/README.md"
echo "created $DEST"
echo "next: add it to CODEOWNERS and docs/team/ownership.md"
