# geo/requests.md

Append-only. Each agent adds requests for work outside their own lane. Do not overwrite other agents'
entries.

---

## From Agent 4 (query-intel-and-tracking), 2026-09-17

**For Agent 10 (qa-integrator) — fix `scripts/llm-citation-check.ts` (outside `geo/**`, not my lane):**
1. Its hardcoded `PROMPTS` array includes `"Who closed the Walden Retreats Hill Country deal?"`.
   Walden Retreats is a different, unrelated project (a glamping resort listing site) — it is not a
   Matthews Hotel Markets deal and does not appear in `src/lib/data/closed.ts`. This looks like a
   cross-project mix-up from the 2026-05-10 sprint. Remove it; do not re-add it. Real closed-deal
   brand names for citation-check prompts, if you want a replacement, are in `src/lib/data/closed.ts`
   (e.g., "26-Hotel Acquisition Portfolio", "Courtyard by Marriott Lake Charles", "Hampton Inn
   Portfolio Atlanta").
2. Its `COMPETITOR_DOMAINS` list includes `"hunterhotels.com"` — verified via WebSearch (2026-09-17)
   that this domain does **not** resolve to Hunter Hotel Advisors (the hospitality investment-sales
   firm); it's an unrelated South African luxury hotel group. The real domain appears to be
   `hunterhotels.net` per a 2026-09-17 WebSearch, but I did not independently confirm this beyond one
   search result — verify before swapping it in.
3. Its `PROMPTS` list (30 prompts) and `scripts/rank-check.ts`'s `QUERIES` list (30 queries) only cover
   brokerage/investment-sales intent from the prior sprint. Neither has any of this pass's
   financing/refinance/valuation/underwriting/1031 prompts (`geo/04-queries.csv`, ~150 new rows across
   8 clusters). Recommend extending both lists from `geo/tracking/prompts.csv` (the 60-prompt curated
   subset built for exactly this purpose) rather than hand-picking a new set.

**For whoever owns `src/lib/data/team.ts` (likely Agent 3 entity-schema-engineer) — factual check:**
`geo/00-repo-map.md` states `/team/[slug]` builds exactly three people (luke-thompson, miles-cortez,
nate-solomon), matching the mission brief's "no invented people" rule. I greped `team.ts` directly and
found **22** slugs (the three above plus mitchell-glasson, francisco-nacorda, dustin-robinett,
mabelle-perez, david-loving, andrew-senatore, hunter-davis, alfonso-garcia, ash-singh, chris-beavers,
dominic-henderson, elias-zakas, jake-senatore, julio-leyva, luke-whittaker, ritik-patel,
ryan-kawai-sanchez, youssef-alkalabani, jordan-beletz). I did not investigate further (out of my
lane) — flagging the discrepancy between the repo-map's claim and the actual file so whoever owns
`/team` content/author-boxes resolves which is authoritative before Agent 5 or Agent 9 cites any name
in an author box or outreach draft. My `geo/04-queries.csv` and `geo/04-queries.md` only ever name the
three from the repo-map (Luke Thompson, Miles Cortez, Nate Solomon) to stay on the safe side of the
"no invented people" rule.

**For Agent 2 (crawl-index-engineer):**
The `geo/tracking/RUNBOOK.md` I wrote assumes a way to count AI-crawler hits (GPTBot, ClaudeBot,
PerplexityBot, etc.) per week via Vercel Runtime Logs. I verified against Vercel's own docs
(`https://vercel.com/docs/logs/runtime`, fetched 2026-09-17) that **User-Agent is not a filterable
field** in the Logs sidebar or free-text search (search only matches `message` and `requestPath`) —
it's only visible per-request in the detail pane. Counting bot hits at scale therefore requires
something in your `scripts/bot-check.sh` / middleware work to actually log the UA string into
`console.log` (so it lands in the searchable `message` field), or a Log Drain. If that's already part
of your plan, great — if not, flag it as a gap to Nate rather than letting the runbook silently assume
data that doesn't exist. `geo/01-bot-uas.txt` didn't exist yet when I wrote the runbook (2026-09-17);
I used a fallback list of standard tokens (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-User,
Claude-SearchBot, PerplexityBot, Perplexity-User, Google-Extended, Googlebot, Bingbot, Amazonbot,
Applebot-Extended, meta-externalagent, Bytespider, DuckAssistBot, cohere-ai) — sync the runbook's list
with your actual file once it exists.

**For Agent 10 — HUMAN_QUEUE collision:** the Distress & maturities cluster in `geo/04-queries.md`
(prompts like "How much hotel CMBS debt is maturing in 2026?") is the exact content target for the
unresolved $30B-vs-Trepp's-$18.7B dispute already logged in `HUMAN_QUEUE.md`. Do not let Agent 5 (or
anyone) publish an answer page for that cluster until the number is reconciled — it's the worst-case
failure mode called out in `geo/00-repo-map.md` (an unsourced number on a page we're pushing engines
to cite).
