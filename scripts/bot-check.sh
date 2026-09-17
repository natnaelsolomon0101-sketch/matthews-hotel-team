#!/usr/bin/env bash
#
# bot-check.sh — verifies every AI/search bot user-agent we allow in
# robots.ts actually gets served the real page: HTTP 200, no bot-challenge
# page, and a body within 10% of what a normal browser gets.
#
# This does NOT prove a crawler will fetch the site — it proves nothing in
# front of the site (Vercel Firewall / Bot Protection / Attack Challenge
# Mode) is silently blocking or challenging these UAs. See
# geo/02-crawl-index.md for the exact Vercel dashboard settings this
# depends on (they cannot be set from code).
#
# Usage:
#   ./scripts/bot-check.sh                 # checks $BASE_URL (default prod)
#   BASE_URL=https://preview... ./scripts/bot-check.sh
#   PATH_UNDER_TEST=/listings ./scripts/bot-check.sh
#
# Exit code: 0 if every UA passes, non-zero on any failure.

set -uo pipefail

BASE_URL="${BASE_URL:-https://matthewshotelmarkets.com}"
PATH_UNDER_TEST="${PATH_UNDER_TEST:-/}"
TARGET_URL="${BASE_URL%/}${PATH_UNDER_TEST}"
BODY_DIFF_TOLERANCE_PCT="${BODY_DIFF_TOLERANCE_PCT:-10}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"
UA_FILE="$REPO_ROOT/geo/01-bot-uas.txt"

CHROME_UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"

# Bot-challenge / block-page fingerprints. Not exhaustive, but catches the
# common managed-challenge and WAF block pages (Vercel, Cloudflare, generic).
CHALLENGE_PATTERNS='Just a moment\.\.\.|Attention Required!|cf-challenge|Checking your browser|Access Denied|Vercel Security Checkpoint|__vercel_challenge|Please verify you are a human|captcha'

# ---------------------------------------------------------------------------
# UA list. Prefers geo/01-bot-uas.txt (Agent 1's output, format `TOKEN|UA`)
# when present, so this script stays in sync with whatever recon confirmed
# live. Falls back to the embedded list below, sourced from each operator's
# own docs (fetch dates + URLs in geo/02-crawl-index.md):
#   Googlebot            developers.google.com/search/docs/crawling-indexing/google-common-crawlers
#   GoogleOther          developers.google.com/search/docs/crawling-indexing/google-common-crawlers (exact UA string unverified — flagged in report)
#   Bingbot              bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0
#   OAI-SearchBot        developers.openai.com/api/docs/bots
#   ChatGPT-User         developers.openai.com/api/docs/bots
#   GPTBot               developers.openai.com/api/docs/bots
#   Claude-SearchBot     support.claude.com/en/articles/8896518
#   Claude-User          support.claude.com/en/articles/8896518
#   ClaudeBot            support.claude.com/en/articles/8896518
#   PerplexityBot        docs.perplexity.ai/guides/bots (exact string verified)
#   Perplexity-User      docs.perplexity.ai/guides/bots (exact string verified)
#   DuckAssistBot        duckduckgo.com/duckduckgo-help-pages/results/duckassistbot
#   Applebot             support.apple.com/en-us/119829 (exact string verified)
#   MistralAI-User       docs.mistral.ai/robots (exact string verified)
#   meta-externalfetcher developers.facebook.com — UA string NOT independently verified, flagged in report
#   Meta-ExternalAgent   developers.facebook.com — UA string NOT independently verified, flagged in report
#   CCBot                commoncrawl.org/ccbot
#   Amazonbot            developer.amazon.com/amazonbot
#
# Deliberately EXCLUDED from HTTP fetch testing: Google-Extended and
# Applebot-Extended. Both are "training use" control tokens layered on top
# of Googlebot's / Applebot's own crawl — neither operator documents an
# independent crawler process that fetches pages under that UA string, so
# there's nothing distinct to bot-check here. Their robots.txt group
# membership is verified by reading src/app/robots.ts, not by HTTP fetch.
EMBEDDED_UAS='Googlebot|Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
Bingbot|Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)
OAI-SearchBot|Mozilla/5.0 (compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot)
Claude-SearchBot|Mozilla/5.0 (compatible; Claude-SearchBot/1.0; +https://support.claude.com/en/articles/8896518)
PerplexityBot|Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)
DuckAssistBot|Mozilla/5.0 (compatible; DuckAssistBot/1.2; +http://duckduckgo.com/duckassistbot.html)
Applebot|Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15 (Applebot/0.1; +http://www.apple.com/go/applebot)
ChatGPT-User|Mozilla/5.0 (compatible; ChatGPT-User/1.0; +https://openai.com/bot)
Claude-User|Mozilla/5.0 (compatible; Claude-User/1.0; +https://support.claude.com/en/articles/8896518)
Perplexity-User|Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Perplexity-User/1.0; +https://perplexity.ai/perplexity-user)
MistralAI-User|Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; MistralAI-User/1.0; +https://docs.mistral.ai/robots)
meta-externalfetcher|meta-externalfetcher/1.1 (+https://developers.facebook.com/docs/sharing/webmasters/crawler)
GPTBot|Mozilla/5.0 (compatible; GPTBot/1.4; +https://openai.com/gptbot)
ClaudeBot|Mozilla/5.0 (compatible; ClaudeBot/1.0; +https://support.claude.com/en/articles/8896518)
GoogleOther|Mozilla/5.0 (compatible; GoogleOther)
CCBot|CCBot/2.0 (+https://commoncrawl.org/faq/)
Amazonbot|Mozilla/5.0 (compatible; Amazonbot/0.1; +https://developer.amazon.com/support/amazonbot) Chrome/119.0.6045.214 Safari/537.36
Meta-ExternalAgent|meta-externalagent/1.1 (+https://developers.facebook.com/docs/sharing/webmasters/crawler)'

# Agent 1's actual geo/01-bot-uas.txt format (confirmed 2026-09-17): blank-line
# separated blocks, each a `# Label (notes) — source: URL` comment (optionally
# followed by more wrapped comment lines) then one bare UA string line. Parse
# each block's first comment line for a label (text up to " (", " —", or
# "UNVERIFIED") and its last non-comment line as the UA string. Falls back to
# treating a line as already-parsed `TOKEN|UA` if no comment precedes it (so
# this still works if the file's format ever simplifies to that).
parse_bot_uas_file() {
  awk '
    BEGIN { RS=""; FS="\n" }
    {
      label=""; ua="";
      for (i=1;i<=NF;i++) {
        line=$i;
        if (line ~ /^#/) {
          if (label=="") {
            sub(/^# */,"",line);
            n=split(line, parts, / \(| —|UNVERIFIED/);
            label=parts[1];
            gsub(/ +$/,"",label);
          }
        } else if (line != "") {
          ua=line;
        }
      }
      if (label=="" && ua=="" ) next;
      if (label=="" && index($0,"|")>0) { print $0; next }
      # Skip the "Chrome (control, not a bot)" baseline row: bot-check.sh has
      # its own baseline already and Chrome is not a token in robots.ts.
      if (label!="" && ua!="" && label!="Chrome") print label "|" ua;
    }
  ' "$1"
}

if [[ -f "$UA_FILE" ]]; then
  echo "[bot-check] using UA list from $UA_FILE"
  UA_SOURCE="$(parse_bot_uas_file "$UA_FILE")"
  # geo/01-bot-uas.txt (Agent 1, recon-auditor) doesn't cover every token this
  # site's robots.ts allows (as of 2026-09-17 it's missing MistralAI-User and
  # meta-externalfetcher). Backfill from the embedded list so bot-check still
  # covers every allowed token even when the recon file is incomplete.
  while IFS='|' read -r etoken eua; do
    [[ -z "$etoken" ]] && continue
    if ! grep -q "^${etoken}|" <<< "$UA_SOURCE"; then
      UA_SOURCE="$UA_SOURCE
${etoken}|${eua}"
    fi
  done <<< "$EMBEDDED_UAS"
else
  echo "[bot-check] $UA_FILE not found (Agent 1 output not present yet) — using embedded fallback list"
  UA_SOURCE="$EMBEDDED_UAS"
fi

fetch() {
  local ua="$1"
  local tmp
  tmp="$(mktemp)"
  local code
  code=$(curl -s -L --max-redirs 5 -A "$ua" -o "$tmp" -w "%{http_code}" "$TARGET_URL")
  local bytes
  bytes=$(wc -c < "$tmp" | tr -d ' ')
  local body
  body=$(cat "$tmp")
  rm -f "$tmp"
  printf '%s\t%s\t%s\n' "$code" "$bytes" "$body"
}

echo "[bot-check] target: $TARGET_URL"
echo "[bot-check] baseline: Chrome desktop UA"
baseline_result="$(fetch "$CHROME_UA")"
baseline_code="$(echo "$baseline_result" | cut -f1)"
baseline_bytes="$(echo "$baseline_result" | cut -f2)"

if [[ "$baseline_code" != "200" ]]; then
  echo "[bot-check] FATAL: baseline Chrome fetch returned HTTP $baseline_code, not 200. Aborting — fix the site before checking bots."
  exit 1
fi
if [[ "$baseline_bytes" -eq 0 ]]; then
  echo "[bot-check] FATAL: baseline Chrome fetch returned an empty body. Aborting."
  exit 1
fi
echo "[bot-check] baseline OK: HTTP $baseline_code, $baseline_bytes bytes"
echo ""

printf '%-22s %-6s %-10s %-8s %s\n' "UA TOKEN" "HTTP" "BYTES" "DIFF%" "RESULT"
printf '%-22s %-6s %-10s %-8s %s\n' "--------" "----" "-----" "-----" "------"

failures=0
total=0

while IFS='|' read -r token ua; do
  [[ -z "$token" ]] && continue
  total=$((total + 1))
  # A small gap between requests. This script triggered Vercel's own
  # platform-level bot mitigation ("Vercel Security Checkpoint",
  # `x-vercel-mitigated: challenge`) against its OWN testing traffic during
  # development on 2026-09-17, after being rerun several times in quick
  # succession (each run = ~18 rapid non-browser requests). See
  # geo/02-crawl-index.md for the full incident note. Do not remove this
  # sleep to "speed up" the script, and do not rerun this script repeatedly
  # in a short window against production — space runs out (the GitHub
  # Action's weekly cron is the intended cadence).
  sleep 1
  result="$(fetch "$ua")"
  code="$(echo "$result" | cut -f1)"
  bytes="$(echo "$result" | cut -f2)"
  body="$(echo "$result" | cut -f3-)"

  status="PASS"
  reason=""

  if [[ "$code" != "200" ]]; then
    status="FAIL"
    reason="HTTP $code"
  elif echo "$body" | grep -qiE "$CHALLENGE_PATTERNS"; then
    status="FAIL"
    reason="challenge page detected"
  fi

  diff_pct=0
  if [[ "$baseline_bytes" -gt 0 ]]; then
    diff_pct=$(( (bytes > baseline_bytes ? bytes - baseline_bytes : baseline_bytes - bytes) * 100 / baseline_bytes ))
  fi
  if [[ "$status" == "PASS" && "$diff_pct" -gt "$BODY_DIFF_TOLERANCE_PCT" ]]; then
    status="FAIL"
    reason="body diff ${diff_pct}% > ${BODY_DIFF_TOLERANCE_PCT}% tolerance"
  fi

  printf '%-22s %-6s %-10s %-8s %s\n' "$token" "$code" "$bytes" "${diff_pct}%" "$status${reason:+ ($reason)}"

  if [[ "$status" == "FAIL" ]]; then
    failures=$((failures + 1))
  fi
done <<< "$UA_SOURCE"

echo ""
echo "[bot-check] $((total - failures))/$total UAs passed."

if [[ "$failures" -gt 0 ]]; then
  echo "[bot-check] FAILED. See rows marked FAIL above. Likely causes: Vercel Firewall Bot Protection / Attack Challenge Mode / a managed ruleset is challenging one of these tokens, or Deployment Protection is on. Check the Vercel dashboard settings listed in geo/02-crawl-index.md."
  exit 1
fi

echo "[bot-check] All bot UAs reached $TARGET_URL cleanly."
exit 0
