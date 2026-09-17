# Wave 2 stubs - Agent 5, content-architect

Every URL here is specified enough to hand to a writer, and deliberately not written as a full brief.
Wave 2 starts when Wave 1 is live, `/rates` exists, and the `HUMAN_QUEUE.md` fact disputes are
closed. Order within each group is priority order.

**Rules that still apply:** every page passes the answer-page spec, every slug is checked against
`vercel.json` (none of these collide), no new noun tree is created, and nothing here duplicates a
Wave 1 page or a live route.

---

## A. Financing spokes

| URL | H1 | Owner | Why Wave 2, not Wave 1 | Table it needs |
|---|---|---|---|---|
| `/hotel-financing/construction-loans` | "How do I finance hotel construction in 2026?" | 6 | No direct CSV row. Ground-up is a small share of current owner questions. | Construction loan terms versus permanent: draw schedule, interest reserve, completion guaranty, conversion |
| `/hotel-financing/extended-stay-financing` | "How is extended-stay hotel financing different?" | 6 | Segment-specific, thinner query volume, and it leans on brand data we would need to source. | Extended-stay versus transient: expense ratio, lender appetite, leverage, DSCR test |

## B. Sell-a-hotel spokes

| URL | H1 | Owner | Why Wave 2 | Notes |
|---|---|---|---|---|
| `/sell-a-hotel/off-market-vs-marketed` | "Should I sell my hotel confidentially or list it publicly?" | 7 | Wave 1 answers it as an H2 on the `/sell-a-hotel` hub, so the question is covered from day one. | Absorbs the CSV rows `confidential-sale-process` and "What's the best time of year to list a hotel for sale?" Table: buyer pool, price outcome, staff and guest risk, timeline, by method. |
| `/sell-a-hotel/faq` | "Selling a hotel: questions owners ask" | 7 | Build it once the five Wave 1 spokes exist, so it routes rather than duplicates. | Same pattern as `/hotel-financing/faq`: short answers, every row links out. |

## C. Valuation spokes

| URL | H1 | Owner | Why Wave 2 | Notes |
|---|---|---|---|---|
| `/hotel-valuation/revpar-multiples-and-per-key` | "What is my hotel worth per key?" | 7 | One CSV row. Demoted from the pre-CSV Wave 1 cut for exactly that reason. | The honest version: per-key and RevPAR multiple are sanity checks, not valuation methods. Table: per-key by segment from the Matthews Hotel Index, with the caveat column doing real work. |

## D. Tools

Build `/tools` as a hub **only when there are four tools**, not two. A hub over two children is thin.
Until then, the two Wave 1 calculators are linked from `/hotel-financing` and `/hotel-valuation`, so
they are not orphans (rule R4).

| URL | Inputs | Outputs | Owner |
|---|---|---|---|
| `/tools/cap-rate-calculator` | NOI, purchase price, or NOI and cap rate to solve for value | Cap rate, value, price per key | copy 7, build 10 |
| `/tools/debt-yield-calculator` | NOI, loan amount | Debt yield, max loan at a chosen floor | copy 6, build 10 |
| `/tools/refinance-vs-sell` | NOI, balance, rate, cap rate, fee, PIP | Refinance proceeds, net sale proceeds, the difference | copy 6, build 10 |
| `/tools` | - | Hub listing all four, each with its H1 as anchor text | 10 |

`/tools/refinance-vs-sell` is the highest-value of the three, because it is the calculator version of
`/hotel-financing/refinance-or-sell`, which is an act-stage page. Build it first.

## E. Glossary terms

New files under `src/lib/data/glossary/`, registered in that folder's `index.ts`. No new route.

| Slug | Term | Needed by | Note |
|---|---|---|---|
| `ltv` | Loan-to-Value | `/hotel-financing/loan-requirements`, `/tools/dscr-calculator` | The third sizing test; the other two ship in Wave 1 |
| `ffe-reserve` | FF&E Reserve | `/hotel-valuation/how-to-value-a-hotel`, `/glossary/noi` | The line owners most often omit from NOI |
| `going-concern-value` | Going-Concern Value | `/hotel-valuation`, `/hotel-valuation/broker-opinion-of-value` | Direct CSV row; currently answered only in passing |
| `franchise-fdd` | Franchise Disclosure Document | `/sell-a-hotel/documents-needed`, `/hotel-financing/pip-and-renovation-loans` | Every brand fee figure on the site cites an FDD |
| `mpi-ari-rgi` | MPI, ARI and RGI | `/sell-a-hotel/documents-needed` | Direct CSV row, currently unrouted (architecture §9.2b) |
| `key-money` | Key Money | `/hotel-financing/pip-and-renovation-loans` | |
| `comfort-letter` | Franchise Comfort Letter | `/hotel-financing/loan-requirements`, `/hotel-financing/faq` | Direct CSV row |
| `per-key` | Price Per Key | `/hotel-valuation/revpar-multiples-and-per-key` | Pair with that page |

## F. Market pages

**Three additions only, each backed by transactions in `closed.ts`** (architecture §5.2). New entries
in `markets.ts`, no new route.

| Slug | Evidence | Confidence |
|---|---|---|
| `bozeman-mt` | Three Montana closings (Bozeman, Missoula, Whitefish) plus one active MT listing. `Market.region` already carries `"Mountain West"`. | High |
| `fort-collins-co` | Two Colorado closings outside Denver (Fort Collins, Lyons). Miles Cortez is the Denver-based broker. | Medium |
| `tulsa-ok` | One Tulsa closing. Nearest uncovered metro to the Texas cluster. | Low. Drop it if the extension work runs long. |

Beyond these three: **no data.** Active listings sit across 14 states, mostly tertiary cities that do
not support a metro page. Adding metros without transactions is the doorway-page pattern. Do not.

Secondary signal, worth noting but not sufficient on its own: `team.ts` places the extended bench in
Orange County, Fort Lauderdale, Kansas City, Tampa, Phoenix, Dallas, Encino, Nashville and Cleveland.
Tampa, Phoenix, Dallas and Nashville already have market pages. A broker in a city is not a
transaction in that city, so this does not by itself justify a new page.

## G. Brand sub-flags

New `BrandFlag` entries in `brands.ts` under the **live** `/hotels-for-sale/[brand]` route. **Do not
build a `/brands/*` tree**; the prior sprint proposed one and `/hotels-for-sale/[brand]` shipped
instead (architecture §3.1, §5.3).

Order: `hilton-garden-inn`, `home2-suites`, `courtyard-by-marriott`, `residence-inn`,
`fairfield-inn`, `hyatt-place`, `towneplace-suites`, `woodspring-suites`, `la-quinta`.

## H. Index pages that fix the three broken redirects

Architecture §8.3. These are the only `vercel.json` changes this lane asks for, and they are logged
in `geo/requests.md`.

| Build | Then | Why |
|---|---|---|
| `/markets` index: 14 metros grouped by region, MHI summary table | **Remove** the `/markets` → `/markets/austin-tx` 307 | A crawler asking for "markets" is currently handed Austin |
| `/services` index: three service lines, one paragraph each | **Remove** the `/services` → `/services/investment-sales` 307 | Same defect |
| `/hotels-for-sale` index: 9 flags grouped by parent company | **Change** `/brands` → `/hotels-for-sale`, 301 | Agent 4's CSV routes 3 rows here, which agrees |

All three are additions plus the removal of a temporary redirect. No indexed 301 is disturbed.

## I. Not mine, tracked here so nothing falls between lanes

| URL | Owner | Status |
|---|---|---|
| `/rates`, `/rates.json`, `/rates.csv` | Agent 8 | **Blocks 13 Wave 1 financing pages.** Every one carries a `[[RATE-SHEET: …]]` placeholder until it ships. |
| `/data/hotel-financing-statistics` | Agent 8 | Wave 2 dependency for `/hotel-financing/loan-maturities-2026-2027` |
| `/about` | Agent 3 | Absorbs the prior sprint's `/faq/what-is-matthews-hotel-markets` and 28 brand-cluster CSV rows |
| `/press` | content Agent 9, build Agent 10 | Fixes the footer "Press" link that currently points at `/insights` |

---

*No page in this file may be built before its Wave 1 sibling exists. The point of waves is that the
hub and the canonical answer land first, so nothing here ships as an orphan.*
