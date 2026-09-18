# geo/01-baseline.md — recon-auditor baseline (Agent 1, Phase 1)

Audited 2026-09-17 against `https://matthewshotelmarkets.com` (production) and the local clone on
`geo/ai-visibility`. Read-only. Companion files: `geo/01-baseline.json` (per-route data),
`geo/01-bot-uas.txt` (verified bot UA strings + sources), `geo/01-competitors.csv` (20-prompt
citation baseline).

**Bottom line up front:** the site is technically crawlable (bots get identical, full content, no
blocking, no cloaking) and reasonably fast. It does not show up for anything except its own exact
brand name, and even then the parent domain `matthews.com` usually beats it. The reason isn't
robots.txt or JavaScript — it's that the content has internal numeric contradictions on its own
homepage, the flagship "rate sheet" asset lives on a different, oddly-named domain, one listing
silently redirects off-site, and production hasn't been redeployed in 61 days.

---

## 1. Production is stale — read this before trusting any "current state" claim

Production's last deploy is **2026-07-18T19:29:52 UTC**, not today. Evidence: the pre-GEO-branch
`main` HEAD (`a759f67`) was committed 2026-07-18 14:27:57 -0500; the live `sitemap.xml` has 113 of
120 URLs sharing that exact baked-in timestamp (the `new Date()` bug — see §3 — froze at the last
build). **61 days of repo history since then is not live.** That includes commit `46a027d`
("update firm-wide stat to $88.37B (matthews.com current), drop unverifiable 33,500+ count") —
so the newer $88.37B figure IS what's live, it just never got copied into `layout.tsx`'s meta
description or `public/llms.txt`, both of which still say $84.3B (see §2). Any fix another agent
lands on this branch also isn't live until Nate deploys — flag that in the handoff.

## 2. The homepage contradicts itself on its own single-request HTML — P0

Fetched `https://matthewshotelmarkets.com/` with no JS (`curl`), confirmed in the raw response
(sha256 `e4b7248d...`, 79,079 bytes):

| Source in the same page | Figure | File |
|---|---|---|
| `<meta name="description">` | **$84.3B** closed | `src/app/layout.tsx:41` |
| Visible body copy, "Why Matthews" section | **$88.37B closed.** | `src/components/sections/home/HomeWhy.tsx:39` |
| Visible body copy, stats block, eyebrow "Matthews Hospitality · 2019–2021" | **$890M+** closed in hospitality, 8,600+ rooms, 30 cities, 12 states, labeled "**As of Q4 2021**" | `src/components/sections/home/HomeStats.tsx` |
| `public/llms.txt` | **$84.3B** cumulative | matches meta description, not body copy |

Three different dollar figures claiming to describe the firm's track record are visible on or
associated with one page. An AI engine (or a careful reader) landing here cannot tell which number
is current. Git history shows `$88.37B` was a deliberate, sourced correction ("matthews.com
current") that never propagated to the two other places the number lives. The `$890M+` /
"As of Q4 2021" block is a leftover 2019–2021-vintage widget that should either be deleted or
re-labeled as historical — it's not wrong, but presented flat with no date qualifier next to two
current-sounding totals it reads as a third contradiction.

Also on the homepage: "**Last refresh Q1 2026**" (`HomeFeatured.tsx:55`) — hardcoded string, will
read as wrong for the rest of 2026 regardless of actual listings freshness.

**Owner: Agent 3 (entity/content) or Agent 10 to reconcile.** Fix: pick one figure, one source, one
date; update `layout.tsx` metadata, `HomeWhy.tsx`, and `public/llms.txt` together; either delete or
explicitly re-date the 2019–2021 hospitality-only block.

## 3. Sitemap `lastmod` was fabricated for 113 of 120 URLs — confirmed, being fixed mid-run

Live `sitemap.xml` (120 URLs, fetched 2026-09-17): 113 entries share **one identical**
`lastmod` (`2026-07-18T19:29:52.699Z` — the last-build timestamp, not a content-edit date); 6
glossary entries and 1 MHI-quarter entry carry real per-item dates. This is `src/app/sitemap.ts`'s
`lastModified: new Date()` baked in at build time — confirmed exactly as the repo map warned.
**Note:** Agent 2 rewrote `sitemap.ts` locally during this audit (per-file git-derived constants,
falling back sanely) — that fix is real and good, but it is not deployed (see §1). This section
describes the state a crawler sees *today*.

## 4. Bot access: clean pass, no action needed here

Tested 15 first-party-documented bot UA strings (Googlebot, Bingbot, GPTBot, OAI-SearchBot,
ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot, Perplexity-User, Applebot,
CCBot, DuckAssistBot, Amazonbot, Meta-ExternalAgent) plus a curl-default and a real desktop Chrome
UA, against 5 routes (`/`, a listing, an insight, `/team`, `/contact`). **Result: all 17 UA
variants returned HTTP 200 with byte-identical bodies (verified by sha256, not just length) on
every route.** No 403/429/401, no JS/WAF challenge, no `x-robots-tag` anywhere, no cloaking. Full
sources and exact strings in `geo/01-bot-uas.txt`. One honesty flag: Anthropic's own support
article names the `ClaudeBot`/`Claude-User`/`Claude-SearchBot` tokens but does not publish a
literal UA string anywhere I could find — I used the most commonly reported third-party form. This
doesn't change the result (the server isn't branching on UA at all) but I can't cite a first-party
exact string for those three.

Robots.txt (live, single `User-agent: *` block, no per-bot groups) doesn't block anything these
bots need today, so this is a real finding of "fine," not a gap I'm papering over. Agent 2's
per-token rewrite (local, undeployed) is future-proofing, not a fix to a live problem.

## 5. The flagship "rate sheet" lives on a different, off-brand domain — P0

`src/components/layout/SiteHeader.tsx` — the primary nav shown on **every page** — has:

```
{ href: "https://www.matthewsratesheet.info", label: "Rate Sheet" }
```

I fetched it: it's real, live, Vercel-hosted, and genuinely Matthews-branded content
(`<title>The Hotel Rate Sheet | Matthews Hotel Capital Markets</title>`, footer says "Matthews Real
Estate Investment Services™. All rights reserved."). It is not a broken or hijacked domain. But:

- It's a **`.info` TLD with no "matthews" recognizable brand match to matthewshotelmarkets.com or
  matthews.com** in a way a user or crawler can verify at a glance — exactly the kind of look that
  makes people (and increasingly, AI answer engines doing provenance checks) distrust a financial
  services link.
- Per Shared Spec 5.1, the rate sheet is supposed to be *the* original-data asset that "makes an
  engine name the brand" via `/rates`. Right now that asset's content and domain authority accrue
  to `matthewsratesheet.info`, not `matthewshotelmarkets.com` — the opposite of the GEO goal.
- **No file-ownership lane in the mission brief covers `SiteHeader.tsx`.** It isn't in Agent 2's,
  Agent 3's, or Agent 8's list. Filed to `geo/requests.md` for Agent 10 to assign: once Agent 8
  ships `/rates` on-domain, someone needs to repoint this nav link internally, and someone should
  confirm with Nate whether `matthewsratesheet.info` is an intentional separate property he owns
  (same pattern as the Walden Retreats OM site below) or something that should be retired/redirected.

## 6. One listing silently 307s off-domain to an unrelated Vercel app — P2 (isolated, by design, but worth a second look)

`/listings/walden-retreats-hill-country` returns **HTTP 307** to
`https://walden-retreats-om.vercel.app/`. This is intentional, documented code
(`src/lib/data/listings.ts:99`, `omUrl` field; `src/app/listings/[slug]/page.tsx:80-85` calls
`redirect(listing.omUrl)` before rendering when set). Only 1 of 21 listings has `omUrl` set, so
this is not a systemic pattern. Practical effect: `generateMetadata()` builds a full canonical/OG
payload for this URL and the sitemap lists it at priority 0.85 with an image, but the actual
response has no body — no citable Matthews content exists at that URL, and any AI engine or user
following it lands on a domain with zero visible connection to Matthews. Not urgent to fix (it's
one listing, and redirecting to a client's own dedicated marketing site for a call-for-offers deal
is a defensible business choice) but Agent 10 should decide whether the sitemap entry should be
dropped for any listing with `omUrl` set, since it can never be indexed as Matthews content anyway.

## 7. Denver has no real street address — confirmed, doesn't leak (yet)

`src/lib/data/offices.ts`: the Denver office object has `address: "Confirm address with Miles"`,
no `streetAddress` field, empty `zip`. Good news: both the visible `/offices/denver` page and every
JSON-LD block that includes office location guard on `office.streetAddress &&`, so this internal
placeholder text does **not** render or appear in schema today. Bad news: it means no real
`LocalBusiness`/`Place` node can ever be emitted for Denver until someone gets the real address.
Flagged for Agent 3, matches the mission brief's instruction exactly.

## 8. "Exactly three team members" is incomplete — correction to the mission brief

`team.ts` has 3 full-bio brokers (Luke Thompson, Miles Cortez, Nate Solomon — `hasBio: true`, get
`/team/[slug]` pages and Person JSON-LD) **plus 19 more real Matthews personnel** (`hasBio: false`)
rendered on `/team` as photo+name+title cards only: Mitchell Glasson, Francisco Nacorda, Dustin
Robinett, Mabelle Perez, David Loving, Andrew Senatore, Hunter Davis, Alfonso Garcia, Ash Singh,
Chris Beavers, Dominic Henderson, Elias Zakas, Jake Senatore, Julio Leyva, Luke Whittaker, Ritik
Patel, Ryan Kawai Sanchez, Youssef Alkalabani, Jordan Beletz. Their photos are hosted on
`cms.matthews.com` (the real corporate CMS) with real `@matthews.com` emails and phone numbers —
**these are not the fabricated personas** (sarah-chen, marcus-reyes, elena-park) the brief warns
about; those never existed in `team.ts` and only exist as `vercel.json` redirect sources. Confirmed
`/team/mitchell-glasson` → 404 (no dead internal link — `TeamCard.tsx` correctly omits the `<Link>`
wrapper when `hasBio !== true`). **Net: 22 named, real people visible on `/team`, not 3.** Agent 3
should know 19 of them have zero Person schema today if extending team-related structured data.

## 9. Structured data: better wired than the brief assumed, but not centralized in code

`src/app/layout.tsx` defines a real shared `@graph` with `@id`-addressable nodes
(`${SITE_URL}/#org` as `RealEstateAgent`, `${SITE_URL}/#website`), and most route files
(`closed/[slug]`, `glossary/[term]`, `insights/[slug]`, `markets/[city]`, `services/[slug]`,
`research/mhi/[quarter]`, `listings/[slug]`, `hotels-for-sale/[brand]`, `offices/[slug]`,
`team/[slug]`) correctly reference it via `{"@id": "${SITE_URL}/#org"}` rather than re-declaring the
org. **Correction to the brief's "no shared entity source and no @graph":** the graph exists and is
mostly connected. What's real: it's a bare object literal inside `layout.tsx`, not an imported
constant from a single module — every reference is a string match on a hardcoded URL, not a typed
import, so it's fragile to any future rename and isn't "DRY" at the source level even though the
rendered graph is correctly linked. `team/[slug]` also emits a redundant inline `parentOrganization`
node (name only, no `@id`) next to its correct `worksFor`/`affiliation` references — harmless
duplication, not a contradiction. This is exactly the kind of refactor `src/lib/entity.ts` (Agent
3's file, confirmed being created mid-audit) should formalize.

**Org name variant count** (grep across `src/app`, `src/lib/seo`, `public/llms.txt`,
2026-09-17): "Matthews Hotel Markets" (91), "Matthews Real Estate Investment Services" (8),
"Matthews Hotel Team" (9, per llms.txt itself a "legacy" name still live in 9 places), bare
"Matthews™" (3, all in team bios), "Matthews REIS"/"Matthews™ REIS" (2), "Matthews™ Capital
Markets" (1, sub-brand name, only in Miles Cortez's bio). **6 distinct strings for one entity.**

## 10. Contradiction audit — full list, file:line, exhaustive as instructed

| # | Claim | Value A | Value B | Locations |
|---|---|---|---|---|
| 1 | Cumulative platform $ closed | $84.3B (meta desc + llms.txt) | $88.37B (homepage body) | `src/app/layout.tsx:41`, `public/llms.txt`, `src/components/sections/home/HomeWhy.tsx:39` |
| 2 | Same page, different metric entirely | $890M+ hospitality-only, "As of Q4 2021" | (see #1, same page) | `src/components/sections/home/HomeStats.tsx` |
| 3 | Listings freshness | "Last refresh Q1 2026" hardcoded | audit date is Sept 2026 | `src/components/sections/home/HomeFeatured.tsx:55` |
| 4 | Hotel CMBS maturity figure | "$30 billion" through 2027 — **repeated 10 times** across the repo (6× `hotel-refinancing-wave-2026.ts`, 3× `insights.ts`, 1× `how-to-sell-a-hotel-2026.ts`) | `HUMAN_QUEUE.md` flags Trepp's actual published figure as **$18.7 billion in 2026 alone** (Trepp Feb 2025 release via TreppWire) | `src/lib/data/insights-articles/hotel-refinancing-wave-2026.ts` lines 8,14,16,18,48,58; `src/lib/data/insights.ts` lines 134,139,141; `src/lib/data/insights-articles/how-to-sell-a-hotel-2026.ts:31` |
| 5 | Scottsdale RevPAR | "$339 March 2026" cited from "Bonvoyage AZ" (likely a short-term-rental/Airbnb data source, not hotel STR data) | Article itself already flags "(verify with STR primary)" inline | `src/lib/data/insights-articles/hotel-adr-revpar-recovery-2026.ts` lines 36, 76, 163 |
| 6 | AHLA sold-room-nights forecast | "1.349 billion sold room nights in 2026" attributed to AHLA Jan 2026 | Not found in any public AHLA summary per `HUMAN_QUEUE.md`; may be paywalled | `src/lib/data/insights-articles/sun-belt-hospitality-investment-2026.ts:36` |
| 7 | llms.txt founding claim | "Founded as a dedicated hospitality vertical in 2024" | No source anywhere in the repo | `public/llms.txt` |
| 8 | llms.txt transaction-count claim | "670+ hotel transactions closed" | No source in repo; also appears unsourced in `services.ts:97` ("Our 670+ closing record") and `opengraph-image.tsx:74` | `public/llms.txt`; `src/lib/data/services.ts:97`; `src/app/opengraph-image.tsx:74` |
| 9 | Footer "Press" link | Labeled "Press" | Points to `/insights`; no `/press` route exists | `src/components/layout/SiteFooter.tsx` (Insights column) |
| 10 | Denver office address | Footer/`llms.txt` imply a real Denver presence | `offices.ts` Denver entry: `address: "Confirm address with Miles"`, no real street address | `src/lib/data/offices.ts` |
| 11 | Trepp CMBS distress figures | 7.31% delinquency (March 2026), 9.37% special-servicing (Jan 2026), Starwood $577M/$265M, Park Hotels $725M | **Verified clean** — every figure in `hotel-cmbs-distress-trepp-2026.ts` traces to a named, dated public source and is internally consistent. Confirming `HUMAN_QUEUE.md`'s "ship as-is" call. | `src/lib/data/insights-articles/hotel-cmbs-distress-trepp-2026.ts` |
| 12 | Org name | 6 distinct strings for one entity (see §9) | — | multiple |

Items 4–6 restate and confirm `HUMAN_QUEUE.md`'s existing open disputes with exact line numbers —
per the repo map, these are P0 (unsourced numbers on pages built to be cited by AI engines).

## 11. Speed (Lighthouse mobile, production, 2026-09-17)

`npx lighthouse` ran successfully (no fallback needed).

| Page | LCP | CLS | TBT | Speed Index | Total JS | Perf score |
|---|---|---|---|---|---|---|
| `/` | **2.7s** | 0 | 0ms | 2.8s | 485 KiB | 0.94 |
| `/listings/hampton-inn-shelbyville` | 2.1s | 0.001 | 0ms | 2.1s | 532 KiB | 0.97 |
| `/insights/hotel-refinancing-wave-2026` | 2.2s | 0.001 | 0ms | 2.2s | 505 KiB | 0.97 |

Homepage LCP (2.7s) exceeds the 2.5s threshold → **P1**. The other two are fine. INP is not
measurable via lab Lighthouse (it requires real-user/CrUX field data) — not fabricated here; if
Agent 10 wants INP, it has to come from Google Search Console's Core Web Vitals report, which I
don't have access to.

## 12. Index status (honest limitations)

I only have the `WebSearch` tool — one backend, not simultaneous verified access to Google Search
Console, Bing Webmaster Tools, DuckDuckGo, or Brave's own indexes. I cannot make true per-engine
claims and won't guess. What I *can* report from that one backend:

- `site:matthewshotelmarkets.com` surfaced only **2 of 120** sitemap URLs (homepage, `/team`); every
  other result was an unrelated Matthews-NC hotel/travel listing.
- The exact brand query **"Matthews Hotel Markets"** does not return matthewshotelmarkets.com
  first. The top 7 results were all `www.matthews.com` pages; matthewshotelmarkets.com appeared
  8th and 9th of 9 shown results.

**Request to Agent 10 / Nate** (also in `geo/requests.md`): get direct Google Search Console and
Bing Webmaster Tools access for a real indexed-page count and Core Web Vitals field data — this
audit cannot substitute for that.

## 13. Competitor citation baseline (20 seed prompts) — see `geo/01-competitors.csv` for full data

Ran all 20 seed prompts through `WebSearch`. Summary: **matthewshotelmarkets.com appeared in
results for only 8 of 20 prompts — every one of them contained the word "Matthews."** For all 12
generic/category prompts — "Who are the best hotel brokers in Texas?", "Hotel brokers in Austin,
Texas" (the firm's own HQ city), "Top hotel investment sales brokerages in the US in 2026", "Who
sells boutique hotels in the Texas Hill Country?" (where Matthews has an active listing), "Best
CMBS mortgage brokers for hotels," etc. — **matthewshotelmarkets.com did not appear at all.**
Domains that did: CBRE Hotels, Marcus & Millichap, JLL Hotels & Hospitality Group, Colliers Hotels,
HotelAVE, Hunter (Hotel) Advisors, HREC, Eastdil Secured, Berkadia, US Hotel Advisors, HTL
Hospitality Advisors, Tabani Realty, Singh Commercial Group, Hotel Brokers of America/
International/Austin, F10 Hotels, Bridge Marketplace, CMBS.Loans, The Plasencia Group,
HotelBrokerOne.

Even within the 8 brand-anchored prompts, `www.matthews.com` (parent) usually outranked
`matthewshotelmarkets.com`, and search-summary answers pulled specific facts (named deals, dollar
figures) almost entirely from `matthews.com` press releases and success stories — not from
`matthewshotelmarkets.com/closed` or `/team`, even though those pages have the actual named
content. One search literally concluded "the search results don't provide specific names of
individual hotel brokers" for a Matthews-brand query, despite `/team` listing Luke Thompson, Miles
Cortez, and Nate Solomon by name in static HTML — a direct extractability failure, not a content
gap.

**This is the core finding of the whole audit:** the technical crawl path is clean (§4), but (a)
the content that would win generic category queries doesn't exist yet (this is Agents 5–9's real
work), and (b) even the content that does exist for brand queries is losing to the parent domain
and to third-party citations of the parent domain's press releases.

## 14. Findings, ranked

**P0 — blocks citation entirely / actively misleads:**
1. Homepage carries 3 different, contradictory cumulative-dollar figures in one response (§2).
2. The "$30 billion" CMBS figure — likely wrong per Trepp's own published number — is repeated 10×
   across 3 files, on pages explicitly built to be cited by AI engines (§10 #4). Fix: Agent 5/6/9
   (content) re-anchor to the sourced Trepp figure or clearly caveat the $30B as a multi-year
   estimate distinct from Trepp's 2026-alone number.
3. `llms.txt` asserts "Founded 2024" and "670+ transactions" with zero source, in a file whose
   entire purpose is being taken at face value by AI engines (§10 #7–8). Owner: Agent 2.
4. `matthewsratesheet.info` — the site's flagship original-data asset — lives on an unrelated,
   unverifiable domain, linked from primary nav on every page, with no owner assigned to fix it
   (§5). Filed to `geo/requests.md`.
5. Generic category and geo-anchored queries (the actual commercial intent this whole project
   exists to win) return zero matthewshotelmarkets.com citations, 20/20 of the time except for
   brand-name queries (§13). This isn't a bug to patch — it's the mandate for Agents 5–9.

**P1 — materially hurts:**
6. Sitemap `lastmod` fabricated for 113/120 URLs, confirmed live (§3) — Agent 2 has a fix drafted,
   undeployed.
7. Homepage LCP 2.7s exceeds the 2.5s threshold (§11).
8. Scottsdale RevPAR and AHLA 1.349B figures unverified/likely-wrong (§10 #5–6).
9. Org name inconsistency: 6 distinct strings for one entity (§9).
10. `/research/mhi` and the one `omUrl` listing redirect (307) are listed in the sitemap as if they
    were indexable content pages; neither can actually be indexed as such (§3 note, §6).
11. `entity.ts`/shared-graph exists functionally but isn't centralized in code — fragile to rename
    (§9). Agent 3's `lib/entity.ts` (confirmed being created mid-audit) is the right fix.

**P2 — polish:**
12. Denver office has no real address; currently doesn't leak, but blocks a real LocalBusiness node
    (§7).
13. Footer "Press" link points at `/insights`; no `/press` route (§10 #9).
14. `team.ts`'s 19 "Extended Team" members have no Person schema (§8).
15. `member.award = member.designations` in `team/[slug]/page.tsx` is a schema misuse (`award` is
    for prizes, not professional certifications) — currently dead code since all 3 bio'd members
    have `designations: []`, so no live impact, but worth fixing if anyone adds a CCIM/CHA etc.

## 15. What I could not verify

- Per-engine index counts and Core Web Vitals field data (Google Search Console / Bing Webmaster
  Tools access not available to me) — see §12, request filed.
- Exact first-party UA strings for ClaudeBot/Claude-User/Claude-SearchBot (Anthropic's own doc
  names the tokens, not the literal string) — see §4.
- Whether `matthewsratesheet.info` and `walden-retreats-om.vercel.app` are Nate-owned, sanctioned
  properties or something that needs cleanup — content and hosting pattern strongly suggest
  Nate-owned (per his own account of running similar standalone Vercel deal-microsites elsewhere),
  but I have no way to confirm ownership from the outside. Flagged in `geo/requests.md` for a
  direct answer.
- INP (Interaction to Next Paint) for any page — lab Lighthouse doesn't measure it; would need
  CrUX/field data.
- Whether Bingbot's exact UA string on `bing.com/webmasters/help/...` matches what I used — that
  specific help-center page wouldn't render its body content to my fetch tool; I cross-verified the
  string against Bing's own webmaster blog post announcing it instead. Noted in
  `geo/01-bot-uas.txt`.

## 16. Requests filed to `geo/requests.md`

- Assign ownership of `src/components/layout/SiteHeader.tsx` (not in any agent's file list) so the
  `matthewsratesheet.info` nav link can be repointed once `/rates` ships.
- Ask Nate directly whether `matthewsratesheet.info` and `walden-retreats-om.vercel.app` are his own
  sanctioned properties, and if so, whether the plan is to fold `matthewsratesheet.info`'s content
  into the new on-domain `/rates` and 301 it, or keep both.
- Get Google Search Console + Bing Webmaster Tools access for a real indexed-page count and Core
  Web Vitals field data; this audit's index-status section is WebSearch-tool-only and explicitly
  flagged as unverified per-engine.
