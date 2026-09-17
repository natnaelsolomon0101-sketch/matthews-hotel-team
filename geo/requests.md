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

---

## From Agent 1 (recon-auditor), 2026-09-17

Full baseline in `geo/01-baseline.md` / `geo/01-baseline.json`. Two items not already covered by
Agent 3's or Agent 4's entries above:

**For Agent 10 — `SiteHeader.tsx` nav has no owner, and it links off-domain to the site's own rate sheet:**
`src/components/layout/SiteHeader.tsx` (not in any agent's file-ownership list) has a primary-nav
item `{ href: "https://www.matthewsratesheet.info", label: "Rate Sheet" }`. I fetched it: it's real,
live, Vercel-hosted, genuinely Matthews-branded content ("Matthews Hotel Capital Markets · Debt
Financing Rate Sheet," footer says "Matthews Real Estate Investment Services™"). It is not broken or
hijacked. But it's a `.info` domain with no visible brand link to matthewshotelmarkets.com or
matthews.com, linked from every page's primary nav — exactly the kind of link that reads as
untrustworthy on a financial-services site, and it means the site's flagship original-data asset
(the thing Spec 5.1 says should make an engine name the brand) currently accrues domain authority to
`matthewsratesheet.info`, not `matthewshotelmarkets.com`. Once Agent 8 ships `/rates` on-domain,
someone needs to (a) repoint this nav link internally and (b) confirm with Nate whether
`matthewsratesheet.info` is a property he wants to keep, fold in with a 301, or retire. Nobody owns
`SiteHeader.tsx` today — please assign it.

**Context for whoever chases the Walden Retreats listing thread (Agent 4 flagged a cross-project
mix-up; Agent 3 flagged the built HTML error-shells locally):** production, live, right now
(`curl -sD -` against `https://matthewshotelmarkets.com/listings/walden-retreats-hill-country`,
2026-09-17) returns a clean `HTTP/2 307` to `https://walden-retreats-om.vercel.app/` with
`x-vercel-cache: HIT` — i.e. today's deployed build serves a working redirect, not an error shell.
This matches the code as written: `listings.ts` sets `omUrl` on this one listing, and
`listings/[slug]/page.tsx` calls `redirect(listing.omUrl)` before rendering when `omUrl` is set —
intentional, documented behavior, not a bug, and it's the only listing of 21 with `omUrl` set. If
Agent 3's local rebuild produced an error shell instead, that's either a regression introduced after
the July 18 production build (see staleness note below) or an artifact of the stash/rebuild process
locally — worth a second look before assuming production is broken. Separately, and regardless of
which project it belongs to: any listing with `omUrl` set can never be indexed as
matthewshotelmarkets.com content (the response has no body), so it shouldn't carry a 0.85-priority
image entry in the sitemap as if it were a real content page.

**Production has not been redeployed since 2026-07-18** (confirmed: pre-branch `main` HEAD `a759f67`
committed 2026-07-18 14:27:57 -0500; the live sitemap's fabricated `lastmod` freezes at that exact
build timestamp). Every fix landing on this branch, including Agent 3's and Agent 2's, is invisible
to users, crawlers, and this audit's own "production" checks until Nate deploys. Worth stating
explicitly in the final PR description so nobody assumes a merged PR is a shipped fix.

**Request: Google Search Console + Bing Webmaster Tools access.** My index-status check used the
`WebSearch` tool only (one backend, not verified per-engine). `site:matthewshotelmarkets.com`
surfaced only 2 of 120 sitemap URLs; the exact brand query "Matthews Hotel Markets" ranks
`matthews.com` pages ahead of `matthewshotelmarkets.com` in 7 of 9 results. Both are concerning but
neither is a substitute for real GSC/BWT indexed-count and Core Web Vitals field data. Please get
Nate to share access before the final report claims anything about actual index coverage.

**Competitor citation baseline (`geo/01-competitors.csv`, 20 seed prompts):**
matthewshotelmarkets.com appeared in results for only 8/20 prompts, all brand-anchored. For every
generic/category prompt — including "Hotel brokers in Austin, Texas" (the firm's own HQ city) and
"Who sells boutique hotels in the Texas Hill Country?" (an active listing's own submarket) — it did
not appear at all. This is the baseline Agents 5–9's content work should be measured against.

---

## From Agent 2 (crawl-index-engineer), 2026-09-17

**For Agent 10 (qa-integrator) — reconcile before merge:**
1. **`www.matthewshotelmarkets.com` returns HTTP 200 instead of redirecting to the apex.**
   `curl -I https://www.matthewshotelmarkets.com/` returns 200 with an identical `etag` to
   `https://matthewshotelmarkets.com/` — duplicate content on two hosts, live in production today.
   This is a Vercel Domains-tab setting, not something `vercel.json`'s `redirects` array reliably
   fixes (and `redirects` is outside my ownership lane per the repo map — I only have `headers`,
   append-only). Filed as a "Nate must do" dashboard action in `geo/02-crawl-index.md` §8/checklist.
   If you'd rather fix it in code, a `redirects` entry matching on the `www` host would work, but
   confirm with Nate first since it's outside my lane.
2. **`llms.txt` no longer exists as a static file.** I replaced `public/llms.txt` with a generated
   route (`src/app/llms.txt/route.ts`, content in `src/lib/llms-content.ts`) per the mission brief.
   I stripped every unsourced claim the old file carried (full list with reasoning in
   `geo/02-crawl-index.md` §6: the $84.3B/$88.37B conflict, "founded 2024," "670+ transactions,"
   "33,500+ transactions," "1M+ relationships," "30+ offices"). None of these are re-added anywhere
   in my output. If/when the platform-totals dispute gets reconciled to one sourced number, that
   number should go back into `src/lib/entity.ts` (or wherever Agent 3 wants a single source) so
   `llms.txt` picks it up automatically rather than being hand-edited again.
3. **RSS feed (`/feed.xml`) inherits 7 em-dash characters** from existing `insights-articles/*.ts`
   body content when it re-publishes those articles' full text. Not something I authored or can fix
   in my lane (content data, not crawl/index plumbing) — flagging for whoever does the em-dash sweep
   Agent 3 already flagged above.
4. **`geo/05-architecture.md` landed mid-session, after I'd already captured the sitemap's per-file
   `lastModified` constants.** I left a `// TODO(agent-10)` in `src/app/sitemap.ts` for the hub/spoke/
   rates/tools routes it defines (`/hotel-financing/*`, `/sell-a-hotel/*`, `/rates`, `/data/*`) since
   none of them exist in the codebase yet as of this write. Whoever lands those routes: add sitemap
   entries with a real date (git log or a data-module field), not `new Date()` — that's the exact bug
   this pass fixed everywhere else.
5. **Follow-up for full sitemap accuracy:** add a real `lastUpdated` field to the `Listing`,
   `ClosedDeal`, `TeamMember`, `Market`, `Brand`, `Service`, and `Office` types (the way `glossary`,
   `mhi`, and `insights` already have one). I used a per-data-file constant (from `git log -1
   --format=%cI`) as an interim fix rather than bulk-editing 40+ entries across data modules with no
   listed owner this sprint — didn't want to risk colliding with other agents' concurrent edits to
   those same files. Per-item dates are the real fix.

**For whoever owns `src/lib/data/team.ts` / office data — not urgent, just noting:** `offices.ts`
Denver entry still has no street address (`"Confirm address with Miles"`). My generated `llms.txt`
now states this explicitly rather than implying a confirmed office — see `geo/02-crawl-index.md` §6
point 6. No action needed unless/until a real address is confirmed.

**For Nate, via whoever writes the final PR description:** the Vercel project serving
`matthewshotelmarkets.com` is not under the `natnaelsolomon0101-sketch` personal Vercel account this
session's CLI is authenticated to (`vercel ls` shows none of the BOV/site projects match). I could not
pull a live preview-deployment URL or check Firewall/Deployment Protection settings directly as a
result — every claim about those in `geo/02-crawl-index.md` §2/§3 is sourced to Vercel's own docs, not
a direct check of this project's actual dashboard state. Nate needs to verify those settings himself,
or share CLI/dashboard access to the correct Vercel scope for a future pass.

---

## From Agent 5 (content-architect), 2026-09-17

Deliverables: `geo/05-architecture.md`, `geo/05-templates.md`, `geo/05-briefs/` (30 Wave 1 briefs +
`_index.md` + `_wave2-stubs.md`). Everything below is outside `geo/**` and therefore a request, not a
change I made.

### 1. For Agent 10 — three `vercel.json` redirects that are defects (architecture §8.3)

`/markets`, `/services` and `/brands` are all `"permanent": false` (307) redirects **to a single
arbitrary child**: `/markets` → `/markets/austin-tx`, `/services` → `/services/investment-sales`,
`/brands` → `/hotels-for-sale/hampton-inn`. No index page exists behind any of them, so three of the
site's four content trees have no root, and a crawler asking for "markets" is handed Austin.

Requested, in this order:
1. Build a real `/markets` index (14 metros grouped by region, MHI summary table) and **remove** the
   `/markets` redirect.
2. Build a real `/services` index (three service lines, one paragraph each) and **remove** the
   `/services` redirect. This also resolves Agent 3's item 4 above, which flagged the same 307 as a
   weak breadcrumb parent.
3. Build a real `/hotels-for-sale` index (9 flags grouped by parent company) and **change** `/brands`
   from a 307-to-Hampton into a **301 → `/hotels-for-sale`**. Agent 4's CSV independently routes 3
   rows to `/hotels-for-sale`, which agrees.

All three are additions plus the removal of a temporary redirect, so **no indexed 301 is disturbed.**

**Explicitly leave alone:** `/sell`, `/sell-my-hotel`, `/buy`, `/financing` (all 301 to
`/services/*`), `/austin`, `/denver`, and the three fabricated-persona 301s. I checked every one of
the 12 redirects against all 35 new slugs. **No new slug collides with any redirect `source`.** One
trap worth writing down: `/sell-my-hotel` (a 301) and `/sell-a-hotel` (a real page) will coexist and
differ by two characters.

### 2. For Agent 10 — the orphan problem, which is bigger than the new clusters

Verified by grep across `src/` on 2026-09-17: **`/glossary`, `/services/*`, `/research` and
`/offices/*` have no inbound internal link from anywhere outside their own route folder.** They are
reachable only from `sitemap.xml`. `SiteHeader.tsx` links six destinations; `SiteFooter.tsx` links
six. Four live hubs with real data behind them, including the Matthews Hotel Index, are invisible to
the internal link graph.

Requested (`SiteHeader.tsx` / `SiteFooter.tsx`, which Agent 1 correctly notes has no owner):
- **Footer:** add an "Answers" column linking `/hotel-financing`, `/sell-a-hotel`, `/hotel-valuation`,
  `/glossary`, `/research`, `/tools`; and a "Services" column linking the three `/services/*` pages
  and `/offices/*`. This alone removes every orphan.
- **Header:** add the three cluster hubs. Proposed final nav: Listings · Sell a Hotel · Financing ·
  Valuation · Research · Team · Contact, with Closed and Insights moving to the footer. **Header nav
  is a design surface, so this is a proposal, not an instruction.** It also needs to absorb Agent 3's
  request to add `/about` and Agent 1's request to repoint the off-domain "Rate Sheet" link once
  Agent 8 ships `/rates`. Those three changes touch the same array; please do them in one pass.

### 3. For Agent 10 — `scripts/internal-links-audit.ts`, exact diff supplied

Architecture §6.5 gives the literal code for both functions. The script today walks
`listings + closed + team + insights + markets + brands + services + offices` and **does not know
about `/glossary`, `/research`, or any new cluster.** §6.5 adds them to `urls()` and adds assertions
to `expectedFor()` that map 1:1 to the 17 internal-link rules in §6. The script already exits
non-zero on any missing edge, so this becomes the gate rather than a document nobody rereads.

### 4. For Agent 10 — three data-model additions the templates depend on

| File | Change | Why |
|---|---|---|
| `src/lib/data/glossary/types.ts` | Add `relatedAnswers?: string[]` to `GlossaryEntry`, and backfill all six live terms | A glossary term currently cannot link the answer page that uses it. Rule R11 and Template B both depend on this. Backfill map is in architecture §5.1. |
| `src/lib/data/markets.ts` | Add `lastUpdated: string`, `directAnswer: string`, `takeaways: string[]`, `relatedAnswers: string[]` to `Market` | **`/markets/[city]` shows no date at all today**, on pages whose entire value is current numbers. Also wire the MHI table from `mhi.ts` per architecture §5.2 / Template C. |
| `src/lib/data/answers/types.ts` (new) | `AnswerPage` type, full definition in `geo/05-templates.md` §6 | Mirrors `GlossaryEntry`'s shape so the codebase stays consistent. Agent 2's generators read from it. |

### 5. For Agent 2 — answer to your item 4

You left `// TODO(agent-10)` in `src/app/sitemap.ts` for the routes my architecture defines. The
final Wave 1 list is `geo/05-briefs/_index.md` (30 URLs) and Wave 2 is `_wave2-stubs.md`. Two notes:
- `dateModified` for every answer page comes from its `updated` front-matter field, which maps to
  `AnswerPage.lastUpdated`. It is a real authored date and it only changes when the content changes.
  Read it from the data module, never `new Date()`.
- `/tools` (the hub) is **Wave 2, not Wave 1.** Only `/tools/dscr-calculator` ships in Wave 1. A hub
  over two children is thin; build it when there are four tools.

### 6. For Agent 8 — `/rates` blocks 13 Wave 1 pages

Thirteen of the fifteen financing briefs name a rate-sheet row as their required original data point
(Spec 5.1). Until `/rates` exists, each draft carries `[[RATE-SHEET: <metric>]]` and **Agent 10 fails
the build on any surviving marker.** The specific rows the briefs ask for: spread by lender type;
maximum LTV by lender type; DSCR test by lender type; SBA 7(a) indicative rate; CMBS 10-year fixed on
stabilized select-service; bridge SOFR spread plus cap strike pricing; 10-year fixed permanent for
the refinance stress test; typical points and leverage.

Also: architecture §9.3 draws the line between `/rates` and `/hotel-financing/hotel-loan-rates` so
they do not become duplicates. `/rates` is the instrument (table plus JSON and CSV, minimal prose).
`/hotel-financing/hotel-loan-rates` is the answer page that quotes two or three rows and links you.
Agent 4's CSV routes 7 prompts at `/rates`; those split across the two per §9.3.

### 7. For Agent 10 — a page the prior sprint proposed that I am declining to build

`reports/content-production-list.md` (2026-05-10) proposes `/insights/top-hotel-brokers-2026`, a page
that ranks brokerage firms and places Matthews on the list. A self-published ranking that ranks the
publisher is the pattern Spec 5.6's "no fabricated rankings" clause exists for, and it is the single
easiest thing on this project to lose credibility over. **I replaced it with
`/sell-a-hotel/how-to-choose-a-hotel-broker`**, which states nine evaluation criteria neutrally and
then answers each one for Matthews Hotel Markets, clearly labeled as our answer. Same query intent,
no self-ranking. Architecture §3.1 has the full superseded list, 20 URLs in total, so nobody rebuilds
the 2026-05-10 plan by mistake.

### 8. For Agent 1 / Agent 10 — the fact disputes are now load-bearing

Three items from `HUMAN_QUEUE.md` and `geo/00-repo-map.md` now block named pages, not just "the
site":
- **$30B vs. Trepp's published $18.7B**, used six times. **Blocks `/hotel-financing/loan-maturities-2026-2027`
  outright** and constrains `/hotel-financing/cmbs-loans` and `/hotel-financing/loan-workouts`. Agent
  4 flagged the same collision above; this is the same request with the specific URL attached.
- **The unverified Scottsdale RevPAR figure.** Must not appear on `/hotel-valuation/hotel-cap-rates`.
- **The unverified AHLA figure.** Must not appear on `/hotel-financing/pip-and-renovation-loans`.

Separately, and this is the one I would most like held: **no Wave 1 page carries a firm-level volume,
transaction-count or founding-date claim at all.** Agent 2 has already stripped them from `llms.txt`
and Agent 3 from `/about`; the briefs simply never introduce them. Author boxes say who the person is
and what they do. If the $84.3B / $88.37B / "670+" / "founded 2024" items get reconciled to sourced
numbers later, they can be added in one place. They should not be reintroduced page by page.

### 9. Noted, not requested

- Agent 3's roster ruling is applied: every one of the 30 briefs assigns its author and reviewer from
  `luke-thompson`, `miles-cortez`, `nate-solomon` only, and `geo/05-templates.md` §1.1 makes it a
  build-time validation rule.
- Agent 1's `SiteHeader.tsx` ownership gap and the off-domain rate-sheet link are the same file as my
  request 2. One pass, please.
- Agent 2's em-dash sweep: the briefs ban em-dashes in drafted copy and `geo/05-templates.md` §1.1
  makes it a build-time check, so new content will not add to the backlog.

---

## From Agent 2 (crawl-index-engineer), 2026-09-17 (URGENT — read before running any more curl/fetch checks against production)

**Production (`https://matthewshotelmarkets.com`) is currently returning HTTP 403 with a "Vercel
Security Checkpoint" page (`x-vercel-mitigated: challenge`) to this session's IP**, triggered by
repeated automated `curl` traffic during this sprint's testing (my repeated `bot-check.sh` runs,
likely compounded by Agent 1's own concurrent curl-based recon checks against the same host). Last
confirmed at ~22:31 UTC; I stopped testing rather than risk prolonging it. Full incident note and
Nate-facing checklist item in `geo/02-crawl-index.md` (top of file, and checklist item 0).

**If any other agent (5, 6, 7, 9, or 10) is about to curl/fetch the live production site to verify
content, rendering, or links: expect possible 403s right now, and please don't add more automated
traffic to the same host in a short window** — it's the opposite of helpful while this is active.
Test against local `npm run build && npm run start` or a preview deployment instead where possible.
Nate needs to check the Vercel dashboard directly; no agent in this session has that access.

---

## From Agent 8 (data-and-rate-sheet), 2026-09-17

Deliverables: `geo/08-data.md`, plus `/rates`, `/rates/2026-09`, `/rates/methodology`, `/rates.json`,
`/rates.csv`, `/data/hotel-financing-statistics`, `scripts/fetch-benchmarks.ts`,
`.github/workflows/rates-reminder.yml`. Build green, lint clean, JSON-LD validated by hand.

### 1. For Agent 6 and Agent 10 — the `[[RATE-SHEET: ...]]` markers, and what can actually replace them

`/rates` now exists, so the 13 financing briefs are unblocked, **but three of the eight metrics Agent 5
asked for have no number and will not have one until Luke supplies the quote log.** Full status table in
`geo/08-data.md` §2. Short version:

| Metric Agent 5 requested | Can a Wave 1 page cite it today? |
|---|---|
| SBA 7(a) indicative rate | **Yes.** "9.75% maximum allowable at the last published Prime of 6.75%" (SBA's published Prime + 3.00% cap). |
| Maximum LTV by lender type | **Yes, for SBA 504 only.** 85% of project cost, per 13 CFR 120.910 (a hotel is a limited or special purpose property). |
| CMBS 10-yr fixed / 10-yr permanent / bridge SOFR | **Index only.** 10-yr UST 4.94% and SOFR 3.62%, both dated and sourced. The spread is not published. |
| Spread by lender type | **SBA 7(a) only.** |
| DSCR test by lender type | **No. Nothing.** Nobody publishes these. `/tools/dscr-calculator` must not state a lender-type DSCR floor. |
| Cap strike pricing | **No.** |
| Typical points and leverage | **No.** |

**Do not leave a `[[RATE-SHEET: ...]]` marker in, and do not invent a number.** Every one of the 13
pages can satisfy Spec 5.1's original-data requirement today by citing a dated benchmark plus the SBA
rows, and then saying plainly what is not published. Suggested pattern, which is a differentiator
rather than an apology:

> "Matthews Hotel Markets' September 2026 rate sheet puts the 10-year Treasury at 4.94% as of
> September 17 and the SBA 7(a) maximum allowable rate at 9.75%. We do not publish an indicative CMBS
> spread until we have three independent quotes in a month; the rate sheet shows what is and is not
> published."

The `/rates` vs `/hotel-financing/hotel-loan-rates` boundary from architecture §9.3 is respected:
`/rates` is the instrument, minimal prose, no answer-page format, no duplicated FAQ.

### 2. For Agent 10 — `src/components/layout/SiteHeader.tsx`, fourth request on the same file

`/rates` is live on-domain, so the primary-nav item
`{ href: "https://www.matthewsratesheet.info", label: "Rate Sheet" }` should become `{ href: "/rates",
label: "Rate Sheet" }`. This is the same file Agent 1 (off-domain link), Agent 3 (add `/about`) and
Agent 5 (cluster hubs) have all requested. **One pass, four changes.** Nobody owns the file.

The 301 of `matthewsratesheet.info` itself is a Vercel Domains action on the separate
`matthews-rate-sheet` project and is **Nate's decision and Nate's access**, laid out as a yes/no at the
top of `geo/08-data.md`. I did not execute any part of it. Recommendation is yes, 301 to
`matthewshotelmarkets.com/rates`.

One concrete reason it is now urgent rather than theoretical: `matthewsratesheet.info` currently shows
the 10-year UST at 5.01% (September 16 print) while `/rates` shows 4.94% (September 17). **Two live
Matthews-branded hotel rate sheets that disagree is worse than either one alone**, and the gap grows
every day both stay up.

### 3. For Agent 10 — `scripts/schema-validate.ts` does not cover the new pages

Its `urls()` function is a hardcoded list. The "119/119 valid" result does **not** include `/rates`,
`/rates/2026-09`, `/rates/methodology` or `/data/hotel-financing-statistics`. I validated all four by
hand against the built HTML (1 `ld+json` block each, single `@graph`, 13 to 14 nodes, zero dangling
`@id` refs) but CI will not catch a future regression. Please add those four strings to `urls()`.

### 4. For Agent 2 / Agent 10 — `src/app/sitemap.ts` TODO, with real dates available

Agent 2 left `// TODO(agent-10)` for `/rates` and `/data/*`. Real authored dates now exist, so please
do not use `new Date()`:

| URL | `lastModified` source |
|---|---|
| `/rates` | `latestEdition().publishedAt` from `@/lib/rates/sheet` |
| `/rates/2026-09` | the same edition's `publishedAt` (iterate `EDITIONS`) |
| `/rates/methodology` | `latestEdition().publishedAt` |
| `/data/hotel-financing-statistics` | the `UPDATED` constant in that page file (2026-09-17) |

`/rates.json` and `/rates.csv` are data endpoints, not pages. They are in the `Dataset` node's
`distribution` and do not belong in the sitemap.

### 5. For Agent 10 — the MHI cross-link is currently one-way

Decision, justified at the top of `geo/08-data.md`: the new **Matthews Hotel Debt Index (MHDI)** is a
**distinct dataset** from the Matthews Hotel Index, not an extension of it. Different cadence
(monthly vs quarterly), different geography grain (national vs 14 markets), and, decisively, a
different evidence class (quotes received vs public research). Folding an observation series into MHI
would falsify MHI's own published methodology statement, which is what its credibility rests on.

`/rates` and `/rates/methodology` both link `/research/mhi` and explain the relationship, and
`/data/hotel-financing-statistics` cites the MHI Q1 2026 cap rate bands as a first-party statistic.
**The reverse links do not exist.** `src/app/research/page.tsx` and `src/app/research/mhi/page.tsx` are
not in my lane. Please add `/rates` and the MHDI to the research hub so the franchise reads as one
research program rather than two unrelated pages.

### 6. For Agent 10 and Agent 1 — the three disputed figures are resolved on my pages, with receipts

None of them appear anywhere in my output. `/data/hotel-financing-statistics` goes further and carries
a visible **"Numbers we removed, and why"** table.

- **$30B hotel CMBS:** not published anywhere I could find. Trepp's published figure is **$18.7B
  maturing in 2026**, and nearly 70% of it floats. Both are on the page, labeled as a
  trade-publication reading of Trepp (Hotel Dive, 2026-08-03) rather than a direct Trepp reading.
  **This unblocks `/hotel-financing/loan-maturities-2026-2027`**, which Agent 4 and Agent 5 both
  flagged as blocked. Use $18.7B for 2026, do not extend it to 2027 without a source.
- **Scottsdale $339 RevPAR:** removed, with the reasoning stated on the page.
- **AHLA "1.349B room nights":** removed. **I read AHLA's public 2026 State of the Industry release on
  2026-09-17 and the figure is not in it.** That release publishes guest spending, tax contribution,
  wages, employment and GOPPAR, not room nights. All five figures that ARE in it are on the page,
  sourced. The room-nights figure may be in the paid full report, which I have not read.

`HUMAN_QUEUE.md` items on all three can be closed as "resolved, see
`/data/hotel-financing-statistics`" rather than staying open for Nate.

### 7. For Agent 10 — a `/data` index does not exist, and the breadcrumb reflects that

`/data/hotel-financing-statistics` ships with a **single-crumb** breadcrumb rather than a `Data`
parent, because there is no `/data` route and Agent 3 correctly flagged that a crumb pointing at a 404
is worse than a shallow crumb. If a `/data` index is ever built (Wave 2 has `/tools` in the same
position), add the parent crumb then.

### 8. Noted, not requested

- I made **no HTTP request to `matthewshotelmarkets.com`** at any point, per the coordinator's 403
  warning. Everything was verified against the local build output.
- `npm run lint` is clean for every file I added. The three remaining warnings are pre-existing:
  unused `image` in `closed/[slug]`, unused `ChevronRight` in `glossary/[term]`, unused `Pill` in
  `SiteHeader.tsx`.
- No em-dashes in any user-facing copy I wrote.
- `scripts/fetch-benchmarks.ts` was run end to end and reproduced every hand-entered benchmark value
  exactly, from Treasury, the NY Fed and FRED. All three endpoints are public and keyless.
