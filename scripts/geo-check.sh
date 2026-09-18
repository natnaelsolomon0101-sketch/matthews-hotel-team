#!/usr/bin/env bash
# The ship gate. Every check the site must pass before anything merges to
# main (which deploys matthewshotelmarkets.com). Runs fully offline against a
# local production build; it never sends traffic to the live site.
#
#   bash scripts/geo-check.sh
#
# Exits non-zero on the first failing check. Prints "GEO-CHECK PASS" at the
# end only when everything is green.
set -euo pipefail
cd "$(dirname "$0")/.."

# PORT can be set by the caller; otherwise pick a free one so several
# worktrees can run the gate at the same time.
PORT="${PORT:-$(node -e 'const s=require("net").createServer();s.listen(0,()=>{console.log(s.address().port);s.close()})')}"
BASE="http://localhost:${PORT}"
step() { printf '\n==> %s\n' "$1"; }

step "typecheck"
npx tsc --noEmit -p .

step "lint (0 errors, 0 warnings)"
npx eslint --max-warnings=0 .

step "production build"
npm run build

step "citations, em-dashes, filler words"
npx tsx scripts/check-refs.ts

step "JSON-LD (built HTML)"
npx tsx scripts/schema-validate.ts --build | tail -3
grep -q '"blocksValid"' reports/schema-validation.json
node -e 'const r=require("./reports/schema-validation.json"); if (r.blocksValid !== r.blocksFound) { console.error(`schema: ${r.blocksValid}/${r.blocksFound} valid`); process.exit(1) }'

step "start local server"
if curl -s -o /dev/null "${BASE}/"; then
  echo "port ${PORT} is already in use; stop that server first" >&2
  exit 1
fi
npx next start -p "${PORT}" >/tmp/geo-check-next.log 2>&1 &
SERVER_PID=$!
trap 'kill ${SERVER_PID} 2>/dev/null || true' EXIT
for _ in $(seq 1 60); do
  curl -s -o /dev/null "${BASE}/" && break
  sleep 1
done

step "internal links (local)"
LOCAL_BASE="${BASE}" npx tsx scripts/internal-links-audit.ts --local | tail -2

# Every sitemap URL: 200 and not redirected, title and description present,
# no duplicate titles, exactly one H1, self-referential canonical, no noindex,
# every <img> has alt, no internal link to a vercel.json redirect source, and
# unknown paths are real 404s with nav and hub links. Length problems are
# warnings only. See geo/14-seo-tech.md.
step "metadata and crawl hygiene, every sitemap URL (local)"
node scripts/metadata-audit.mjs "${BASE}"

step "300-word extractability test (local)"
npx tsx scripts/check-extractability.ts "${BASE}"

step "bot access, 18 user agents (local)"
for p in / /hotel-financing /rates; do
  BASE_URL="${BASE}" PATH_UNDER_TEST="$p" bash scripts/bot-check.sh | tail -2
done

step "discovery files"
for p in /robots.txt /sitemap.xml /llms.txt /llms-full.txt /feed.xml /rates.json /rates.csv /openapi.json /agent-index.json /developers; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "${BASE}${p}")
  [ "$code" = "200" ] || { echo "FAIL ${p}: HTTP ${code}" >&2; exit 1; }
done
echo "all 200"

# Markdown twins (200, text/markdown, H1, and line-by-line parity with the
# HTML page so a twin can never say something its page does not), plus an MCP
# initialize + tools/list round trip. See geo/12-agent-access.md.
step "agent access: Markdown twins, parity with HTML, MCP (local)"
node scripts/agent-access-check.mjs "${BASE}"

printf '\nGEO-CHECK PASS\n'
