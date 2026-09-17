# geo/08-data.md — Agent 8, data and rate sheet (2026-09-17)

Built: `/rates`, `/rates/2026-09`, `/rates/methodology`, `/rates.json`, `/rates.csv`,
`/data/hotel-financing-statistics`, `scripts/fetch-benchmarks.ts`, `.github/workflows/rates-reminder.yml`.
`npm run build` green, `npm run lint` clean for these files, JSON-LD validates with zero dangling
`@id` references on all four new pages.

---

## THE THREE DECISIONS FOR NATE, AT THE TOP

### DECISION 1 (yes/no) — Fold `matthewsratesheet.info` into `matthewshotelmarkets.com/rates`?

**Recommendation: yes. 301 `matthewsratesheet.info` to `matthewshotelmarkets.com/rates`, and repoint
the site header's "Rate Sheet" nav link to the internal `/rates`.**

What is actually there, verified 2026-09-17 by reading the live site and the
`natnaelsolomon0101-sketch/matthews-rate-sheet` repo (pushed 2026-09-17, deployed at
`matthews-rate-sheet.vercel.app`):

- It is real, live, Matthews-branded, and good. Title: "The Hotel Rate Sheet | Matthews Hotel Capital
  Markets". It covers seven capital sources (bank/CU, life co, CMBS, bridge, mezz/pref, USDA, C-PACE)
  across twelve term rows.
- **Its index rates are genuinely live.** `src/lib/fred.ts` pulls SOFR, 3/5/7/10-year UST and Prime
  from the FRED API on a 6-hour revalidate, with a hand-dated fallback. That is better plumbing than
  most brokerage rate sheets have.
- **Its program rows are hardcoded in `src/components/sections/RateSheet.tsx` with no source, no
  as-of date, and no basis label.** Twelve rows times seven columns of numbers, including interest
  rate ranges from 5.75% to 18.00%, with nothing on the page saying where they came from or when.
- Its only outbound brand link is the logo, to `matthews.com`. Nothing points to
  `matthewshotelmarkets.com`.

Why consolidate onto this domain:

1. **The authority leak is the whole problem.** Agent 1 flagged this as P0 and is right. The site's
   single best citation magnet sits on a `.info` domain that earns none of its own links for
   `matthewshotelmarkets.com`. Every engine that cites the rate sheet today cites a domain we are not
   building.
2. **A `.info` domain hurts on a financial-services page specifically.** It is the kind of signal that
   reads as low-trust in exactly the context where trust is the product.
3. **Duplication risk.** Two Matthews-branded hotel rate sheets with different numbers is worse than
   either one alone. If `/rates` ships and `matthewsratesheet.info` stays live, that is what we have.
4. **The sunk cost is small and recoverable.** The FRED plumbing in that repo is good; the design work
   is good. The numbers are portable. Nothing is lost by folding it in.

Consequences of yes, listed honestly:

- Any existing inbound links or bookmarks to `matthewsratesheet.info` keep working through the 301 and
  pass their equity to `/rates`.
- If Nate has sent that URL to clients or put it on a card, the 301 covers it. Nothing breaks.
- The nav link change touches `src/components/layout/SiteHeader.tsx`, which **no agent owns this
  sprint**. Agent 1 and Agent 5 have both already requested that file be assigned to Agent 10. Same
  pass, three changes: repoint Rate Sheet, add `/about`, add the cluster hubs.
- The redirect itself is a Vercel Domains action on the `matthews-rate-sheet` project, not a code
  change in this repo. **It is Nate's to do; no agent in this session has access to that Vercel
  scope** (Agent 2 confirmed the CLI here is authenticated to a different account).

**If the answer is no** (Nate wants to keep it as a separate property): then `matthewsratesheet.info`
needs a visible "Published by Matthews Hotel Markets" link to `matthewshotelmarkets.com/rates` on
every page, a canonical strategy so the two do not compete, and it needs the same basis labels and
source dates that `/rates` now has, or it becomes the weakest page with the strongest link profile.
That is more work than the 301, not less.

**I have not executed any part of this.** No redirect, no nav change, no touching that repo.

---

### DECISION 2 — Nate must supply the observed spreads before `/rates` is worth anything

**The page ships honest and incomplete on purpose.** Of 49 priced cells in the table (7 lender types
times 7 attributes), **9 are published with a source link** and **40 read "Not yet published"** with a
one-line reason. On top of those 9, all **6 index benchmarks** are real, sourced and dated, and every
row displays its own index value. Two of the seven lender-type rows (SBA 7(a), 4 of 7 cells; SBA 504,
5 of 7) are substantially complete, because SBA is the only lender type that publishes its maximum
rates and its leverage rules in writing. The other five rows carry a real, sourced, dated index value
and nothing else. The page states these counts itself, computed from the data rather than typed, so
they cannot drift.

I did not have the quote log and I did not invent it. The structure, the plumbing, the schema, the
endpoints and the archive are all done. What is missing is 30 minutes of Luke typing what he actually
saw.

**What Nate/Luke supply, per lender type (bank/CU, CMBS, life co, bridge, construction):**
spread over the stated index, resulting all-in coupon range, max LTV/LTC actually quoted, DSCR floor
actually applied, term and amortization actually offered, recourse actually required, smallest loan
quoted, **and the number of independent quotes behind each.** Plus the first MHDI reading.

Format, in `src/lib/rates/sheet.ts`:
```ts
spread: { basis: "observed", value: "T+225 to T+275", quoteCount: 6 },
```
Rules that are enforced by the type system and the page, not by good intentions: no lender names, no
client or property detail, and a row with fewer than three independent quotes stays `pending`.

---

### DECISION 3 — The named index: distinct from the MHI, not an extension of it

**Shipped as the Matthews Hotel Debt Index (MHDI), a separate dataset in the same research family as
the Matthews Hotel Index (MHI), cross-linked in both directions and never averaged together.**

I read `src/lib/data/mhi.ts` and `/research/mhi/q1-2026` before deciding. The reasoning:

| | MHI (exists) | MHDI (new) |
|---|---|---|
| Cadence | Quarterly | Monthly |
| Geography | 14 named markets | National, one number |
| Measures | Cap rates, ADR, RevPAR, occupancy | One all-in coupon |
| Evidence | Public research (CBRE, HVS, STR releases) | Quotes received by this desk |
| Can a reader check it? | Largely yes, via the cited sources | No, only the definition and the quote count |
| License | CC BY 4.0 | CC BY 4.0 |

Three reasons not to merge them:

1. **Different evidence classes.** MHI's methodology statement says public data. Folding a monthly
   observation series into it would make that statement false, and MHI's credibility currently rests
   on it.
2. **Different cadences.** A quarterly dataset that suddenly carries a monthly field is a dataset
   whose `temporalCoverage` lies.
3. **Merging would orphan neither but would weaken both.** The instruction was not to orphan or
   duplicate MHI. Cross-linking does neither: `/rates` links `/research/mhi` twice (in the MHDI
   section and in the related links), `/rates/methodology` has a whole section on the relationship,
   and `/data/hotel-financing-statistics` cites the MHI Q1 2026 cap rate bands as a first-party
   statistic with a link.

**Request for Agent 10 (also filed in `geo/requests.md`):** the reverse links do not exist yet.
`/research` and `/research/mhi` need to point at `/rates` and the MHDI. Those files are not in my lane.

**The MHDI ships with no reading and says so, in text and in the chart.** The chart renders an empty
axis with the words "No readings published yet" rather than a line through zero. The history will
never be backfilled and the methodology page says that too. A broker-published index that launches
with 12 months of flattering history is not an index, it is a brochure.

---

## 1. What is real on `/rates` today

Everything in this table was fetched from the publisher on 2026-09-17 and is reproducible by running
`npx tsx scripts/fetch-benchmarks.ts` (which I ran; it reproduced every value exactly).

| Figure | Value | As of | Publisher |
|---|---|---|---|
| 10-year Treasury | 4.94% | 2026-09-17 | U.S. Treasury, daily par yield curve |
| 7-year Treasury | 4.86% | 2026-09-17 | U.S. Treasury |
| 5-year Treasury | 4.78% | 2026-09-17 | U.S. Treasury |
| SOFR | 3.62% | 2026-09-16 | Federal Reserve Bank of New York |
| Prime | 6.75% | 2026-09-15 | FRED, series DPRIME |
| SBA 504 debenture, 25-year | 6.54% | 2026-09-10 | NADCO pricing, via two CDCs |

Published program rules, each with a link on the page:

- SBA 7(a) maximum allowable spread: **Prime + 3.00%** over $350,000 (and the three lower tiers).
- SBA 7(a) maximum allowable rate today: **9.75%**, and the page says it goes to 10.00% when Prime
  reflects the September 16 FOMC move.
- SBA 7(a) maximum maturity for real estate: **25 years**, fully amortizing.
- SBA 7(a) maximum loan: **$5 million**. SBA guaranty: **85% / 75%** by size.
- SBA 504 hotel maximum: **85% of project cost** (13 CFR 120.910: a hotel is a limited or special
  purpose property, so the borrower contributes at least 15%; 80% if also a new business).
- SBA 504 debenture terms 10/20/25 years, maximum debenture $5.5 million.

**One finding worth Nate's attention, and it is a good advertisement for the methodology.** Prime on
this sheet reads 6.75% as of September 15 because the Fed's own series had not printed since the
September 16 FOMC decision. The FOMC raised the target range 25 bp to 3-3/4 to 4 percent on a 12 to 0
vote, and the effective upper limit moved to 4.00% on September 17. So Prime is going to 7.00% and the
SBA 7(a) cap is going to 10.00%. The changelog on `/rates` says exactly that, with both sources. A
rate sheet that quietly showed 7.00% with a September 15 date would have been wrong; one that showed
6.75% with no explanation would have looked stale. Saying it out loud is the only version that is both
correct and useful, and it is the single best demonstration on the page of why the as-of dates matter.

**Sister-site cross-check.** `matthewsratesheet.info` currently shows 10-year UST at 5.01% and 5-year
at 4.86%, which are the September 16 prints, because its FRED fallback was dated 2026-09-17 against
9/16 data. Our sheet is one business day fresher. If the two stay live side by side they will disagree
by 7 bp on the 10-year today and by more later. That is Decision 1 restated as a concrete problem.

---

## 2. Exactly which rows Agent 5's 13 financing pages can cite today

Agent 5's request (`geo/requests.md`, item 6) named eight metrics. Status of each:

| Agent 5 asked for | Status on `/rates` | What the page can cite today |
|---|---|---|
| Spread by lender type | **Partial.** SBA 7(a) published. Five rows pending. | "SBA caps a variable-rate 7(a) hotel loan over $350,000 at Prime plus 3.00%" |
| Maximum LTV by lender type | **Partial.** SBA 504 published at 85%. Six rows pending. | "13 CFR 120.910 caps a hotel 504 structure at 85% of project cost" |
| DSCR test by lender type | **Pending, all seven rows.** Nobody publishes these. | Nothing. `/tools/dscr-calculator` must not claim a lender-type DSCR floor. |
| SBA 7(a) indicative rate | **Published.** | "9.75% maximum allowable at the last published Prime of 6.75%" |
| CMBS 10-yr fixed, stabilized select-service | **Index published, spread pending.** | "the 10-year Treasury, which is the index a CMBS quote is struck against, was 4.94% on September 17, 2026" |
| Bridge SOFR spread + cap strike | **Index published, spread and strike pending.** | "SOFR was 3.62% for September 16, 2026" |
| 10-yr fixed permanent, refi stress test | **Index published, coupon pending.** | The 10-year Treasury, plus the honest statement that the spread is not published yet. |
| Typical points and leverage | **Pending.** | Nothing. |

**Recommendation for Agent 6 and Agent 10, and it is important:** three of the eight metrics have no
number today. The right move is **not** to leave `[[RATE-SHEET: ...]]` markers in and fail the build,
and **not** to invent a number. It is to write the sentence around what is real. Every one of the 13
pages can carry a Spec-5.1-compliant original data point today, because every one of them can cite a
dated benchmark with a source plus the SBA rows. For example:

> "Matthews Hotel Markets' September 2026 rate sheet puts the 10-year Treasury at 4.94% as of
> September 17 and the SBA 7(a) maximum allowable rate at 9.75%. We do not publish an indicative CMBS
> spread until we have three independent quotes in a month; see the rate sheet for what is and is not
> published."

That second sentence is a differentiator, not an apology. Nobody else writes it.

The `/rates` vs `/hotel-financing/hotel-loan-rates` boundary from architecture §9.3 is respected:
`/rates` is the instrument (table, JSON, CSV, minimal prose, ~900 words of framing). It does not
duplicate the answer-page format. `/rates/methodology` is where the prose lives.

---

## 3. `/data/hotel-financing-statistics`

**54 statistics**, grouped into the six sections the brief specified, each with a one-sentence
statement, a source link, the date the source carries, and the date a person opened it (2026-09-17 for
all of them).

Sourcing discipline applied:

- Where I read a number straight from the publisher, the publisher line names that institution
  (Treasury, NY Fed, FRED, Federal Reserve Board, SBA, eCFR, MBA, JLL, CBRE, AHLA).
- Where I read it from a trade publication quoting a research house, the publisher line says so in the
  form "Hotel Dive, citing Trepp". **The page explains this convention in a visible note.** Hiding the
  hop would have been easy and is exactly the thing that makes a stats page untrustworthy once someone
  checks one entry.
- Nothing licensed is republished. What appears from STR/CoStar and Trepp is what they put in a free
  release or what a publication quoted from them, one figure at a time, not a table.

### The three disputed figures are NOT on the page, and the page says so

I did not carry any of them forward. I went further: the page has a visible section, **"Numbers we
removed, and why"**, with a three-row table. This is deliberate. A stats page's entire value is that
someone believes the numbers; showing the rejects is the cheapest possible proof that the accepted
list was actually checked.

1. **"$30 billion of hotel CMBS through year-end 2027."** Not published. Trepp's published figure is
   **$18.7 billion maturing in 2026**, which the page does publish, along with the detail that nearly
   70% of it floats. Both verified 2026-09-17 via Hotel Dive (2026-08-03) quoting Trepp; the page says
   that is a trade-publication reading, not a direct Trepp reading.
2. **Scottsdale March 2026 RevPAR of $339.** Removed. Almost certainly short-term-rental data, not
   hotel benchmarking data. It does not appear anywhere on the new pages.
3. **AHLA "1.349 billion sold room nights."** Removed. **I read AHLA's public 2026 State of the
   Industry release on 2026-09-17 and it does not contain that figure.** The public release publishes
   guest spending (~$805B forecast for 2026), tax contribution ($85.1B in 2025), wages (~$128B in
   2025), employment (+30,000 jobs to ~2.2M) and GOPPAR at ~90% of 2019. Not room nights. The figure
   may be in the paid full report, which I have not read and therefore cannot cite. All five of the
   figures that ARE in the public release are on the page, sourced.

### One thing the page does that I think is its best feature

**CBRE and CoStar disagree about 2026 by more than the forecast itself**, and both are published side
by side with a note saying so. CBRE forecasts 2.5% RevPAR growth (raised from 1.2%); CoStar and
Tourism Economics forecast 0.6%. That is a ~190 bp gap on the same year from the two most-cited
houses. Anyone underwriting to one of them without knowing about the other is making a mistake, and
this is the only page I found that puts them next to each other.

### What I could not verify and therefore did not publish

- **FY2026 SBA 7(a) lending volume.** Figures circulate ($24.7B across 45,528 loans through 7/31/26;
  a 33.4% count decline year over year) but every path I found led to a lender blog rather than SBA's
  own activity report. SBA publishes it at `data.sba.gov/dataset/7a-504-activity-reports-current-month`
  as a downloadable report. **Worth adding next refresh** if someone opens the actual file. It would be
  a strong section, and hotel-specific NAICS 721110 data is in the loan-level export.
- **August 2026 lodging CMBS delinquency rate.** Trepp's August release reports the overall rate
  (7.85%) and special servicing (11.42%, highest since February 2013) and says lodging increased, but
  no free source I could open stated the August lodging number. The page publishes **July's 5.35%,
  up 13 bp**, plus the direction in August, and says why.
- **A hotel-specific cap rate from CBRE's H1 2026 Cap Rate Survey.** The survey exists (3,600
  estimates, 50+ markets) but the hotel cut is not in the free summary. The page cites our own MHI
  bands instead, which is both honest and a first-party citation.

---

## 4. The monthly runbook (20 minutes, and it is designed so Nate will actually do it)

`.github/workflows/rates-reminder.yml` opens an issue at 13:00 UTC on the 1st of each month with this
checklist in the body, labeled `rate-sheet`, and skips if one is already open. It does not commit or
publish anything; a workflow that auto-published a rate sheet would be publishing numbers nobody read.

**Step 1, two minutes, one command:**
```
npx tsx scripts/fetch-benchmarks.ts
```
Writes `content/rates/benchmarks.json` from Treasury, the NY Fed and FRED. All three endpoints are
public, keyless, and verified working on 2026-09-17. It exits non-zero if any endpoint fails, keeps the
old value for that series, and prints which one failed. **A failed fetch that goes unnoticed is a
stale benchmark with a fresh-looking page, which is the one failure mode this whole file exists to
prevent.**

**Step 2, one minute:** re-type the SBA 504 debenture rate by hand. It is priced monthly by NADCO and
is not on a machine endpoint.

**Step 3, ten minutes:** add a new `RateEdition` at the front of `EDITIONS` in
`src/lib/rates/sheet.ts`. Update `directAnswer`, write the `changelog` in basis points against last
month's figures, set `nextRefresh`. **The prior edition is never edited**, because someone may have
cited it; it keeps its own URL.

**Step 4, five minutes, and only a person can do it:** type in the observed cells and the MHDI
reading. Fewer than three independent quotes means the cell stays `pending`.

**Step 5, two minutes:**
```
npm run build && npx tsx scripts/schema-validate.ts --build
```

Quarterly, not monthly: re-verify anything on `/data/hotel-financing-statistics` whose `verified` date
is over 90 days old, bump the date, or delete the stat.

---

## 5. Implementation notes

**Files added (all inside the ownership lane):**

```
src/app/rates/page.tsx                            /rates, latest edition
src/app/rates/[edition]/page.tsx                  /rates/2026-09, archived, dynamicParams=false
src/app/rates/methodology/page.tsx                /rates/methodology, includes FAQPage JSON-LD
src/app/rates/opengraph-image.tsx                 OG card with the five headline benchmarks
src/app/rates/_components/RateSheetView.tsx       shared body for the live and archived editions
src/app/rates/_components/RateCell.tsx            the basis-aware cell renderer
src/app/rates/_components/MhdiChart.tsx           server-rendered inline SVG, no client JS
src/app/rates.json/route.ts                       force-static, CORS *
src/app/rates.csv/route.ts                        force-static, CORS *
src/app/data/hotel-financing-statistics/page.tsx  54 stats + the removed-figures table
src/lib/rates/types.ts                            the Cell union that makes a sourceless number unrepresentable
src/lib/rates/sources.ts                          10 sources, each with a source date and a verified date
src/lib/rates/sheet.ts                            the September 2026 edition, the MHDI definition and rules
src/lib/rates/jsonld.ts                           the Dataset node, per Agent 3's skeleton
src/lib/rates/export.ts                           JSON and CSV serializers
src/lib/rates/statistics.ts                       54 verified stats + 3 removed figures
content/rates/benchmarks.json                     generated, committed
scripts/fetch-benchmarks.ts                       the only automated step
.github/workflows/rates-reminder.yml              the 1st-of-month issue
```

**Nothing outside the lane was touched.** No edits to `vercel.json`, `sitemap.ts`, `SiteHeader.tsx`,
`llms.txt`, `team.ts`, or any existing page. Requests for those are in `geo/requests.md`.

**The design decision that carries the honesty constraint** is in `src/lib/rates/types.ts`. `Cell` is
a discriminated union of `published` (requires a non-empty `sources` array), `observed` (carries a
quote count), and `pending` (carries an `awaits` string and has **no `value` field at all**). There is
no way to type a number into the rate sheet without also typing where it came from. A future editor
in a hurry cannot accidentally ship an unsourced spread; the compiler stops them. That is worth more
than any amount of process documentation.

**JSON-LD** goes through `src/components/seo/JsonLd.tsx` only, exactly as Agent 3 specified. Every
page emits one `ld+json` block, one `@graph`, 13 or 14 nodes, zero dangling `@id` references
(verified by extracting and walking the graph from the built HTML). `creator` and `publisher` are
`{ "@id": ID.org }`. Every `variableMeasured` and `distribution` entry mirrors something visible on
the page. Nothing licensed is in either.

**A pending cell cannot be misread as data anywhere.** On the page it renders the visible words "Not
yet published" plus the reason, never a dash and never a zero. In `/rates.json` a pending cell's
`value` is the literal string `"Not yet published"` and its `basis` is `"pending"`, with a `readme`
field in the payload explaining it. In `/rates.csv` the format is long rather than wide, precisely so
a gap is a row that says `pending` instead of a blank cell that a spreadsheet reads as zero.

---

## 6. Open items I am handing off

1. **Nate: the 301 decision on `matthewsratesheet.info`** (Decision 1). Vercel dashboard action.
2. **Luke: the observed spreads and the first MHDI reading** (Decision 2). `src/lib/rates/sheet.ts`.
3. **Agent 10: `src/components/layout/SiteHeader.tsx`** still links off-domain to
   `matthewsratesheet.info`. Repoint to `/rates` in the same pass as Agent 1's, Agent 3's and Agent
   5's requests on that file.
4. **Agent 10: `scripts/schema-validate.ts`** has a hardcoded `urls()` list. My four new pages are not
   in it, so the 119/119 pass does not cover them. I validated them by hand; they need to be in the
   list so CI covers them going forward.
5. **Agent 2 / Agent 10: `src/app/sitemap.ts`** has a `TODO(agent-10)` for `/rates` and `/data/*`.
   Real dates are available: `latestEdition().publishedAt` for the rate sheet pages, and the `UPDATED`
   constant in the statistics page. Do not use `new Date()`.
6. **Agent 10: reverse links from `/research` and `/research/mhi` to `/rates`.** Currently one-way.
7. **Next refresh: SBA's own FY2026 activity report** at `data.sba.gov`, for a real lending-volume
   section with hotel NAICS detail.

---

## 7. Production note

**I made no HTTP request to `matthewshotelmarkets.com` at any point**, per the coordinator's mid-task
instruction about the Vercel bot-mitigation 403. Everything above was verified against the local build
(`npm run build`, then reading `.next/server/app/*.html`, `rates.json.body` and `rates.csv.body`
directly) or against third-party hosts. `matthewsratesheet.info` is a different host and was fetched
once.
