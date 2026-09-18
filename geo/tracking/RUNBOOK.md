# geo/tracking/RUNBOOK.md — weekly AI-visibility check (45 minutes)

Built 2026-09-17. This runbook drives the automation that already exists in the repo
(`scripts/llm-citation-check.ts`, `scripts/rank-check.ts`, `.github/workflows/seo-tracking.yml`) — it
does not replace it. Read "Automation status" at the bottom before your first run.

## What you're tracking

Two KPIs, computed per engine, per week, from `geo/tracking/log-template.csv`:
- **Brand-mention rate** = (rows this week where `brand_mentioned = Y`) / (rows checked this week), per engine.
- **Citation rate** = (rows this week where `site_cited = Y`) / (rows checked this week), per engine.

The 60-prompt roster lives in `geo/tracking/prompts.csv` (10 brand, 20 category/vendor, 20
informational, 10 local/market — see `geo/04-queries.md` for how these were picked). You cannot run
all 60 prompts across all 6 engines every week inside a 45-minute budget (that's 360 checks). Instead:

**Rotation: 6 prompts/week x 6 engines = 36 checks/week, full 60-prompt roster cycles every 10 weeks.**
Take `geo/tracking/prompts.csv` rows in file order. Week 1 = rows 1-6, week 2 = rows 7-12, ... week 10
= rows 55-60, then wrap back to row 1 for week 11. Write the week number and date range at the top of
each week's log block so you can tell which slice you're on.

## The 45 minutes

**0:00-0:05 — Setup.**
- Open a fresh **logged-out or private/incognito window** for each of the 6 engines (do this once per
  engine at the top of the session, not per prompt — an assistant's answer can change based on your
  logged-in history, so logged-out is the closer proxy for what a new prospect sees):
  1. ChatGPT — chatgpt.com, confirm **web search is ON** (the globe/search toggle, or just ask a
     question that requires current info to confirm it searched).
  2. Claude — claude.ai, confirm **web search is ON** in the tools/settings.
  3. Gemini — gemini.google.com, default settings (no toggle needed; Gemini web-searches by default).
  4. Perplexity — perplexity.ai, default "Auto" or "Pro" search mode, logged out if possible.
  5. Copilot — copilot.microsoft.com, default web-grounded mode.
  6. Google AI Mode — google.com, click "AI Mode" tab (not the AI Overview snippet on regular results —
     AI Mode is the dedicated conversational tab).
- Create this week's screenshot folder: `geo/tracking/screenshots/YYYY-MM-DD/` (one folder per run
  date, e.g. `geo/tracking/screenshots/2026-09-22/`). This folder is gitignored-worthy but not
  required in the repo — keep screenshots locally or in a Nate-side folder if you don't want binary
  files in git history; note in your weekly log entry where they live if not in the repo.

**0:05-0:35 — Run the 6 prompts x 6 engines (36 checks, ~50 seconds each).**
For each of the 6 prompts this week, in each of the 6 engines:
1. Paste the **exact prompt text** from `prompts.csv` — same wording every week, no rephrasing. This
   is the only way week-over-week comparison means anything.
2. Screenshot the full answer (`screenshots/YYYY-MM-DD/<engine>-<prompt-slug>.png`).
3. Scan the answer text and any citation/source list for:
   - `brand_mentioned`: does the answer say "Matthews Hotel Markets" or "Matthews" in a way that's
     clearly this firm (not a different Matthews)? Y/N.
   - `site_cited`: does the answer link to or cite `matthewshotelmarkets.com` (in-text link, footnote,
     or source panel)? Y/N. Note `cited_url` (the exact URL) and `position_in_answer` (1 = first
     source cited, 2 = second, etc.; leave blank if not cited).
   - `competitors_named`: which competitor firms/domains appear (HVS, Hunter Hotel Advisors, Marcus &
     Millichap, CBRE Hotels, JLL Hotels, Berkadia, Northmarq, LoopNet, Crexi, etc.) — comma-separated.
   - `answer_summary`: ≤20 words, what the engine actually said.
4. Append one row to `geo/tracking/log-template.csv` (copy the file forward each week rather than
   overwriting — keep history in one growing CSV, or start a new dated file
   `geo/tracking/log-2026-W38.csv` per week if you prefer one-file-per-week; pick one convention and
   stick to it, noted here: **default is one growing file, `geo/tracking/log-template.csv` itself
   becomes the running log** once you start filling it in).

**0:35-0:40 — Bing Webmaster Tools + Google Search Console (5 minutes, monthly depth on week 1 of
each month, quick glance other weeks).**
- **Google Search Console** (property: `matthewshotelmarkets.com`, per `HUMAN_QUEUE.md` this needs
  DNS-TXT verification if not done yet — check first):
  - Performance report, filter Query contains "hotel loan", "hotel broker", "sell hotel", and the
    brand query "Matthews Hotel Markets". Note impressions/clicks trend, not just a snapshot.
  - Search Console does not currently break out "AI Overview" impressions as a separate row type in
    the standard Performance report UI — if Google has since added an AI-features filter under
    Search Appearance, check for it and note the exact filter name here once confirmed; until then,
    log "not exposed in GSC UI as of <date checked>" rather than guessing.
- **Bing Webmaster Tools** (property: `matthewshotelmarkets.com`): Search Performance report, same
  query filters as above. Bing indexing matters disproportionately here because **ChatGPT search and
  Microsoft Copilot both draw from the Bing index** — this is the highest-leverage non-Google check on
  the list.

**0:40-0:45 — Compute KPIs + commit.**
- For this week's 36 rows: brand-mention rate and citation rate per engine (6 numbers each, 12 total).
- Append a one-paragraph summary at the top of `geo/tracking/log-template.csv`'s companion notes (or a
  running `geo/tracking/weekly-summary.md` if the paragraph gets long — create it the first time you
  need it).
- Commit: `git add geo/tracking/ && git commit -m "geo(tracking): week of <date> manual log"`.

## Vercel Logs: counting AI-bot crawl hits per week

**Verified against Vercel's own docs** (`https://vercel.com/docs/logs/runtime`, fetched 2026-09-17):
the Runtime Logs sidebar lets you filter by `route`, `requestPath`, `requestType`, `level`, `resource`,
`host`, `deployment`, `method`, `cache`, `status`, `environment`, `branch` — **User-Agent is not one of
the filterable fields**, and the main search box's free-text matching is explicitly documented as
"limited to the `message` and `requestPath` fields." User-Agent is only visible per-request in the
detail pane when you click into an individual log row ("Request User Agent" field).

**Practical consequence:** you cannot type `GPTBot` into the Logs search bar and get a count unless
the bot's user-agent string also appears in the `message` field — i.e., unless something in the
request pipeline (middleware, a function) actually `console.log`s the incoming User-Agent. **This
depends on Agent 2's crawl-index-engineer work** (`scripts/bot-check.sh`, robots/sitemap routes). If
Agent 2 has added UA logging to middleware, the filter expression is:

```
Search box: GPTBot
Sidebar filter: Resource = Routing Middleware  (or Vercel Functions, depending on where the log line was added)
Timeline: Past 7 days
```

Repeat once per bot token from `geo/01-bot-uas.txt` (Agent 2's output file — **check whether it exists
yet**; if not, use this fallback list of standard AI-crawler UA tokens and flag the gap to Agent 2 via
`geo/requests.md`): `GPTBot`, `ChatGPT-User`, `OAI-SearchBot`, `ClaudeBot`, `Claude-User`,
`Claude-SearchBot`, `PerplexityBot`, `Perplexity-User`, `Google-Extended`, `Googlebot`, `Bingbot`,
`Amazonbot`, `Applebot-Extended`, `meta-externalagent`, `Bytespider`, `DuckAssistBot`, `cohere-ai`.

**If no UA logging exists at all:** Vercel's dashboard cannot give you a bot-hit count today. The
options, in order of effort: (1) ask Agent 2 to add a one-line `console.log` of the UA in
`middleware.ts` gated to only log when the UA matches a known bot regex (cheap, keeps log volume
sane); (2) set up a Log Drain (`https://vercel.com/docs/drains`) to a place you can `grep`; (3) skip
this metric for now and rely on GSC/Bing crawl-stats reports instead, which do break out crawler
identity server-side without any app changes. **Log this limitation in your first weekly run rather
than silently skipping it** — Nate should know this number isn't available yet, not assume it's zero.

## Automation status — read before assuming you need to do this by hand every week

Two scripts already exist from the 2026-05-10 sprint and are wired into
`.github/workflows/seo-tracking.yml`:

- **`scripts/rank-check.ts`** — runs weekly (Mondays 9am UTC via the workflow's cron). Uses SerpAPI if
  `SERPAPI_KEY` is set, otherwise falls back to a free DuckDuckGo HTML scrape. **Usable as-is.** It
  checks 30 queries against `TARGET_DOMAIN = "matthewshotelmarkets.com"`, which matches the real
  domain in `src/app/layout.tsx`'s `SITE_URL` constant — no domain drift. Output:
  `reports/rank-history.jsonl` + `reports/rank-latest.md`. **Gap:** its 30-query list only covers
  brokerage/investment-sales queries from the prior sprint — none of this pass's financing/refinance/
  valuation queries. Flagged in `geo/requests.md` for Agent 10 to extend `QUERIES` in that file (not
  this agent's lane — it's outside `geo/**`).
- **`scripts/llm-citation-check.ts`** — runs monthly (1st of month, 10am UTC). Calls Perplexity, OpenAI,
  and Anthropic APIs directly (needs `PERPLEXITY_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY` as
  GitHub secrets — confirm with Nate whether these exist; the script degrades gracefully and logs
  "skipped (key missing)" per engine if not, it does not fail the workflow). **Usable, with one real
  bug:** its hardcoded `PROMPTS` array includes `"Who closed the Walden Retreats Hill Country deal?"`
  — Walden Retreats is an unrelated Matthews-adjacent project (a glamping resort site), not a Matthews
  Hotel Markets deal in `src/lib/data/closed.ts`. This is a fabricated/wrong prompt carried over from
  the prior sprint's confusion and should be removed. Flagged in `geo/requests.md` for Agent 10 (this
  script is outside `geo/**`, not this agent's lane to edit). **Also note:** this script only covers
  ChatGPT/Claude/Perplexity via API — it cannot check Gemini, Copilot, or Google AI Mode (no public
  API for those as of this writing), which is exactly why the manual 6-engine weekly log above still
  matters even with this automation running.
- **`.github/workflows/seo-tracking.yml`** also has `schema` and `links` jobs
  (`scripts/schema-validate.ts`, `scripts/internal-links-audit.ts`), dispatched manually, not on a
  schedule — outside this agent's scope (Agent 3/Agent 10 territory), noted here only so Nate knows
  they exist and are triggerable via `workflow_dispatch`.

**Bottom line: the automation is real and mostly usable.** This runbook's manual weekly log is the
part automation can't do (Gemini/Copilot/Google AI Mode have no API), plus GSC/Bing, plus the Vercel
bot-hit count once Agent 2 ships UA logging. Don't rebuild `rank-check.ts` or
`llm-citation-check.ts` from scratch — extend them (Agent 10's call, since they're outside `geo/**`).
