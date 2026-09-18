#!/usr/bin/env bash
# Lighthouse (mobile, headless) against a LOCAL production server only.
# Never point this at matthewshotelmarkets.com (geo/AGENTS.md rule 5).
#
#   npm run build && npx next start -p 4123 &
#   bash scripts/lighthouse-local.sh http://localhost:4123 out-dir [runs]
#
# Writes one JSON per page per run into out-dir, then prints the median of
# each metric (scripts/lighthouse-summary.mjs).
set -euo pipefail
BASE="${1:?base url, e.g. http://localhost:4123}"
OUT="${2:?output dir}"
RUNS="${3:-3}"
case "$BASE" in
  http://localhost:*|http://127.0.0.1:*) ;;
  *) echo "refusing: lighthouse-local only runs against localhost" >&2; exit 1 ;;
esac
PAGES="${PAGES:-/ /hotel-financing/refinance /rates /listings /hotel-franchise-costs/hampton-inn}"
mkdir -p "$OUT"
for p in $PAGES; do
  slug=$(echo "$p" | sed 's#^/$#home#; s#^/##; s#/#_#g')
  for i in $(seq 1 "$RUNS"); do
    npx --yes lighthouse "${BASE}${p}" --quiet \
      --only-categories=performance,seo,accessibility \
      --form-factor=mobile ${LH_FLAGS:-} --chrome-flags="--headless=new --no-sandbox" \
      --output=json --output-path="${OUT}/${slug}.${i}.json" >/dev/null 2>&1 \
      || echo "run failed: $p #$i" >&2
  done
done
node "$(dirname "$0")/lighthouse-summary.mjs" "$OUT"
