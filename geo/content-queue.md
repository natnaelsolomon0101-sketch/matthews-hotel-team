# Content queue

The Content Writer's checklist. One page per run, top unchecked item first. Built from
`geo/05-briefs/_wave2-stubs.md`, ordered A to G as the Writer's standing brief requires, then any
priority-1 prompt in `geo/04-queries.csv` with no page.

**How to use it.** Take the first unchecked item. Confirm no live route and no open PR already
covers it. Write it to `geo/05-templates.md`. Ship it the way `geo/AGENTS.md` §3 says. Then tick the
box here and append a line to `geo/agent-log.md`, in the same PR.

**Marking an item SKIPPED.** Write `SKIPPED (YYYY-MM-DD): reason` in the Notes column and move to the
next item. Skip an item only for a reason that will still be true next run, such as no citable public
source existing. A blocked run is not a skip: leave the box unchecked and log the blocker.

Status key: `[ ]` not started, `[~]` in progress on a branch, `[x]` live on production.

---

## A. Financing spokes

| Done | URL | H1 | Notes |
|---|---|---|---|
| [x] | `/hotel-financing/construction-loans` | "How do I finance hotel construction in 2026?" | Needs: supervisory LTV limits for construction (12 CFR 34 subpart D app. A), HVCRE contributed-capital test (12 CFR 217.2), SBA 7(a) maturity plus construction period, Fed SLOOS on construction and land development standards, Census construction put in place (lodging). `/rates` already carries a Construction row, spread not yet published. Table: construction versus permanent (draw schedule, interest reserve, completion guaranty, conversion). |
| [x] | `/hotel-financing/extended-stay-financing` | "How is extended-stay hotel financing different?" | Table: extended-stay versus transient on expense ratio, lender appetite, leverage, DSCR test. Brand-side figures must come from a public FDD, not from memory. |

## B. Sell-a-hotel spokes

| Done | URL | H1 | Notes |
|---|---|---|---|
| [x] | `/sell-a-hotel/off-market-vs-marketed` | "Should I sell my hotel confidentially or list it publicly?" | Absorbs the CSV rows `confidential-sale-process` and the best-time-to-list prompt. Table: buyer pool, price outcome, staff and guest risk, timeline, by method. |
| [x] | `/sell-a-hotel/faq` | "Selling a hotel: questions owners ask" | Same routing pattern as `/hotel-financing/faq`. Short answers, every row links out. All five Wave 1 spokes are live, so it routes rather than duplicates. |

## C. Valuation spokes

| Done | URL | H1 | Notes |
|---|---|---|---|
| [x] | `/hotel-valuation/revpar-multiples-and-per-key` | "What is my hotel worth per key?" | The honest version: per-key and RevPAR multiple are sanity checks, not valuation methods. Table: per-key by segment from the Matthews Hotel Index, caveat column doing real work. Pair with the `per-key` glossary term. |

## D. Tools

Build `/tools` as a hub only when four tools exist. Until then the calculators are linked from
`/hotel-financing` and `/hotel-valuation`, so they are not orphans.

| Done | URL | Notes |
|---|---|---|
| [x] | `/tools/refinance-vs-sell` | Highest value of the three: the calculator version of `/hotel-financing/refinance-or-sell`, an act-stage page. Inputs NOI, balance, rate, cap rate, fee, PIP. Outputs refinance proceeds, net sale proceeds, the difference. Build first. |
| [x] | `/tools/cap-rate-calculator` | Inputs NOI and price, or NOI and cap rate to solve for value. Outputs cap rate, value, price per key. |
| [x] | `/tools/debt-yield-calculator` | Inputs NOI, loan amount. Outputs debt yield, max loan at a chosen floor. |
| [x] | `/tools` hub | Blocked until four tools exist. One is live (`/tools/dscr-calculator`). |

## E. Glossary terms

New files in `src/lib/data/glossary/`, registered in that folder's `index.ts`. No new route. Ordered
by query coverage in `geo/04-queries.csv`, then by the stub order.

| Done | Slug | Term | Query rows | Needed by |
|---|---|---|---|---|
| [x] | `ltv` | Loan-to-Value | 2 (priority 2) | `/hotel-financing/loan-requirements`, `/tools/dscr-calculator` |
| [x] | `ffe-reserve` | FF&E Reserve | 1 (priority 2) | `/hotel-valuation/how-to-value-a-hotel`, `/glossary/noi` |
| [x] | `mpi-ari-rgi` | MPI, ARI and RGI | 1 (priority 2) | `/sell-a-hotel/documents-needed` |
| [x] | `per-key` | Price Per Key | 1 (priority 2) | `/hotel-valuation/revpar-multiples-and-per-key` |
| [x] | `going-concern-value` | Going-Concern Value | 1 (priority 3) | `/hotel-valuation`, `/hotel-valuation/broker-opinion-of-value` |
| [x] | `comfort-letter` | Franchise Comfort Letter | 1 (priority 3) | `/hotel-financing/loan-requirements`, `/hotel-financing/faq` |
| [x] | `franchise-fdd` | Franchise Disclosure Document | 0 direct | `/sell-a-hotel/documents-needed`, `/hotel-financing/pip-and-renovation-loans` |
| [x] | `key-money` | Key Money | 0 direct | `/hotel-financing/pip-and-renovation-loans` |

## F. Market pages

Only where the repo has closed deals or listings **and** public, dated market data can be sourced.
Otherwise mark SKIPPED with the reason. Adding metros without transactions is the doorway-page
pattern; do not.

| Done | Slug | Evidence in `closed.ts` | Notes |
|---|---|---|---|
| [ ] | `bozeman-mt` | Bozeman, Missoula and Whitefish closings, plus one active MT listing | SKIPPED (2026-09-21): the live `/markets/[city]` template renders a required "Cap rate range" block and an "ADR + RevPAR commentary" block, sourced on the page to the CBRE Cap Rate Survey, HVS US Market Pulse and STR press releases. None of those publishes Bozeman-level cap rates or ADR: CBRE's survey covers major markets only and STR's free releases are national and Top-25. Shipping this row means either inventing the two numbers (rule 1) or changing a shared template across 14 live commercial pages, which is an architect change, not a content run. Reopen when `Market` grows honest optional fields, or when Nate supplies observed values. |
| [ ] | `fort-collins-co` | Fort Collins and Lyons closings | SKIPPED (2026-09-21): same blocker as `bozeman-mt`. No public source publishes Fort Collins metro hotel cap rates or ADR. |
| [ ] | `tulsa-ok` | One Tulsa closing | SKIPPED (2026-09-21): same blocker as `bozeman-mt`, and one closing is thin evidence besides. |

## G. Brand sub-flags

New `BrandFlag` entries in `brands.ts` under the live `/hotels-for-sale/[brand]` route. Do not build
a `/brands/*` tree.

**Blocked, 2026-09-21 (not a skip: this is fixable, it just is not a content change).** Two problems
found this run, both needing a decision before any sub-flag ships.
1. `findActiveListings` and `findRecentClosed` in `src/app/hotels-for-sale/[brand]/page.tsx` match a
   listing or a closed deal by the **first word** of each flag family. A `hilton-garden-inn` entry
   with `flagFamilies: ["Hilton Garden Inn"]` would match on `hilton` and pull in all 13 Hilton
   closes. Sub-flags need an explicit match field before they can be right.
2. `/hotels-for-sale/hilton` already covers the Hilton family and
   `/hotel-franchise-costs/hilton-garden-inn` already carries the FDD-sourced brand economics. A
   third page on the same noun with the same CTA is the noun-swapped pattern `geo/AGENTS.md` rule 4
   forbids, unless it carries content neither of those has. That is the architect's call.

| Done | Flag |
|---|---|
| [ ] | `hilton-garden-inn` |
| [ ] | `home2-suites` |
| [ ] | `courtyard-by-marriott` |
| [ ] | `residence-inn` |
| [ ] | `fairfield-inn` |
| [ ] | `hyatt-place` |
| [ ] | `towneplace-suites` |
| [ ] | `woodspring-suites` |
| [ ] | `la-quinta` |

## H. Priority-1 prompts in `geo/04-queries.csv` with no page

Checked on 2026-09-18 against the registered answer and glossary modules. Every priority-1 cluster
target now resolves to a live page except the ones below, and all but the first are slug aliases the
CSV still points at rather than genuine content gaps.

| Done | CSV target | Status |
|---|---|---|
| [x] | `/buying-a-hotel/1031-exchange` (2 rows) | The only real gap. `/hotel-financing/1031-exchange-hotels` covers the topic from the financing side; decide whether to retarget the CSV rows or build a buyer-side page. Not a new noun tree without the architect's sign-off. | Resolved 2026-09-18: the new `/buy-a-hotel` hub routes 1031 questions to `/hotel-financing/1031-exchange-hotels`. |
| [x] | `/hotel-financing/sba-loans` (4 rows) | Live as `/hotel-financing/sba-7a-vs-504`. Retarget the CSV rows. |
| [x] | `/hotel-financing/refinance-process` (4 rows) | Live as `/hotel-financing/refinance`. Retarget. |
| [x] | `/hotel-financing/refinance-vs-sell` (2 rows) | Live as `/hotel-financing/refinance-or-sell`. Retarget. |
| [x] | `/sell-a-hotel/process` | Live as `/sell-a-hotel/how-to-sell-a-hotel`. Retarget. |
| [x] | `/sell-a-hotel/timeline` | Live as `/sell-a-hotel/how-long-it-takes`. Retarget. |
| [x] | `/hotel-valuation/cap-rates` | Live as `/hotel-valuation/hotel-cap-rates`. Retarget. |

---

## Run notes

**2026-09-18, Content Writer.** No page shipped. Outbound HTTPS is blocked for every host in this
environment: the egress proxy answered `403` to `CONNECT` for sba.gov, federalreserve.gov,
census.gov, ecfr.gov, fred.stlouisfed.org, home.treasury.gov, occ.gov, fdic.gov, irs.gov, bls.gov and
law.cornell.edu, and page fetches failed for every other host tried. `geo/AGENTS.md` rule 1 requires
every published figure to link to a primary source fetched and read in the same run, so no page in
this queue could be written to the bar. Nothing was marked SKIPPED, because the blocker is the
environment, not the sources: `/hotel-financing/construction-loans` remains the next item. This file
and the log line are what the run shipped. The environment's network policy needs to allow the
primary-source domains above before the Writer can run.


**2026-09-21, Content Writer.** Shipped `/sell-a-hotel/franchise-transfer`, taken from section J and
the `geo/04-queries.csv` row `/sell-a-hotel/franchise-transfer` that had no page. Sections A to E are
complete, F is now SKIPPED for a sourcing reason that will still hold next run, and G is blocked on a
matcher bug plus a rule 4 question. Outbound HTTPS worked this run, unlike 2026-09-18: five 2026
franchise disclosure documents were downloaded and read for the page.

## I. Shipped 2026-09-18 outside the original queue

Conversational pages added by the parallel push. Listed so nobody rewrites them.

- `/hotel-financing/`: `non-recourse-loans`, `lenders-under-5-million`, `brand-conversion-financing`, `interest-only-loans`
- `/sell-a-hotel/`: `franchise-agreement-expiration`, `taxes-when-selling-a-hotel`, `selling-a-distressed-hotel`
- `/hotel-valuation/`: `branded-select-service-hotel-value`, `appraisal-lower-than-expected`, `pip-and-hotel-value`, `interest-rates-and-hotel-value`
- `/buy-a-hotel` (new cluster): hub, `how-much-money-do-you-need`, `due-diligence-checklist`, `first-hotel-no-experience`, `branded-vs-independent`
- Glossary: `sofr`, `prime-rate`, `sba-7a`, `sba-504`, `defeasance`, `yield-maintenance`, `non-recourse-carve-outs`, `mezzanine-debt`, `comp-set`, `gop`, `ground-lease`, `franchise-agreement`

## J. Next up when A to H are done

Pick from `geo/04-queries.csv` prompts with no dedicated page, phrased the way people ask an assistant.
Candidates: hotel loan assumption, seller financing for a hotel, preferred equity (needs a citable
source), what buyers look for in a hotel, selling a hotel with a ground lease, hotel property tax
appeals, receivership from the owner's side, STR report explained (public STR pages block scripts; use
an FDD Item 19 definition).

## K. Shipped 2026-09-18 (second push)

- `/hotel-franchise-costs` (new cluster): hub with a 14-brand comparison table, plus `hampton-inn`, `hilton-garden-inn`, `home2-suites`, `homewood-suites`, `tru-by-hilton`, `spark-by-hilton`, `tapestry-collection`, `doubletree`, `hyatt-place`, `comfort-inn`, `days-inn`, `super-8`, `la-quinta`, `best-western`. Every figure is from the brand's own 2026 FDD.
- `/hotel-industry` (new cluster): hub, `how-hotels-make-money`, `revpar-adr-occupancy`, `owner-franchisor-management-company`, `who-owns-hotels`, `chain-scales-and-classes`, `industry-size-2026`, `outlook-2026-2027`.
- `/data/sba-hotel-lending`: SBA loan-level data filtered to hotels, refreshed quarterly by `.github/workflows/sba-refresh.yml` (runbook: `geo/13-sba-tracker.md`).
- `/tools/hotel-value-estimator`, `/tools/hotel-loan-sizing-calculator`.

## L. Brand guides still to write (blocked on the FDD, not on effort)

IHG (Holiday Inn Express, Staybridge, Candlewood) and Marriott (Fairfield, Courtyard, Residence Inn, TownePlace): no 2025 or 2026 FDD is downloadable from an open state registry, and California DocQNet shows a human-verification page to scripts. Do not bypass it and do not use third-party franchise-cost sites. Write these only when Nate drops the PDFs into the repo's scratch area. Likely feasible now from Wisconsin DFI or Minnesota CARDS: Microtel, Quality Inn, Sleep Inn, Hyatt House, SureStay, Wingate, Baymont, Ramada.

Annual refresh: franchisors issue new FDDs each spring (Hilton's were dated March 30, 2026). Each April, re-read every brand's new FDD and update its page. The buy-a-hotel pages still quote the 2025 Hampton FDD (RevPAR index 121.0 for 2024; the 2026 FDD reports 120.8 for 2025): the Maintainer should refresh them.

## M. Shipped 2026-09-18 (third and fourth pushes)

- `/data/sba-hotel-lending/<state>`: 44 state pages, each from that state's own SBA data.
- `/hotel-financing/`: `c-pace-financing`, `usda-b-and-i-loans`, `eb-5-financing`, `historic-tax-credits`, `opportunity-zones`, `loan-assumption`, `mezzanine-debt-and-preferred-equity`, `capital-stack`, `covenants-and-cash-management`, `interest-rate-caps`, `cash-out-refinance`, `closing-costs`.
- `/sell-a-hotel/`: `selling-a-hotel-on-a-ground-lease`, `what-buyers-look-for`. `/hotel-valuation/`: `property-tax-appeal`, `partner-buyout-valuation`. `/buy-a-hotel/`: `seller-financing`, `buying-a-hotel-from-receivership-or-foreclosure`.
- `/hotel-industry/`: `hotel-management-agreements`, `hotel-operating-costs`, `extended-stay-hotels`, `cost-to-build-a-hotel`, `who-buys-hotels`, `how-hotel-reits-work`.
- `/hotel-franchise-costs/`: `quality-inn`, `sleep-inn`, `econo-lodge`, `cambria`, `woodspring-suites`, `hyatt-house`, `surestay`, `red-roof-inn`, `motel-6`, `microtel`. Still feasible from Wisconsin DFI: Wingate, Baymont, Ramada.

## N. Service-claims rule (owner, 2026-09-18)

The site may only say the team does what Nate confirmed: arranging hotel financing (bank, CMBS, life company, bridge, construction, PIP, SBA 7(a) and 504, mezzanine, preferred equity, C-PACE, recapitalizations) from $5 million; selling hotels from $2 million; free broker opinions of value; buyer representation including 1031 buyers; distressed, receivership and note sales. A page may explain anything else (EB-5, USDA B&I, tax credits, opportunity zones, tax appeals, appraisals, management, development) but must say the team does not do it and route its CTA to a confirmed service. No invented track record, clients, quotes or "we see" statistics. `scripts/claims-audit.mjs` regenerates `geo/17-claims-audit.csv`.

Dates to re-verify: SBA SOP 50 10 8.1 and USDA FY2027 fees after 2026-10-01; EB-5 amounts and opportunity zone rules after 2027-01-01; franchise FDDs each April.
