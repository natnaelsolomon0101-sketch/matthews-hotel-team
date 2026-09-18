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
| [ ] | `/hotel-financing/construction-loans` | "How do I finance hotel construction in 2026?" | Needs: supervisory LTV limits for construction (12 CFR 34 subpart D app. A), HVCRE contributed-capital test (12 CFR 217.2), SBA 7(a) maturity plus construction period, Fed SLOOS on construction and land development standards, Census construction put in place (lodging). `/rates` already carries a Construction row, spread not yet published. Table: construction versus permanent (draw schedule, interest reserve, completion guaranty, conversion). |
| [ ] | `/hotel-financing/extended-stay-financing` | "How is extended-stay hotel financing different?" | Table: extended-stay versus transient on expense ratio, lender appetite, leverage, DSCR test. Brand-side figures must come from a public FDD, not from memory. |

## B. Sell-a-hotel spokes

| Done | URL | H1 | Notes |
|---|---|---|---|
| [ ] | `/sell-a-hotel/off-market-vs-marketed` | "Should I sell my hotel confidentially or list it publicly?" | Absorbs the CSV rows `confidential-sale-process` and the best-time-to-list prompt. Table: buyer pool, price outcome, staff and guest risk, timeline, by method. |
| [ ] | `/sell-a-hotel/faq` | "Selling a hotel: questions owners ask" | Same routing pattern as `/hotel-financing/faq`. Short answers, every row links out. All five Wave 1 spokes are live, so it routes rather than duplicates. |

## C. Valuation spokes

| Done | URL | H1 | Notes |
|---|---|---|---|
| [ ] | `/hotel-valuation/revpar-multiples-and-per-key` | "What is my hotel worth per key?" | The honest version: per-key and RevPAR multiple are sanity checks, not valuation methods. Table: per-key by segment from the Matthews Hotel Index, caveat column doing real work. Pair with the `per-key` glossary term. |

## D. Tools

Build `/tools` as a hub only when four tools exist. Until then the calculators are linked from
`/hotel-financing` and `/hotel-valuation`, so they are not orphans.

| Done | URL | Notes |
|---|---|---|
| [ ] | `/tools/refinance-vs-sell` | Highest value of the three: the calculator version of `/hotel-financing/refinance-or-sell`, an act-stage page. Inputs NOI, balance, rate, cap rate, fee, PIP. Outputs refinance proceeds, net sale proceeds, the difference. Build first. |
| [ ] | `/tools/cap-rate-calculator` | Inputs NOI and price, or NOI and cap rate to solve for value. Outputs cap rate, value, price per key. |
| [ ] | `/tools/debt-yield-calculator` | Inputs NOI, loan amount. Outputs debt yield, max loan at a chosen floor. |
| [ ] | `/tools` hub | Blocked until four tools exist. One is live (`/tools/dscr-calculator`). |

## E. Glossary terms

New files in `src/lib/data/glossary/`, registered in that folder's `index.ts`. No new route. Ordered
by query coverage in `geo/04-queries.csv`, then by the stub order.

| Done | Slug | Term | Query rows | Needed by |
|---|---|---|---|---|
| [ ] | `ltv` | Loan-to-Value | 2 (priority 2) | `/hotel-financing/loan-requirements`, `/tools/dscr-calculator` |
| [ ] | `ffe-reserve` | FF&E Reserve | 1 (priority 2) | `/hotel-valuation/how-to-value-a-hotel`, `/glossary/noi` |
| [ ] | `mpi-ari-rgi` | MPI, ARI and RGI | 1 (priority 2) | `/sell-a-hotel/documents-needed` |
| [ ] | `per-key` | Price Per Key | 1 (priority 2) | `/hotel-valuation/revpar-multiples-and-per-key` |
| [ ] | `going-concern-value` | Going-Concern Value | 1 (priority 3) | `/hotel-valuation`, `/hotel-valuation/broker-opinion-of-value` |
| [ ] | `comfort-letter` | Franchise Comfort Letter | 1 (priority 3) | `/hotel-financing/loan-requirements`, `/hotel-financing/faq` |
| [ ] | `franchise-fdd` | Franchise Disclosure Document | 0 direct | `/sell-a-hotel/documents-needed`, `/hotel-financing/pip-and-renovation-loans` |
| [ ] | `key-money` | Key Money | 0 direct | `/hotel-financing/pip-and-renovation-loans` |

## F. Market pages

Only where the repo has closed deals or listings **and** public, dated market data can be sourced.
Otherwise mark SKIPPED with the reason. Adding metros without transactions is the doorway-page
pattern; do not.

| Done | Slug | Evidence in `closed.ts` | Notes |
|---|---|---|---|
| [ ] | `bozeman-mt` | Bozeman, Missoula and Whitefish closings, plus one active MT listing | Highest confidence of the three. Needs public dated market data for the metro before it can ship. |
| [ ] | `fort-collins-co` | Fort Collins and Lyons closings | Medium confidence. Miles Cortez is the Denver-based broker. |
| [ ] | `tulsa-ok` | One Tulsa closing | Low confidence. Drop it if the sourcing is thin. |

## G. Brand sub-flags

New `BrandFlag` entries in `brands.ts` under the live `/hotels-for-sale/[brand]` route. Do not build
a `/brands/*` tree.

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
| [ ] | `/buying-a-hotel/1031-exchange` (2 rows) | The only real gap. `/hotel-financing/1031-exchange-hotels` covers the topic from the financing side; decide whether to retarget the CSV rows or build a buyer-side page. Not a new noun tree without the architect's sign-off. |
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
