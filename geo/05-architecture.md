# geo/05-architecture.md - Agent 5, content-architect

**Written 2026-09-17 on branch `geo/ai-visibility`. Scope: `geo/**` only. No code touched.**

Inputs read in full before writing: `geo/00-repo-map.md`, `geo/00-guidance.md`, `vercel.json`,
`src/app/**` route tree, `src/lib/data/*` (markets, brands, services, team, glossary, mhi, insights,
listings, closed), `src/components/layout/SiteHeader.tsx`, `src/components/layout/SiteFooter.tsx`,
`scripts/internal-links-audit.ts`, and the prior-sprint artifact in this lane,
`reports/content-production-list.md` (2026-05-10).

> **Query-source note.** The site-structure work in this file (§1–§3, §5–§8) was done before
> `geo/04-queries.csv` existed, from the live repo plus `reports/query-universe.md` (250 queries,
> 2026-05-10) and `reports/priority-targets.md`. **Agent 4's CSV landed mid-run (265 prompts, 12
> clusters) and Wave 1 was re-cut against it.** Every brief's `target_prompts[]` is now quoted
> verbatim from `geo/04-queries.csv`. §9 records the slug reconciliation between Agent 4's proposed
> `target_url` values and the canonical URLs in this document, because they do not match and mine
> govern.

---

## 1. The one rule this document exists to enforce

**Every question gets exactly one best page, and that page already exists unless proven otherwise.**

The prior sprint's production list proposed 41 pages. The site that actually shipped used *different
URLs* for most of them. Building the prior list as written would create three parallel trees for the
same nouns (`/brands/*` next to the live `/hotels-for-sale/*`, `/segments/*` next to both, `/faq/*`
next to the glossary). Section 3 kills those explicitly.

---

## 2. What already exists, and what we do with it

Verified by reading `src/app/**` and `src/lib/data/**` on 2026-09-17.

| Existing route | Backing data | Verdict | What changes |
|---|---|---|---|
| `/` | `src/app/page.tsx` | **Extend (links only)** | Add nav/footer entries to the three new hubs. Content fixes are Agent 1/10's fact-check queue, not mine. |
| `/listings`, `/listings/[slug]` | `listings.ts` (18 listings, 14 states) | **Extend (links only)** | Each listing detail links to its matching `/markets/[city]` when one covers its state; otherwise to its `/hotels-for-sale/[brand]` page. See §6.4 for why "otherwise". |
| `/closed`, `/closed/[slug]` | `closed.ts` | **Extend (links only)** | Same rule as listings. |
| `/team`, `/team/[slug]` | `team.ts` - **22 real people**, of whom 3 have `hasBio: true` and get detail pages: `luke-thompson`, `miles-cortez`, `nate-solomon`. The other 19 render as lite cards on `/team`. | **Left alone** | **Authors and reviewers on every new page must be one of the three with bios**, because the other 19 have no bio, no verified LinkedIn, and no `knowsAbout` data in the repo. Do not invent one. Do not describe this as a three-person team anywhere; it is a 22-person team, three of whom are published in depth. `vercel.json` 301s three fabricated personas; never recreate them. |
| `/insights`, `/insights/[slug]` (14 live) | `insights.ts` + `insights-articles/` | **Left alone as URLs; role narrowed** | Insights = *dated commentary*. Clusters = *evergreen answers*. §3.2 resolves the one genuine overlap. |
| `/process` | `process.ts` | **Extend (links only)** | It is the 24-week timeline. `/sell-a-hotel/how-long-it-takes` must cite and link it, not restate it. |
| `/contact` | `api/contact` | **Left alone - do not touch** | It is the conversion path. Every new page's single CTA points here. |
| `/glossary`, `/glossary/[term]` | `src/lib/data/glossary/` - 6 terms: `cap-rate`, `revpar`, `adr`, `pip`, `bov`, `iom` | **Extend** | Add terms only where a Wave 1 page needs a defined term to link. §5. |
| `/markets/[city]` | `markets.ts` - 14 metros, slug form `city-ST` | **Extend in place. Zero new market URLs in Wave 1.** | §5.2. |
| `/hotels-for-sale/[brand]` | `brands.ts` - 9 parent flags | **Extend in place. Zero new brand URLs in Wave 1.** | §5.3. |
| `/services/[slug]` | `services.ts` - `investment-sales`, `capital-markets`, `acquisition-advisory` | **Left alone as pages; re-scoped** | These are *commercial* pages ("who we are, hire us"). They must not try to answer "how long does it take" or "what's a typical fee". They link up to the new answer clusters. §3.3. |
| `/offices/[slug]` | `offices.ts` - `austin`, `denver` | **Left alone (Agent 3's lane)** | Flagged to Agent 3 in `geo/requests.md`: confirm a real Denver street address before any Denver `LocalBusiness` node. |
| `/research`, `/research/mhi`, `/research/mhi/[quarter]` | `mhi.ts` - Matthews Hotel Index, `q1-2026` | **Extend (links only). This is the crown jewel.** | The MHI is the site's own first-party dataset. It is the "original data point" source for every valuation-side page. §7. |

**Orphan finding (verified by grep across `src/`, 2026-09-17):** `/glossary`, `/services/*`,
`/research`, and `/offices/*` have **no inbound internal link from anywhere outside their own route
folder**. They are reachable only from `sitemap.xml`. `SiteHeader.tsx` links six destinations
(`/listings`, an external rate sheet, `/closed`, `/team`, `/insights`, `/contact`); `SiteFooter.tsx`
links `/listings`, `/closed`, `/process`, `/insights`, `/team`, `/contact`. Four live hubs with real
data behind them are invisible to the internal link graph. Fixing this is §6.1 and costs one edit to
two files.

**Header finding:** `SiteHeader.tsx` nav item "Rate Sheet" points **off-domain** to
`https://www.matthewsratesheet.info`. Agent 8 is building an on-domain `/rates`. That is a collision
that needs a decision, not a guess. Logged in `geo/requests.md`.

---

## 3. Reconciliation: the prior sprint's list vs. what shipped

`reports/content-production-list.md` is the prior artifact in this lane. It is a good query analysis
and a bad URL map, because the site was built afterward with different slugs. Below is the binding
disposition. **Agent 10: if a URL appears in the "superseded" column, do not build it.**

### 3.1 Superseded URLs - do not build

| Prior-sprint URL | Status | Canonical destination |
|---|---|---|
| `/sell-your-hotel` | Never built | `/sell-a-hotel` (new hub, §4) |
| `/services/bov` | Never built | `/hotel-valuation/broker-opinion-of-value` (answer) + `/glossary/bov` (live) |
| `/glossary/hotel-cap-rate` | **Already live at a different slug** | `/glossary/cap-rate` - do not create a second URL |
| `/glossary/hotel-noi` | Never built | `/glossary/noi` (Wave 1, §5.1) - note the shorter slug |
| `/glossary/hotel-disposition` | Never built | Wave 2; the answer lives at `/sell-a-hotel` |
| `/brands/hilton-garden-inn` and 8 siblings | Never built | `/hotels-for-sale/[brand]` is live. Add sub-flags as **entries in `brands.ts`**, not a second tree. §5.3 |
| `/segments/select-service`, `/segments/full-service`, `/segments/extended-stay`, `/segments/boutique-resort`, `/segments/luxury-resort` | Never built | **Do not build a `/segments` tree.** It would be a third noun-swapped tree beside `/markets` and `/hotels-for-sale`, which is the doorway-page pattern Spec 5.6 forbids. Select vs. full service is answered once at `/hotel-valuation/select-service-vs-full-service`; segment inventory is a filter on `/listings`. |
| `/faq/how-long-to-sell-a-hotel` | Never built | `/sell-a-hotel/how-long-it-takes` |
| `/faq/hotel-broker-fee` | Never built | `/sell-a-hotel/broker-fees` |
| `/faq/bov-vs-appraisal` | Never built | A named H2 + FAQ entry inside `/hotel-valuation/broker-opinion-of-value`. It is one question; it does not need a URL. |
| `/faq/what-is-matthews-hotel-markets` | Never built | `/about` (Agent 3's lane) |
| `/markets/[city]/market-report-q2-2026` (7 of them) | Never built | **Dated URLs violate Spec 5.1** ("no dates in the URL"). The market report goes *on* `/markets/[city]` with a visible "Last updated" line and an MHI-sourced table. §5.2 |
| `/insights/hotel-cap-rates-2026`, `/insights/what-is-a-good-hotel-cap-rate-2026`, `/insights/hotel-cap-rates-by-segment-2026` | Never built | One evergreen page: `/hotel-valuation/hotel-cap-rates`, updated in place each quarter from MHI. Three near-identical dated insight URLs is exactly the thin-page pattern to avoid. |
| `/insights/hotel-valuation-guide-2026`, `/insights/hotel-underwriting-guide-2026` | Never built | `/hotel-valuation/how-to-value-a-hotel` |
| `/insights/hotel-broker-fees-2026` | Never built | `/sell-a-hotel/broker-fees` |
| `/insights/hotel-disposition-process-2026` | Never built | `/sell-a-hotel/how-to-sell-a-hotel` + the live `/process` page |
| `/insights/hotel-cmbs-maturity-wall-2026` | Never built | `/hotel-financing/loan-maturities-2026-2027` |
| `/insights/sell-now-or-wait-2026` | Never built | `/hotel-financing/refinance-or-sell` |
| `/insights/top-hotel-brokers-2026`, `/insights/hotel-broker-comparison-2026`, `/insights/matthews-vs-marcus-millichap-hotels` | Never built | **Out of my lane and flagged as a risk.** A self-ranking "top brokers, and we're on it" page is the kind of thing Spec 5.6's "no fabricated rankings" clause is aimed at. `/sell-a-hotel/how-to-choose-a-hotel-broker` covers the honest version: the criteria, stated neutrally, with our own answers to each criterion shown as ours. Logged in `geo/requests.md`. |

### 3.2 The one genuine live duplicate

`/insights/how-to-sell-a-hotel-2026` **is live** (`insights.ts` line 187 spreads `wave5Insights`
into the published array; I verified all 8 wave-5 drafts are wired). It targets the same question as
the new `/sell-a-hotel/how-to-sell-a-hotel`.

**Resolution - no URL is deleted, no redirect is added:**
- `/sell-a-hotel/how-to-sell-a-hotel` becomes the **canonical evergreen answer**: the process, the
  gates, the documents, the fee, updated in place.
- `/insights/how-to-sell-a-hotel-2026` keeps its URL and narrows to **2026 market conditions for
  sellers**. Agent 10 adds one sentence near its top: "For the process itself, see [How to sell a
  hotel](/sell-a-hotel/how-to-sell-a-hotel)." The evergreen page links back to it once, as the
  dated-conditions companion.
- Same treatment, same reason, for three more live insights that sit next to a new cluster page:
  `hotel-refinancing-wave-2026` → `/hotel-financing/refinance`;
  `texas-hotel-cap-rates-q2-2026` → `/hotel-valuation/hotel-cap-rates`;
  `select-service-vs-full-service-2026` → `/hotel-valuation/select-service-vs-full-service`.

**Rule, stated once so it is testable:** an `/insights/*` URL carries a year and answers "what is
happening now"; a cluster URL carries no year and answers "how does this work". If a draft cannot be
written to one side of that line, it does not need a new page.

### 3.3 Commercial vs. informational, per URL

The three `/services/*` pages are conversion pages and stay that way. The split:

| Question | Commercial page | Answer page (canonical for the query) |
|---|---|---|
| "Who sells hotels / should I hire you" | `/services/investment-sales` | - |
| "How do I sell a hotel" | - | `/sell-a-hotel/how-to-sell-a-hotel` |
| "Who places hotel debt / should I hire you" | `/services/capital-markets` | - |
| "How does debt placement work" | - | `/hotel-financing/how-debt-placement-works` |
| "Who represents hotel buyers" | `/services/acquisition-advisory` | - |
| "How do I underwrite a hotel I'm buying" | - | `/hotel-valuation/how-to-value-a-hotel` |

Each service page gets one link up to its answer cluster. Each cluster hub gets one link down to its
service page as the CTA. No service page adds an FAQ block that duplicates a cluster FAQ.

---

## 4. The new architecture

Three answer clusters, one tool shelf, plus extensions to four live hubs. **35 new URLs total; 30 in
Wave 1.**

```
/hotel-financing                          HUB + answer      [Agent 6]
├── /hotel-loan-rates                     answer  W1
├── /loan-requirements                    answer  W1
├── /refinance                            answer  W1
├── /sba-7a-vs-504                        answer  W1
├── /cmbs-loans                           answer  W1
├── /bridge-loans                         answer  W1
├── /loan-maturities-2026-2027            answer  W1
├── /refinance-or-sell                    answer  W1
├── /pip-and-renovation-loans             answer  W1
├── /how-debt-placement-works             answer  W1
├── /hotel-lenders-by-type                answer  W1
├── /faq                                  answer  W1
├── /construction-loans                   answer  W2
├── /extended-stay-financing              answer  W2
└── /1031-exchange-hotels                 answer  W2

/sell-a-hotel                             HUB + answer      [Agent 7]
├── /how-to-sell-a-hotel                  answer  W1
├── /how-long-it-takes                    answer  W1
├── /broker-fees                          answer  W1
├── /documents-needed                     answer  W1
├── /how-to-choose-a-hotel-broker         answer  W1
├── /off-market-vs-marketed               answer  W2
└── /faq                                  answer  W2

/hotel-valuation                          HUB + answer      [Agent 7]
├── /how-to-value-a-hotel                 answer  W1
├── /hotel-cap-rates                      answer  W1
├── /broker-opinion-of-value              answer  W1
├── /revpar-multiples-and-per-key         answer  W1
└── /select-service-vs-full-service       answer  W1

/tools/dscr-calculator                    tool    W1        [copy: Agent 6, build: Agent 10]
/tools/cap-rate-calculator                tool    W1        [copy: Agent 7, build: Agent 10]
/tools                                    hub     W2        (build when there are 4 tools, not 2)
/tools/debt-yield-calculator              tool    W2
/tools/refinance-vs-sell                  tool    W2

/glossary/dscr                            glossary W1       [Agent 7]
/glossary/debt-yield                      glossary W1       [Agent 7]
/glossary/noi                             glossary W1       [Agent 7]

/rates, /rates.json, /rates.csv, /data/hotel-financing-statistics   [Agent 8 - not mine]
/about                                                              [Agent 3 - not mine]
/press                                                              [Agent 9 supplies, Agent 10 builds]
```

### 4.1 Hubs are answer pages, not routers

A hub that is only a list of links is thin, will not rank, and fails Spec 5.1 (no direct answer, no
table, no FAQ). Each of the three hubs is written to the full answer-page spec and carries the
cluster's broadest question, with its spokes disambiguated so nothing is asked twice:

| Hub | Its own H1 question | What it does **not** cover (link instead) |
|---|---|---|
| `/hotel-financing` | "How does hotel financing work, and what does it cost right now?" | Per-product mechanics (each spoke), requirements math (`/loan-requirements`), today's numbers in detail (`/hotel-loan-rates`) |
| `/sell-a-hotel` | "What is involved in selling a hotel?" | The week-by-week process (`/how-to-sell-a-hotel`), the clock (`/how-long-it-takes`), the fee (`/broker-fees`) |
| `/hotel-valuation` | "What is my hotel worth, and who decides?" | The three approaches with arithmetic (`/how-to-value-a-hotel`), cap rate levels (`/hotel-cap-rates`), the BOV product (`/broker-opinion-of-value`) |

### 4.2 Wave 1 - the 30

Selected on (asked often to assistants) × (we can be the best answer) × (leads to a call). Financing
is weighted heaviest because it is where the team has first-party pricing to publish (Agent 8's rate
sheet), and first-party numbers are the only thing on this site an engine cannot get elsewhere.

| # | URL | Type | Owner | Why it is in Wave 1 |
|---|---|---|---|---|
| 1 | `/hotel-financing` | hub | 6 | Cluster root. Nothing below it is crawl-reachable without it. |
| 2 | `/hotel-financing/hotel-loan-rates` | answer | 6 | The single highest-intent financing query, and the only page on the site that can carry a dated first-party rate. |
| 3 | `/hotel-financing/loan-requirements` | answer | 6 | "Will I qualify" is the question before every debt call. DSCR/LTV/debt-yield math. |
| 4 | `/hotel-financing/refinance` | answer | 6 | QU#175-176 refi wave; live insight `hotel-refinancing-wave-2026` proves demand. |
| 5 | `/hotel-financing/sba-7a-vs-504` | answer | 6 | Comparison intent, primary-source-able (SBA.gov), wide open. Table-native. |
| 6 | `/hotel-financing/cmbs-loans` | answer | 6 | Trepp publishes public releases we can cite by date. Feeds #8. |
| 7 | `/hotel-financing/bridge-loans` | answer | 6 | The product every PIP/transition borrower lands on. |
| 8 | `/hotel-financing/loan-maturities-2026-2027` | answer | 6 | 4 CSV rows + the Distress cluster. **Blocked until the `HUMAN_QUEUE.md` $30B vs. Trepp $18.7B dispute is resolved.** |
| 9 | `/hotel-financing/loan-workouts` | answer | 6 | **10 CSV rows** on special servicing, maturity default, and workouts. Added on Agent 4's evidence; see §9.1. |
| 10 | `/hotel-financing/refinance-or-sell` | answer | 6 | 2 P1 CSV rows, both act-stage. Also absorbs "sell now or wait". The decision page that produces calls. |
| 11 | `/hotel-financing/pip-and-renovation-loans` | answer | 6 | Takes the PIP cost and timing rows off `/glossary/pip` (§9.2c). |
| 12 | `/hotel-financing/1031-exchange-hotels` | answer | 6 | **8 CSV rows.** Promoted from Wave 2. Covers both the buy side and the sell-side timing question. |
| 13 | `/hotel-financing/how-debt-placement-works` | answer | 6 | The informational twin of `/services/capital-markets`. |
| 14 | `/hotel-financing/hotel-lenders-by-type` | answer | 6 | One comparison table across bank / life co / CMBS / SBA / debt fund. Highest extractability per word in the cluster. |
| 15 | `/hotel-financing/faq` | answer | 6 | Sweeps the seven unrouted `/hotel-financing` rows (min loan size, points, comfort letter, low-occupancy qualification). |
| 16 | `/sell-a-hotel` | hub | 7 | Cluster root. Carries the two PIP-and-sale rows (§9.2c) and the confidential-vs-public row. |
| 17 | `/sell-a-hotel/how-to-sell-a-hotel` | answer | 7 | 3 CSV rows. Canonical evergreen; resolves the live-insight duplicate (§3.2). |
| 18 | `/sell-a-hotel/how-long-it-takes` | answer | 7 | Timeline + due-diligence-duration rows. `/process` supplies the 24-week structure. |
| 19 | `/sell-a-hotel/broker-fees` | answer | 7 | Fee, commission, and retainer rows pulled off `/services/investment-sales` (§9.2a). |
| 20 | `/sell-a-hotel/documents-needed` | answer | 7 | **6 CSV rows** plus four document rows from the buy side (§9.2b). Converts: the reader is already selling. |
| 21 | `/sell-a-hotel/how-to-choose-a-hotel-broker` | answer | 7 | **~10 CSV rows rerouted from `/services/investment-sales`** (§9.2a). The honest version of the "top brokers" query. |
| 22 | `/hotel-valuation` | hub | 7 | Cluster root. P1 row "How do you value a hotel?". |
| 23 | `/hotel-valuation/how-to-value-a-hotel` | answer | 7 | **7 CSV rows** + income-approach and sales-comparison rows folded in as H2s. Anchor of the cluster. |
| 24 | `/hotel-valuation/hotel-cap-rates` | answer | 7 | 5 CSV rows. MHI is the first-party dataset behind it. |
| 25 | `/hotel-valuation/broker-opinion-of-value` | answer | 7 | 3 `/glossary/bov` rows + the appraisal-comparison rows. Direct BOV request is the shortest path to a call. |
| 26 | `/hotel-valuation/select-service-vs-full-service` | answer | 7 | Cap-rates-by-segment row. Canonical for the comparison; the live insight narrows to 2026 conditions. |
| 27 | `/tools/dscr-calculator` | tool | 6 / 10 | Calculators earn links and get cited. DSCR is the gate on every hotel loan and has a direct CSV row. |
| 28 | `/glossary/dscr` | glossary | 7 | Three Wave 1 pages need a defined-term link and there is no DSCR entry. Direct CSV row. |
| 29 | `/glossary/debt-yield` | glossary | 7 | `/cmbs-loans` and `/loan-requirements` both lean on it. |
| 30 | `/glossary/noi` | glossary | 7 | `/glossary/cap-rate` already divides by NOI without defining it. Two CSV rows ask it directly. Closes a live gap. |

**Changed from the pre-CSV cut**, so the reasoning is auditable: added
`/hotel-financing/loan-workouts` (10 rows) and promoted `/hotel-financing/1031-exchange-hotels`
(8 rows); demoted `/hotel-valuation/revpar-multiples-and-per-key` (1 row) and
`/tools/cap-rate-calculator` (no direct row, and a commodity calculator) to Wave 2.

**Wave 2 (stubs only, `geo/05-briefs/_wave2-stubs.md`):** `/hotel-financing/construction-loans`,
`/hotel-financing/extended-stay-financing`; `/sell-a-hotel/off-market-vs-marketed`,
`/sell-a-hotel/faq`; `/hotel-valuation/revpar-multiples-and-per-key`; `/hotels-for-sale` index;
`/tools`, `/tools/cap-rate-calculator`, `/tools/debt-yield-calculator`, `/tools/refinance-vs-sell`;
glossary `ltv`, `ffe-reserve`, `going-concern-value`, `franchise-fdd`, `key-money`, `comfort-letter`,
`per-key`, `mpi-ari-rgi`; three market additions (§5.2); nine brand sub-flag entries (§5.3).

---

## 5. Extending the live hubs

### 5.1 `/glossary` - **extend**

Live entries: `cap-rate`, `revpar`, `adr`, `pip`, `bov`, `iom`. The data shape is
`src/lib/data/glossary/types.ts` → `GlossaryEntry`. **New terms are new files in
`src/lib/data/glossary/<slug>.ts` exporting `entry`, registered in `index.ts`. No new route, no new
template.**

Note on length: Spec 5.1 says 80–150 words for a glossary term. The live `GlossaryEntry` type is
richer than that (a `shortDef` ≤30 words, a ~50-word `fullDef`, a 400–700-word `body`, an `example`,
`misconceptions`, 4–5 `faq`, 4–6 `sources`). **Match the live type, not the floor.** The 80–150-word
budget applies to `shortDef` + `fullDef`, which is the part that gets lifted.

Wave 1 additions, each justified by a Wave 1 page that needs to link a defined term:

| New term | Slug | Needed by |
|---|---|---|
| Debt Service Coverage Ratio | `dscr` | `/hotel-financing/loan-requirements`, `/hotel-financing/hotel-loan-rates`, `/tools/dscr-calculator` |
| Debt Yield | `debt-yield` | `/hotel-financing/loan-requirements`, `/hotel-financing/cmbs-loans` |
| Net Operating Income | `noi` | `/hotel-valuation/how-to-value-a-hotel`, `/tools/cap-rate-calculator`, and the **live** `/glossary/cap-rate`, which divides by NOI without defining it |

Wave 2, in order: `ltv`, `ffe-reserve`, `going-concern-value`, `franchise-fdd`, `key-money`,
`comfort-letter`, `per-key`.

**Also required (mechanical, Agent 10):** the live `GlossaryEntry` type has `relatedMarkets`,
`relatedBrands`, `relatedInsights` but **no field for cluster answer pages**. Add
`relatedAnswers?: string[]` (array of absolute paths) so a term can link the answer page that uses
it. Backfill on all six live terms: `cap-rate` → `/hotel-valuation/hotel-cap-rates`; `bov` →
`/hotel-valuation/broker-opinion-of-value`; `pip` → `/hotel-financing/pip-and-renovation-loans`;
`revpar` and `adr` → `/hotel-valuation/revpar-multiples-and-per-key`; `iom` →
`/sell-a-hotel/documents-needed`. Logged in `geo/requests.md`.

### 5.2 `/markets/[city]` - **extend in place, zero new URLs in Wave 1**

14 metros exist (`markets.ts`), slug form `city-ST`, regions Texas / Sun Belt / Mountain West. The
pages are real, with `marketCommentary`, `capRateRange`, `adrCommentary`, `demandDrivers`,
`brokerSlugs`. **Do not build a parallel market tree and do not build dated
`/markets/[city]/market-report-qN-YYYY` sub-pages.** A dated URL goes stale by design; Spec 5.1 puts
dates in the H1 and keeps the URL stable.

What each market page gains (three field additions to the `Market` type, plus rendering):

1. `lastUpdated: string` (ISO) - a visible "Last updated" line under the H1, and the same value in
   `dateModified`. **This replaces nothing; the market page currently shows no date at all**, which
   is the single biggest freshness gap on a page whose whole value is current numbers.
2. An **MHI table** for the metro, rendered from `mhi.ts` `MarketDataPoint` (cap-rate bands by
   segment, ADR low/high, RevPAR low/high, occupancy, QoQ and YoY RevPAR change), with a link to
   `/research/mhi/q1-2026`. This is the first-party data point Spec 5.1 requires, and it already
   exists in the repo. Nobody has to invent a number.
3. `relatedAnswers: string[]` - three links into the new clusters, chosen per market, e.g.
   `/hotel-valuation/hotel-cap-rates`, `/sell-a-hotel`, `/hotel-financing/hotel-loan-rates`.

**Market additions (Wave 2, three only, each backed by transactions in `closed.ts`):**

| Add | Evidence in the repo | Why not more |
|---|---|---|
| `bozeman-mt` | Three Montana closings in `closed.ts` (Bozeman, Missoula, Whitefish) and one active MT listing. `Market.region` already has a `"Mountain West"` member. | - |
| `fort-collins-co` | Two Colorado closings outside Denver (Fort Collins, Lyons); Miles Cortez is the Denver-based broker. | - |
| `tulsa-ok` | One Tulsa closing; nearest uncovered metro to the Texas cluster. Lowest confidence of the three. | - |

Beyond those three: **no data.** Active listings sit in PA (3), CA (2), FL (2), and ten states with
one each, mostly tertiary cities that do not support a metro page. Adding metros without
transactions is the doorway-page pattern. Do not.

### 5.3 `/hotels-for-sale/[brand]` - **extend in place, zero new URLs in Wave 1**

9 parent flags live (`brands.ts`): Hampton Inn, Holiday Inn Express, Marriott, Hilton, IHG, Best
Western, Hyatt, Choice, Wyndham. The prior sprint wanted nine more at `/brands/*`. **That is a second
tree for the same nouns. Build them as new `BrandFlag` entries under the live route instead**, in
this order, as Wave 2: `hilton-garden-inn`, `home2-suites`, `courtyard-by-marriott`, `residence-inn`,
`fairfield-inn`, `hyatt-place`, `towneplace-suites`, `woodspring-suites`, `la-quinta`.

Each existing brand page gains a `relatedAnswers` link set: `/hotel-valuation/hotel-cap-rates`,
`/hotel-financing/pip-and-renovation-loans`, `/sell-a-hotel`.

### 5.4 `/research` and `/research/mhi` - **left alone structurally, promoted heavily**

The Matthews Hotel Index is the only dataset on this site that is ours. It is currently orphaned
(§2). Three changes, all links: put `/research` in the header nav; have every valuation-side page
cite MHI by name with its quarter; have every `/markets/[city]` page link its MHI row. No new
research URLs in this run.

### 5.5 `/services/[slug]` - **left alone**

No new service pages. `/services/bov` and `/services/1031-exchange` from the prior list are
superseded (§3.1). The three live pages get one "up" link each (§3.3).

---

## 6. Internal linking rules

Written so `scripts/internal-links-audit.ts` can check them. That script today walks
`listings + closed + team + insights + markets + brands + services + offices` and asserts a small
edge set in `expectedFor()`. **It does not know about `/glossary`, `/research`, or any new cluster.**
§6.5 gives Agent 10 the exact diff.

### 6.1 Global (fixes the orphan finding)

- **R1.** `SiteHeader.tsx` nav gains: `/hotel-financing`, `/sell-a-hotel`, `/hotel-valuation`.
  Recommended final nav: Listings · Sell a Hotel · Financing · Valuation · Research · Team · Contact,
  with Closed and Insights moving to the footer. **Header nav is a design surface; propose, do not
  assume.** Logged in `geo/requests.md`.
- **R2.** `SiteFooter.tsx` gains a "Answers" column linking all three hubs plus `/glossary`,
  `/research`, `/tools`, and a "Services" column linking the three `/services/*` pages and
  `/offices/*`. This alone removes every orphan in §2.
- **R3.** The footer "Press" link currently points at `/insights` and no `/press` route exists.
  Either build `/press` (Agent 9 supplies content) or relabel the link. Do not ship a third state.
- **R4.** No page in this run may be reachable only from `sitemap.xml`.

### 6.2 Cluster rules

- **R5.** Every spoke links to its hub, with the hub's question as anchor text. One link, in the
  body or the related block, not both.
- **R6.** Every hub links to every one of its spokes, **with each spoke's H1 question as the anchor
  text** - not "learn more", not the page title. This is the anchor text an assistant reads as the
  question the target answers.
- **R7.** Every answer page links to **≥3 siblings** in its own cluster.
- **R8.** Every answer page links to **`/rates`** (Agent 8) where a debt number is used, and to
  **`/research/mhi/[latest]`** where a cap-rate, ADR, or RevPAR number is used. At least one of the
  two, always.
- **R9.** Every answer page has **exactly one CTA**, to `/contact`. Not two, not a second inline
  form. The conversion path does not change (Ground rules).
- **R10.** Every answer page's author box links `/team/[slug]` for the author and, where a reviewer
  is named, for the reviewer.

### 6.3 Glossary rules

- **R11.** Every glossary term links to the answer page that uses it, via the new `relatedAnswers`
  field (§5.1).
- **R12.** Every answer page links the glossary term for each piece of jargon **on first use**. If
  the term has no glossary entry, either write plain English or add the term to the Wave 2 list. Do
  not link a term that does not exist.
- **R13.** No two-way loop is required beyond one hop: term → answer → term is enough. Do not build
  a link block that lists all 9+ terms on every page.

### 6.4 Listings, closed deals, and markets

The brief's rule is "listings and closed deals link to the matching `/markets/[city]` page." **That
matches a minority of records**, and a rule that fails most of the time cannot be enforced. Verified
against the data on 2026-09-17: active listings sit in 14 states, of which the 14 live market pages
cover a handful; closed deals are 18 TX plus MT, GA, FL, CO, CA, OK, OH, NY, LA, IN, IA.

- **R14.** If a record's `city` matches a `markets.ts` slug, link that market page.
- **R15.** Else if a record's `state` matches the state of any covered market, link the
  highest-transaction covered market in that state.
- **R16.** Else link the record's `/hotels-for-sale/[brand]` page and the regional cluster hub.
  **Never** link a market page whose metro does not contain the asset. That is a false geographic
  claim on a page that exists to be cited.
- **R17.** Reciprocal: each `/markets/[city]` page lists its own live listings and closed deals.
  Already partly true; keep it.

### 6.5 Making it checkable - the exact diff to `scripts/internal-links-audit.ts`

Agent 10 implements. Two functions change.

**In `urls()`, add:**
```ts
import { glossary } from "../src/lib/data/glossary";
// ...
u.push("/glossary", "/research", "/research/mhi");
for (const g of glossary) u.push(`/glossary/${g.slug}`);
u.push("/hotel-financing", "/sell-a-hotel", "/hotel-valuation");
for (const s of FINANCING_SPOKES) u.push(`/hotel-financing/${s}`);
for (const s of SELL_SPOKES)      u.push(`/sell-a-hotel/${s}`);
for (const s of VALUATION_SPOKES) u.push(`/hotel-valuation/${s}`);
for (const t of TOOLS)            u.push(`/tools/${t}`);
```

**In `expectedFor()`, add these assertions** (each maps 1:1 to a rule above):
```ts
// R5/R7/R9/R10 - every cluster spoke
if (/^\/(hotel-financing|sell-a-hotel|hotel-valuation)\/.+/.test(url)) {
  const hub = "/" + url.split("/")[1];
  if (!found.includes(hub))                 missing.push(`hub link ${hub}`);        // R5
  const sibs = found.filter(f => f.startsWith(hub + "/") && f !== url).length;
  if (sibs < 3)                             missing.push("≥3 sibling links");       // R7
  if (!has("/contact"))                     missing.push("/contact CTA");           // R9
  if (!has("/team/"))                       missing.push("author /team/ link");     // R10
  if (!has("/rates") && !has("/research/mhi"))
                                            missing.push("/rates or /research/mhi"); // R8
}
// R6 - every hub links every one of its spokes
if (["/hotel-financing","/sell-a-hotel","/hotel-valuation"].includes(url)) {
  for (const s of spokesFor(url))
    if (!found.includes(`${url}/${s}`))     missing.push(`spoke ${s}`);
}
// R11 - glossary terms point at their answer page
if (url.startsWith("/glossary/")) {
  if (!has("/hotel-financing") && !has("/sell-a-hotel") && !has("/hotel-valuation"))
                                            missing.push("≥1 cluster answer link");
}
// R1/R2 - no orphans: these must be reachable from the footer on every page
if (url === "/") {
  for (const hub of ["/hotel-financing","/sell-a-hotel","/hotel-valuation","/glossary","/research"])
    if (!has(hub))                          missing.push(`nav/footer ${hub}`);
}
```

`spokesFor()` is a small map in the script; the three arrays are the Wave 1 + Wave 2 slug lists in
§4. The script already exits non-zero on any missing edge, so this becomes the gate.

---

## 7. Where the first-party numbers come from

Spec 5.1 requires every answer page to carry **at least one original data point** attributed to
Matthews Hotel Markets. There are exactly two legitimate sources in this repo. Do not invent a third.

| Source | Owner | Used by | Attribution sentence to use |
|---|---|---|---|
| `/rates` - the September 2026 rate sheet | Agent 8 | Every `/hotel-financing/*` page, `/tools/dscr-calculator`, `/sell-a-hotel/broker-fees` (debt-assumption context) | "Matthews Hotel Markets' September 2026 rate sheet shows …" |
| `/research/mhi/[quarter]` - the Matthews Hotel Index | live, `mhi.ts` | Every `/hotel-valuation/*` page, every `/markets/[city]` page, `/tools/cap-rate-calculator` | "The Matthews Hotel Index for Q1 2026 puts …" |

**Blocking dependency:** `/rates` does not exist yet. Until Agent 8 ships it, a financing brief's
`original_data_point` field names the metric and the rate-sheet row it needs, and the writer leaves a
`[[RATE-SHEET: <metric>]]` placeholder. **Agent 10 must not publish a page with an unresolved
placeholder.** No source, no number (Ground rules).

**Two fact-check dependencies that block specific Wave 1 pages.** From `HUMAN_QUEUE.md` and the repo
map, carried forward here so they cannot be lost:
- The **$30B vs. Trepp's published $18.7B** maturity figure, used six times. Blocks
  `/hotel-financing/loan-maturities-2026-2027` and `/hotel-financing/cmbs-loans`.
- The **unverified Scottsdale RevPAR** number and the **unverified AHLA** figure. Block any Wave 1
  page that reuses them.
- The `llms.txt` **$84.3B vs. homepage $88.37B** contradiction, and the unsourced "670+ hotel
  transactions" / "founded 2024" claims. These are firm-level claims that will appear in author boxes
  and hub intros. **Nothing in Wave 1 may repeat a firm-level number until Agent 1 resolves it.** The
  briefs therefore contain **no firm-level volume claims at all**. Logged in `geo/requests.md`.

---

## 8. Redirect and slug-collision audit against `vercel.json`

I read all 12 redirects before proposing any slug. Findings:

### 8.1 No new slug collides

None of `/hotel-financing`, `/sell-a-hotel`, `/hotel-valuation`, `/tools`, `/glossary/dscr`,
`/glossary/debt-yield`, `/glossary/noi` appears as a redirect `source`. Vercel matches a `source`
exactly unless it carries a wildcard, and none of the 12 do, so no new deep path is shadowed either.

### 8.2 Near-misses worth stating so nobody trips on them later

| Existing redirect | Type | New slug nearby | Call |
|---|---|---|---|
| `/financing` → `/services/capital-markets` | 301 | `/hotel-financing` | **Leave alone.** The destination is a live conversion page, the 301 is already indexed, and re-pointing it costs more than it gains. `/services/capital-markets` links up to `/hotel-financing` instead (§3.3). |
| `/sell` → `/services/investment-sales` | 301 | `/sell-a-hotel` | **Leave alone.** Same reasoning. |
| `/sell-my-hotel` → `/services/investment-sales` | 301 | `/sell-a-hotel` | **Leave alone.** Note the near-identical string: `/sell-my-hotel` and `/sell-a-hotel` will coexist, one a 301 and one a real page. That is fine but it is a trap for a future editor; it is written down here for that reason. |
| `/buy` → `/services/acquisition-advisory` | 301 | - | Leave alone. |
| `/austin`, `/denver` → `/offices/*` | 301 | - | Leave alone. |
| `/team/sarah-chen`, `/team/marcus-reyes`, `/team/elena-park` → `/team` | 301 | - | **Leave alone forever.** Fabricated personas. Never recreate. |

### 8.3 Three redirects that are defects, not features

`/markets`, `/services`, and `/brands` are `"permanent": false` (307) redirects **to a single
arbitrary child**: `/markets` → `/markets/austin-tx`, `/services` → `/services/investment-sales`,
`/brands` → `/hotels-for-sale/hampton-inn`. There is no index page behind any of them. A user or a
crawler asking for "markets" is handed Austin. That is a bad answer and a weak signal, and it means
three of the site's four content trees have no root.

**Recommended (Agent 10, `vercel.json` is his to change; I do not touch it):**
1. Build a real `/markets` index (14 metros, the MHI summary table, region grouping) and **remove**
   the `/markets` redirect.
2. Build a real `/services` index (three service lines, one paragraph each) and **remove** the
   `/services` redirect.
3. Build a real `/hotels-for-sale` index (9 flags by parent company) and **change** `/brands` from a
   307-to-Hampton into a **301 → `/hotels-for-sale`**.

All three are additions plus the removal of a temporary redirect, so no indexed 301 is disturbed.
Logged in `geo/requests.md` with this exact wording, because it is the only `vercel.json` change this
lane asks for.

---

## 9. Reconciling `geo/04-queries.csv` (Agent 4) with this architecture

Agent 4's CSV is a good prompt set and proposes its own `target_url` per row. Those URLs were drafted
independently and **do not match the canonical slugs in this document**. This section is the binding
map. **Agent 10: route by the right-hand column.** Nothing in the CSV needs to be rewritten; the join
is by `target_url` string.

### 9.1 Slug map

| Agent 4 `target_url` | Rows | Canonical URL (this doc) | Note |
|---|---|---|---|
| `/hotel-financing/sba-loans` | 12 | `/hotel-financing/sba-7a-vs-504` | Brief's slug. The 7(a)-vs-504 comparison is the page; generic "SBA loans" is an H2 on it. Three CMBS/bridge/LTV rows in this group route to their own spokes instead. |
| `/hotel-financing/refinance-process` | 12 | `/hotel-financing/refinance` | Shorter, matches hub naming. |
| `/hotel-financing/loan-workouts` | 10 | `/hotel-financing/loan-workouts` | **Accepted as a new Wave 1 spoke.** Not in the orchestrator's spoke list, but 10 distress/special-servicing prompts is its own question set and does not fit the maturity-calendar page. |
| `/hotel-financing/life-company-loans` | 1 | `/hotel-financing/hotel-lenders-by-type` | One page, one comparison table across banks, life cos, CMBS, SBA, debt funds. Not five thin pages. |
| `/buying-a-hotel/1031-exchange` | 8 | `/hotel-financing/1031-exchange-hotels` | **No `/buying-a-hotel` tree.** A fourth noun tree next to `/markets`, `/hotels-for-sale` and the three clusters is the pattern §3.1 kills. Promoted to Wave 1 on this row count. |
| `/buying-a-hotel/financing-a-purchase` | 2 | `/hotel-financing/loan-requirements` | Same question ("how much cash / what financing") from the buyer's side. |
| `/buying-a-hotel` | 2 | `/services/acquisition-advisory` (live) | The buy-side hub already exists. |
| `/hotel-valuation/cap-rates` | 5 | `/hotel-valuation/hotel-cap-rates` | Brief's slug. |
| `/hotel-valuation/income-approach` | 2 | `/hotel-valuation/how-to-value-a-hotel` | An H2 on the parent, not a URL. Two rows does not earn a page. |
| `/hotel-valuation/sales-comparison-approach` | 1 | `/hotel-valuation/how-to-value-a-hotel` | Same. |
| `/sell-a-hotel/process` | 3 | `/sell-a-hotel/how-to-sell-a-hotel` | Brief's slug. |
| `/sell-a-hotel/timeline` | 1 | `/sell-a-hotel/how-long-it-takes` | Brief's slug. |
| `/sell-a-hotel/when-to-sell` | 1 | `/hotel-financing/refinance-or-sell` | "Sell now or wait" is the same decision as "refinance or sell". One page. |
| `/sell-a-hotel/confidential-sale-process` | 1 | `/sell-a-hotel/off-market-vs-marketed` (Wave 2) | Plus an H2 on the `/sell-a-hotel` hub in Wave 1 so the question is answered on day one. |
| `/sell-a-hotel/franchise-transfer` | 1 | `/sell-a-hotel/documents-needed` | H2 + FAQ. Franchise transfer is a document-and-approval question. |
| `/sell-a-hotel/1031-timing` | 1 | `/hotel-financing/1031-exchange-hotels` | Same page as the buy-side 1031 question, one section per side. |
| `/hotels-for-sale` | 3 | `/hotels-for-sale` | **Agrees with §8.3.** Build the real index and repoint the `/brands` redirect. |
| `/rates` | 7 | `/rates` (Agent 8) **and** `/hotel-financing/hotel-loan-rates` | §9.3. |
| `/glossary/pip` | 10 | split three ways | §9.2. |
| `/services/investment-sales` | 19 | mostly `/sell-a-hotel/how-to-choose-a-hotel-broker` | §9.2. |
| `/services/acquisition-advisory` | 15 | mostly stays, some to `/sell-a-hotel/documents-needed` | §9.2. |
| `/markets/*`, `/offices/*`, `/team/*`, `/closed`, `/contact`, `/research/*`, `/insights/*`, `/glossary/bov`, `/glossary/revpar`, `/glossary/iom`, `/hotels-for-sale/[brand]` | 100+ | unchanged | Agent 4 routed these to live pages. Correct. Those pages are extended, not rebuilt (§2, §5). |

### 9.2 Three routings I am overriding, with the reason

**(a) The 19 rows on `/services/investment-sales`.** Fifteen of them are informational ("How do I
choose a hotel broker?", "What questions should I ask a hotel broker before hiring them?", "Should I
use a national hotel brokerage or a local one?", "Do hotel brokers charge a retainer or only a
success fee?", "How do I know if my hotel broker is actually working for me?"). Putting them on a
"hire us" page fails both ways: the page cannot answer them neutrally, and the reader who wanted an
answer gets a pitch. **They go to `/sell-a-hotel/how-to-choose-a-hotel-broker`**, which states the
criteria plainly and then answers each one for Matthews Hotel Markets, clearly labeled as ours. The
four rows that stay on `/services/investment-sales` are the brand rows ("Does Matthews Hotel Markets
do hotel investment sales?") and the direct-hire rows. Fee rows go to `/sell-a-hotel/broker-fees`;
the BOV-vs-appraisal row goes to `/hotel-valuation/broker-opinion-of-value`.

**(b) The 15 rows on `/services/acquisition-advisory`.** The brand and representation rows stay. The
document rows ("What's a T-12 and why do hotel buyers ask for one?", "What's actually in a hotel CIM
that's different from a regular commercial real estate OM?", "What are red flags in a hotel offering
memorandum?", "How do buyers verify a hotel's reported NOI before closing?") go to
`/sell-a-hotel/documents-needed`, which covers the same document set from the other side of the
table, and to `/hotel-valuation/how-to-value-a-hotel` for the NOI-verification row. "What's an MPI,
ARI, and RGI" is a glossary gap: add `mpi-ari-rgi` to the Wave 2 glossary list.

**(c) The 10 rows on `/glossary/pip`.** A glossary entry cannot carry ten distinct questions. Split:
- "What is a PIP and who pays for it", "How often do I have to do a PIP on a branded hotel" →
  **`/glossary/pip`** (live, extend the entry).
- "How does a PIP affect the sale price / its value", "Does having an open PIP kill my deal if I'm
  trying to sell" → **`/sell-a-hotel` hub** (H2 + FAQ) and **`/hotel-valuation/how-to-value-a-hotel`**
  (H2 on PIP-adjusted value).
- "How much does a PIP typically cost per room", "How long do I have to complete a PIP once I get the
  notice" → **`/hotel-financing/pip-and-renovation-loans`**.
- The three brand-conversion rows ("Is it worth converting my hotel to a different brand?", "How fast
  can I convert...", "What's the actual difference between a hotel brand and a hotel franchise?") →
  **`/hotels-for-sale`** index (Wave 2).

### 9.3 `/rates` vs. `/hotel-financing/hotel-loan-rates` - not a duplicate, and here is the line

Seven CSV rows point at `/rates`. Two pages will exist and they must not overlap:

| | `/rates` (Agent 8) | `/hotel-financing/hotel-loan-rates` (Agent 6) |
|---|---|---|
| What it is | The instrument: a dated rate table, plus `/rates.json` and `/rates.csv` | The answer page: prose, comparison table, worked example, FAQ |
| Wins the prompt | "Send me Matthews Hotel Markets' current hotel loan rate sheet" | "What are current hotel loan interest rates?", "What's the spread over Treasury/SOFR for a typical hotel loan today?" |
| Word count | Minimal prose; the table is the page | 1,200–2,500, full answer-page spec |
| Relationship | Canonical source of the numbers | Cites `/rates` by date in its opening block and links it three times |

`/hotel-financing/hotel-loan-rates` **must not restate the whole rate table**. It quotes two or three
rows, explains what moves them, and sends the reader to `/rates` for the rest.

### 9.4 Prompts in the CSV that no Wave 1 page owns

Routed to the Wave 2 stub list, not forced into a Wave 1 brief: brand-conversion economics
(`/hotels-for-sale` index), MPI/ARI/RGI (glossary), "Can I sell my hotel without a broker?"
(`/sell-a-hotel/how-to-sell-a-hotel` FAQ), "What's the best time of year to list a hotel for sale?"
(`/sell-a-hotel/off-market-vs-marketed`), and the per-market pattern rows, which are handled by the
market-page extension in §5.2 rather than by new URLs. **One question, one page** survives the join.

---

## 10. Definition of done for this lane

- [x] Every live route classified extend / left alone, with the reason (§2).
- [x] Every prior-sprint URL either built, superseded, or explicitly killed (§3).
- [x] 35 new URLs specified; 30 assigned to Wave 1 with an owner (§4).
- [x] Glossary, markets, brands, research extensions specified as **data additions under live
      routes**, not new trees (§5).
- [x] 17 internal-link rules, each with the assertion that checks it in
      `scripts/internal-links-audit.ts` (§6).
- [x] First-party data sources named per page family, with the two blocking dependencies (§7).
- [x] All 12 `vercel.json` redirects read; no collisions; three defects reported (§8).
- [ ] One brief per Wave 1 page in `geo/05-briefs/` - see `geo/05-templates.md` for the shape.
