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

---

## From Agent 3 (entity-schema-engineer), 2026-09-17

### Answer to Agent 4's roster question (resolved, no action needed)
Agent 4 flagged that `team.ts` has 22 slugs, not 3. Confirmed and resolved. The roster is **22 real
people**; exactly **3** (`luke-thompson`, `miles-cortez`, `nate-solomon`) have `hasBio: true` and get
`/team/[slug]` pages. The other 19 are the wider Matthews hospitality bench and render on `/team` as
name + title + office + email + phone cards. `geo/03-entity.md` §3a has the full rule.
**Binding for Agents 5, 6, 7, 9 and 10: an author box, a byline, or a "Reviewed by" line may only
name one of the three with a published profile.** There is no page to link to for the other 19.

### For Agent 2 (crawl-index-engineer) — llms.txt copy
Please use these exact strings in `llms.txt` / `llms-full.txt`. They are identical to
`Organization.description`, the `/about` lead paragraph, the `/team` lead paragraph, and the footer.
Consistency across surfaces is the whole point, so please do not reword.

Long (the `>` summary line and the "Who we are" lead):
```
Matthews Hotel Markets is the hospitality investment sales and capital markets team of Matthews Real Estate Investment Services, based at 515 Congress Ave. in Austin, Texas. The team sells hotels from $2 million and places hotel debt from $5 million, nationwide.
```

Short:
```
Matthews Hotel Markets is the hospitality investment sales and capital markets team of Matthews Real Estate Investment Services, based in Austin, Texas.
```

Three corrections `llms.txt` needs while you are in there:
1. **Drop "Founded as a dedicated hospitality vertical in 2024."** No source exists anywhere in the
   repo and I could not verify it. `/about` now says plainly that we do not publish a founding year.
   Leaving the claim in `llms.txt` while `/about` disclaims it is the worst of both worlds.
2. **"670+ hotel transactions" has no source either.** `src/lib/data/closed.ts` has 38 published
   deals. Either source the 670 or cut it. It is also in `src/app/opengraph-image.tsx` and
   `src/lib/data/services.ts` (Agent 10: see below).
3. **The Denver line.** `llms.txt` asserts "a Denver presence". That is true (Miles Cortez III,
   (303) 653-2963), but there is no street address in `offices.ts` (it literally reads "Confirm
   address with Miles"). Keep the presence claim, do not imply a street office.
4. `llms.txt` says platform cumulative **$84.3B** while `HomeWhy.tsx` says **$88.37B**. Unresolved.
   Agent 10 owns the reconciliation; do not pick one silently.

Also please add `/about` to `llms.txt`'s "Key URLs" list. It is new in this pass and it is the page
that answers "who are they" in one lift.

### For Agent 8 (data-and-rate-sheet) — `Dataset` node for `/rates`
`src/lib/entity.ts` is the entity source of truth and already exports everything a `Dataset` node
needs to attribute correctly. When `/rates` exists, build its node like this and pass it through
`<JsonLd graph={[...]} />` (`src/components/seo/JsonLd.tsx`) rather than hand-writing a script tag,
so the page still emits exactly one `@graph`:

```ts
import JsonLd from "@/components/seo/JsonLd";
import { ID, SITE_URL, breadcrumb, webPage } from "@/lib/entity";

const url = `${SITE_URL}/rates`;
const graph = [
  webPage({ url, name: "...", description: "...", mainEntity: `${url}#dataset`, dateModified: "YYYY-MM-DD" }),
  {
    "@type": "Dataset",
    "@id": `${url}#dataset`,
    name: "Matthews Hotel Markets Rate Sheet",
    description: "...",
    url,
    creator: { "@id": ID.org },
    publisher: { "@id": ID.org },
    license: "...",                 // only if you actually set one
    isAccessibleForFree: true,
    dateModified: "YYYY-MM-DD",
    temporalCoverage: "YYYY-MM",
    variableMeasured: [/* PropertyValue per column, with unitText */],
    distribution: [
      { "@type": "DataDownload", encodingFormat: "application/json", contentUrl: `${SITE_URL}/rates.json` },
      { "@type": "DataDownload", encodingFormat: "text/csv", contentUrl: `${SITE_URL}/rates.csv` },
    ],
    citation: [/* CreativeWork per primary source */],
  },
  breadcrumb([{ name: "Rates", path: "/rates" }]),
];
```
`src/app/research/mhi/[quarter]/page.tsx` has a working `Dataset` node to copy the shape from.
Every field must mirror something visible on `/rates`. Do not publish licensed STR/CoStar tables
through `variableMeasured` or `distribution`.

### For Agent 10 (qa-integrator)

1. **`/about` is not in the site header nav.** `src/components/layout/SiteHeader.tsx` is outside my
   lane. It is in the footer (Company column). Please add it to the header, after or near "Team".
2. **`/listings/walden-retreats-hill-country` fails to prerender.** Its built HTML carries
   `id="__next_error__"` and no JSON-LD, so the route ships an error shell. **This is pre-existing**:
   I stashed this branch's changes, rebuilt from the base commit, and it fails identically. It is
   also the only route in the whole site that fails `scripts/schema-validate.ts --build`
   (119/119 of the rest pass). Worth a P1 — it is a live listing page. Separately, Agent 4 flagged
   that "Walden Retreats Hill Country" may be a cross-project mix-up; if so, removing the listing
   fixes both.
3. **No `/offices` index route exists**, but `/offices/austin` and `/offices/denver` do, and
   `vercel.json` 301s `/austin` and `/denver` into them. I removed the "Offices" breadcrumb crumb
   that pointed at the missing `/offices`. Either add an `/offices` index or leave it as is; do not
   re-add a crumb to a 404.
4. **`/services` is a 307 (`permanent: false`) in `vercel.json`**, and `/services/[slug]` breadcrumbs
   point at it. It works, but a temporary redirect as a breadcrumb parent is weak. Consider an
   `/services` index page, or make the redirect permanent.
5. **Unsourced numbers still on the site, outside my lane:**
   - `src/components/sections/home/HomeWhy.tsx` line 39: `"$88.37B closed."` vs `llms.txt`'s $84.3B.
   - `src/components/sections/home/HomeStats.tsx` line 42: `"As of Q4 2021"` in September 2026.
   - `src/components/sections/home/HomeFeatured.tsx` line 55: `"Last refresh Q1 2026"` in September 2026.
   - `src/app/opengraph-image.tsx` line 74 and `src/lib/data/services.ts` line 97: `"670+"` hotels,
     no source; `closed.ts` publishes 38 deals.
   I removed the unsourced `"$84.3B closed across 30+ offices"` from the root layout's global meta
   description and replaced it with the boilerplate, which is fully backed. The rest are yours.
6. **Footer "Press" link still points at `/insights`** and there is still no `/press` route. Not my
   lane (`SiteFooter` COLUMNS), flagging it so it does not get lost.
7. **Em-dashes in user-facing copy.** I cleared them from `src/lib/seo/faq.ts` (FAQ answers, which
   are both visible and in `FAQPage` markup) and from the `/team/[slug]` metadata title. They remain
   in `src/lib/data/markets.ts`, `brands.ts`, `closed.ts`, `insights-articles/*` and several `home/`
   components. Nate flags em-dashes as an AI tell. Worth a sweep before the PR.
8. **Entity facts are now single-sourced in `src/lib/entity.ts`.** Any future copy change to the
   brand name, parent name, address, email, LinkedIn, the boilerplate sentence, or `areaServed` goes
   there first; page components import the constant. `src/components/seo/JsonLd.tsx` is the only
   place a JSON-LD script tag is written. Please keep it that way in review.
9. **Validation command for CI**, offline, no server:
   ```
   npm run build && npx tsx scripts/schema-validate.ts --build
   ```
   It exits non-zero on any dangling `@id`, duplicate `@id`, missing entity node, or a page with more
   than one `ld+json` block. Currently 119/119 valid.
