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

**2026-11-25, Content Writer.** Shipped `/buy-a-hotel/using-a-401k-or-ira`, H1 "Can I use my 401(k) or IRA to buy a
hotel?" Sections A to E are complete, F is SKIPPED, G is blocked and H and J were fully ticked, so the pick came from a
coverage scan of `src/lib/data/` run **after** `list_pull_requests state=open`, as the last run's note demands: "ROBS",
"4975", "self-directed", "UBIT" and "401(k)" appeared in **zero** files, and none of the 16 open PRs claims the topic.
Retirement money is the largest pool of capital a first-time hotel buyer actually controls, and the site said nothing
about it.

**The find of this run.** The self-directed IRA route is not merely unwise, it is structurally impossible on published
rules, and the two documents that close it are both current. SOP 50 10 8.1, Section A, Ch. 5, Para. A requires an
unlimited full guaranty from any individual owning 20 percent or more of the applicant and, where an entity owning any
part of the applicant is a trust, requires the trust to guarantee the loan **and** the trustor to guarantee it
personally. An IRA is a trust. 26 U.S.C. 4975(c)(1)(B) prohibits any direct or **indirect** lending of money or other
extension of credit between a plan and a disqualified person, 4975(e)(2) makes the holder a disqualified person and the
company the account half-owns another one, and 408(e)(2) then ends the account as of the first day of that taxable year
and deems every asset distributed at fair market value. The guaranty an SBA lender must collect is the transaction the
code prohibits. Second find: 26 CFR 1.512(b)-1(c)(5) names hotels, motels, tourist camps and tourist homes as places
where services are rendered to the occupant, so room revenue is never the excluded rent of 512(b)(3), and
514(c)(9)(C)(ii) lists any trust which constitutes a qualified trust under section 401 as a qualified organization
while a section 408(a) account is absent, which is why a solo 401(k) can carry acquisition debt on real property and an
IRA cannot. Third find: SOP 50 10 8.1, Section A, Ch. 2, Para. D sets out the 401(k) and ROBS conditions at length
(plan type named in the credit memorandum, the sponsors' full unconditional guaranty regardless of ownership, an IRS
determination letter, no loan proceeds for plan formation costs, no EPC/OC structure, and the flat statement that under
IRS regulations the 401(k) cannot guaranty the loan) and names IRAs nowhere at all.

**Four sourcing notes for the next run.** `www.law.cornell.edu` serves both the U.S. Code and the CFR to a script at
200, including the parenthesised path `cfr/text/26/1.512(b)-1` when the parentheses are percent-encoded in curl.
**`www.courtlistener.com` is unusable**: CloudFront answers HTTP 202 with `x-amzn-waf-action: challenge` and a
zero-length body to curl and to WebFetch alike, and its REST API answers 401 without a token, so `Peek v. Commissioner`,
140 T.C. 216 (2013), the case every practitioner cites for the guaranty point, could not be read from a primary source
and is **not cited on the page**. **`public-api-green.dawson.ustaxcourt.gov` answers 500 "this api is disabled due to a
deployment"**, so the Tax Court's own opinion search was no help either. The page therefore rests on the statute, which
is the stronger citation anyway. The **eCFR section page for a parenthesised section 302-redirects** and the versioner
API 404s on a date past the title's last issue date (title 26 was last issued 2026-11-23), so Cornell is the route for
26 CFR. `www.irs.gov/pub/irs-tege/robs_guidelines.pdf`, `irs-pdf/p590b.pdf`, `irs-pdf/i990t.pdf`,
`irs-drop/rp-25-32.pdf` and the two IRS HTML pages all answered 200 to curl with a browser user agent, and
`legacy.sba.gov/sites/default/files/2026-08/SOP 50 10 8.1 effective 10.1.2026_0.docx` is still the live SOP (the
`www.sba.gov` equivalent 302s), readable by unzipping `word/document.xml`.

**What the page does not print.** No lender DSCR floor, LTV ceiling or spread, none being published. No promoter fee for
a ROBS, no self-directed IRA custodian fee and no share of hotel deals funded with retirement money: none of the three
is published anywhere primary. The service-claims rule in section N is honored in the brand sentence, which says the
team does not administer retirement plans and does not give tax advice, and the CTA routes to buyer representation and
financing, both confirmed services. Every figure in the worked example is recomputed by
`scripts/check-retirement-funds-math.mjs`, committed alongside the page: 38 assertions covering the 2026 joint and trust
rate schedules at every break point, the 504 stack at both the 15 and 20 percent contribution levels, the $660,240.50
cost of one guaranty and its 44.02 percent share of the account, the $41,961 of unrelated business income tax and the
34.97 percent effective rate, the 2.08 percent ratio between the trust and joint top-rate thresholds, and the $50,000
participant loan at 0.83 percent of price. Reciprocal links added from `/buy-a-hotel/how-much-money-do-you-need`,
`/buy-a-hotel/first-hotel-no-experience` and `/hotel-financing/sba-7a-vs-504`, plus `relatedAnswers` on
`/glossary/sba-7a` and `/glossary/sba-504`. No existing number changed. 2,498 words after four trimming passes from
3,471.

**Production is still down, day 27.** `matthewshotelmarkets.com` answered HTTP 503 at 14:08 UTC on 2026-11-25, as it has
since 2026-10-29, so `geo/AGENTS.md` 3.6 could not be completed and issue #89 stays open. This needs Nate in the Vercel
dashboard; no agent can fix it from the repo.


**2026-11-24, Content Writer.** Shipped `/hotel-financing/sale-leaseback`, H1 "Can I do a sale-leaseback on my hotel
to raise cash?" Sections A to E are complete, F is SKIPPED, G is blocked and H and J were fully ticked, so the pick
came from a coverage scan of `src/lib/data/`: "sale-leaseback", "sale leaseback", "SNDA" and "section 467" each
appeared in **zero** files, and the 4 files matching "467" all meant HVS's $467,000 full-service development cost. The
site explained every way to borrow against a hotel and every way to sell one, and said nothing about the structure
that does both at once.

**Check the open PRs before writing, not after.** This run's first pick was a hotel-to-apartment conversion page, and
it was three hours of sourcing in before it checked: **PR #90, open since 2026-10-30, already ships
`/hotel-valuation/hotel-to-apartment-conversion`** with the gate green, held only because production is paused. Nine
writer pages sit in open, gate-green PRs that were never merged (#90, #96, #99, #100, #101, #103, #106, #107, #108),
plus the November rate sheet (#91) and three maintainer PRs (#95, #102, #109). Those topics are claimed: a coverage
scan of `src/lib/data/` on `main` does **not** see them, because they are not on `main`. The next writer should run
`list_pull_requests state=open` **first** and treat every page in an open PR as taken.

**The find of this run.** Section 467 catches a hotel sale-leaseback twice over and almost nobody tells owners. A
leaseback is defined as a lease back to anyone who held an interest in the property within 2 years, so a
sale-leaseback meets that limb on its face, and 467(e)(3)(A) sets the statutory recovery period for real property at
**19 years**, which puts the long-term limb at 14.25 years, under every standard 15-year and 20-year leaseback term.
The only thing left standing between an escalating rent and constant rental accrual is 467(b)(4)(B), the
principal-purpose test. The page says that plainly rather than implying the escalator is safe.

**The second find belongs to SBA.** 13 CFR 120.111(a)(3) caps the rent in an Eligible Passive Company structure at
"the amount necessary to make the loan payment to the lender, and an additional amount to cover the Eligible Passive
Company's direct expenses of holding the property, such as maintenance, insurance and property taxes". The
related-party sale-leaseback every SBA hotel borrower already uses therefore cannot extract a market rent, by
regulation. With a third-party buyer, 120.110(c) and 120.131(b) end the loan instead: the buyer occupies none of the
51 percent an existing-building borrower must occupy.

**The arithmetic the page is built on.** On a 120-key hotel with assumed NOI of $960,000 valued at 8.00 percent, inside
the Matthews Hotel Index Q1 2026 Houston select-service band of 7.75 to 8.75 percent, rent at the cap rate is
$960,000 and coverage is exactly 1.00, so the operator keeps nothing; a 1.25 cushion caps rent at $768,000 and the
price at $9,600,000, which is **80.0 percent of value**, $80,000 a key against $100,000. On a 20-year lease rising 2
percent, total rent is $18,660,380.01 and the constant rental amount, discounted at the December 2026 110 percent
long-term AFR of 5.82 percent compounded semiannually (5.904681 percent effective), is $898,871.30: $130,871.30 or
17.0 percent above the stated year-one rent and $219,959.68 below the year-twenty rent, crossing over in year nine.
`scripts/check-sale-leaseback-math.mjs` holds 40 assertions over all of it.

**Three figures the run deliberately did not publish.** A hotel net-lease rate or lease constant (no public source
gives one; the 8.00 percent in the example is labeled an assumption and tied to the rate sheet's 5.29 percent 10-year
Treasury only as a 271-basis-point spread), any lender's LTV ceiling or DSCR floor (rule 1), and any claim about what
share of hotels use the structure. The page says each of those is unpublished rather than printing a range.

**Four sourcing notes for the next run.** `www.law.cornell.edu/uscode/text/26/<section>` and
`/supremecourt/text/435/561` both serve clean text to `curl --compressed` with a browser user agent, and Frank Lyon's
holding is in the last paragraph of Part III, not in the syllabus. **The IRS AFR index is the cheap way to the current
ruling**: `www.irs.gov/applicable-federal-rates` lists them and `www.irs.gov/pub/irs-drop/rr-26-24.pdf` is December
2026, whose Table 1 prints the 110 percent long-term AFR at 5.90 percent annual and 5.82 percent semiannual; note the
index skips months, so the newest entry is not always last month. **The eCFR versioner API wants a section, not a
part**: `api/versioner/v1/full/<date>/title-13.xml?part=120` answers 404 while `?section=120.110` answers 200, and
`--compressed` is still required. Cornell's CFR mirror served 13 CFR 120.110 as well but carries its own snapshot
date, so the eCFR answer is the one to quote.

**Production is still down, and it was down before this run started.** Every page of matthewshotelmarkets.com answers
HTTP 503 with `x-vercel-error: DEPLOYMENT_PAUSED`, confirmed once from the homepage at 14:07 UTC on 2026-11-24. That
is 26 days since 2026-10-29 19:52 UTC. `DEPLOYMENT_PAUSED` is an account-level pause that no agent can clear; it needs
Nate in the Vercel dashboard. The post-merge production verification in `geo/AGENTS.md` §3 step 6 could not be
completed for this page.

**2026-11-23, Content Writer.** Shipped `/sell-a-hotel/covid-eidl-when-you-sell`. Sections A to E are complete, F is
SKIPPED, G is blocked and H and J were fully ticked, so the pick came from a coverage scan of `src/lib/data/`: "EIDL",
"PPP", "Treasury offset", "cross-servicing" and "CAIVRS" each appeared in **zero** files, and "disaster loan" only as
an SBA program name in a list. It is the largest remaining hole on the sell side, because the loan is federal, it is
secured, it outlives the pandemic by 30 years, and SBA approved 3,923,374 of them.

**The find of this run, and it is a sentence rather than a number.** SBA's Office of COVID EIDL Services re-issued its
requirement letters in October 2026, and two of them say the thing an owner assumes is not true: "any Consent to Change
in Ownership will not release the Original Borrower(s) and/or any Guarantor(s) from liability", and the assumption
letter says the same of its own approval. A personal guaranty was required on every COVID EIDL above $200,000, so a
seller who lets the buyer take the loan keeps the liability on a note that can run to 2051. The second find is the
price of a lien release, also in SBA's own words: "under most circumstances, SBA may require full monetary
consideration", and "a 'paydown' for consideration is not a regular payment and regular monthly payments are not
automatically re-amortized".

**The third find is arithmetic nobody warned owners about.** Payments begin 30 months from disbursement and interest
accrues throughout, which SBA says becomes a balloon at maturity. On the page's hypothetical $2,000,000 loan, 30
payments of $9,262.31 total $277,869.30, of which only $94,586.15 reached principal, so the balance is $1,905,413.85
and the payoff with $187,500 of deferment interest is $2,092,913.85: $92,913.85 more than was borrowed, with nothing
wrong at the hotel. On an $11,200,000 sale with a $6,400,000 mortgage, SBA takes 48.7 percent of the equity.

**What the run deliberately did not publish.** No amount of consideration for a release, no processing time for any
servicing request, no count or share of hotels holding a COVID EIDL, and no buyer holdback. SBA publishes none of
them, and the page says so three times instead of estimating. The hotel-share figure was abandoned on purpose:
`data.sba.gov/dataset/covid-19-eidl` carries loan-level data only through December 2020 and USAspending's
`spending_by_category` endpoint returns $46.7 billion for CFDA 59.008 over March 2020 to December 2022 against SBA's
own $378.4 billion, a gap this run could not explain, so no derived total was published. Rule 1 beat the better story.

**Five sourcing notes for the next run.** **`www.sba.gov/funding-programs/loans/covid-19-relief-options/...` is a 404
and `legacy.sba.gov` is the live host for every COVID EIDL page**, confirming the 2026-10-04 finding about
`/document/<slug>`: the program page, the servicing page, the EIDL data page and all nine servicing requirement letters
serve to `curl --compressed` with a browser user agent. The letters are versioned by month inside
`/sites/default/files/2026-10/` and `2026-11/` with names like `OCES Change in Ownership 10.2026 V1 - REM03.pdf`, so
re-read the current file rather than trusting a quote. `pdftotext -layout` reads all four cleanly. **SOP 50 10 8.1 is
published as .docx, not PDF**, at `/sites/default/files/2026-10/`, and `pandoc -f docx -t plain` converts it to a
1.07 MB text file that greps fine; its eligibility paragraph 19 is the Delinquent Federal Debt rule. **Cornell LII
served six titles in one run with no block**: 13 CFR 123.11, 123.300 and 123.303, 15 U.S.C. 636, 31 U.S.C. 3716 and
31 CFR 285.13. **The USAspending API rejects `naics_codes` as an object** and wants a plain array, and its
`program_numbers` filter returned nothing for 59.072, so SBA disaster loans are under CFDA **59.008**.

**One number that needs a second reading next time.** SBA's own two pages disagree about the deferment: the program
page's terms table says payments are deferred 24 months from origination, the servicing page says the obligation
begins 30 months from the disbursement date on the original note. The servicing page is dated July 17, 2026 and is the
newer of the two, so the page and the math script use 30 months and say which source that is. If SBA re-words either
page, the $187,500 of deferment interest in the worked example moves.

Every figure in the worked example and every published term is recomputed by `scripts/check-eidl-math.mjs`, committed
alongside the page: 27 assertions covering the thresholds, the deferment accrual, the installment, the 30-payment
split, the payoff, the closing waterfall, the 48.7 percent equity share, the three carry-cost comparisons against the
October 2026 rate sheet and the program totals. The page runs 2,581 words against the brief's 2,500 ceiling after four
trimming passes from 3,044; the release-of-collateral section was merged into the servicing-request section and the
document lists were cut from the prose where the table already carries them. Reciprocal links added from
`/sell-a-hotel/asset-sale-vs-entity-sale`, `/sell-a-hotel/documents-needed`, `/buy-a-hotel/due-diligence-checklist` and
`/hotel-financing/refinance`, plus `relatedAnswers` on `/glossary/sba-7a` and `/glossary/sba-504`, and the spoke line
on the cluster hub: seven inbound edges in all. No existing number changed.

**Production is still down, and it was down before this run started.** Every page of matthewshotelmarkets.com has
answered HTTP 503 with `x-vercel-error: DEPLOYMENT_PAUSED` since 2026-10-29 19:52 UTC, which the Maintainer confirmed
again earlier today at 13:06 UTC. `DEPLOYMENT_PAUSED` is an account-level pause that no agent can clear; it needs Nate
in the Vercel dashboard. The post-merge production verification in `geo/AGENTS.md` §3 step 6 could not be completed for
this page.

**2026-11-20, Content Writer.** Shipped `/hotel-financing/deduct-or-capitalize-a-renovation`. Sections A to E are
complete, F is SKIPPED, G is blocked and H and J were fully ticked, so the pick came from a coverage scan of
`src/lib/data/`: "263(a)", "unit of property", "routine maintenance", "de minimis safe harbor", "betterment",
"adaptation", "partial disposition", "168(i)-8", "3115", "179D", "prevailing wage" and "90.1" each appeared in **zero**
files, and "capitalize" in 18, never once about the test that decides it. The site had `pip-and-renovation-loans` for
how to borrow the money, `pip-and-hotel-value` for what the work does to value, and
`buy-a-hotel/depreciation-and-cost-segregation` for the depreciation of a purchase, and nothing at all on whether the
renovation dollars are deductible or capital. Transfer tax and title insurance were checked first and rejected as
already covered: `closing-costs` carries the Texas promulgated title premiums and the Florida mortgage doc stamp, and
`taxes-when-selling-a-hotel` carries the Florida deed stamp and the Washington REET top tier.

**The find of this run: the regulation argues the case in hotels.** 26 CFR 1.263(a)-3 contains three worked hotel
examples and they do the whole job. Example 24 is a hotel owner replacing guest-bath tubs, toilets and sinks four
floors at a time over three years, and the regulation capitalizes every dollar, including the repainting and retiling,
because all the tubs together are a major component of the **plumbing system** rather than a small part of a hotel.
Example 28 puts a lobby floor at under 10 percent of square footage on the deductible side. Example 29 changes one fact,
all the public-area floors at about 40 percent, and capitalizes. Those are the only percentages the regulation prints,
and the page says so rather than dressing them up as a safe harbor.

**The second find, and it is the reason the page exists.** The unit of property for a building is the structure plus
**nine** named systems, each tested on its own: HVAC, plumbing, electrical, all escalators, all elevators, fire
protection and alarm, security, gas distribution, and anything later designated. A hotel PIP spends into four or five
of them at once, so the intuition that a PIP is a small fraction of the hotel is measuring against the wrong thing.

**The third find belongs to the owner's cash, not the lender's file.** Section 179(e) names roofs, HVAC, fire
protection and alarm, and security systems as qualified real property, which is four of the nine systems, and the 2026
cap is $2,560,000 with the phaseout starting at $4,090,000. On the page's hypothetical neither dollar limit binds:
$2,426,000 of section 179 property sits $134,000 inside the cap. The 179(b)(3) taxable-income limit is what binds, and
the page says so. Pair that with the partial disposition election in 1.168(i)-8(d)(2) and the same $3,540,000 PIP
deducts $46,000 or $886,308 in year one, 1.3 percent against 25.0 percent, a factor of 19.3. The trap the page also
prints: Examples 3 and 4 under (g)(2) make comparable replacement shingles deductible **until** the owner elects
partial disposition, at which point (k)(1)(i) turns the same work into a restoration. Partial disposition is not free
money.

**The fourth find is a date that has already passed.** Section 70507 of the OBBBA terminated 179D for property whose
construction begins after **June 30, 2026**. Every renovation starting now gets nothing, and a PIP budget carrying a
179D line from an older write-up is overstated. The page prints the 2026 values anyway, $0.59 to $1.19 and $2.97 to
$5.94 per square foot, because a PIP that broke ground on or before that date still claims them.

**What the run deliberately did not publish.** No "typical" percentage of a PIP that capitalizes, no processing time or
audit statistic, no claim about what the IRS accepts in practice, and no advice. The brand sentence states that the team
arranges PIP capital from $5 million and does **not** give tax advice, which section N requires for a topic outside the
confirmed services.

**Three sourcing notes for the next run.** **Cornell LII served eight title-26 pages in one run with no block** to a
plain `curl --compressed` with a browser user agent, including the two large ones: `cfr/text/26/1.263(a)-3` is 954 KB of
HTML and `1.168(i)-8` and `1.263(a)-1` came back clean, as did `uscode/text/26` for 162, 168, 179, 179D and 263. The
parenthesised section numbers in those paths work unescaped. **`www.irs.gov/pub/irs-drop/rp-25-32.pdf` is the primary
source for every 2026 inflation-adjusted amount** and `pdftotext -layout` reads it, but note the numbering: the 2026
amounts are in **SECTION 4** (items .24 and .25), not section 2, and the OBBBA 179D termination is section **2.11**.
A first draft of this page cited 2.24 and 3.11 and was corrected against the section headers. **The two IRS HTML pages
used here both serve to a script at 200**: the tangible property final regulations page is where the $2,500 de minimis
threshold from Notice 2015-82 is stated, since the regulation itself still prints $500, and the 179D page carries the
year-by-year dollar table and was last reviewed October 27, 2026.

**One length note.** The page lands at 2,497 words against the 2,500 ceiling, after five trimming passes from 2,748.
One FAQ was cut as a duplicate of the safe harbor section, the worked example stopped restating the test for each line
because the table already carries it, and nothing cut was a citation, a figure or an internal link. Every figure in the
worked example and every published threshold in the prose is recomputed by
`scripts/check-renovation-capitalization-math.mjs`, committed alongside the page: 68 assertions covering the eight line
items and their $3,540,000 sum at $30,000 per key, the 39-year straight-line roof basis and its $192,308 remainder, the
qualified-real-property and section 179 property totals, the cap headroom, the taxable-income limit and carryforward,
both first-year totals, the 1.3 and 25.0 percent shares and the 19.3 multiple, plus the de minimis, small-taxpayer,
routine maintenance and 179D thresholds. Reciprocal links added from `/hotel-financing/pip-and-renovation-loans`,
`/hotel-financing/interest-deduction-limits`, `/buy-a-hotel/depreciation-and-cost-segregation` and
`/hotel-valuation/pip-and-hotel-value`, plus `relatedAnswers` on `/glossary/pip`, `/glossary/ffe-reserve` and
`/glossary/noi`, and the spoke line on the cluster hub: nine inbound edges in all. No existing number changed.

**2026-11-19, Content Writer.** Shipped `/sell-a-hotel/irs-liens-and-payroll-taxes`. Sections A to E are complete, F is
SKIPPED, G is blocked and H and J were fully ticked, so the pick came from a coverage scan of `src/lib/data/`: "trust
fund", "6321", "phantom income", "discharge of indebtedness", "COD income" and "Rev. Rul. 90-16" each appeared in
**zero** files, and "6672" only twice, both times inside a Wisconsin franchise-registry URL rather than as the statute.
The site already covered the state side of a closing in depth at `/sell-a-hotel/tax-clearance-and-withholding` (sales
and occupancy tax clearance plus FIRPTA) and the tax of losing a hotel to the lender at
`/sell-a-hotel/selling-a-distressed-hotel` and `/hotel-financing/non-recourse-loans`, so cancellation of debt was not
the gap. Unpaid **federal employment tax** was: the one liability that records against the hotel's title by operation of
law, follows the owner personally after the hotel is gone, and is the most common reason a distressed hotel closing
dies. A re-scan of `geo/04-queries.csv` first confirmed what the 2026-11-03 run found: every priority-1 and priority-2
target with no answer module is either a live route outside `src/lib/data/answers/` or a slug alias already live under
another name, and `/hotel-financing/life-company-loans` is still a retarget rather than a build.

**The find of this run, and it inverts the fear.** Owners picture a padlock. The IRS Data Book says otherwise, and the
XLSX is downloadable and readable cell by cell. In fiscal year 2025 the agency filed **214,099** notices of federal tax
lien, up 17,103 from 196,996, requested 339,137 notices of levy on third parties, and conducted **50** seizures
nationwide across every return type. That is one seizure for every 4,282 lien filings. The real risk to a hotel is a
document in the chain of title, not an agent at the door, and section 6323(a) is why: the lien exists from assessment
under 6321 and 6322 but is not valid against a purchaser until the notice is filed. Before filing, a buyer who pays
value takes the hotel free of a lien the seller still owes in full.

**The second find: the discharge is a menu, and Form 14135 prints it.** Section 6325(b) has five bases and the
application names each one, which makes the whole decision tree citable to a government form rather than to practice
commentary: the (b)(1) double test, (b)(2)(A) payment of the value of the government's interest, (b)(2)(B) no value,
(b)(3) proceeds held in escrow, and (b)(4) a deposit or bond that uniquely carries a 7426(a)(4) remedy. On a hotel the
double test is dead on arrival, because the hotel is the asset. Publication 783 (Rev. 12-2022) supplies the only
published timing anywhere in the process: submit at least **45 days** before the transaction date. The IRS publishes no
average processing time, so the page says 45 days is a floor and nothing more.

**The third find, and it belongs to the capital markets desk.** 26 U.S.C. 3505(b) makes a lender that supplies funds
for the specific purpose of paying wages, knowing the withholding will not be deposited, liable for that tax up to
**25 percent** of the amount supplied. An owner who tells a workout lender honestly that payroll tax has been skipped
is handing it a contingent exposure on every payroll advance. That is the statutory reason a protective advance for
payroll arrives with a direct-pay mechanic attached, and it was in zero files on this site.

**What the run deliberately did not publish.** No claim about what a title company will or will not insure over, no
"typical" buyer holdback, no real-world processing time for an IRS Advisory discharge, and no effective tax rate on any
recognized amount. None of those is published by anyone. The page also handles the one misleading number in the Data
Book honestly: Table 4-2 reports **1,216,346** federal tax deposit penalties assessed on employment taxes in FY2025,
$117,895,214 thousand, against $117,210,987 thousand abated, or 99.4 percent. Assessments and abatements are reported
separately with no netting, so the gross figure is not what employers paid, and the page says so rather than quoting
$117.9 billion as a cost.

**Four sourcing notes for the next run.** **Cornell LII again served fifteen title-11, title-26 and 26-CFR pages in one
run with no block** to a plain `curl --compressed` (6321, 6322, 6323, 6325, 6502, 6656, 6671, 6672, 7425, 7501, 3505,
3102, 11 U.S.C. 507 and 523, and 26 CFR 301.6672-1). **`www.irs.gov/pub/irs-pdf/` serves every publication and form to
a script** with a browser user agent: p783, p594, p15 and f14135 all answered 200 and `pdftotext` without `-layout`
gives clean reading order. Two IRS HTML landing pages are 404s and were not used:
`/individuals/understanding-a-federal-tax-lien` and
`/businesses/small-businesses-self-employed/selling-or-refinancing-when-there-is-an-irs-lien`. **The Data Book is best
read as the XLSX, not the HTML page**: `www.irs.gov/pub/irs-soi/25db-4-01-co.xlsx` and `25db-4-02-cp.xlsx` are small
files whose `sharedStrings.xml` and `sheet1.xml` parse with the standard library in about twenty lines, and that is how
every count on this page was verified first-hand rather than from a write-up. Secondary articles circulating the
214,000 figure also circulate a wrong FY2022 base; the table has both years in it.

**One length note.** The page landed at about 2,600 words by the count the 2026-11-18 run used, after three trimming
passes from roughly 3,600, which is the tightest any statute-dense page on this site has come to the 2,500 ceiling. The
cuts dropped one three-paragraph structure per section down to one dense paragraph and tightened every table cell; no
citation, figure or internal link was removed. Every figure in the worked example and all six published IRS counts are
recomputed by `scripts/check-payroll-lien-math.mjs`, committed alongside the page, 36 assertions. Reciprocal links added
from `/sell-a-hotel/tax-clearance-and-withholding`, `/sell-a-hotel/selling-a-distressed-hotel`,
`/sell-a-hotel/employees-when-you-sell`, `/sell-a-hotel/taxes-when-selling-a-hotel`, `/hotel-financing/loan-workouts`,
and the glossary terms `going-concern-value` and `prime-rate`. No existing number changed.

**2026-11-18, Content Writer.** Shipped `/sell-a-hotel/contribute-hotel-to-a-reit`. Sections A to E are complete, F is
SKIPPED, G is blocked and H and J were fully ticked, so the pick came from a coverage scan of `src/lib/data/`: "UPREIT",
"operating partnership", "disguised sale", "707(a)(2)" and "704(c)" each appeared in **zero** files, and "OP unit" in
none. The site had a page for every other exit an owner of an appreciated hotel can take, including the DST route at
`/sell-a-hotel/1031-without-buying-another-hotel` and the step-up at `/sell-a-hotel/estate-tax-and-basis-step-up`, and
nothing on taking REIT partnership units instead of cash.

**The find of this run.** The deferral an owner is sold is not the deferral the Code gives. Section 721(a) recognizes no
gain on the exchange, but the mortgage the partnership takes on is a deemed cash distribution under section 752(b),
26 CFR 1.752-1(f) nets it against the contributor's new share of partnership liabilities, section 722 gives the units
the hotel's old adjusted basis with no step up, and section 731(a)(1) then taxes the net decrease above that basis. On
the page's hypothetical, an $18,000,000 hotel with a $7,500,000 mortgage and a $4,200,000 basis after 22 years, that is
$3,150,000 of gain recognized in the year of a contribution that produced no cash: 30.0 percent of the $10,500,000 of
equity taken in units, with 77.2 percent of the total gain deferred rather than 100 percent. The figure to negotiate is
$3,300,000, the allocated share of partnership debt at which the net decrease exactly equals basis and the gain is zero.
26 CFR 1.752-1(g) Example 1 is the regulation working the clean case, which is what makes the method citable.

**The second find, and keep it.** The owner stops running the hotel, and it is the statute that says so, not the buyer.
Section 856(d)(8)(B) saves the TRS rent only if an eligible independent contractor operates the hotel, section
856(d)(9)(E) says operating includes managing, section 856(d)(9)(A) requires that contractor to already operate hotels
for someone unrelated to the REIT, and section 856(d)(3) caps it at 35 percent ownership. A single-hotel owner-operator
fails that on its face. Host Hotels says the consequence to its own investors in the FY2025 10-K: "To maintain our
status as a REIT, we are not permitted to operate or manage any of our hotels", and so it is "unable to directly
implement strategic business decisions ... such as decisions with respect to the setting of room rates". The same filing
warns that redeeming units is a taxable sale and that "the amount of gain and/or the tax liability related thereto ...
could exceed the value of the common stock or cash received". That is the REIT telling an owner the risk, in writing.

**The third find: not every hotel REIT can take a contribution.** Host Inc. operates through an umbrella partnership and
held about 99 percent of the units at December 31, 2025, with 9.4 million held by 972 unaffiliated limited partners and
convertible at 1.021494. Apple Hospitality REIT, which `/hotel-industry/how-hotel-reits-work` already cites for its
operating data, is not built that way: the word "partnership" appears **zero** times in the Form 10-K it filed on
February 23, 2026, and it leases all its hotels to a wholly owned TRS. So the first question is structural and the
answer is public. 682,283,862 total common units less 672,851,030 held by Host Inc. is 9,432,832, which is where the
9.4 million comes from.

**What the run deliberately did not publish.** No unit price, no lock-up or hold period, no tax-protection or
debt-maintenance agreement term, and no REIT's acquisition criteria or minimum deal size: none of those is published by
anyone, and the partnership agreements that set them are negotiated, not filed in a form an owner could rely on. The
page also prints no effective tax rate on the recognized gain, because the character turns on recapture and on facts a
CPA has to supply. It says plainly that the section 752 allocation is governed by the regulations and not by what a term
sheet says.

**Three sourcing notes for the next run.** **Cornell LII served ten title-26 and title-26-CFR pages in one run with no
block** (721, 722, 731, 737, 752, 704, 1031, 856, and 26 CFR 1.707-3 and 1.752-1) to a plain `curl --compressed`, and
the 1031 page's amendment notes are where the pre-TCJA section 1031(a)(2)(D) exclusion of partnership interests is still
readable, which is the cleanest way to show that OP units were never 1031 property. **`data.sec.gov/submissions/CIK<10
digits>.json` is the fastest way to find a filing**: it returns every form type with its accession number and primary
document, so the 10-K URL can be built without the full-text search API, which the MCP `search_*` tools do not cover.
Both EDGAR hosts answered a plain `curl` with a generic User-Agent at 200. **The Host 10-K is 4.2 MB of HTML and the
Apple one 10.3 MB**, which WebFetch truncates well before the risk factors; strip the tags locally and grep instead. A
negative grep is evidence worth keeping: "partnership" occurring zero times in a 484,177-character filing is a checkable
fact, and it is how the Apple point was sourced.

**One length note.** The page landed at 2,493 words against the 2,500 ceiling after one trimming pass from 2,581. The
cut dropped one FAQ that duplicated the brand sentence and tightened six sentences; no citation, figure or internal link
was removed. Every figure in the worked example and the two Host unit counts are recomputed by
`scripts/check-reit-contribution-math.mjs`, committed alongside the page, 44 assertions.

**2026-10-29, Content Writer.** Shipped `/hotel-financing/public-incentives-and-tif`. Sections A to E are complete, F
is SKIPPED, G is blocked and H and J were fully ticked, so the pick came from a coverage scan of `src/lib/data/`:
"tax increment", "private activity", "tax-exempt bond", "municipal bond", "2017-13" and "publicly owned hotel" each
appeared in **zero** files, and "incentive" in 25, every one of them about a management incentive fee or a federal
credit. The site carried five federal incentive pages (historic credits, opportunity zones, C-PACE, New Markets,
EB-5) and nothing at all on the state and local layer, which is where a downtown conversion or a convention hotel
actually gets its public money.

**The find of this run.** The IRS wrote its own hotel example into the tax-exempt bond rules. Rev. Proc. 2017-13
section 5.04 requires a government to approve the rates charged at a bond-financed facility, and illustrates an
acceptable approval as "a method that establishes hotel room rates using specified revenue goals based on comparable
properties". So revenue management at a city-owned hotel runs inside an approved pricing method set against a comp
set. The other half of the same section is harder: 5.02(2) says no element of the fee may take into account net
profits or *both* revenues and expenses, which leaves a base fee on gross revenues safe and makes a standard brand
incentive fee measured on gross operating profit a share of net profits unless it is rebuilt as performance-standard
incentive compensation. That is a direct collision between a bond document and the market-standard hotel management
agreement, and it is in the revenue procedure's own text.

**The second find, and do not let a later run smooth it over.** RSMo 99.805(4) and 99.845.3 both exclude "taxes
imposed on sales or charges for sleeping rooms paid by transient guests of hotels and motels" from economic activity
taxes. A Missouri hotel in a TIF district therefore contributes 100 percent of its real property tax increment and
nothing from the tax on rooms, which is the thing it mostly sells. The worked example sizes the gap at 6.7 times. The
Sikeston Holiday Inn Express plan, the only one of the eight named for a limited-service brand, reports $0.00 of
economic activity taxes since inception against $425,879.83 of payments in lieu of taxes; the page says the report
explains no single figure and that a plan can also simply not capture those taxes, which is the honest reading.

**The dataset, and its one-project hole.** The Missouri Department of Revenue's 2025 report (January 30, 2026) is the
best public hotel-TIF evidence found so far. Its summary says 355 projects from 84 municipalities and $3,694,284,956
of payments in lieu of taxes and economic activity taxes since inception. Its project pages carry **354** blocks, and
four independent markers agree on 354: "TIF Revenues", "Current Amount of Revenue", "Anticipated TOTAL Project Costs"
and "Original estimated number of years to retirement". The page states the disagreement rather than picking a side.
Eight of the 354 plan names carry a hotel or lodging brand, the TIF-reimbursable share of total project cost runs
6.2 to 79.8 percent with a 26.7 percent median, and six of the eight are pay as you go. The file has no use or
industry field, so a hotel inside a mixed-use plan is invisible and eight is a floor, not a total.

**What the run could not source, for the next writer.** The Texas qualified hotel project rebate in Tax Code 351.102,
which rebates state hotel occupancy and sales tax to a convention centre hotel, is the most hotel-specific state
incentive in the country and is still unreadable: `statutes.capitol.texas.gov/Docs/TX/htm/TX.351.htm` answers 200 with
188,000 characters that are fonts and script and no statute text, so the 2026-10-26 note about that host being a
JavaScript shell holds for the `/Docs/` path too. The enrolled-bill route works but needs the right bill number.
`www.ilga.gov` fails TLS verification from this environment even with the proxy CA bundle, so Illinois 65 ILCS
5/11-74.4 went unread. `www.gasb.org` and `www.nyc.gov` both answer 403, so GASB 77 and the NYC ICAP hotel exclusion
are out. What does work, cleanly, to a plain curl: `revisor.mo.gov/main/OneSection.aspx?section=<n>` and
`www.revisor.mn.gov/statutes/cite/<n>` for statute text with amendment history, and
`dor.mo.gov/taxation/business/tax-types/sales-use/local-increment-financing/documents/<year>-Local-Tax-Increment-Financing.pdf`
for the annual report, 2.5 MB that `pdftotext -layout` turns into 884,817 readable characters.

**One length note.** The page landed at 2,497 words against the 2,500 ceiling after six trimming passes from 3,103.
It covers four legal regimes (federal governmental bonds, the qualified redevelopment bond, the management contract
safe harbor and state TIF), which is one more than fits comfortably. A future run wanting to add a third state or the
Texas rebate should split the city-owned-hotel section into its own page rather than compress this one further.

**2026-10-28, Content Writer.** Shipped `/hotel-financing/interest-deduction-limits`. Sections A to E are
complete, F is SKIPPED, G is blocked and H and J were fully ticked, so the pick came from a coverage scan of
`src/lib/data/`: "163(j)", "business interest", "net operating loss", "self-rental" and "Item 12" each
appeared in **zero** files, and "business interest" only inside the section 6166 phrase "closely held business
interest" on the estate tax page. The site explained every loan product and said nothing about whether the
interest on them is deductible, which is the first question a CPA asks about a hotel's capital stack.

**The find of this run.** Whether a hotel can elect out of the section 163(j) limitation is not a judgement
call: 26 CFR 1.469-9(b)(2)(iii)(E), Example 5, describes a limited partnership that owns and operates a luxury
hotel with in-room food and beverage, maid and linen service, valet parking, concierge, front desk and bellhop
service and dry cleaning, and holds that even though those personal services are significant, the principal
purpose of the operations is providing the use of the rooms, so the partnership **is** engaged in a real
property trade or business. 26 CFR 1.163(j)-1(b)(14)(i) routes the election straight at section 469(c)(7)(C)
and that regulation, so the example settles it. The same example holds the outside maid-service contractor is
not in a real property trade or business, which matters where operations sit in a separate entity.

**The trap that catches small hotel deals.** The $32,000,000 exemption is lost entirely by a syndicate, and
a syndicate under section 1256(e)(3)(B) is any partnership with more than 35 percent of its losses allocable
to limited partners or limited entrepreneurs. A two-partner hotel LLC with one passive money partner is the
textbook case, and 26 CFR 1.1256(e)-2(c) works that exact fact pattern. Two details the page states and the
next run should preserve: 26 CFR 1.1256(e)-2(b) computes the loss **without regard to section 163(j)**, and
the test is a loss test run year by year, so it turns on whether the entity has a loss at all.

**Three dates to re-verify.** The $32,000,000 figure is Rev. Proc. 2025-32 section 4.30 and is for tax years
beginning in 2026 only; the 2027 revenue procedure will move it, and the excess business loss figures in
section 4.31 ($256,000 and $512,000) move with it. The section 163(j)(10) interest-capitalization rule and the
section 163(j)(5) amendment apply to tax years beginning after December 31, 2025, so they are live for the
first time this filing season. Section 461(l) still reads "before January 1, 2027" in the codified text on
Cornell LII as of 2026-10-28, which is worth re-reading rather than assuming it was made permanent; the page
does not print that figure, but `/buy-a-hotel/depreciation-and-cost-segregation` does.

**Four sourcing notes.** `pdftotext` is now installed in this environment, which the 2026-09-23 run recorded
as missing, so IRS PDFs are readable again: `curl` plus `pdftotext -layout` read Rev. Proc. 2025-32 cleanly
(260 KB, 67,652 characters of text). Cornell LII serves 26 U.S.C. and 26 CFR to `curl --compressed` at 200 on
every section tried, but the **163 page is 182,459 characters and WebFetch reads only the first 100,000**, so
the amendment notes that date Pub. L. 119-21 are invisible to a summarising read: download and grep instead.
A summarising read of 163(j)(8) also came back without the effective-date detail that makes the depreciation
add-back current law. `www.irs.gov/forms-pubs/about-form-8990` serves at 200 and its "Recent developments"
note is **stale**, still printing the $29,000,000 threshold for 2023; the page says so rather than repeating it.

**One length note.** The page runs about 2,537 words against the brief's 2,500 ceiling, after six trimming
passes. Two FAQs and one takeaway were cut as duplicates of the answer block, and the section 461(l) paragraph
was dropped because `/buy-a-hotel/depreciation-and-cost-segregation` already carries it.

**2026-10-27, Content Writer.** Shipped `/sell-a-hotel/estate-tax-and-basis-step-up`. Sections A to E are complete, F is
SKIPPED, G is blocked and H and J were fully ticked, so the pick came from a coverage scan of `src/lib/data/`: "step-up",
"1014", "6166", "2032A", "succession" and "generation-skipping" each appeared in **zero** files, and "estate tax" in five,
every one of them inside the phrase "real estate tax". The site answered how a hotel sale is taxed and said nothing about
the alternative an owner over 70 is actually weighing, which is not selling at all.

**The find of this run.** Whether a hotel qualifies for the 14-year estate tax deferral in section 6166 turns on who runs
it. Section 6166(b)(9) strips out the value attributable to passive assets, and Rev. Rul. 2006-34 applies that to real
property with a six-factor test and says in terms that using "an unrelated property management company to perform most of
the activities associated with the real estate interests" suggests no active trade or business exists; it held exactly that
way on an office park in Situation 2, and came out the other way in Situation 3 on identical facts where the decedent owned
20 percent of the manager. So two otherwise identical hotels can get different answers on a 14-year deferral depending on
who signs the management agreement and who owns the manager. That is a hotel-specific consequence of a management
structure the site already describes on two pages and had never connected to a tax outcome.

Three sourcing notes for the next run. **Cornell LII served eleven title-26 sections in one run with no block** (1014,
1015, 2001, 2010, 2031, 2032, 2032A, 2033, 6075, 6166, 6601), and remains the first place to read the Code. **The IRS
serves revenue procedures as clean PDFs at `www.irs.gov/pub/irs-drop/rp-<yy>-<nn>.pdf`**, which `pdftotext -layout` reads
without trouble; `www.irs.gov/irb/<year>-<issue>_IRB` gives the bulletin's own date and page, which is how Rev. Proc.
2025-32 was cited to I.R.B. 2025-45 of November 3, 2025, and how Rev. Rul. 2006-34 was read in full from I.R.B. 2006-26.
**The quarterly interest rate is on the newsroom, not in the Code**: section 6601(j)(1)(B) charges 45 percent of the
underpayment rate and the rate itself comes from IR-2026-98 of August 21, 2026, which puts it at 7 percent for the quarter
beginning October 1, 2026, so the second leg is 3.15 percent. Re-read that release each quarter before touching the figure.

**One number to read twice before changing it.** The 2026 basic exclusion amount is exactly $15,000,000 and is *not*
indexed. Section 70106(a)(1) of Pub. L. 119-21, July 4, 2025, substituted $15,000,000 for $5,000,000 in section
2010(c)(3)(A) and struck the $10,000,000 subparagraph, section 70106(b) applies it to deaths and gifts after December 31,
2025, and section 2010(c)(3)(B) starts the inflation adjustment only for decedents dying in a calendar year after 2026.
Rev. Proc. 2025-32 section 3.14 says the same and adds that the adjustment begins for 2027. So this figure moves once, in
the 2027 revenue procedure, and a search result quoting an indexed 2026 number is wrong.

Three things the run deliberately did not publish. A discount for lack of marketability or control on a hotel-owning LLC
interest: the magnitudes are negotiated with appraisers and litigated, and no public source prices them. What a hotel
estate pays in appraisal, legal and accounting fees: not published anywhere, and the page tells the owner to get the
estimate in writing instead. And any statement that section 2032A is or is not worth electing on a hotel: the page prints
the three published limits (the $1,460,000 cap, the multi-factor method in 2032A(e)(8) rather than the farm formula, the
10-year clawback, and the lower basis that follows under 1014(a)(3)) and leaves the judgement to counsel, because whether
a hotel's use value sits below its market value at all is an appraisal question nobody publishes.

**For the Maintainer.** `geo/17-claims-audit.csv` has not been regenerated since 2026-09-18 and is a month stale: running
`scripts/claims-audit.mjs` in this run produced a 686-insertion, 375-deletion diff covering roughly 30 pages shipped since,
which is a Maintainer cascade and not a content change, so the file was left alone. The new page's own seven rows were
checked in that run and every one came back OK. Totals across 372 files: 1,388 OK, 125 CHECK, 60 OVERREACH.

The page runs about 2,690 words by the body-plus-worked-example count, against 2,642 for
`/sell-a-hotel/selling-to-a-foreign-buyer` and 2,523 for `/sell-a-hotel/tax-clearance-and-withholding` measured the same
way, after four trimming passes from 2,965. Nothing cut was a citation, a figure or an internal link; one cut dropped the
second link to `/hotel-industry/hotel-management-agreements`, which the same paragraph still reaches through
`/hotel-industry/owner-franchisor-management-company`. Every figure in the worked example and every published threshold is
recomputed by `scripts/check-estate-tax-math.mjs`, committed alongside the page, 40 assertions covering the applicable
credit amount, the 2-percent portion by both routes, the depreciation schedule, all three tax layers, both routes end to
end, the heir's restarted depreciation, the 35 percent test, the installment arithmetic and the comparison against Prime.

**2026-10-26, Site Maintainer.** The `relatedAnswers` warning in the 2026-10-23 note below is resolved and a glossary term can be counted as an inbound link again. `src/app/glossary/[term]/page.tsx` now renders the slot on all 29 terms, under the heading "Where this term is used", with each target page's own H1 as the anchor text. R11 in `scripts/internal-links-audit.ts` now asserts that a glossary page serves a link to every path in its own `relatedAnswers`, instead of asserting a link to some cluster hub, which the site navigation satisfied on every page. The audit counts 142 edges it could not see before and reports 0 missing; `/glossary/dscr` serves all four of the targets listed in `dscr.ts`. Issue #82.

**2026-10-26, Content Writer.** Shipped `/sell-a-hotel/selling-to-a-foreign-buyer`. Sections A to E are complete, F is
SKIPPED, G is blocked and H and J are fully ticked, so the pick came from a coverage scan of `src/lib/data/`: "CFIUS",
"national security" and "Treasury review" each appeared in **zero** files. The site answered the foreign-seller question
(FIRPTA, section 1445) on two pages and said nothing at all about the foreign buyer, which is the one an owner asks when a
cross-border bid lands.

Four sourcing notes for the next run. **`www.ecfr.gov` now 302s every `current/title-31/...` page to
`unblock.federalregister.gov`**, so the eCFR HTML route is dead for both WebFetch and curl; `www.law.cornell.edu/cfr/text/31/<section>`
serves clean statute and regulation text to a plain `urllib` request with no User-Agent games, and
`www.law.cornell.edu/cfr/text/31/part-802` gives the subpart map to find section numbers. Cornell also carries the
amendment credits, which is how Pub. L. 119-60 section 8102 of December 18, 2025 was confirmed when a web search could not
find it. **`www.cfius.gov` is the live host**: `home.treasury.gov/policy-issues/international/...cfius...` 302s to it, and
the CY 2025 Annual Report PDF at `www.cfius.gov/files/2025-cfius-annual-report.pdf` reads cleanly with `pdftotext -layout`
(WebFetch returns the raw FlateDecode stream and cannot read it, but it saves the file, which `pdftotext` then handles).
**`www.flsenate.gov/Laws/Statutes/2025/<section>` now answers 403 to a script**, a regression from the 2026-10-06 note;
`leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0692/Sections/<section>.html` serves the same
text to WebFetch. **`capitol.texas.gov/tlodocs/89R/billtext/html/SB00017F.htm` serves the enrolled bill as clean HTML**,
which is the way around `statutes.capitol.texas.gov` still being a JavaScript shell: read the enrolled bill, not the code.
`www.faa.gov` answers 403, so no count of large hub airports is printed and the page cites the statutory definition in
49 U.S.C. 40102 instead.

**Two figures the run deliberately did not publish.** No count of hotel CFIUS filings: the Annual Report states that NAICS
codes are not required for covered real estate transactions, so part 802 filings are excluded from every sector table, and
there is no hotel line to cite. No cost of a CFIUS filing beyond the statutory fee: what counsel charges to prepare a
declaration is not published anywhere. Every figure in the worked example was recomputed by
`scripts/check-foreign-buyer-math.mjs`, committed alongside the page, 13 assertions covering the fee band, both filing
routes against the CY 2025 averages, the carry cost of the delay, the statutory ceiling and the real estate share of 2025
filings.

**2026-10-23, Content Writer.** Shipped `/hotel-financing/new-markets-tax-credits`.

**Read this before counting a glossary term as an inbound link.** `GlossaryEntry.relatedAnswers` is declared in `src/lib/data/glossary/types.ts`, populated in 30 files, and given a slot in `geo/05-templates.md`, but `src/app/glossary/[term]/page.tsx` does not render it: it builds `relatedTerms`, `relatedMarkets`, `relatedBrands` and `relatedInsights` and not that one. Verified on production this run, where `/glossary/dscr` serves zero `/hotel-financing/` links although `dscr.ts` lists four. The link audit does not catch it because R11 (`scripts/internal-links-audit.ts`) only asserts that a glossary page links *some* cluster hub, which the site navigation satisfies on every page. So a `relatedAnswers` entry satisfies the audit and the skill's two-inbound-links rule on paper while serving no edge. This page's two inbound links are the sibling answer pages, both confirmed rendered. Filed as issue #82 with the fix, which is a template change across 29 live pages and so not a content run's to make.

Sections A to E are complete, F is SKIPPED, G is blocked and H and J were fully ticked, so the pick came from a coverage scan of `src/lib/data/`: "New Markets", "NMTC", "45D", "QALICB", "QLICI" and "CDFI Fund" each appeared in **zero** files. The site had `/hotel-financing/historic-tax-credits`, `/hotel-financing/opportunity-zones`, `/hotel-financing/c-pace-financing` and `/hotel-financing/eb-5-financing` and nothing on the fourth federal incentive, the one whose eligibility test is decided by the census tract and not by the deal.

**The find of this run.** A hotel is not an excluded business for section 45D, and the chain that proves it is worth writing down because it runs through three statutes. 45D(d)(3) borrows the qualified business definition from 1397C(d); 1397C(d)(5)(A) excludes any trade or business consisting of the operation of a facility described in 144(c)(6)(B); and that list is a golf course, country club, massage parlor, hot tub facility, suntan facility, racetrack or other gambling facility, and any store whose principal business is selling alcohol for consumption off premises. Lodging is absent, and the alcohol exclusion is written for off-premises sales, so a hotel bar is fine. 26 CFR 1.45D-1(d)(5)(iii)(B) states the same list directly and is the cleaner citation. The hotel-specific traps are at the edges: a resort operating its own golf course is running an excluded business alongside the hotel, reachable only through the portions-of-business route in 1.45D-1(d)(4)(iii), and 1.45D-1(d)(5)(ii) stops a loan being a qualified investment to the extent a lessee is one of the excluded businesses, which is a live question for a hotel with ground-floor retail. Separately, 45D(d)(3)(B) switches off 1397C(d)(3), which is the tangible personal property rental rule, not the exclusion list. A summarising read of 45D got that paragraph mapping wrong in both directions, so the chain was re-read section by section before anything was written on it.

Five notes for the next run. **Cornell LII served 26 U.S.C. 45D, 1397C, 144 and 168 in one run without a block**, and remains the first place to read title 26. A section page over 100,000 characters, which 168 is at 520,777, needs a second WebFetch with an offset to reach later subsections; (e)(2) is inside the first 100,000 and was readable. **The eCFR versioner API works for title 26 with the `section` parameter**: `api/versioner/v1/full/2026-10-01/title-26.xml?part=1&section=1.45D-1` answers 200 and returns 88 KB, where pulling part 1 whole would be unusable; `--compressed` is still required or it answers 406. **federalregister.gov serves single-document JSON with `fields[]` this run**, which is how the 91 FR 58526 citation and the 58526 to 58536 page range were read, while the document text came from govinfo as usual. **The CDFI Fund's data releases are reachable and machine readable**: `cdfifund.gov/documents/data-releases` lists them, the files sit behind `/system/files?file=YYYY-MM/<name>`, and the 2.45 MB xlsx parses with the standard library (`xl/sharedStrings.xml` plus `xl/worksheets/sheet2.xml` for the Projects sheet). And WebFetch would not transcribe 144(c)(6)(B) verbatim, capping quotes at 125 characters, so the facility list was taken from the regulation's own recitation instead.

**The dataset answers a question and refuses another.** Recomputing the FY 2025 public data release from the Projects sheet gives 8,439 projects, origination years 2001 to 2023, $71,018,792,859 of QLICIs and $127,615,323,405 of estimated project cost, which agrees with the release's own summary report to the dollar at $71.019 billion and on the project count. The median project took $5,362,148, which is squarely the size of a single hotel conversion, and the non-metropolitan share of 19.7 percent (1,663 of 8,439) sits just under the 20 percent the CY 2026 notice targets. What the file cannot answer is how many of those projects were hotels. It carries **no industry or NAICS field at all**: the only classification is QALICB Type, coded RE, NRE, SPE or CDE, and the release's own data dictionary describes only three of those four codes. "accommodation", "hotel", "NAICS" and "industry" each appear zero times in the summary report. So the page states the counts the file supports and says plainly that no public source gives a hotel count, rather than estimating one.

Three things the run deliberately did not publish. What an investor pays per dollar of credit, and therefore the net subsidy to a hotel project: it is negotiated privately and no public source prices it, so the page prints the 39 percent statutory credit and tells the owner to get the dollars-to-the-project figure from the CDE in writing. How many hotels have used the program, for the reason above. And whether a hotel owner indemnifies the investor for recapture: by statute the increased tax falls on the holder of the investment, and who ultimately pays is a deal-document question that nobody publishes.

**One judgement the page refuses to make.** Whether any given hotel's tract qualifies. 45D(e) is a two-branch test on poverty rate and median family income measured at the census tract, the data moves with each census, and the answer is a lookup against a specific address. The page states both branches, notes that the metropolitan comparison runs against the greater of the statewide or metro figure, and tells the reader this is the first thing to check. Do not let a later run turn that into a claim about which kinds of hotels qualify.

The page runs 2,487 words against the spec's 2,500 ceiling, after three trimming passes from 2,741; nothing cut was a citation, a figure or an internal link, and one cut removed a deeming rule in 1.45D-1(d)(4)(i)(A) that added a test without changing any answer on the page. Every figure is recomputed by `scripts/check-nmtc-math.mjs`, committed alongside the page: 118 assertions covering the 5 and 6 percent percentages against the 7 allowance dates and the 39 percent total, all seven cumulative rows of the table, the $500,000 and $600,000 annual credits and the $3,900,000 total on a $10,000,000 QEI, the $8,500,000 substantially-all floor, the $1,300,000 five-percent cap on a $26,000,000 base, the $2,700,000 at risk on a year-5 sale checked against the table's own cumulative column, every published threshold as printed, the four QALICB type counts and the two metro counts against the 8,439 total, the 19.7 percent non-metro share, the $71.019 billion rounding against the summary report, and the template's own answer, takeaway, FAQ, title, description, sibling, source-order and body-length limits, plus a check that the brand lands inside the first 300 words.

**2026-10-21, Content Writer.** Shipped `/hotel-financing/bank-cre-concentration-limits`. Sections A to E are complete, F is SKIPPED, G is blocked and H and J were ticked, so the pick came from a coverage scan of `src/lib/data/`: "74580", "300 percent", "Call Report", "RC-C", "owner-occupied" and "BankFind" each appeared in **zero** files, and "concentration" in nine, never once about bank capital. The site explained every test a hotel has to pass and nothing about the test the bank itself has to pass, which is the reason a sound hotel file gets declined without a pricing conversation.

**The find of this run, and the reason the page is hotel-specific rather than banking-general.** The 2006 guidance excludes owner-occupied nonfarm nonresidential property from its 300 percent measurement, and a hotel owner reading that exclusion would reasonably conclude a hotel loan is outside it: the operator owns the building and the room revenue is the operations. The FFIEC 031/041 Call Report instructions settle it the other way and settle it by name, directing loans secured by hotels and motels into Schedule RC-C item 1.e.(2) as other nonfarm nonresidential property, the non-owner-occupied line the guidance footnotes measure. Nursing homes and assisted-living facilities get an exception back on a 50 percent services test; hotels are not given one. The 2006 preamble shows the agencies knew: commenters asked for clarification about loans secured by motels and hotels and the answer was that the scope is purposely broad because the guidance imposes no limits.

Five notes for the next run. **`www.ffiec.gov` answers 403 to curl and to WebFetch alike**, so the Call Report instruction book is unreachable at its own publisher; the FDIC mirrors every schedule and serves it cleanly, and the current edition page is reached by following `/resources/bankers/call-reports/` which 301s to `/bank-financial-reports/current-quarter-call-report-forms-instructions-and-related-materials`. That page links two editions, `...-report-0` (June 2024) and `...-report-5` (September 2026): read the title tag to tell them apart, because the paths carry no date. **The RC-C schedule URL serves a PDF with no file extension**, so save it and run `pdftotext` on it rather than treating the response as HTML. The September 2026 text was diffed against the September 2023 edition and is word for word identical on items 1.e.(1) and 1.e.(2). **The FDIC's Risk Review lives at a flat path that changes every year**: `www.fdic.gov/analysis/2026-risk-review-full.pdf` works while `/analysis/risk-review/2026-risk-review.pdf` 404s, and the 2025 edition is `/analysis/2025-risk-review.pdf` with no `-full`. **The SLOOS tables are machine readable**: `www.federalreserve.gov/data/sloos/sloos-202607-table-1.htm` carries one HTML table per question, so splitting on `</table>` and keeping the block containing the question text gives the raw bank counts, which is how the 7 / 45 / 1 split was read rather than the release's "moderate net share" prose. And `www.law.cornell.edu` served 12 CFR part 365 appendix A and 12 U.S.C. 1757a without a block.

**Two denominators, and do not merge them.** The 2006 guidance measures total capital as total risk-based capital, Schedule RC-R line 21. The real estate lending guidelines define it as tier 1 capital plus the allowance, and the FDIC's own published concentration ratio uses the same tier 1 plus allowance base. The worked example's hypothetical bank reads 288.5 percent on the first and 309.3 percent on the second, which is the whole point of the paragraph that tells the reader to ask a banker which denominator a quoted ratio uses. A future run that "simplifies" these into one number breaks the page.

Three things the run deliberately did not publish. A bank's internal limit on hotel exposure: no bank publishes one, and the page says so twice. The share of hotel loan applications declined on concentration grounds: no agency publishes it, and the page cites the distribution of ratios instead. And any named bank's ratio, although every input is public: naming a bank would turn a public filing into a claim about a third party, so the page tells the owner where to read it (BankFind Suite, the FFIEC Central Data Repository) and leaves the lookup to them.

The page runs 2,462 words against the spec's 2,500 ceiling. Every figure in the worked example and every published threshold is recomputed by `scripts/check-cre-concentration-math.mjs`, committed alongside the page: 57 assertions covering both concentration ratios on both denominators, the 36-month growth test before and after the loan, the 4.8 and 0.2 point margins, the $5,000,000 of room left under the screen, the 70 and 88 percent loan-to-value tests against the 85 percent supervisory limit, the $29,100,000 commercial bucket and the 30.2 percent one loan takes of it, the 29.3 times difference between counting the loan and counting the slice above the limit, the SLOOS response counts against their total, and the template's own answer, takeaway, FAQ, table, source-order and body-length limits.

**2026-10-20, Content Writer.** Shipped `/hotel-industry/karis-law-911-requirements`. Sections A to E are complete, F is SKIPPED, G is blocked and H and J were ticked, so the pick came from a fresh coverage scan of `src/lib/data/`: "Kari's Law", "RAY BAUM", "multi-line telephone", "MLTS", "dispatchable location", "PSAP" and "274a" each appeared in **zero** files, and "911" in two, both as a phone number in a contact block. Every hotel that replaces a phone system walks into 47 CFR part 9 subpart F, the rule turns on a single date an owner can read off an invoice, and the site said nothing about it. The federal rules name hotels explicitly, which made this the most clearly hotel-specific compliance gap left on the site.

Outbound HTTPS worked for `www.law.cornell.edu`, `www.ecfr.gov` (versioner API only), `www.govinfo.gov` and `www.federalregister.gov` (its JSON search API only). Five notes for the next run. **The eCFR versioner API needs `Accept-Encoding` that permits compression**: without `--compressed` it answers 406 with supportCode 11 and the message "This endpoint requires response compression", which reads like a block and is not one. Pulling a whole part in one call (`api/versioner/v1/full/2026-10-01/title-47.xml?part=9`, 193 KB) or one section (`&section=1.80`, 40 KB) and grepping the local file worked on the first try for both, and every figure agreed with Cornell LII on a second read. **federalregister.gov serves its search API to scripts but not its document text**: `api/v1/documents.json` answers 200 and is the cheapest way to find a rule by citation, while `documents/full_text/text/...` answers a "Request Access" interstitial; `www.govinfo.gov/content/pkg/FR-YYYY-MM-DD/html/<docnum>.htm` returns the same document in full (127 KB for the 2019 Report and Order) and is what the page cites. **`www.fcc.gov` answers 403 to WebFetch**, so nothing on the Commission's own site is readable from here; its orders have to be read through govinfo. And a Report and Order is worth reading past the rule text: the four most useful holdings on this page (the end-of-useful-life grandfathering, the front-desk callback number, the passive-owner clause and the contracts-are-not-determinative limit) are in the preamble paragraphs, not in the CFR.

Four figures the run deliberately did not publish. What a hotel phone system, its notification software or a configuration test costs: no vendor, agency or standards body publishes any of them, and the worked example labels its per-station and per-key figures as assumptions. What the FCC would actually assess: Tables 1 and 2 to 47 CFR 1.80(b)(11) publish base amounts for named violations and neither carries a line for a 911 or MLTS violation, so the page prints the ceiling and the Table 3 adjustment criteria and says nothing more. Whether a franchisor requires a particular telephone specification: that is a brand standard in a franchise agreement and no franchisor publishes it. And whether a lender conditions a renovation draw on a 911 configuration test: a lender term, and the rate-sheet block says so.

**One thing the page states as a caution rather than a step.** The diligence section tells the reader to arrange a test call with the local answering point rather than dial 911 cold. Nothing in part 9 says to do that and the page does not claim it does; it is the responsible way to test a live emergency line and should not be edited into a bare instruction to dial 911.

The page runs 2,482 words against the spec's 2,500-word ceiling, after three trimming passes from 2,761. Nothing cut was a citation, a figure or an internal link. Every figure in the worked example and every regulatory amount is recomputed by `scripts/check-karis-law-math.mjs`, committed alongside the page: 87 assertions covering all five governing dates, the two-year effective-date arithmetic, the 21 CFR and U.S. Code citations the page relies on, the 134-station count, the $41,540, $9,000, $50,540, $421, $2,160,000 and 2.3 percent figures, the $175,924 and $201,056 day-seven and day-eight exposures and the day the $188,491 single-act ceiling binds, the 3.7 times, 8.7 percent and $1,571 comparisons, and the template's own answer, takeaway, FAQ, title, description, sibling, source-order and body-length limits.

**2026-10-19, Content Writer.** Shipped `/hotel-industry/asbestos-renovation-rules`. Sections A to E are complete, F is SKIPPED, G is blocked and H and J were ticked, so the pick was the one the 2026-10-09 run had already named: the asbestos work-practice rules in 40 CFR 61 subpart M, drafted and cut from `/buy-a-hotel/environmental-liability` to keep that page inside its word ceiling. A coverage scan confirmed it was still the largest compliance gap: "NESHAP", "RACM", "friable", "PACM", "1926.1101" and "subpart M" each appeared in **zero** files under `src/lib/data/`, and "asbestos" in two, both times inside the ADA alteration exclusions. Every hotel renovation on an older building runs through this rule and the site said nothing about it.

Outbound HTTPS worked for `www.law.cornell.edu`, `www.ecfr.gov` (versioner API only) and `www.dir.ca.gov`. Five notes for the next run. **Every CFR section here was read twice, once on Cornell LII and once through the eCFR versioner API against the 2026-10-01 issue, and the two agreed on every threshold, deadline and dollar figure**, which is the first time a run has been able to say that: Cornell is current on 40 CFR parts 19 and 61 and on 29 CFR 1903 and 1926. The eCFR **HTML** pages are now useless to a script: `www.ecfr.gov/current/title-40/section-61.145` and every other `/current/` path 302s to `unblock.federalregister.gov`, while `api/versioner/v1/full/<date>/title-40.xml?part=61&subpart=M` answers 200 and returns the whole subpart in one 125 KB request. Pulling a subpart or a part in one call, then grepping the local file, is both cheaper and immune to the per-IP block earlier runs hit. `leginfo.legislature.ca.gov` answered **403** this run, where it worked on 2026-10-05, so California Labor Code could not be read as statute; `www.dir.ca.gov/title8/341_6.html` serves the regulation text cleanly and is what the page cites. And WebFetch refuses to transcribe a regulation verbatim, capping quotes at 125 characters, so a provision whose exact wording matters has to come from the eCFR XML rather than from a summarising read.

Three figures the run deliberately did not publish. What an asbestos survey, an abatement project or a clearance test costs on a hotel: no agency, state program or standards body publishes any of the three, and the page tells the owner to get the bid in writing. How long a delegated air district takes to process a notification: nothing in part 61 or on the California pages states one. And whether a lender requires a survey in file before releasing a renovation draw: that is a lender term, no lender publishes it, and the rate-sheet block on the page says so.

**One interpretation the page refuses to make.** 40 CFR 61.145(b)(3)(i) requires the notice "at least 10 working days before" the work, and "working day" in 61.141 is Monday through Friday including holidays, but neither says whether the postmark day counts as one of the ten. The inclusive reading gives 14 calendar days and the exclusive reading 17. The worked example budgets 17, states the 14 explicitly as the alternative, and says which one is the number to budget. Do not "simplify" that into a single figure.

The page runs 2,496 words against the spec's 2,500 ceiling, after four trimming passes from 3,474. The trimming merged the accreditation section into the OSHA section and the state section into the penalties section, taking eight sections to six, and dropped one takeaway and one FAQ that both repeated content already on the page; nothing cut was a citation, a figure or an internal link. Every figure in the worked example and every statutory amount is recomputed by `scripts/check-asbestos-math.mjs`, committed alongside the page: 89 assertions covering all 20 statutory figures as printed, the 4,950 square foot tile area and its 30.9 multiple, the 290 and 360 linear foot amounts and the 24.1 percent update test, the 10-working-day count derived from the calendar in both directions, the $2,860,000 budget, the $41,135, $7,047, $48,182 and $438 delay figures, the $746,556 exposure with its 26.1 percent and 15.5 times comparisons, and the template's own answer, takeaway, FAQ, title, description, sibling, source-order and body-length limits.

**2026-10-16, Content Writer.** Shipped `/hotel-financing/chapter-11-bankruptcy` from a fresh gap scan. Sections A to E are complete, F is SKIPPED, G is blocked and H and J were ticked, so the pick came from a coverage scan of `src/lib/data/`: "automatic stay", "cash collateral", "Subchapter V", "1121", "1129", "362" and "552" each appeared in **zero** files, and "bankruptcy" in eight, every time as a single clause inside a page about something else. The distress cluster had the pre-filing conversation (`/hotel-financing/loan-workouts`), the six exit paths (`/sell-a-hotel/selling-a-distressed-hotel`) and the buyer's side (`/buy-a-hotel/buying-a-hotel-from-receivership-or-foreclosure`), and nothing at all on what the Bankruptcy Code does to a hotel when the owner files.

Outbound HTTPS worked for `www.law.cornell.edu`, `www.uscourts.gov` and `www.govinfo.gov`. Four notes for the next run. **Cornell LII served nine Code sections in one run without a block**, which no eCFR path has managed in any recent run, so title 11 and title 28 should be read there first. A section page longer than 100,000 characters, which 11 U.S.C. 101 is at 300,509, needs a second WebFetch with `offset: 100000` to reach the paragraph numbers in the fifties; the first call stops at paragraph (48) and reports nothing missing. Cornell's statutory notes are the cheapest way to date an amendment: the 0.9 percent quarterly trustee fee is traceable to Pub. L. 119-76 and its first-quarter-on-or-after February 6, 2026 applicability entirely out of the notes under 28 U.S.C. 1930. And `www.uscourts.gov/services-forms/fees/...` 301s to `/court-programs/fees/...` over plain HTTP, which WebFetch will not follow, so use the `court-programs` path.

**One trap that would have put a wrong number on the page.** A summarising read of 28 U.S.C. 1930(a)(6)(B) came back with "the lesser of 0.8 percent or $250,000" and a condition about the United States Trustee System Fund falling below $200,000,000. Both belong to the repealed version of the subparagraph, which Cornell still prints in its editorial notes. A verbatim transcription of the current text, requested in fragments, shows no Fund condition at all and 0.9 percent, not 0.8. Transcribe a fee provision word for word before costing anything on it.

Three things the run deliberately did not publish. What a hotel Chapter 11 costs in professional fees: no court, agency or bar publishes it, and the page tells the owner to get the estimate in writing instead. What share of hotel Chapter 11 cases confirm a plan: the Administrative Office publishes filings by chapter, not outcomes by collateral type, so the page cites the 10,320 filings in the year ending June 30, 2026 and stops there. And whether a given loan's non-recourse carve-out schedule converts on a voluntary filing, which is a lender term no lender publishes; the page says so and sends the reader to their own guaranty.

**One judgement the page refuses to make.** Section 101(51B) gives a three-part test and does not name hotels, and the third part, whether the debtor conducts a substantial business beyond operating the real property, is where every hotel single-asset fight happens. No primary source answers it, and citing court opinions this run was not possible without reading them, so the page states the test, says the judge makes the finding, and tells the owner not to let a lender assert the answer without a ruling. Do not "improve" that into a yes or a no.

The page runs 2,456 words against the brief's 2,500 ceiling, after three trimming passes from 2,575; nothing cut was a citation, a figure or an internal link, and one cut fixed an accuracy problem (101(51B) carves out small residential property, it does not "name apartments"). Every figure in the worked example and every statutory amount is recomputed by `scripts/check-chapter-11-math.mjs`, committed alongside the page: 39 assertions covering the $1,738 filing cost, the Subchapter V ceiling and the factor-of-four test against a $14,000,000 loan, the 362(d)(3)(B) payment on value rather than balance and the $13,542 monthly difference, the 9.8 percent of revenue, the 0.9 percent quarterly fee against the $250,000 cap, the nine-month $560,625 payment stream, the $628,963 first-year total and the $5,718 per key, all six statutory deadlines, and the template's own answer, takeaway, FAQ, title, description, sibling, body-length and first-reference-order limits.

**2026-10-15, Content Writer.** Shipped `/hotel-industry/fire-safety-and-federal-travel` from a fresh gap scan. Sections A to E are complete, F is SKIPPED, G is blocked and H and J were ticked, so the pick came from a coverage scan of `src/lib/data/`: "fire safety", "sprinkler", "smoke alarm", "NFPA", "USFA", "FedRooms", "per diem" and "2225" each appeared in **zero** files, and "life safety" in three, every time inside a quoted FDD cost table rather than as prose. A hotel's eligibility for federal travel business is a revenue line and a capital expenditure item at once, and the site had nothing on the statute that governs it.

Outbound HTTPS worked for `www.law.cornell.edu`, `www.ecfr.gov`, `www.gsa.gov` and `apps.usfa.fema.gov`. Five notes for the next run. **The Hotel-Motel National Master List is fully machine readable**, which is the find of this run: `apps.usfa.fema.gov/hotel/` is a client-rendered Next.js app with no server HTML, but its JSON API answers a script directly (`/hotel/api/states`, `/hotel/api/lookups/propertyTypes`) and `/hotel/api/properties/searchExport` returns the entire national list as an 8.45 MB CSV in one request. The same trick reads the pages that have no server HTML at all: the FAQ text, including the registration sequence and the FEMA ID that does not expire, was extracted from `/_next/static/chunks/pages/faq-*.js`, whose build hash is listed in `/hotel/_next/static/<buildId>/_buildManifest.js`. **The eCFR API worked for title 41 this run** where it had blocked on title 12 on 2026-10-13, so try it before falling back: Cornell's eCFR mirror is stale on the Federal Travel Regulation and still prints the pre-2025 numbering, where 301-11.11 is the international dateline section rather than lodging, so citing Cornell for the FTR would have put the wrong section number on the page. The current fire-safe-facility instruction is 41 CFR 301-11.6(b), under FTR Case 2025-05, 90 FR 56893, December 8, 2025. GSA's own `per-diem-rates` landing page does not print the standard CONUS figures and its rate-lookup API was down this run; the figures are in the bulletin at `/policy-regulations/regulations/federal-travel-regulation/ftr-and-related-files/gsa-per-diem-bulletin-ftr-2701`, which reads cleanly.

**One parsing trap worth the time it cost.** The published CSV is not clean, and a strict reader and a lenient one disagree by thousands of rows. 27 records carry a newline inside a quoted field, because the property type value "College/University" literally ends in CRLF, and at least one record carries an unescaped quote (`3506 O"neill Dr`), which makes the file's total quote count odd and desynchronises a strict parser from that row to the end of the file. Python's `csv` module in its default non-strict dialect keeps the stray quote as a literal and continues the field unquoted; a strict parser read 52,802 rows against the correct 57,822. The correct count is confirmed by arithmetic independent of either parser: 57,850 physical lines, less the header, less the 27 continuation lines. `scripts/check-fire-safety-math.mjs` now carries a parser that reproduces Python's dialect exactly, and the two agree on all 16 counts. Pass the CSV path as an argument to re-derive every count from a fresh download before changing one.

Three figures the run deliberately did not publish. How many federal room nights land in a given market or at a given hotel: GSA publishes the rate caps and no agency publishes a hotel-level booking count, so the worked example runs on a labelled assumption of 3,000 nights and says to replace it with a number from the local agencies. How long USFA takes to process a registration or a correction: no document on the site states one. And what a sprinkler retrofit costs per room on an occupied hotel: no public source publishes it, so the page sends the reader to a contractor's bid on the specific building.

**One number to re-read before touching it.** The $113 standard CONUS lodging cap runs only through September 30, 2027, and FY2026 was frozen at FY2025 levels, so the next bulletin may move it by more than the usual increment. Re-read GSA Per Diem Bulletin FTR 28-01 when it publishes, around mid-August 2027, rather than assuming a trend. The master-list counts are a live file and will drift: re-download before changing any of them.

The page runs about 2,529 words against the brief's 2,500 ceiling, after six trimming passes from 2,986; the trimming dropped one FAQ, on what listing costs, whose no-fee point was folded into the registration FAQ, and nothing else cut was a citation, a figure or an internal link.

**2026-10-14, Content Writer.** Shipped `/hotel-financing/sba-franchise-directory` in PR #73, from a fresh gap scan. Sections A to E are complete, F is SKIPPED, G is blocked and H and J were ticked, so the pick came from a coverage scan of `src/lib/data/`: "Franchise Directory" appeared in **one** file as a single clause, and "2462", "121.103" and "121.301" in **zero**. The listing requirement is a hard SBA eligibility gate that sits in front of every branded hotel the team finances from $5 million down, the site had nothing on it, and the widely repeated answer to the question is two years out of date.

Outbound HTTPS worked for `legacy.sba.gov` (document pages and the files under `/sites/default/files/`) and `www.law.cornell.edu`. Five notes for the next run. **`www.sba.gov/document/<slug>` 302s to `legacy.sba.gov/document/<slug>`**, which WebFetch does not follow automatically, so go straight to the legacy host. The Franchise Directory is a real spreadsheet and it is readable by a script: `curl` the file named on the document page (this run: `Franchise Directory Oct 9 2026_REM01.xlsx`, 280,055 bytes) and unzip it, because `xl/sharedStrings.xml` plus `xl/worksheets/sheet1.xml` parse with the standard library and no dependency. **SOP 50 10 is published as `.docx`, not PDF**, since version 6; `word/document.xml` gives clean paragraph order, which is how the Franchises section, the hotel transient-revenue rule and the passive-business tests were read. The archived editions on the same page are the cheapest way to date a policy change: SOP 50 10 7 (August 1, 2023) has zero occurrences of "Franchise Directory" and SOP 50 10 8 (June 1, 2025) has twenty, which is the whole 2023-to-2025 history without a single secondary source. `www.federalregister.gov/citation/88-FR-21074` 302s to `unblock.federalregister.gov`, so the April 10, 2023 affiliation rule is cited through the SOP's own statement of it rather than fetched.

Two things the run deliberately did not publish. How long SBA takes to add a brand to the Directory: no SBA document publishes a turnaround time, and the page says so rather than guessing, citing instead the one written clock in the process, the 30-day notice before a removal. And a count of hotel brands on the Directory: keyword matching on 3,461 brand names cannot be defended (`Inn` catches restaurants), so the page publishes the exact counts the file supports (3,461 rows, 2,438 meeting the FTC definition, 2,437 coded, 1,009 not meeting it, 14 disaster-only, 281 recertified, 22 carrying the 30-day note, 19 mentioning a comfort letter) and one checkable statement about this site's own 24 brands.

**One formatting trap to remember.** A backtick around anything that is not a path renders as a `<code>` element, and the Markdown-twin parity check in `scripts/agent-access-check.mjs` then fails that paragraph: the twin carries the sentence as one string and the HTML does not. Two paragraphs failed the gate for this reason until the backticks came out. Use backticks only around `/paths`, which render as links on both sides.

The page runs 2,495 words against the brief's 2,500 ceiling, after four trimming passes from 2,968; the trimming dropped one takeaway and one FAQ, both duplicated elsewhere on the page, and nothing cut was a citation, a figure or an internal link. Every figure in the worked example and every count read out of the Directory is recomputed by `scripts/check-franchise-directory-math.mjs`, committed alongside the page: 39 assertions covering the three determination groups against the row total, the 22-month gap between the two SOP editions, the 7(a) ceiling, the two management-fee cases, the coverage-test arithmetic, the 25-year payment factor at 10.00 percent, both loan amounts, the capacity difference, the 7(a) cap test, and the template's own answer, takeaway, FAQ, title, description, sibling, table and body limits.

**2026-10-13, Content Writer.** Shipped `/hotel-financing/appraisal-requirements` from a fresh gap scan. Sections A to E are complete, F is SKIPPED, G is blocked and H and J were ticked, so the pick came from a coverage scan of `src/lib/data/`: "FIRREA", "Appraisal Subcommittee", "appraiser independence", "75 FR 77450" and "3331" each appeared in **zero** files, and "USPAP" in four, never as more than an aside. Appraisal is the single most expensive diligence item a hotel borrower pays for and cannot control, and the site had nothing on the rule that governs it.

Outbound HTTPS worked for `www.law.cornell.edu`, `www.ecfr.gov` (versioner API), `www.federalregister.gov` (single-document JSON API only), `www.govinfo.gov`, `legacy.sba.gov`, `www.asc.gov` and `appraisalfoundation.org`. Five notes for the next run. **The eCFR API blocks an IP after a handful of requests in a run**: `title-12.xml?part=34` succeeded, then `title-12.xml?part=722` answered 403 with "Your IP address has been blocked, Support Code 02" minutes later, so pull every eCFR part you need in the first few calls and fall back to Cornell LII, which served 12 CFR 323.3, 12 CFR 722.3, 13 CFR 120.160 and 12 U.S.C. 3339 without complaint. On `federalregister.gov` the single-document endpoint `api/v1/documents/<doc>.json` works, but **adding `fields[]` parameters or using `api/v1/documents.json` to search both answer 403**, so find a document number by web search and then fetch it by number. `www.appraisalfoundation.org/imis/TAFCustom/USPAP.aspx` 301s and then 400s to a script; the current path is `appraisalfoundation.org/pages/uspap` and WebFetch reads it. `www.asc.gov/appraiser-registry` 404s; the real path is `/national-registries`.

Figures the run deliberately did not publish. What a hotel appraisal costs and how long it takes: no agency, SBA document or appraisal body publishes either, and the page says so twice rather than guessing. And the April 9, 2018 final rule's estimate that 31.9 percent of loans would fall under the raised threshold, because that number is derived from the CoStar Comps database and `geo/AGENTS.md` rule 4 bars republished CoStar data even at second hand; the page cites the rule only for the threshold change itself.

**One thing to re-read before changing a number.** The commercial threshold is $500,000 and the residential one is $400,000, and the two moved in different years: commercial on April 9, 2018 (83 FR 15019) and residential on October 9, 2019 (84 FR 53579). A search for "the 2019 appraisal threshold rule" returns the residential one, so do not read it as the commercial authority. Every figure in the worked example was recomputed by `scripts/check-appraisal-math.mjs`, committed alongside the page: 42 assertions covering the 504 sizing at both values, the 90 percent test, the per-key arithmetic, the debenture reduction, the cash at closing, the cost of the special purpose classification, the going concern allocation, and the template's own answer, takeaway, FAQ and body word limits. The page runs 2,496 words against the brief's 2,500 ceiling, after five trimming passes from 3,517; the trimming merged two H2s (appraiser qualifications into report contents) and dropped one takeaway and one FAQ, and nothing cut was a citation or a rule.

**2026-10-05, Content Writer.** Shipped `/sell-a-hotel/tax-clearance-and-withholding` from a fresh gap scan. Sections A to E are complete, F is SKIPPED, G is blocked, H is done and every J row was ticked, so the pick came from a coverage scan of `src/lib/data/`: "successor liability", "bulk sale", "tax clearance", "no tax due" and "FIRPTA" each appeared in **zero** files, and "transient occupancy" in one. It is the largest remaining gap on the sell side, and it is money out of a seller's closing rather than an optional topic.

Outbound HTTPS worked for `leginfo.legislature.ca.gov`, `www.cdtfa.ca.gov` and `cdtfa.ca.gov`, `www.flsenate.gov`, `www.tax.ny.gov`, `comptroller.texas.gov`, `www.law.cornell.edu`, `www.irs.gov`, `app.leg.wa.gov` and `dor.wa.gov`. Six notes for the next run. **`statutes.capitol.texas.gov` is still useless to a script**, as the 2026-09-24 run recorded: the chapter `Docs/TX/htm/TX.111.htm` and `pdf` paths both serve the JavaScript shell, so Texas Tax Code 111.020 could not be read as statute and the page cites the Comptroller's own "Buying an Existing Business" publication, which states the rule and the Certificate of No Tax Due timing. `www.ftb.ca.gov` answers 403 to scripted readers, so California real estate withholding is cited to Rev. & Tax. Code 18662 on leginfo rather than to FTB. `www.ilga.gov` and `www.nj.gov/treasury/taxation` were tried for a sixth and seventh state and are not usable: ilga.gov did not answer at all and the NJ bulk-sale page paths 404. `www.tax.ny.gov` answered empty once and fine on the retry, so retry it before concluding anything. The CDTFA **law guide** at `cdtfa.ca.gov/lawguides/vol1/sutr/<reg>.html` serves full regulation text to a script, which is how 18 CCR 1595 and 1702 were read; `cdtfa.ca.gov/formspubs/pub74.pdf` serves HTML, not a PDF, so use the guide path `formspubs/pub74/` instead.

**Two dates to re-verify.** Washington's REET brackets move to $551,000, $1,551,000 and $3,051,000 for sales beginning January 1, 2027, so the 1.1 / 1.28 / 2.75 / 3.0 percent thresholds on the page are current only through December 31, 2026. The Texas Certificate of No Tax Due form has changed twice by statute (S.B. 873 in 2021 and S.B. 3 in 2023), so re-read the Comptroller page before naming Form 86-114 again.

A figure the run deliberately did not publish: what a hotel buyer "typically" holds back in escrow. Every statute read here caps the buyer at the purchase price rather than at the tax, and no public source publishes observed holdbacks, so the page says the number is negotiated and leaves it at that. Every figure in the worked example was recomputed by `scripts/check-tax-clearance-math.mjs`, committed alongside the page: the Florida arrears, the statutory cap as a multiple of the tax, the holdback, the FIRPTA computation and its share of the gain, the 90-day carrying cost at Prime, the California 3 1/3 percent comparison and the FF&E split. The page runs about 2,936 words against the brief's 2,500 ceiling, after two trimming passes from 3,139; the site's other evidence-heavy pages sit at 2,515 to 2,840 by the same count, and every paragraph left carries a citation or an internal link.

**2026-09-18, Content Writer.** No page shipped. Outbound HTTPS is blocked for every host in this
environment: the egress proxy answered `403` to `CONNECT` for sba.gov, federalreserve.gov,
census.gov, ecfr.gov, fred.stlouisfed.org, home.treasury.gov, occ.gov, fdic.gov, irs.gov, bls.gov and
law.cornell.edu, and page fetches failed for every other host tried. `geo/AGENTS.md` rule 1 requires
every published figure to link to a primary source fetched and read in the same run, so no page in
this queue could be written to the bar. Nothing was marked SKIPPED, because the blocker is the
environment, not the sources: `/hotel-financing/construction-loans` remains the next item. This file
and the log line are what the run shipped. The environment's network policy needs to allow the
primary-source domains above before the Writer can run.


**2026-10-02, Content Writer.** Shipped `/hotel-financing/flood-insurance-requirements` from a fresh gap scan. Sections A to E are complete, F is
SKIPPED, G is blocked, H is done, every J row was ticked and L was still blocked on the registries, so the pick came from a coverage scan of
`src/lib/data/`: "flood" and "NFIP" appeared in **zero** files under `src/lib/data/`, which made this the largest single gap left in the financing
cluster, and it is a closing condition rather than an optional topic.

Outbound HTTPS worked for `www.law.cornell.edu`, `www.ecfr.gov` (API), `www.federalregister.gov` (API and govinfo PDFs) and `legacy.sba.gov`.
Five notes for the next run. **`www.fema.gov` answers 403 to curl but is readable through the WebFetch tool**, which is how the December 11, 2026
authorization date and the lapse behaviour were read; nothing else on the run needed it. `www.govinfo.gov` serves Federal Register PDFs cleanly
through the `pdf_url` the Federal Register JSON API hands back, which is how the 70-page Interagency Questions and Answers (87 FR 32826) was read;
`pdftotext` without `-layout` gives usable reading order on that document, `-layout` scrambles its three columns. `uscode.house.gov` is useless to a
script: every granule URL redirects to `house.gov`. `crsreports.congress.gov` answers 403, as `www.congress.gov` already did. The eCFR API worked
under the same two rules earlier runs recorded (permit compression, and never ask for a date later than the title's latest issue, which was
2026-09-28 for titles 12 and 44).

**Watch the NFIP authorization date.** 42 U.S.C. 4026 is the sunset, and on this run Cornell's codified text still printed September 30, 2026, two
days past, because the extension signed September 2, 2026 had not reached a US Code release. FEMA's reauthorization page, last updated September 28,
2026, is the faster source and gave December 11, 2026. Re-read **both** before changing that date, and do not assume the code is current. The page
says in its own prose that the code lagged, with the date it was read, so the statement stays true even after the next extension.

A figure the run deliberately did not publish: the search pass turned up a claim that the NFIP lapsed for 43 days from October 1, 2025. FEMA's page
says nothing about past lapses and no primary source was found for it, so it is not on the page.

Every figure in the worked example was recomputed by `scripts/check-flood-math.mjs`, committed alongside the page: the three-way sizing test, the
contents leg, the floor as a share of insurable value, the ICC headroom at the cap, the loss settlement, the excluded room revenue and the 50 percent
substantial-improvement line. The page runs about 2,697 words against the brief's 2,500 ceiling, after four trimming passes from 3,196. Nothing cut
in those passes was a citation or a rule; what is left is seven distinct sub-questions, twelve sources and no paragraph without one.

**2026-10-01, Content Writer.** Shipped `/hotel-industry/resort-fees` from section J. Sections A to E are complete, F is SKIPPED, G
is blocked, H is done and every J row was ticked, so the pick came from a fresh gap scan. Section L was tried first and is still blocked:
both franchise registries answered 403 (details above). The gap scan then found a live federal rule the repo had never mentioned. "junk
fee", "mandatory fee", "drip pricing" and "464" each appeared in zero files under `src/lib/data/`; "resort fee" appeared in four, never as
more than an aside. 16 CFR part 464 names short-term lodging as one of only two covered categories, so this is squarely a hotel-owner
question.

Four notes for the next run. **`pdftotext` and `pdfinfo` are installed in this environment now**, which they were not on 2026-09-23 when
IRS Publication 5653 had to be abandoned; the 102-page FTC final rule was read as a govinfo PDF this run. Prefer govinfo for any Federal
Register document: `federalregister.gov/documents/full_text/text/...` and `/html/...` answer a "Request Access" interstitial to scripts,
but the **JSON API** at `federalregister.gov/api/v1/documents/<doc>.json` works and hands back the `pdf_url` on govinfo, which downloads
clean. The eCFR API worked again under the same two rules the 2026-09-30 run recorded (send `Accept-Encoding` that permits compression,
and never ask for a date later than the title's latest issue, which was 2026-09-28 for title 16). **Watch the FTC penalty figure:** eCFR's
current text of 16 CFR 1.98 still prints the January 17, 2025 amounts, and a Federal Register search turned up a September 15, 2026 notice
(91 FR 58446) that could easily have been read as superseding them. It does the opposite: OMB could not produce the October 2025
cost-of-living multiplier, so the 2025 levels carry into 2026 and $53,088 is current. Do not "update" that number next year without
reading whichever notice replaces 91 FR 58446.

**2026-09-30, Content Writer.** Shipped `/hotel-industry/ada-requirements` from section J. Sections A to E are complete, F is
SKIPPED, G is blocked, H is done, so the pick came from a gap scan of `geo/04-queries.csv` again. This one is a coverage gap
rather than a routing gap: no CSV row asks the ADA question in those words, but the "Brand/PIP/conversion" cluster's 22 rows and
the "Deal docs & underwriting" cluster's 13 are full of PIP-scope and diligence questions, and "Americans with Disabilities"
appeared in zero files under `src/lib/data/` while "ADA" appeared as running prose exactly once. The same precedent as
`/buy-a-hotel/depreciation-and-cost-segregation` on 2026-09-23.

Outbound HTTPS worked for `www.law.cornell.edu`, `www.ada.gov`, `www.ecfr.gov` and `leginfo.legislature.ca.gov`. Four notes for
the next run. The Department of Justice publishes the full text of 28 CFR part 36 and the whole of the 2010 ADA Standards as
single HTML pages at `ada.gov/law-and-regs/regulations/title-iii-regulations/` and
`ada.gov/law-and-regs/design-standards/2010-stds/`, 1.3 MB and 734 KB respectively, both readable by a scripted reader with no
PDF tooling needed; that is how Table 224.2 and Table 224.4 were transcribed. The eCFR **website** is JavaScript-rendered and
useless to a script, but the eCFR **API** works and has two requirements the error messages state plainly: send
`Accept-Encoding` that permits compression, or it answers 406, and do not ask for a date later than the title's most recent
issue date, or it answers 404 (title 28's latest issue on this run was 2026-09-28). That API is the only way this environment
can read a current CFR section eCFR carries and Cornell does not. Cornell LII's CFR copies of 36.302, 36.304, 36.402, 36.403
and 36.406 were each cross-read against the ada.gov text and matched, so the page cites Cornell for the sections and ada.gov
for the Standards. `node_modules` was absent at the start of the run and `npm ci` was needed before the gate would typecheck,
as on every run since 2026-09-22.

Every figure in the worked example was recomputed by `scripts/check-ada-math.mjs`, which is committed alongside the page: both
scoping tables, the 20 percent cap in both phases, the three-year aggregation, and the two tax offsets. The page runs about
2,565 words against the brief's 2,500 ceiling, after five trimming passes. That is the closest any recent evidence-heavy page
has landed (the last four ran 2,800 to 2,920 by the same count) and the last 65 words are not padding: the page carries seven
distinct sub-questions, and every paragraph left holds a citation or an internal link.

**2026-09-28, Content Writer.** Shipped `/sell-a-hotel/1031-without-buying-another-hotel` from section J.
Sections A to E are complete, F is SKIPPED, G is blocked, H is done, so the pick came from a gap scan of
`geo/04-queries.csv` again. Two priority-2 rows pointed at `/sell-a-hotel/1031-timing`, which does not exist, and
`/hotel-financing/1031-exchange-hotels` answers the mechanics but says nothing about what an owner can exchange into
if they do not want to operate another hotel. "Delaware statutory trust", "tenancy in common" and "Rev. Rul. 2004-86"
each appeared in zero files under `src/lib/data/`. Outbound HTTPS worked for `www.irs.gov`, `www.law.cornell.edu`,
`efts.sec.gov`, `www.sec.gov`, `delcode.delaware.gov`, `fred.stlouisfed.org`, `www.bls.gov`, `www.federalreserve.gov`,
`www.census.gov`, `www.hud.gov` and `www.sba.gov`.

Five notes for the next run. `www.congress.gov`, `content.naic.org` and `www.fema.gov` all answer 403 to scripted
readers. IRS revenue rulings are readable without a PDF tool through the Internal Revenue Bulletin HTML at
`irs.gov/irb/<year>-<issue>_IRB`, which is how Rev. Rul. 2004-86 was read this run; the `irb/2002-14_IRB` path 404s,
so Rev. Proc. 2002-22 could not be read and the tenancy-in-common row in the table carries no co-owner count. EDGAR
full-text search at `efts.sec.gov/LATEST/search-index` works and needs a User-Agent carrying a contact address; a
Form D search for "Delaware statutory trust" plus "hotel" in 2026 returned exactly one issuer, Driftwood Hotel
Income I, DST, whose filing supplies the page's only market figures. `node_modules` was absent at the start of the
run and `npm ci` was needed before the gate would typecheck, as on every run since 2026-09-22.

**Do not misread the Actions API the way this run did.** `list_workflow_jobs` and `get_check_runs` served job data
that was minutes stale and, on one run, frozen entirely: a job that had finished still read `in_progress` with its
`updated_at` unchanged, which looked exactly like a hung runner past the workflow's `timeout-minutes: 25`. On that
reading this run cancelled a healthy run, spent its one re-run, and posted two PR comments blaming GitHub. The gate
was never wedged: run 36436435356 completed `scripts/geo-check.sh` in 2 minutes 10 seconds, which is the normal time.
Next run: before concluding a job is stuck, re-poll at least twice several minutes apart and treat a frozen
`updated_at` as stale data rather than a stuck runner, and do not cancel a run on one reading.

The page runs about 2,920 words against the brief's 2,500 ceiling, after three trimming passes; every paragraph left
carries a citation or an internal link, and the site's other evidence-heavy pages sit at 2,700 to 2,960 by the same
count.

**2026-09-25, Content Writer.** Shipped `/sell-a-hotel/employees-when-you-sell` from section J. Sections A
to E are complete, F is SKIPPED, G is blocked, H is done, so the pick came from a gap scan of
`geo/04-queries.csv` again: the "Selling a hotel" row "What happens to my staff and franchise agreement
when I sell my hotel?" pointed at `/sell-a-hotel/franchise-transfer`, which answers the franchise half
and nothing about the staff. "WARN" appeared in seven files under `src/lib/data/` and never as more
than a two-sentence aside. Outbound HTTPS worked for `law.cornell.edu`, `www.ecfr.gov`,
`www.dol.gov`, `dol.ny.gov`, `leginfo.legislature.ca.gov`, `data.bls.gov` and `www.irs.gov`. Three
notes for the next run. `www.nysenate.gov` answers 403 to scripted readers, so New York Labor Law
article 25-A could not be read as statute and the page cites the New York State Department of Labor's
own WARN page for the state's thresholds instead. `api.census.gov` requires a key, so County Business
Patterns establishment-size classes for NAICS 721110 were not available; the BLS QCEW open-data
endpoint needs no key and carries the 2025 annual figures the page uses. `node_modules` was absent at
the start of the run and `npm ci` was needed before the gate would typecheck, as on every run since
2026-09-22. The page runs about 2,890 words against the brief's 2,500 ceiling, after three trimming
passes; every paragraph left carries a citation, and the site's other evidence-heavy pages sit at
2,700 to 2,960 by the same count.

**2026-09-24, Content Writer.** Shipped `/buy-a-hotel/how-to-make-an-offer` from section J. Sections A
to E are complete, F is SKIPPED, G is blocked, H is done, so the pick came from a gap scan of
`geo/04-queries.csv` again: the priority-2 row "What's the process for making an offer on a hotel?"
had no page, and "letter of intent" appeared in only two files in `src/lib/data/answers/` and
"purchase and sale agreement" in two more, all in passing. Outbound HTTPS worked for
`efts.sec.gov` and `www.sec.gov` (EDGAR requires a User-Agent carrying a contact address; the
default agent string gets a 403), `law.cornell.edu` and `tabc.texas.gov`. Two notes for the next
run. `statutes.capitol.texas.gov` renders its statute text with JavaScript and `law.justia.com`
answers 403 to scripts, so Texas Alcoholic Beverage Code section 11.11 could not be read and is not
cited; the page uses TABC's own licensing page for the 30-day notification instead. `node_modules`
was absent at the start of the run and `npm ci` was needed before the gate would typecheck, as on
2026-09-22 and 2026-09-23. The page runs about 2,800 words against the brief's 2,500 ceiling, after
two trimming passes; the site's other evidence-heavy pages sit at 2,700 to 2,960 by the same count,
and nothing left is padding.

**2026-09-23, Content Writer.** Shipped `/buy-a-hotel/depreciation-and-cost-segregation` from section J.
Sections A to E are complete, F is SKIPPED, G is blocked, H is done, so the pick came from the gap
scan again: no page in the repo covered buy-side depreciation, and the topic has unusually good
primary sourcing (Title 26 on Cornell LII, IRS Publication 946, the Form 4562 instructions, IR-2026-06
and the bonus FAQ). Outbound HTTPS worked for law.cornell.edu, irs.gov and uscode.house.gov. Two
notes for the next run. IRS PDFs cannot be read in this environment: `pdftotext` and `poppler-utils`
are absent, and both `pypdf` and `pdfminer.six` crash on import because the system `cryptography`
package has a broken Rust binding, so Publication 5653 (the Cost Segregation Audit Techniques Guide)
was downloaded but never read and is deliberately not cited. Cornell's copy of 26 U.S.C. 461(l) and
uscode.house.gov's copy of 168(k) both still show pre-OBBBA text, so the bonus depreciation facts on
the new page come from IRS sources rather than from those two. `node_modules` was absent at the start
of the run and `npm ci` was needed before the gate would typecheck, as on 2026-09-22.

**2026-09-22, Content Writer.** Shipped `/buy-a-hotel/how-to-underwrite-a-hotel-deal` from section J.
Sections A to E are complete, F is SKIPPED, G is blocked, H is done, so the pick came from the
`geo/04-queries.csv` "Deal docs & underwriting" cluster, which had 13 rows and no dedicated page.
Outbound HTTPS worked for SEC EDGAR, Cornell LII, leginfo.legislature.ca.gov, sba.gov and the Hilton
FDD host. str.com and costar.com answered 403 to scripted readers, as they did on 2026-09-18, so no
figure on the page depends on them. `node_modules` was absent at the start of the run and `npm ci` was
needed before the gate would typecheck.

**2026-09-21, Content Writer.** Shipped `/sell-a-hotel/franchise-transfer`, taken from section J and
the `geo/04-queries.csv` row `/sell-a-hotel/franchise-transfer` that had no page. Sections A to E are
complete, F is now SKIPPED for a sourcing reason that will still hold next run, and G is blocked on a
matcher bug plus a rule 4 question. Outbound HTTPS worked this run, unlike 2026-09-18: five 2026
franchise disclosure documents were downloaded and read for the page.

**2026-10-09, Content Writer.** Shipped `/buy-a-hotel/environmental-liability` from a fresh gap scan. Sections A to E are complete, F is SKIPPED, G is blocked and H and J are done, so the pick came from a coverage scan of `src/lib/data/`: "CERCLA", "bona fide prospective", "underground storage", "lead-based", "mold" and "radon" each appeared in **zero** files, and "all appropriate inquiries" in one. It is the largest remaining gap on the buy side, and it is the one diligence item that can outlive the closing.

Host notes for the next run. **`ecfr.gov` and `federalregister.gov` both serve a "Federal Register :: Request Access" page to a scripted reader**, confirming the 2026-10-05 maintainer finding, so every CFR section on this page is cited to `www.law.cornell.edu/cfr/text/...`, which serves full regulation text to `curl` and converts cleanly with `pandoc -f html -t plain`. `www.law.cornell.edu/uscode/text/42/...` does the same for the statute; `uscode.house.gov` returned a 14 KB shell and is not usable. `legacy.sba.gov` serves SOP 50 10 8.1 as a **.docx** at `sites/default/files/2026-08/SOP%2050%2010%208.1%20effective%2010.1.2026_0.docx` (1.0 MB), which `pandoc -f docx -t plain` turns into 21,925 readable lines, so the whole SOP including Appendices 4 through 8 is searchable from this environment. `www.epa.gov` answers a scripted reader cleanly.

**2026-10-12, Content Writer.** Shipped `/hotel-financing/prepayment-penalties` from a fresh gap scan. Sections A to E are complete, F is SKIPPED, G is blocked and H and J are done, so the pick came from a coverage scan of `src/lib/data/`: "prepayment" appeared in 24 files and "defeasance" in 16, but only ever as a one-line aside, and the mechanics an owner actually needs (what SBA charges, the 504 formula, why a CMBS loan cannot be prepaid at all) were explained nowhere. It is the number that decides the refinance-or-sell question the site already has three pages about, and "subsidy recoupment", "spread maintenance", "lockout" and "Form 1504" each appeared in zero or one file.

Five sourcing notes for the next run. **`caweb.sba.gov/library/pdf/Form_1504.pdf` serves the real PDF** and is the only readable copy of the 504 debenture found this run: `www.sba.gov/sites/default/files/2018-07/SBA%20Form%201504.pdf` answers 200 with an HTML shell, not a PDF, so `pdftotext` fails on it. The caweb PDF has no text layer `pdftotext` likes either; the Flate streams were decompressed with a 12-line Python script and the parenthesised strings read directly, which recovered the whole repurchase premium clause including both factor tables. **SEC EDGAR full-text search works** at `efts.sec.gov/LATEST/search-index?q=...&forms=424B2`, and a CMBS prospectus is the best public source on prepayment terms that exists: BANK 2026-BNK52 is a 14.9 MB HTML file at `www.sec.gov/Archives/edgar/data/1547361/...` that strips to 3.2 MB of text and carries Annex A-1 loan-level prepayment codes, the hospitality share of the pool and the defeasance mechanics. **`www.federalreserve.gov/releases/h15/` serves the current release to a script**, with Treasury constant maturities and Prime in a parseable table. **`fred.stlouisfed.org` timed out on every path tried** (series page, `graph/fredgraph.csv`), and `www.bls.gov` and `download.bls.gov` both answer 403, though `data.bls.gov/timeseries/<SERIES>` returns 200 and `api.bls.gov/publicAPI/v2/timeseries/data/<SERIES>` works without a key. `www.law.cornell.edu/cfr/text/...` and `legacy.sba.gov`'s SOP 50 10 8.1 .docx both still serve cleanly; `www.ecfr.gov` still redirects a scripted reader away.

Figures the run deliberately did not publish: any bank, credit union, life company or debt fund prepayment schedule, any defeasance consultant or accommodator fee, and the share of hotel CMBS loans that get defeased rather than assumed. None is published anywhere, so the page says so. A judgment call worth recording: the Sheraton Denver Downtown Hotel loan in BANK 2026-BNK52 carries L(31), D(83), O(7) on a 121-month term and would have been a third hotel example, but Annex A-1 classifies it as Leased Fee, a $25,000,000 slice of a $235,000,000 whole loan secured by the ground under the hotel rather than the hotel, so it was left out. Every figure in the worked example was recomputed by `scripts/check-prepayment-math.mjs`, committed alongside the page, 42 assertions covering the subsidy recoupment fee and its 25 percent test, both Form 1504 factor tables, the prepayment code arithmetic, the interpolated discount rate, the defeasance deposit at three discount rates and the effect on net sale proceeds. The page runs about 3,643 words after three trimming passes from 4,058, well over the brief's 2,500 ceiling: it covers four lender programs whose rules are enumerated statutory conditions, and the site's next longest evidence-heavy page sits at about 3,190 by the same count. Every paragraph left carries a citation or an internal link.

**2026-10-22, Content Writer.** Shipped `/hotel-financing/sba-size-standards`. Sections A to E are complete, F is SKIPPED, G is blocked and H and J were fully ticked, so the pick came from a coverage scan of `src/lib/data/`: "size standard", "121.201", "121.301", "annual receipts", "tangible net worth" and "Form 1099-S" each appeared in **zero** files, and "121.301" only once, in a source label on `/hotel-financing/sba-franchise-directory`. The site had forty financing pages that assumed the reader was eligible for SBA and nothing on the first test SBA applies, which is the one that decides whether a portfolio owner may apply at all.

**The find of this run.** The question an owner asks is "am I too big", and the answer is almost never the size standard. A hotel's standard is $40.0 million in average annual receipts (13 CFR 121.201, read through the eCFR versioner API for the 2026-10-01 issue of title 13 and again on Cornell LII), and a group over that line still has the alternative standard of $20 million tangible net worth and $6.5 million average net income. What actually binds is 13 CFR 120.151: all SBA portions of loans to one borrower **and its affiliates** cap at a $3,750,000 guaranty, so a single $5,000,000 7(a) loan at the 75 percent guaranty rate consumes the entire allowance for the whole group. The site's own SBA extract confirms how often that bites: of 3,879 7(a) hotel loans approved FY2021 to FY2025, 499 fell in the $5.0 million and over band totalling $2,495,000,000, an average of exactly $5,000,000, so all 499 were written at the statutory maximum.

**The asymmetry to preserve.** 13 CFR 121.301(f)(1)(i), where the applicant itself owns more than half of another business, carries **no** subsector limit. (f)(1)(ii) to (v), which run through an owner of the applicant, reach only a business in the same 3-digit NAICS subsector, which SBA added "to restrict affiliates to businesses in the same field" (88 FR 21074 at 21079). So one individual's two hotel companies are affiliated and that individual's restaurant company is not, while the same restaurant held by the applicant company would be. The worked example turns on exactly that. Do not flatten the two into one rule.

**Four sourcing notes for the next run.** The **eCFR versioner API still needs `--compressed`** (406 otherwise) and now also returns intermittent **503 "under heavy load (queue full)"**: retry after a few seconds and it serves. `api/versioner/v1/versions/title-13.json?part=121` gives per-section amendment dates and resolved an apparent conflict this run: 121.201's last amendment date is 2023-03-17, which looked wrong against the July 19, 2023 inflation rule, until 88 FR 46048 was read and says it finalizes the November 17, 2022 interim provisions **without change**. **`www.federalregister.gov` now 302s every document to `unblock.federalregister.gov`**, so Federal Register rules must be read as the govinfo HTML at `www.govinfo.gov/content/pkg/FR-<date>/html/<docnum>.htm`; get the document number from the FR **API** (`api/v1/documents.json`), which still answers cleanly, because guessing it gives a govinfo 302 to `/error`. **`www.census.gov` is behind Cloudflare** and returns 403 to both curl and WebFetch, so the official NAICS 721110 definition was not read; it was not needed, because 121.201 prints the industry titles and the subsector grouping itself. `www.law.cornell.edu`, `www.sba.gov` and `www.dol.gov` all served cleanly.

## I. Shipped 2026-09-18 outside the original queue

Conversational pages added by the parallel push. Listed so nobody rewrites them.

- `/hotel-financing/`: `non-recourse-loans`, `lenders-under-5-million`, `brand-conversion-financing`, `interest-only-loans`
- `/sell-a-hotel/`: `franchise-agreement-expiration`, `taxes-when-selling-a-hotel`, `selling-a-distressed-hotel`
- `/hotel-valuation/`: `branded-select-service-hotel-value`, `appraisal-lower-than-expected`, `pip-and-hotel-value`, `interest-rates-and-hotel-value`
- `/buy-a-hotel` (new cluster): hub, `how-much-money-do-you-need`, `due-diligence-checklist`, `first-hotel-no-experience`, `branded-vs-independent`
- Glossary: `sofr`, `prime-rate`, `sba-7a`, `sba-504`, `defeasance`, `yield-maintenance`, `non-recourse-carve-outs`, `mezzanine-debt`, `comp-set`, `gop`, `ground-lease`, `franchise-agreement`

## J. Next up when A to H are done

Pick from `geo/04-queries.csv` prompts with no dedicated page, phrased the way people ask an assistant.

| Done | URL | Source rows | Notes |
|---|---|---|---|
| [x] | `/buy-a-hotel/depreciation-and-cost-segregation` | No CSV row targets it directly, but the "Buying a hotel / 1031" and "Deal docs & underwriting" clusters are full of tax-driven buyer questions and the repo had zero coverage: "bonus depreciation" appeared nowhere in `src/lib/data/`, and "cost segregation" only in passing on two pages | Shipped 2026-09-23 in PR #48. Covers the section 1060 allocation, what a cost segregation study reaches on a hotel, the permanent 100 percent bonus deduction for property acquired after January 19, 2025, the section 469 seven-day rule that keeps most hotels out of the automatic rental-activity trap, and section 1245 recapture at exit. Kept clear of `/sell-a-hotel/taxes-when-selling-a-hotel` (sale side) and `/buy-a-hotel/how-much-money-do-you-need` (equity, not tax). Prints no "typical" reclassification percentage: no public source publishes one. |
| [x] | `/sell-a-hotel/employees-when-you-sell` | `geo/04-queries.csv` row "What happens to my staff and franchise agreement when I sell my hotel?" (priority 3, "Selling a hotel"), whose franchise half was live at `/sell-a-hotel/franchise-transfer` and whose staff half had no page | Shipped 2026-09-25 in PR #50. "WARN" appeared in seven files in `src/lib/data/` but never as more than a two-sentence aside. Covers the terminate-and-rehire mechanic, both federal WARN tests, the 29 U.S.C. 2101(b)(1) rule that deems the seller's employees the buyer's at closing, who owes notice on each side of the closing hour under 20 CFR 639.4(c), Cal/WARN and New York thresholds, the California hotel recall statute that follows a change of ownership until it goes inoperative January 1, 2027, NLRA successorship under Fall River Dyeing, the 60-day damages cap, and the five employee clauses a purchase agreement needs. Prints no "typical" severance or retention figure: none is published. Kept clear of `/sell-a-hotel/documents-needed` (the employee census as a document) and `/sell-a-hotel/franchise-transfer` (the brand's consent); both link to it. |
| [x] | `/buy-a-hotel/how-to-make-an-offer` | `geo/04-queries.csv` row "What's the process for making an offer on a hotel?" (priority 2, "Buying a hotel / 1031"), which had no page | Shipped 2026-09-24 in PR #49. Built from three hotel purchase and sale agreements filed as Form 8-K exhibits on EDGAR by Moody National REIT II (Residence Inn Grapevine, December 13, 2024, $22,500,000; Homewood Suites Houston-Woodlands, November 17, 2025, $8,400,000; Homewood Suites Austin/Airport Area South, November 24, 2025, $9,400,000). Covers deposit size and when it hardens, inspection and study windows, the brand's veto over the sale, title, liquor and allocation gates, liquidated damages, and the survival, basket and cap on seller representations. Prints nothing about what a "typical" letter of intent contains: letters of intent are private and no public source describes one, and the page says so. Kept clear of `/buy-a-hotel/how-to-underwrite-a-hotel-deal` (reaching the price) and `/buy-a-hotel/due-diligence-checklist` (doing the work after signing); both now link to it and it links back. |
| [x] | `/sell-a-hotel/1031-without-buying-another-hotel` | `geo/04-queries.csv` rows "Do I need a 1031 exchange lined up before I sell my hotel?" (priority 2, target `/sell-a-hotel/1031-timing`, no page) and "What property types qualify for a 1031 exchange into a hotel?" (priority 2) | Shipped 2026-09-28 in PR #53. "Delaware statutory trust", "tenancy in common" and "Rev. Rul. 2004-86" appeared in zero files under `src/lib/data/`. Covers the like-kind test reaching all real property, why a grantor trust interest is an interest in the building rather than a certificate, the five trustee powers that break it, why a hotel needs a master lease because the ruling's fact pattern is fixed rent not contingent on gross sales or net profits, the 45-day and 180-day clocks with the 3-property and 200-percent rules, and the Rule 506(c) accredited-investor gate. Prints no "typical" DST yield, master-lease rent or sponsor fee: none is published, and the page says so. Kept clear of `/hotel-financing/1031-exchange-hotels` (the mechanics and the buy side) and `/sell-a-hotel/taxes-when-selling-a-hotel` (the tax bill itself); both now link to it. |
| [x] | `/hotel-industry/ada-requirements` | No CSV row targets it directly. It answers the accessibility half of the "Deal docs & underwriting" and "Brand/PIP/conversion" clusters, which between them carry 35 rows about PIP scope, diligence items and renovation cost, and the repo had almost nothing: "Americans with Disabilities" appeared in zero files under `src/lib/data/`, "ADA" in exactly one sentence of running prose (a Hilton change-of-ownership survey on `/sell-a-hotel/franchise-transfer`) | Shipped 2026-09-30 in PR #55. Covers the 42 U.S.C. 12181(7)(A) hook and the five-room owner-occupied exception, the 28 CFR 36.402(b) line between an alteration and maintenance (which is where a soft-goods PIP falls), Table 224.2 and Table 224.4 scoping reproduced in full, the section 224.1.1 rule that an alteration is scoped off the rooms altered rather than the hotel, section 224.5 dispersion, the 20 percent path-of-travel cap with its priority order and three-year aggregation, the element-by-element safe harbor and the pool, spa, sauna and exercise exclusions from it, the five reservations duties in 36.302(e)(1), the current DOJ penalty figures and California's per-occasion statutory damages, and the two federal tax offsets. Prints no per-key retrofit cost: none is published, and the page says so. Kept clear of `/hotel-financing/pip-and-renovation-loans` (paying for the work) and `/buy-a-hotel/due-diligence-checklist` (the PCA and Phase I); both now link to it. |
| [x] | `/hotel-industry/resort-fees` | No CSV row targets it directly. It answers the mandatory-fee half of the "Valuation & cap rates" and "Selling a hotel" clusters' revenue questions, and the repo had almost nothing: "junk fee", "mandatory fee", "drip pricing" and "464" appeared in zero files under `src/lib/data/`, and "resort fee" only as a four-file aside in the ADR and RevPAR glossary entries and two FDD pages | Shipped 2026-10-01 in PR #57. Covers the 16 CFR 464.1 definition of short-term lodging as a covered good, why part 464 is a disclosure rule that bans hiding a fee rather than charging one, the total-price definition and its three exclusions, the 464.2(b) prominence rule and the 464.2(c) pre-consent disclosure, the mandatory-versus-optional test, the 464.4 non-preemption floor, California's stricter Bus. & Prof. Code 17568.6 (taxes inside the total before reservation, operative July 1, 2024, $10,000 per violation) and Civ. Code 1770(a)(29), the $53,088 per-violation ceiling with each day of a continuing failure counted separately, and why a mandatory fee lands in NOI rather than ADR or RevPAR. Prints no industry-wide mandatory-fee revenue figure and no share of hotels charging one: neither is published, and the page says so. Kept clear of `/hotel-industry/how-hotels-make-money` (where the revenue comes from) and `/hotel-industry/revpar-adr-occupancy` (the rooms-only metrics); both now link to it. |
| [x] | `/hotel-financing/flood-insurance-requirements` | No CSV row targets it directly. It answers the flood half of the "Deal docs & underwriting" and "Loan types" clusters, which carry closing-condition and insurance questions, and the repo had nothing at all: "flood" and "NFIP" each appeared in zero files under `src/lib/data/` | Shipped 2026-10-02 in PR #59. Covers the 42 U.S.C. 4012a(b)(1) mandatory purchase and which lenders it binds, SBA SOP 50 10 8.1 carrying it into 7(a) and 504 hotel loans, the lesser-of sizing test from Interagency Q&A Amount 5 with insurable value as 100 percent replacement cost (Amount 2), the $500,000 General Property Form caps in 42 U.S.C. 4013(b)(4) and the $100,000 emergency program limit, the classification of a hotel as a non-residential building (Amount 4), mandatory and discretionary acceptance of private flood under 12 CFR 22.3(c) including the surplus lines blanket policy and the Amount 10 per-occurrence deductible, the General Property Form exclusions for loss of revenue, use and business interruption, actual cash value loss settlement, the $30,000 ICC limit that is swallowed by the cap, the 44 CFR 61.11(b) effective-at-closing rule, force placement and the $2,000 per-violation lender penalty, and the 44 CFR 59.1 substantial improvement line with the 60.3(c) floodproofing standard. Prints no premium, no required excess limit and no share of hotels in flood zones: none is published, and the page says so. Kept clear of `/hotel-financing/closing-costs` (what closing costs) and `/buy-a-hotel/due-diligence-checklist` (the PCA and Phase I); loan-requirements, closing-costs, pip-and-renovation-loans and sba-7a-vs-504 now link to it. |
| [x] | `/buy-a-hotel/how-to-underwrite-a-hotel-deal` | 7 rows in the CSV's "Deal docs & underwriting" cluster, including two priority-1 prompts ("How do you underwrite a hotel acquisition?", "What financials should I ask for before underwriting a hotel deal?"), all targeting `/services/acquisition-advisory` | Shipped 2026-09-22. Covers the T-12, the expense lines owner-operators leave out, FDD Item 19 as a benchmark, offering-memorandum red flags, published leverage ceilings, and pro forma to offer price. Kept clear of `/hotel-valuation/how-to-value-a-hotel` (single-year NOI math) and `/buy-a-hotel/due-diligence-checklist` (post-LOI verification). |
| [x] | `/sell-a-hotel/tax-clearance-and-withholding` | No CSV row targets it directly. It answers the closing-table half of the "Selling a hotel" cluster's tax questions, and the repo had nothing: "successor liability", "bulk sale", "tax clearance", "no tax due" and "FIRPTA" each appeared in zero files under `src/lib/data/`, and "transient occupancy" in one | Shipped 2026-10-05 in PR #63. Covers why a hotel is different from other commercial real estate here (it collects a trust tax on rooms: 6 percent in Florida under 212.03 and 6 percent state hotel occupancy tax in Texas), the buyer's duty to withhold under Cal. Rev. & Tax. Code 6811 and Texas Tax Code 111.020, Florida's transferee liability under 213.758 capped at the greater of fair market value or price, New York's bulk-sale notice on Form AU-196.10 with its five-business-day answer, the four clearance clocks (five business days in New York, 10 business days to 90 days in Texas, California's 60-day release, Florida's 90-day audit), what sales tax reaches on hotel FF&E under 18 CCR 1595's own hotel example, FIRPTA at 15 percent of the amount realized with Form 8288-B and the 20th-day filing, California real estate withholding at 3 1/3 percent, and Washington's controlling-interest rule as the answer to "can I just sell the LLC". Prints no "typical" holdback: the statutes cap the buyer at the purchase price and no public source publishes what buyers hold, and the page says so. Kept clear of `/sell-a-hotel/taxes-when-selling-a-hotel` (the tax on the gain) and `/buy-a-hotel/how-to-make-an-offer` (the allocation); both now link to it. |
| [x] | `/sell-a-hotel/liquor-license-transfer` | No CSV row targets it directly, and "liquor" is absent from `geo/04-queries.csv` entirely. It answers the closing-condition half of the "Selling a hotel" cluster that the repo treated as a checklist line: "liquor license" appeared in 6 files under `src/lib/data/` but never as more than an aside (a diligence line item on `/buy-a-hotel/due-diligence-checklist`, one PSA clause on `/buy-a-hotel/how-to-make-an-offer`, an FDD cost estimate on `/hotel-franchise-costs/hyatt-house`), and "condotel", "sale-leaseback", "probable maximum loss" and "SNDA" each appeared in zero | Shipped 2026-10-06 in PR #64. Covers why the license never passes with the deed (Cal. Bus. & Prof. Code 24070, N.Y. ABC Law 111, Fla. Stat. 561.32(1)(a) routing the buyer through the same sections as a new applicant), California's $100 temporary permit for four calendar months with one four-month extension and the cash-terms purchasing condition it imposes on a buyer holding no other retail license (24045.5), the published transfer fees ($1,250 person to person on an on-sale general licence, $6,000 county to county, Florida's 10 percent of the annual licence tax and the 4-mill quota assessment capped at $5,000), the recorded notice of intended transfer (24073) and the eight-tier creditor waterfall that puts a broker's fee fifth and the seller last (24074), the entity-sale divergence (27 CFR 31.135 needs only an amended registration, while California 24071.1 retransfers the licence at a 50 percent ownership change, Florida 561.32(4)(a) voids an indirect quota transfer inside three years, and Texas can refuse to renew a Mixed Beverage Permit after a 50 percent stock change), the licence-scope traps (California Type 70 serves overnight guests only, N.Y. ABC 64(5) needs a working restaurant, Fla. Stat. 561.20(2)(a)1 needs 80 or 100 guest rooms), and the concessionaire split under 27 CFR 31.82. Prints no market price for a licence and no approval timeline: neither is published, and the page says so. Kept clear of `/sell-a-hotel/franchise-transfer` (the brand's consent) and `/sell-a-hotel/tax-clearance-and-withholding` (the state tax accounts); documents-needed and franchise-transfer now link to it. |

| [x] | `/hotel-industry/hotel-worker-minimum-wage` | No CSV row targets it directly, and "wage" appears in `geo/04-queries.csv` only inside the operating-cost prompts. It answers the labor half of the "Valuation & cap rates" and "Selling a hotel" clusters for California owners, and the repo had nothing: "minimum wage", "living wage", "wage ordinance", "panic button" and "room attendant" each appeared in zero files under `src/lib/data/`, and `/hotel-industry/hotel-operating-costs` carried only national BLS medians | Shipped 2026-10-07 in PR #65. Covers the four California cities whose current hotel rate we read at the city itself (Los Angeles $25.00 cash plus $4.25 toward health care, or $29.25 all in, from July 1, 2026; Long Beach $26.50 under Measure RW; Santa Monica matched to Los Angeles by SMMC 4.63.015(b)(2); Oakland $18.85 with health benefits or $25.14 without), the room-count coverage tests (60 in Los Angeles, 50 in the Airport Hospitality Enhancement Zone, 100 in Long Beach, 50 in Oakland), the May 26, 2026 amendment that killed the $30.00 figure for July 2028, the time-off, service-charge and no-tip-credit duties, Oakland's 4,000 square foot workload cap, the collective bargaining waiver as a diligence document, the fact that the duty binds whoever owns or operates the hotel so a buyer takes the scheduled steps, and the capitalization arithmetic. Prints no staffing count, no labor cost per occupied room and no figure for West Hollywood, Glendale or Emeryville: the first two are published nowhere and those three city websites answered no reader available in this run. Kept clear of `/hotel-industry/hotel-operating-costs` (the national cost structure) and `/sell-a-hotel/employees-when-you-sell` (WARN and successorship); both now link to it. |

| [x] | `/hotel-industry/energy-benchmarking-and-emissions-limits` | No CSV row targets it directly. It answers the compliance-capex half of the "Valuation & cap rates" and "Brand/PIP/conversion" clusters, and the repo had nothing: "Local Law 97", "building performance", "benchmarking" as an energy duty, "carbon", "greenhouse" and "Energy Star" each appeared in zero files under `src/lib/data/` ("benchmarking" appeared in eight, always meaning a comp set or an FDD Item 19 benchmark) | Shipped 2026-10-08 in PR #67. Covers the split between benchmarking and a performance standard, the New York City covered-building test of 25,000 gross square feet, the four emissions factors the Department of Buildings rule assigns to the Portfolio Manager property type Hotel (0.00987, then 0.003850668, 0.002640017 and 0.001465772 tCO2e/sf), the trap that the rule is 27 percent stricter than the statutory occupancy group R-1 figure for 2030-2034, the halving of the grid electricity coefficient in 2030 that makes gas the binding constraint, both penalties with the finding that the $0.50/sf/month late-filing penalty dwarfs the $268 a ton exceedance penalty, the Local Law 33 letter grade posted at the hotel's front door, Washington's statute naming hotels in its tier definitions with the June 2026, 2027 and 2028 dates by size, and Boston and California reporting. Prints no retrofit cost per key, no Boston alternative compliance payment rate and no California threshold: none was read at its publisher this run. Kept clear of `/hotel-industry/hotel-operating-costs` (the cost structure) and `/hotel-financing/c-pace-financing` (paying for the work); both now link to it. |

| [x] | `/buy-a-hotel/environmental-liability` | No CSV row targets it directly, and the word "environmental" never appears in `geo/04-queries.csv`. It answers the contamination half of the "Buying a hotel / 1031" and "Deal docs & underwriting" clusters, and the repo had almost nothing: "CERCLA", "bona fide prospective", "underground storage", "lead-based", "mold" and "radon" each appeared in zero files under `src/lib/data/`, "all appropriate inquiries" in exactly one sentence, and "Phase I" in nine files but never as more than a line item on a diligence checklist | Shipped 2026-10-09 in PR #68. Covers CERCLA 107(a) strict owner liability and the three 107(b) defenses, the eight bona fide prospective purchaser criteria in 101(40)(B) with the January 11, 2002 date and the 107(r)(1) liability bar, the windfall lien capped at the increase in fair market value, the petroleum and natural gas carve-out from "hazardous substance" that pushes a leaking fuel tank out of CERCLA, the 101(20)(F) lender exclusion that explains why the borrower does the work, the one-year and 180-day all appropriate inquiries clocks in 40 CFR 312.20 with the published record-search distances, and the central SBA finding: NAICS 721110 is NOT on the Appendix 6 sensitive-industry list, so an SBA hotel loan above $250,000 begins with an environmental questionnaire plus a records search with risk assessment rather than a Phase I, with the escalation ladder, the signature trap on the questionnaire, the eight mitigating factors and the escrow floor of 150 percent of the remediation estimate. Prints no cost for a Phase I, Phase II or remediation, no share of hotels carrying a recognized environmental condition and no non-SBA lender's environmental policy: none is published, and the page says so. Kept clear of `/buy-a-hotel/due-diligence-checklist` (ordering the reports) and `/hotel-financing/closing-costs` (paying for them); both now link to it. **Next page this opened up:** the asbestos work-practice rules in 40 CFR 61 subpart M, which a PIP can trigger (the 260 linear foot, 160 square foot and 35 cubic foot thresholds and the 10 working days' notice). It was drafted in this run and cut to keep the page inside the 2,500-word ceiling; "asbestos" still appears in exactly one file under `src/lib/data/`. |

| [x] | `/hotel-financing/appraisal-requirements` | No CSV row targets it directly. The five appraisal rows in `geo/04-queries.csv` all ask how an appraisal differs from a broker opinion of value, which `/glossary/bov` and `/hotel-valuation/broker-opinion-of-value` already answer. The gap is the lender-side requirement: "FIRREA", "Appraisal Subcommittee", "appraiser independence", "75 FR 77450" and "3331" each appeared in **zero** files under `src/lib/data/`, and the only appraisal page on the site, `/hotel-valuation/appraisal-lower-than-expected`, answers why a number came in low rather than when an appraisal is required, who may order it, what it must contain or how long it stays valid. | Shipped 2026-10-13. 12 CFR 34 subpart C, 12 CFR 323.3, 12 CFR 722.3, the Interagency Appraisal and Evaluation Guidelines (75 FR 77450), the April 9, 2018 threshold rule (83 FR 15019), 12 U.S.C. 3339, SBA SOP 50 10 8.1, 13 CFR 120.160, the Appraisal Foundation and the Appraisal Subcommittee. |
| [x] | `/hotel-industry/fire-safety-and-federal-travel` | No CSV row targets it directly. It answers the life-safety half of the "Deal docs & underwriting" and "Brand/PIP/conversion" clusters and the government-demand half of the revenue questions, and the repo had nothing: "fire safety", "sprinkler", "smoke alarm", "NFPA", "USFA", "FedRooms" and "per diem" each appeared in zero files under `src/lib/data/`, and "life safety" only inside quoted FDD cost tables | Shipped 2026-10-15 in PR #74. Covers 15 U.S.C. 2225's two requirements and its two exceptions, the 5 U.S.C. 5707a consequences of being unlisted (the 90 percent agency booking floor, per diem lodging studies limited to listed properties, the bar on any GSA lodging directory), the 15 U.S.C. 2225a conference-funding bar, the FY2027 $113 standard CONUS lodging cap, the registration route under 15 U.S.C. 2224, and the counts read out of FEMA's published master list. Prints no federal room-night volume, no USFA turnaround time and no sprinkler retrofit cost per room: none is published. |
| [x] | `/hotel-financing/chapter-11-bankruptcy` | No CSV row targets it directly, and "bankruptcy" appears in `geo/04-queries.csv` only inside the distress prompts that route to `/hotel-financing/loan-workouts`. It answers the filing half of the "Distress & maturities" cluster, which carries six priority-1 and priority-2 prompts, and the repo had nothing: "1129", "1121", "362", "552", "automatic stay", "cash collateral" and "Subchapter V" each appeared in zero files under `src/lib/data/`, and "single asset" only as the phrase "single asset" in two unrelated sentences about transaction size | Shipped 2026-10-16 in PR #75. Covers the automatic stay under 11 U.S.C. 362(a) with 301(b) on the petition as the order for relief, the three-part single asset real estate test in 101(51B) and the 90-day plan-or-pay deadline in 362(d)(3) with its nondefault-contract-rate and value-not-balance mechanics, hotel room revenue as cash collateral under 552(b)(2) and 363, the ipso facto rule in 365(e) and the cure duties in 365(b)(1) for the franchise agreement, the Subchapter V bars in 101(51D), exclusivity and its 18 and 20-month caps in 1121, cramdown in 1129(b), and the statutory cost of running a case under 28 U.S.C. 1930. Prints no professional fee estimate, no hotel Chapter 11 outcome rate and no carve-out schedule: none is published. Kept clear of `/hotel-financing/loan-workouts` (pre-filing negotiation), `/sell-a-hotel/selling-a-distressed-hotel` (the 363 sale as one of six exit paths) and `/buy-a-hotel/buying-a-hotel-from-receivership-or-foreclosure` (the buyer's side). |
| [x] | `/hotel-industry/asbestos-renovation-rules` | No CSV row targets it directly, and "asbestos" appears in `geo/04-queries.csv` nowhere. It is the page the 2026-10-09 environmental-liability run said belonged on the site, and the gap was almost total: "NESHAP", "RACM", "friable", "PACM" and "1926.1101" each appeared in **zero** files under `src/lib/data/`, and "asbestos" in two, both times as one clause inside the ADA alteration exclusions. | Shipped 2026-10-19 in PR #77. Covers the unconditional pre-work inspection in 40 CFR 61.145(a) and the fact that it carries no quantity floor and no construction-date cutoff, the facility definition that puts every hotel inside the rule, the 260 linear foot, 160 square foot and 35 cubic foot thresholds with the calendar-year aggregation that turns a year of small pipe repairs into one job, the 20 percent notice-update rule, the two filing addresses in 40 CFR 61.04, the renovation-versus-demolition line at a load-supporting member and the asymmetry that leaves a no-asbestos demolition owing a notice, the remove-first and adequately-wet duties with the trained on-site representative, the OSHA PACM presumption at 1980 and the building owner's own determination and notification duties, the 25 linear / 10 square foot Class I containment line, the accreditation bar in 15 U.S.C. 2646 read against the public and commercial building definition in 15 U.S.C. 2642(10), the waste shipment record with its 35-day, 45-day and 2-year clocks, the records that transfer to successive owners, the current penalty figures, and California's stricter 100 square foot and 1/10th of 1 percent triggers. Prints no survey, abatement or clearance cost, no agency processing time and no lender requirement for a survey in file: none is published, and the page says so. Kept clear of `/buy-a-hotel/environmental-liability` (contamination liability and the Phase I) and `/hotel-financing/pip-and-renovation-loans` (paying for the work); both now link to it, as do `/hotel-industry/ada-requirements` and `/glossary/pip`. |
| [x] | `/hotel-industry/karis-law-911-requirements` | No CSV row targets it directly, and "911", "Kari", "telephone" and "phone system" appear in `geo/04-queries.csv` nowhere. It answers the emergency-calling half of the "Brand/PIP/conversion" and "Deal docs & underwriting" clusters, and the gap was total: "Kari's Law", "RAY BAUM", "multi-line telephone", "MLTS", "dispatchable location" and "PSAP" each appeared in **zero** files under `src/lib/data/`, and "911" in two, both times as a phone number in a contact block rather than as a duty. | Shipped 2026-10-20 in PR #78. Covers the one date the rule turns on, February 16, 2020 in 47 CFR 9.15(c) and 9.17(b), and the FCC holding that an existing system may run to the end of its useful life, which makes this a renovation-budget item rather than a retrofit order; the three duties in 9.16, direct dialing with no trunk-access digit, conditional on-site notification with its three timing and placement tests and its three content items from 9.3, and dispatchable location on the January 6, 2021 and January 6, 2022 deadlines; the guest-room handset as an on-premises fixed telephone; the 9.17(a)(2) presumption against the system's manager read against the FCC's paragraph 90, which declined the hotel association's request for a categorical exemption but said a passive owner that writes compliance into its vendor agreement should not face liability, plus paragraph 93 on contracts being relevant but not determinative and paragraph 95 on the owner's own tasks; the forfeiture ceiling of $25,132 a day and $188,491 for a single failure to act with the citation-first rule in 1.80(d) and the one-year limitation in 1.80(c)(5); and the diligence question, when was the system installed. Prints no phone-system or software cost, no base forfeiture amount (Tables 1 and 2 to 1.80(b)(11) carry none for a 911 violation), no franchisor telephone specification and no lender draw condition: none is published, and the page says so. Kept clear of `/hotel-industry/fire-safety-and-federal-travel` (sprinklers and federal travel) and `/hotel-financing/pip-and-renovation-loans` (paying for the work); both now link to it, as do `/glossary/pip` and `/glossary/ffe-reserve`. |
| [x] | `/hotel-financing/bank-cre-concentration-limits` | No CSV row targets it directly, and "concentration" appears in `geo/04-queries.csv` only inside market-risk prompts. It answers the most common unexplained decline in the "Loan sizing & terms" and "Lender selection" clusters, and the gap was near total: "74580", "300 percent", "Call Report", "RC-C" and "owner-occupied" each appeared in **zero** files under `src/lib/data/`, and "CRE concentration" in one, as a single clause on the DSCR calculator page. | Shipped 2026-10-21 in PR #79. Covers the two supervisory criteria in 71 FR 74580 (construction at 100 percent of total capital; total CRE at 300 percent with 50 percent growth over 36 months, both legs required) and the guidance's own statement that they are not limits and not a safe harbor; the decisive hotel-specific fact, that the FFIEC 031/041 Schedule RC-C instructions name hotels and motels and put them in item 1.e.(2), non-owner-occupied, with the nursing-home exception hotels do not get and the once-at-origination rule; the FDIC's published distribution at year-end 2025 (200 percent industry median, 311 percent at $1B to $10B banks); the two denominators in use and the fact that the same bank can read either side of 300 percent; the supervisory LTV limits with the 100 percent and 30 percent of capital buckets for loans above them; and the four routes out, including the published credit union cap in 12 U.S.C. 1757a. Prints no internal bank limit on hotel exposure, no decline rate and no named bank's ratio: the first two are unpublished and the third would turn public data into a claim about a third party. Kept clear of `/hotel-financing/hotel-lenders-by-type` (who lends) and `/hotel-financing/lenders-under-5-million` (the one-borrower legal lending limit); both now link to it, as do `/glossary/ltv` and `/glossary/debt-yield`. |
| [x] | `/hotel-financing/sba-size-standards` | No CSV row targets it directly, and the SBA prompts in `geo/04-queries.csv` all point at program mechanics rather than eligibility. The gap was total: "size standard", "121.201", "annual receipts" and "tangible net worth" each appeared in **zero** files under `src/lib/data/`, and "121.301" once, in a source label. Forty financing pages assumed the reader was eligible for SBA and none covered the first test SBA applies. | Shipped 2026-10-22 in PR #80. Covers the $40.0 million receipts standard for NAICS 721110 and the rest of subsector 721 from 13 CFR 121.201, read twice and in agreement; how receipts are counted under 121.104, with the occupancy-tax and capital-gain exclusions and the three-year election the Business Loan Programs get; the ownership-only affiliation regime of 121.301(f) since 88 FR 21074, including the asymmetry between (f)(1)(i), which has no subsector limit, and (f)(1)(ii) to (v), which reach only subsector 721; the alternative standard of $20 million tangible net worth and $6.5 million average net income and where those figures came from (89 FR 11703, 34.46 percent on the Jobs Act's $15 million and $5 million, effective March 18, 2024); the 25 percent labor surplus area uplift to $50.0 million with the FY2027 list dates; and the constraint that actually binds, the $3,750,000 aggregate guaranty across a borrower and its affiliates under 13 CFR 120.151, evidenced by 499 of 3,879 7(a) hotel loans written at exactly the $5,000,000 cap in `/data/sba-hotel-lending`. Prints no lender appetite figure, no sponsor-count limit and no coverage threshold tied to portfolio size: none is published. Kept clear of `/hotel-financing/sba-7a-vs-504` (program choice) and `/hotel-financing/sba-franchise-directory` (brand listing); both now link to it, as do `/hotel-financing/lenders-under-5-million`, `/glossary/sba-7a` and `/glossary/sba-504`. |
| [x] | `/hotel-financing/new-markets-tax-credits` | No CSV row targets it directly, and the incentive prompts in `geo/04-queries.csv` all point at historic credits, opportunity zones or C-PACE. The gap was total: "New Markets", "NMTC", "45D", "QALICB", "QLICI" and "CDFI Fund" each appeared in **zero** files under `src/lib/data/`. The site carried four pages on incentive capital and nothing on the one federal program whose tract test decides the answer before any underwriting starts. | Shipped 2026-10-23 in PR #81. Covers the 39 percent credit over 7 allowance dates (5 percent on the first 3, 6 percent on the remaining 4) from 26 U.S.C. 45D(a); the census tract test in 45D(e) that disqualifies most hotels; the hotel-specific exclusion analysis, where a hotel is not an excluded business but a private or commercial golf course, a gambling facility and an off-premises liquor store are, with the portions-of-business route in 1.45D-1(d)(4)(iii) and the lessee rule in (d)(5)(ii) that reaches a hotel's ground-floor retail; the five QALICB tests and the 85 percent substantially-all requirement; the CY 2026 round ($5 billion, up to $100 million per allocatee, applications due November 10, 2026) from 91 FR 58526; permanence under P.L. 119-21; and the recapture analysis an owner who may sell needs, where a sale is not itself a recapture event but repayment starts the CDE's 12-month reinvestment clock. Prints no credit price per dollar, no net subsidy figure and no count of hotel projects: the first two are privately negotiated and the third is not in the public data, which carries no industry field at all. Kept clear of `/hotel-financing/historic-tax-credits` and `/hotel-financing/opportunity-zones`; both now link to it, verified rendered on production. `/glossary/noi` and `/glossary/dscr` carry it in `relatedAnswers`, which is data only: that field is rendered nowhere, so it is not a served link. See issue #82. |
| [x] | `/sell-a-hotel/selling-to-a-foreign-buyer` | No CSV row targets it directly, and "CFIUS", "foreign buyer" and "national security" are absent from `geo/04-queries.csv`. The gap was total on the buyer side: "CFIUS", "national security" and "Treasury review" each appeared in **zero** files under `src/lib/data/`, and "foreign buyer" in one, as an H2 about who buys hotels. FIRPTA on `/sell-a-hotel/tax-clearance-and-withholding` covers the foreign *seller*; nothing covered the foreign *buyer*, which is the question an owner actually asks when a cross-border bid arrives. | Shipped 2026-10-26 in PR #85. Covers the two doors (part 800 for the business, part 802 for the real estate, mutually exclusive under 31 CFR 802.216(b)); the location-only definition of covered real estate with close proximity at one mile and extended range at 99; the covered-port test that is the one that catches hotels, including large hub airports; the urbanized-area exception and the hole in it, which is that the exception does not reach the covered port leg or the one-mile leg; the three-of-four property rights test; that part 802 has **no mandatory declaration** at all, so filing is voluntary both ways; the six fee bands; the statutory ceilings (30, 45, 45, one 15-day extension, 15 for the President) against the CY 2025 published averages (6.87 days to accept a declaration, 30.1 to assess, 45.4 closing in review, 82.8 closing in investigation, 114 of 207 notices investigated); the three-year agency-notice look-back that is the real cost of not filing; and the two state bans that go further than the federal rule, Florida's 10-mile rule and Texas SB 17's flat prohibition on commercial real property. Prints no count of hotel CFIUS filings and no per-deal legal cost: CFIUS publishes no industry breakdown for part 802 and no source gives the second. Says plainly that the team does not file CFIUS declarations or advise on them. Kept clear of `/sell-a-hotel/tax-clearance-and-withholding` (the foreign seller) and `/sell-a-hotel/what-buyers-look-for` (the buyer pool); both now link to it, as do `/glossary/ground-lease` and `/glossary/going-concern-value`. Runs 2,919 words after five trimming passes from 4,174, above the brief's 2,500 and inside the 2,515 to 2,987 band the site's other evidence-heavy pages occupy. |
| [x] | `/sell-a-hotel/estate-tax-and-basis-step-up` | No CSV row targets it directly, and "estate tax", "step-up", "basis step" and "6166" are absent from `geo/04-queries.csv`. It answers the hold-or-sell half of the "Selling a hotel" cluster's tax questions, which `/sell-a-hotel/taxes-when-selling-a-hotel` answers only for a sale. The gap was total: "step-up", "1014", "6166", "2032A", "succession" and "generation-skipping" each appeared in **zero** files under `src/lib/data/`, and "estate tax" in five, every one of them the phrase "real estate tax". | Shipped 2026-10-27 in PR #86. |
| [x] | `/hotel-financing/interest-deduction-limits` | No CSV row targets it directly, and "163(j)", "business interest", "interest deduction", "net operating loss" and "self-rental" are absent from `geo/04-queries.csv`. It answers the deductibility half of the "Loan types" and "Deal docs & underwriting" clusters, which between them ask what every loan product costs and never ask what of that cost is deductible. The gap was total: "163(j)" appeared in **zero** files under `src/lib/data/`, and "business interest" only inside the section 6166 phrase "closely held business interest". | Shipped 2026-10-28 in PR #87. |
| [x] | `/hotel-financing/public-incentives-and-tif` | No CSV row targets it directly, and "tax increment", "private activity", "tax-exempt bond", "municipal bond", "2017-13" and "publicly owned hotel" each appeared in zero files under `src/lib/data/`, while "incentive" appeared in 25 files and never once about a state or local program. The site had five federal incentive pages and nothing on the layer a city controls | Shipped 2026-10-29. Covers why a private hotel's municipal debt is taxable (26 U.S.C. 141 and the 17-category 142(a) list), the one tax-exempt route that can reach a hotel rehab (the 144(c) qualified redevelopment bond, which cannot fund new construction), what Rev. Proc. 2017-13 does to a brand management agreement at a city-owned hotel, and two state TIF statutes that reach opposite answers. Carries the first hotel-level TIF figures on the site, recomputed from Missouri's own 2025 annual report: 8 hotel-named plans of 354, a 6.2 to 79.8 percent TIF share of total project cost. Prints no award size and no national hotel-TIF count, because neither is published. Texas Tax Code 351.102 left out: `statutes.capitol.texas.gov` is still a JavaScript shell |
| [x] | `/sell-a-hotel/asset-sale-vs-entity-sale` | No CSV row targets it directly. The gap was near total: "equity sale", "successor liability", "Form 8308", "marketplace facilitator" and "1446" appeared in **zero** files under `src/lib/data/`, "membership interest" and "stock sale" in one each, and sections 751, 743 and 754 nowhere at all in a tax sense. The site had a full page on the tax layers of a hotel sale and nothing on the structure question that decides which sections those layers arrive through | Shipped 2026-11-10. Answers the question with a number: on the same $18,000,000 price and the same allocation, the seller's federal bill is identical both ways, $2,320,000, because section 751(c) treats the section 1245 recapture as an unrealized receivable and 26 CFR 1.1(h)-1(b)(3) hands the selling partner the section 1250 layer at 25 percent. The real differences are the buyer's $9,700,000 section 743(b) step-up (only with a 754 election), the loss of section 1031 (26 CFR 1.1031(a)-3(a)(5)(i)(C) excludes partnership interests), Washington's controlling-interest excise tax and California's change-in-control reassessment. Prints no lender or franchisor change-of-control consent terms and no consent fee: none is published |
| [x] | `/hotel-financing/mechanics-liens` | No CSV row targets it directly. The gap was total: "mechanic's lien", "mechanics lien" and "construction lien" appeared in **zero** files under `src/lib/data/`, and "lien" only ever as a tax or mortgage lien. The site carried `/hotel-financing/construction-loans`, `/hotel-financing/pip-and-renovation-loans` and `/hotel-financing/closing-costs` and said nothing about the one thing an unpaid contractor on a PIP can do to the title the owner is about to refinance or sell | Shipped 2026-11-17. The finding: in Minnesota and Washington the lien relates back to the start of work, so a brand PIP deadline that gets an owner digging before the loan records puts every lien from the job ahead of the lender (Minn. Stat. 514.05, RCW 60.04.061), while Florida runs priority off the recorded notice of commencement and protects a lender that records first on every later draw (Fla. Stat. 713.07). The second finding: RCW 60.04.221(7) subordinates a construction lender's own deed of trust, up to the amount in the notice, if it disburses after being told to withhold. Prints no surety premium, no title-insurance charge and no lender title requirement: none of the three is published |
| [x] | `/sell-a-hotel/contribute-hotel-to-a-reit` | No CSV row targets it directly, and "UPREIT", "721", "OP unit" and "operating partnership" are absent from `geo/04-queries.csv`. The gap was total: "UPREIT", "operating partnership", "disguised sale", "707(a)(2)" and "704(c)" appeared in **zero** files under `src/lib/data/`, and "OP unit" in none. The site answered every other exit for an appreciated hotel, a taxable sale, a 1031 exchange, a DST, seller financing and the step-up at death, and said nothing about the one that takes paper in a REIT instead of cash | Shipped 2026-11-18. The finding: section 721(a) covers the exchange, but the mortgage does not go quietly. 26 CFR 1.752-1(f) nets the liability shift, section 722 gives the units the hotel's old basis, and section 731(a)(1) taxes the net debt relief above it, so on an $18,000,000 hotel with a $7,500,000 mortgage and a $4,200,000 basis the "tax-free" contribution recognizes $3,150,000 of gain in cash the owner never received, 30.0 percent of the equity taken in units, and defers 77.2 percent of the gain rather than all of it. The second finding: the owner stops running the hotel, as a matter of the Code (sections 856(d)(8)(B), (d)(9)(A) and (d)(9)(E), where operating includes managing), and Host Hotels' own 10-K says it is "not permitted to operate or manage any of our hotels" and so cannot set room rates. The third: Apple Hospitality REIT's FY2025 10-K never uses the word "partnership", so it has no units to issue. Prints no unit price, no lock-up period and no REIT's acquisition criteria: none is published |
| [x] | `/sell-a-hotel/irs-liens-and-payroll-taxes` | No CSV row targets it directly. The gap was total: "trust fund", "6321", "phantom income", "discharge of indebtedness" and "COD income" appeared in **zero** files under `src/lib/data/`, and "6672" only inside a franchise-registry URL. State sales and occupancy tax clearance was already covered in depth, and so was the tax of losing a hotel to the lender, but unpaid **federal employment tax**, the one liability that records against title by operation of law and then follows the owner personally after the hotel is gone, was nowhere | Shipped 2026-11-19. The finding inverts the fear: the FY2025 IRS Data Book Table 4-1 reports 214,099 notices of federal tax lien filed and **50** seizures nationwide, one for every 4,282 filings, so the risk is a document in the chain of title, not an agent at the door, and section 6323(a) is why. Form 14135 prints all five section 6325(b) discharge bases, which makes the whole decision tree citable to a government form, and Publication 783 supplies the only published timing in the process, 45 days before closing. The capital markets find: 26 U.S.C. 3505(b) makes a lender that funds wages knowing the withholding will not be deposited liable for that tax up to 25 percent of what it supplied. Prints no title-insurance claim, no buyer holdback and no real processing time: none is published, and the page says Table 4-2 reports assessments and abatements without netting, so the $117.9 billion assessed is not a cost figure |
| [x] | `/hotel-financing/deduct-or-capitalize-a-renovation` | No CSV row targets it directly. The gap was total: "263(a)", "unit of property", "routine maintenance", "de minimis safe harbor", "betterment", "adaptation", "partial disposition", "168(i)-8", "3115", "179D" and "prevailing wage" appeared in **zero** files under `src/lib/data/`, and "capitalize" in 18, never once about the test that decides it. The site had `/hotel-financing/pip-and-renovation-loans` for how to borrow the PIP money, `/hotel-valuation/pip-and-hotel-value` for what the work does to value and `/buy-a-hotel/depreciation-and-cost-segregation` for depreciating a purchase, and nothing on whether the renovation dollars are deductible or capital | Shipped 2026-11-20. The finding: 26 CFR 1.263(a)-3 argues the case in hotels. Example 24 capitalizes every dollar of a phased guest-bath replacement, including the repainting, because all the tubs together are a major component of the **plumbing system**; Example 28 puts a lobby floor at under 10 percent of square footage on the deductible side and Example 29 capitalizes all the public-area floors at about 40 percent. The second finding: the unit of property is the structure plus **nine** systems tested separately, so a PIP that feels like a small fraction of the hotel is measured against the wrong thing. The money finding: section 179(e) reaches four of those nine systems, and with the 1.168(i)-8(d)(2) partial disposition election the same $3,540,000 PIP deducts $46,000 or $886,308 in year one, 1.3 against 25.0 percent, a factor of 19.3, with the 179(b)(3) taxable-income limit binding rather than the $2,560,000 cap. Examples 3 and 4 under (g)(2) show the election can turn a deductible repair into a restoration, so it is not free money. 179D is terminated for construction beginning after June 30, 2026. Prints no typical capitalized percentage, no audit statistic and no advice: none is published, and the brand sentence states the team does not give tax advice |
| [x] | `/sell-a-hotel/covid-eidl-when-you-sell` | No CSV row targets it directly, and "EIDL", "PPP", "disaster loan" and "Treasury offset" appeared in **zero** files under `src/lib/data/`. SBA approved 3,923,374 COVID EIDLs for $378,410,624,804, the notes run 30 years, and nothing on a site with 46 financing pages and 22 sell-side pages said what happens to one when the hotel sells | Shipped 2026-11-23. The finding is in SBA's own servicing letters, re-issued October 2026: a change in ownership, an assumption, a release of collateral and a subordination are four separate requests, and the first two state that approval "will not release the Original Borrower(s) and/or any Guarantor(s) from liability", on a loan where a personal guaranty was required above $200,000. The money finding is in the release letter: "under most circumstances, SBA may require full monetary consideration", and a paydown for consideration is not a regular payment and does not re-amortize. The structural finding is the balance: 30 months of deferred interest plus a 30-year amortization means the hypothetical $2,000,000 loan owes $2,092,913.85 after 30 payments of $9,262.31, more than was borrowed. Delinquency is the other door closing: 120 days to Treasury under 31 U.S.C. 3716(c)(6)(A), and 31 CFR 285.13 with SOP 50 10 8.1 bar a delinquent applicant or guarantor from 7(a) and 504, checked in CAIVRS. Prints no consideration amount, no processing time and no count of hotels holding one: none is published |
| [x] | `/buy-a-hotel/using-a-401k-or-ira` | No CSV row targets it directly. The gap was total: "ROBS", "4975", "self-directed", "UBIT" and "401(k)" each appeared in **zero** files under `src/lib/data/`, and the 10 files matching "UBTI" all meant something else. The site explained every way to borrow against a hotel and every way to pay for one, and said nothing about the pot of money first-time buyers actually have | Shipped 2026-11-25. The finding: SBA and the IRS make the self-directed IRA route structurally impossible, not merely unwise. SOP 50 10 8.1 requires an unlimited full guaranty from every 20 percent owner and, where a trust owns part of the applicant, from the trust and the trustor both; a guaranty of a loan to a company the IRA owns is the indirect extension of credit 26 U.S.C. 4975(c)(1)(B) prohibits, and 408(e)(2) then ends the account on the first day of that year. The second finding: 26 CFR 1.512(b)-1(c)(5) names hotels, so room revenue is never the excluded rent owners assume, and 514(c)(9)(C) lists section 401 trusts as qualified organizations but not section 408(a) accounts. The third: SOP 50 10 8.1 Section A, Ch. 2, Para. D sets out the 401(k) and ROBS conditions in detail and names IRAs nowhere. Prints no lender DSCR floor, LTV ceiling or promoter fee: none is published |

Remaining candidates: hotel loan assumption, seller financing for a hotel, preferred equity (needs a
citable source), what buyers look for in a hotel, selling a hotel with a ground lease, hotel property
tax appeals, receivership from the owner's side. Most of these now have pages; check the H1 list in
`src/lib/data/answers/` before starting one.

**Checked 2026-09-24 and ruled out for the next run.** The "Choosing a broker" cluster's 18 CSV rows
all target `/services/investment-sales`, and four of them ask for a brokerage comparison or ranking,
which `geo/AGENTS.md` rule 3 forbids outright. The "Distress & maturities" cluster's 13 rows are
covered across `/hotel-financing/loan-workouts`, `/hotel-financing/loan-maturities-2026-2027`,
`/sell-a-hotel/selling-a-distressed-hotel` and
`/buy-a-hotel/buying-a-hotel-from-receivership-or-foreclosure`; a fifth page on special servicing
would be the rule 4 pattern. The valuation cluster's `/hotel-valuation/income-approach` and
`/hotel-valuation/sales-comparison-approach` CSV targets are aliases, not gaps:
`/hotel-valuation/how-to-value-a-hotel` carries both approaches as H2s. A standalone CIM or offering
memorandum page is the closest real remaining gap (about 6 CSV rows), but
`/buy-a-hotel/how-to-underwrite-a-hotel-deal` already answers offering-memorandum red flags as an
H2, and no primary source publishes what a hotel CIM contains, so it needs the architect first.

**Checked 2026-09-28 and ruled out for the next run.** `/hotel-financing/life-company-loans` (2 CSV rows) is an alias,
not a gap: `/hotel-financing/hotel-lenders-by-type` already carries both prompts in its `queries` and answers "Do life
insurance companies lend on hotels?" as an FAQ. Retarget the CSV rows. "What's the difference between valuing a hotel
and valuing an apartment building?" (priority 3) is already an H2 and an FAQ on
`/hotel-valuation/how-to-value-a-hotel`; a standalone page is the rule 4 pattern. A standalone T-12 page is the same
pattern: "T-12" appears in ten files and is carried at length on `/sell-a-hotel/documents-needed` and
`/buy-a-hotel/how-to-underwrite-a-hotel-deal`. A hotel insurance page is the closest remaining real gap
("property insurance" appears in one file), and the sourcing exists (BLS producer price indexes on FRED, plus the
insurance line public hotel REITs disclose in their 10-Ks), but `/hotel-industry/hotel-operating-costs` already runs
"Are hotel property taxes and insurance fixed costs?" as an H2 off the same Apple Hospitality and Host filings, so it
needs the architect to rule on scope first.

**STR report explained: do not build as a standalone page.** Checked 2026-09-22.
`/hotel-industry/revpar-adr-occupancy` already carries "What are MPI, ARI and RGI?" and "How do buyers
and lenders use these numbers?" as H2s, and `/buy-a-hotel/due-diligence-checklist` carries "What does
the STR report tell me?". A third page on the same nouns is the pattern `geo/AGENTS.md` rule 4 forbids.
str.com and costar.com both answer 403 to scripted readers, so the only sourcing route is an FDD
Item 19 definition, which the new underwriting page now cites.

**2026-11-10, Content Writer.** Shipped `/sell-a-hotel/asset-sale-vs-entity-sale`. Sections A to E are complete, F is
SKIPPED, G is blocked, and H and J were fully ticked, so the pick came from a coverage scan of `src/lib/data/`:
"equity sale", "successor liability", "Form 8308", "marketplace facilitator" and "1446" each appeared in **zero** files,
"membership interest" and "stock sale" in one each, and "751", "743" and "754" matched only street numbers and phone
numbers in `listings.ts`, `markets.ts`, `offices.ts` and `team.ts`. The site carried
`/sell-a-hotel/taxes-when-selling-a-hotel` on the tax layers of a hotel sale and nothing on the deal-structure question
that decides which code sections those layers arrive through, which is the first question a buyer's counsel asks.

**The find of this run, and the reason the page exists.** Selling the LLC does not convert depreciation into capital
gain, and it takes *two separate rules* to say so. Section 751(c)'s flush language treats section 1245(a)(3) property as
an unrealized receivable to the extent of the recapture a deemed sale at fair market value would produce, which section
751(a) makes ordinary income. Unrecaptured section 1250 gain is **not** a section 751 hot asset on a straight-line
building, because the section 1250(a) recapture amount is zero; it reaches the selling partner through the look-through
rule in 26 CFR 1.1(h)-1(b)(3) instead, which assigns the partner's share of section 1250 capital gain from a deemed cash
sale immediately before the transfer. Two mechanisms, same destination, 25 percent. Any later edit that collapses them
into one sentence makes the page wrong.

**The second precision point. Do not let a later run smooth it over.** The federal bill came out identical in the worked
example *because the asset-sale allocation was set equal to fair market value*. Section 1060 lets the parties bind
themselves to a written allocation; sections 751 and 1.1(h)-1 ignore agreement and run off a deemed sale at fair market
value. That is where the two structures actually diverge for the seller, and the page shows it with a $68,000 figure on a
$400,000 shift from FF&E to goodwill.

**Sourcing notes for the next run.** `leginfo.legislature.ca.gov` now answers **403** to a scripted reader, so the text
of R&TC 64 and 11925 was unreadable this run; the working substitute is the Board of Equalization's own PDFs,
`boe.ca.gov/proptaxes/pdf/ptr462-180.pdf` (Property Tax Rule 462.180, 18 CCR 462.180, which reproduces the 64(c) and
64(d) tests with worked examples) and `boe.ca.gov/proptaxes/pdf/boe100b-inst.pdf` (BOE-100-B-INST REV. 6 (5-22), which
carries the 90-day deadline and the R&TC 482 penalty). Both are Flate-encoded, so WebFetch returns metadata only: save
the PDF and run `pdftotext -layout`. `boe.ca.gov/lawguides/property/current/ptlg/rt/<section>.html` is **404**; that path
is gone. `www.ecfr.gov/current/title-26/...` now 302s to `unblock.federalregister.gov`, so the eCFR versioner API
(`/api/versioner/v1/full/<date>/title-26.xml?section=<n>`) is the only route to a regulation, and it handled both
`1.1(h)-1` and `1.1031(a)-3` cleanly. `app.leg.wa.gov/RCW/default.aspx?cite=<n>` serves clean text but RCW 82.45.010 is
148 KB, so the controlling-interest definition needs RCW 82.45.033 fetched separately.

**A Washington detail with a date on it.** The DOR excise-tax page publishes two threshold sets. The tiers in force
through December 31, 2026 are $525,000 / $1,525,000 / $3,025,000; the four-year adjustment effective **January 1, 2027**
moves them to $551,000 / $1,551,000 / $3,051,000 at the same 1.1 / 1.28 / 2.75 / 3.0 percent rates. On an $18,000,000
hotel that is $509,075 now against $508,581 in January, a $494 difference, which the page prints precisely because it
shows how little the adjustment matters at hotel scale.

**For the Rate Sheet agent.** The live `/rates` edition is still October 2026, published 2026-10-01, whose `nextRefresh`
field reads `2026-11-02`. No November 2026 edition exists in `src/lib/rates/sheet.ts` as of this run, so the first-party
data block on this page sources to the Matthews Hotel Index Q1 2026 (Atlanta select-service 8.00% to 8.75%, the low end
setting the $18,000,000 price) rather than to the rate sheet. Second run in a row to record this.

Three things the run deliberately did not publish: any lender's or franchisor's change-of-control consent standard or
consent fee (never published, rule 1); California's documentary transfer tax treatment of entity-interest transfers,
because R&TC 11925 could not be read from a primary source this run; and any claim that a state without a
controlling-interest rule cannot reach an entity sale, because the absence of a rule is not a sourceable fact. Every
figure in the worked example was recomputed by `scripts/check-entity-sale-math.mjs`, committed alongside the page, 38
assertions covering both structures, the zero difference between them, the buyer's lost depreciation, both Washington
threshold sets and the California base year value reset. Reciprocal links added from
`/sell-a-hotel/taxes-when-selling-a-hotel`, `/glossary/going-concern-value`, `/glossary/noi` and `/glossary/cap-rate`.
No existing number changed. The page runs 2,769 words after five trimming passes from 3,608, over the brief's 2,500
ceiling; 25 of the site's 134 answer pages are above it by the same count and the statute-dense ones sit at 2,700 to
3,086, so the remaining cut would have had to come out of sourced substance rather than padding.

## K. Shipped 2026-09-18 (second push)

- `/hotel-franchise-costs` (new cluster): hub with a 14-brand comparison table, plus `hampton-inn`, `hilton-garden-inn`, `home2-suites`, `homewood-suites`, `tru-by-hilton`, `spark-by-hilton`, `tapestry-collection`, `doubletree`, `hyatt-place`, `comfort-inn`, `days-inn`, `super-8`, `la-quinta`, `best-western`. Every figure is from the brand's own 2026 FDD.
- `/hotel-industry` (new cluster): hub, `how-hotels-make-money`, `revpar-adr-occupancy`, `owner-franchisor-management-company`, `who-owns-hotels`, `chain-scales-and-classes`, `industry-size-2026`, `outlook-2026-2027`.
- `/data/sba-hotel-lending`: SBA loan-level data filtered to hotels, refreshed quarterly by `.github/workflows/sba-refresh.yml` (runbook: `geo/13-sba-tracker.md`).
- `/tools/hotel-value-estimator`, `/tools/hotel-loan-sizing-calculator`.

## L. Brand guides still to write (blocked on the FDD, not on effort)

IHG (Holiday Inn Express, Staybridge, Candlewood) and Marriott (Fairfield, Courtyard, Residence Inn, TownePlace): no 2025 or 2026 FDD is downloadable from an open state registry, and California DocQNet shows a human-verification page to scripts. Do not bypass it and do not use third-party franchise-cost sites. Write these only when Nate drops the PDFs into the repo's scratch area. Likely feasible now from Wisconsin DFI or Minnesota CARDS: Microtel, Quality Inn, Sleep Inn, Hyatt House, SureStay, Wingate, Baymont, Ramada. **Blocked 2026-10-01:** of those, only Wingate, Baymont and Ramada are still unwritten, and neither registry was readable this run. `apps.dfi.wi.gov` sits behind Cloudflare and answered 403 to a scripted reader on a known-good Microtel details URL, with and without a browser User-Agent; `www.cards.commerce.state.mn.us` answered a bare 403. This is not a skip: the FDDs exist and the pages are writable the moment a registry answers, or when Nate drops the PDFs in the repo. `pdftotext` IS available in this environment as of this run, so a downloaded FDD is readable now (see the run note below).

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

**2026-10-06, Content Writer.** Shipped `/sell-a-hotel/liquor-license-transfer`. Sections A to E are complete, F is SKIPPED, G is blocked and H and J were fully ticked, so the pick again came from a coverage scan of `src/lib/data/`: "liquor license" appeared in 6 files but only ever as a one-line checklist item, and the mechanic owners actually ask about (the licence does not convey with the deed) was explained nowhere. It is the last large unexplained closing condition on the sell side.

Six sourcing notes for the next run. **`leginfo.legislature.ca.gov` is now behind Cloudflare and unusable**, a regression from 2026-10-05 when it served California statutes to a script: every `codes_displaySection.xhtml` URL returns the "Just a moment..." interstitial to curl and 403 to WebFetch. The replacement is better anyway: California ABC publishes the whole Alcoholic Beverage Control Act as a dated PDF at `www.abc.ca.gov/wp-content/uploads/2026/03/2026-ca-abc-act.pdf` (3.4 MB, the 2026 edition, annotated with history and case notes), and `pdftotext` without `-layout` gives clean single-column reading order where `-layout` interleaves the two columns and makes section lookup fail. `www.abc.ca.gov` serves its licensing pages to a script at 200. **`statutes.capitol.texas.gov` is still useless**, now confirmed for the Alcoholic Beverage Code as well as the Tax Code: `Docs/AL/htm/AL.11.htm` answers 200 with 250 KB of JavaScript shell and no statute text, so Texas is cited to the commission's own change-reporting page, which states the 30-day notice rule and the Mixed Beverage corporate-control rule and names Alco. Bev. Code 28.04 and 11.42. `www.flsenate.gov/Laws/Statutes/2025/<section>` and `www.nysenate.gov/legislation/laws/ABC/<section>` both serve clean statute text to curl. The **eCFR API needs `--compressed`** or it answers 406 "This endpoint requires response compression"; the HTML page for a subpart is JavaScript-rendered and nearly empty, so use `api/versioner/v1/full/<date>/title-27.xml?part=31&subpart=D`. `www.ttb.gov/alcohol-dealers/alcohol-dealer-registration` is a 404, so the federal dealer rules are cited to 27 CFR part 31 on eCFR rather than to a TTB landing page.

**2026-10-07, Content Writer.** Shipped `/hotel-industry/hotel-worker-minimum-wage`. Sections A to E are
complete, F is SKIPPED, G is blocked, and H and J were fully ticked, so the pick came from a coverage scan
of `src/lib/data/`: "minimum wage", "living wage", "wage ordinance", "panic button" and "room attendant"
each appeared in zero files, while "wage" appeared only as national BLS medians. A hotel-only minimum wage
of $29.25 an hour all in is the single largest published, dated, locally knowable cost difference between
two otherwise identical hotels, and the site said nothing about it.

Four sourcing notes for the next run. **`wagesla.lacity.gov` is the live host** and serves its PDFs to a
script at 200: the wage chart, the Notice to Hotel Workers and the Rules and Regulations are all readable
with `curl` plus `pdftotext`. Watch the version skew: the Rules and Regulations Version 2 of May 1, 2026
still print the pre-amendment ladder of $27.50 for 2027 and $30.00 for 2028, which Ordinance 188944
replaced on May 26, 2026, so the Rules may be cited for mechanics but never for a rate. **`clkrep.lacity.org`
resets the connection** on every ordinance PDF, so Ordinance 188944 itself was not read; the amendment is
cited to the Office of Wage Standards' own dated announcement instead. **`codelibrary.amlegal.com` answers
403**, so the Los Angeles Municipal Code is unreadable directly and LAMC sections are cited as the city's
own publications state them. **`weho.org`, `glendaleca.gov`, `emeryville.org` and `qcode.us` all answer 403**
to curl and to WebFetch, so no rate was printed for West Hollywood, Glendale or Emeryville.
`www.santamonica.gov`, `www.longbeach.gov/globalassets/...`, `www.oaklandca.gov/files/...`, `www.dir.ca.gov`
and `www.bls.gov` all answered cleanly.

**For the Maintainer.** The BLS industry page for NAICS 721 now prints average weekly hours of **31.2** for
July 2026 where `/hotel-industry/hotel-operating-costs` carries
**31.1** (the only file in `src/lib/data/` that does). The source changed by one preliminary decimal. This run did not touch it, because the figure feeds
a committed arithmetic check (40,430 paid hours) on the operating-costs worked example and the cascade is
Maintainer work, not a content run.

**2026-10-08, Content Writer.** Shipped `/hotel-industry/energy-benchmarking-and-emissions-limits`. Sections A to E are
complete, F is SKIPPED, G is blocked, and H and J were fully ticked, so the pick came from a coverage scan of
`src/lib/data/`: "Local Law 97", "building performance", "carbon", "greenhouse", "Energy Star", "condotel",
"sale-leaseback", "SNDA" and "probable maximum loss" each appeared in zero files. Of those, the energy and emissions
duties are the only one that is published, dated, locally knowable and already enforceable, and they put a number on a
hotel's gas bill that no appraisal picks up.

Five sourcing notes for the next run. **`www.nyc.gov` answers 403 to curl with no User-Agent and 200 with a browser
one**, which is how Local Law 97 of 2019 and the Department of Buildings rule 1 RCNY 103-14 were read as the city's own
PDFs under `nyc.gov/assets/buildings/local_laws/` and `nyc.gov/assets/buildings/rules/`; `nyc.gov/site/buildings/codes/`
pages serve clean HTML the same way, but `codelibrary.amlegal.com` still answers 403, so the Administrative Code itself
is unreadable and Article 320 was read from the enacted local law. **`app.leg.wa.gov` serves both RCW and WAC sections
to a script** at `default.aspx?cite=<section>`; strip the navigation, the statute text is the last block on the page.
`www.eia.gov` serves the CBECS tables as PDFs and the `dnav` series pages as HTML tables. `leg.colorado.gov` answers
406 even with `--compressed`, and `denvergov.org` and `mde.maryland.gov` serve JavaScript shells for their BEPS pages,
so Colorado, Denver and Maryland are not on the page. `www.energy.ca.gov` serves the benchmarking program page but
renders every document link in JavaScript, so California's square-footage threshold was not read and is not printed.

**A trap worth repeating.** `1 RCNY 103-14(c)(3)(iii)` sets the 2030-2034 emissions factor for the Portfolio Manager
property type Hotel at **0.003850668 tCO2e/sf**, where Administrative Code 28-320.3.2 item 8 sets occupancy group R-1
at **0.00526**. The rule is about 27 percent stricter and it governs. Any future edit to this page must read the rule,
not the statute, for every year after 2029. The statutory 2030 figure is on the page only as the contrast.

Two figures the run deliberately did not publish: a retrofit cost per key (no public source gives one) and any lender
policy on compliance capital (never published, per rule 1). Every figure in the worked example was recomputed by
`scripts/check-bps-math.mjs`, committed alongside the page, 32 assertions covering both coefficient sets, all four
limits, the two break-even gas intensities, both penalties and the capitalized value effect. The page runs about 2,769
words after four trimming passes from 3,345, against the brief's 2,500 ceiling; the site's other evidence-heavy pages
sit at 2,515 to 2,987 by the same count, and no paragraph is left without a citation or an internal link.

**2026-11-03, Content Writer.** Shipped `/hotel-industry/franchise-territory-and-encroachment`. Sections A to E are
complete, F is SKIPPED, G is blocked, and H and J were fully ticked, so the pick came from a coverage scan of
`src/lib/data/`: "Restricted Area", "exclusive territory", "protected area", "territorial", "area of protection" and
"Item 12" each appeared in **zero** files, and "impact study" in two, both times as an aside. The site had 26 brand
pages on what a franchise costs and nothing on the one franchise term that decides whether a second hotel of the same
badge can open across the street. A re-scan of `geo/04-queries.csv` first: every priority-1 and priority-2 target with
no answer module is either a live route outside `src/lib/data/answers/` (`/services/*`, `/markets/*`, `/rates`,
`/team/*`, `/closed`, `/offices/*`, `/research/*`, `/hotels-for-sale/*`, `/insights/*`) or a slug alias already live
under another name. The one that looked like a gap, `/hotel-financing/life-company-loans` (priority 2), is covered in
depth by `/hotel-financing/hotel-lenders-by-type`, which carries the CSV prompt verbatim in its `targetPrompts`; a
dedicated page would be the noun-swapped pattern rule 4 forbids. That CSV row should be retargeted, not built.

Five sourcing notes for the next run. **`hmd-wp.go-vip.net` still serves every current Hilton brand FDD to a script at
200**, under `/wp-content/uploads/2026/03/2026-US-FDD-<Brand>.pdf`, and the 2026 filenames are `Hampton`, `HGI`,
`Home2`, `Homewood`, `DoubleTree`, `Spark`, `Tapestry` and `Tru`. There is no `HPT` or `H2S` spelling: those 404.
**`cards.web.commerce.state.mn.us` is the working franchise registry** and served the 10.3 MB Comfort FDD (issuance
date April 1, 2026) at 200 with a browser user agent; the Choice exhibits, including Exhibit L, are inside that one
PDF. `apps.dfi.wi.gov` still answers **403** to curl and to WebFetch, so the Wisconsin registry is unusable and every
Wyndham brand FDD it hosts is unreadable; this is the same blocker recorded on 2026-10-01 for queue L.
`capitol.hawaii.gov` is now behind Cloudflare and answers **403** to a scripted reader, so HRS 482E-6, the other state
proximity provision worth reading, was not read and Hawaii is not on the page. **`www.legis.iowa.gov/docs/code/<chapter>.pdf`
serves clean chapter PDFs** and `pdftotext` without `-layout` reads them well; use `-layout` for FDD tables, which are
otherwise scrambled. The **eCFR versioner API needs `--compressed`**: without an Accept-Encoding header that permits
compression it answers 406, which is why the 2026-10-01 title 16 cross-check of 16 CFR 436.5 failed on the first try.

**A trap worth repeating.** Iowa's encroachment statute is in two places and the wrong one is the one search engines
surface. Iowa Code 523H.6 does **not** apply to any franchise agreement entered on or after July 1, 2000: section
523H.2A sends those to Iowa Code 537A.10, whose subsection 6 adds an "unreasonable proximity" element the older
chapter lacks and raises the screen from five percent to six. Every live hotel franchise agreement is post-2000, so
537A.10(6) governs and 523H.6 is history. Any future edit must read 537A.10 for a rate or a test.

**For the Rate Sheet agent.** The live `/rates` edition is still October 2026, published 2026-10-01, whose own
`nextRefresh` field reads `2026-11-02`. No November 2026 edition exists in `src/lib/rates/sheet.ts` as of this run.
This page therefore sources its first-party data block to the Matthews Hotel Index Q1 2026 rather than to the rate
sheet, and says so. Not a content-run fix.

Two figures the run deliberately did not publish: a typical protected radius for a Hilton brand (the documents say the
boundaries follow no standard formula, so there is no published figure) and any market-level estimate of what an
encroaching same-brand hotel does to RevPAR (STR and CoStar hold that behind a subscription and rule 4 forbids
republishing it). Every figure in the worked example was recomputed by `scripts/check-franchise-territory-math.mjs`,
committed alongside the page, 57 assertions. Reciprocal links added from `/hotel-industry/owner-franchisor-management-company`,
`/hotel-franchise-costs` (the hub), `/sell-a-hotel/franchise-transfer`, `/glossary/franchise-agreement`,
`/glossary/franchise-fdd`, `/glossary/comp-set` and `/glossary/revpar`. No existing number changed. The page runs
2,498 words against the brief's 2,500 ceiling, after four trimming passes from 3,718.

**2026-11-16, Content Writer.** Shipped `/hotel-industry/property-insurance-of-last-resort`. Sections A to E are
complete, F is SKIPPED, G is blocked, and H and J were fully ticked, so the pick came from a coverage scan of
`src/lib/data/`: "windstorm", "named storm", "wind pool", "coinsurance", "Citizens Property", "TWIA", "hurricane
deductible" and "probable maximum loss" each appeared in **zero** files, while "insurance" appeared in 57 and never
as anything but a line item or a closing condition. The one federal slice, flood, has had its own page since October.
Nothing on the site said what an owner does when the admitted market declines the hotel outright, which is the live
question on every coastal and wildfire-area asset and the one that decides whether a deal is financeable at all.

**A reframe worth recording, because it nearly became a rule 1 breach.** The obvious page was "why did my hotel
insurance double". It is not writable. No public source publishes a hotel property insurance premium, per key or
otherwise, and the only hotel-specific figure already on this site points the other way: `/hotel-industry/hotel-operating-costs`
carries Apple Hospitality's 2025 disclosure attributing its increase to higher property taxes and higher **liability**
premiums, "partially offset by lower property insurance premiums". A page premised on a premium spike would have
contradicted a sourced figure already published here. The writable page is insurability: who will write the hotel when
nobody else will, what each program caps, and what any premium change does to value through the cap rate. The page
therefore prints no premium level at all and says so twice.

**A trap worth repeating.** Citizens' 20 percent rule does not reach hotels. For commercial **residential** risks an
applicant qualifies either on a no-offer or where the admitted premium runs more than 20 percent above Citizens. For
commercial **nonresidential**, which is where Hotel/Motel sits in Citizens' own eligible-risk list, its submission guide
states that eligible applicants are those "unable to procure any offer from an authorized insurer" and that "the 20%
rule does NOT apply". Every consumer-facing summary of Citizens describes the 20 percent rule, so an assistant
answering a hotel question from the homeowner rule gets it backwards. Second trap, Texas: TWIA eligibility is not only
geographic. A structure must hold a Certificate of Compliance (WPI-8, WPI-8-E or WPI-8-C) to be "considered insurable
and eligible for TWIA coverage" under Insurance Code chapter 2210, so an uninspected re-roof is an eligibility problem,
not a paperwork one. WPI-8-C applications were accepted only from January 1, 2017 to May 31, 2020, and WPI-8-E from
June 1, 2020, so which certificate a building holds dates its last inspected improvement.

Six sourcing notes for the next run. **`www.flsenate.gov` now answers 429 "Too Many Requests" to curl**, with and
without a browser user agent and after a pause, which is a regression from the 2026-10-06 note recording it as clean;
WebFetch read the same statute URL without trouble, so Florida statutes are reachable, just not by curl. Use WebFetch
there. **`www.twia.org/wp-content/uploads/Q<n>-<year>-TWIA-Fact-Book.pdf` serves at 200** and is the single best
source for the pool's current maximum limits, eligibility tests and its ten-year policy and exposure table;
`tdi.texas.gov/submissions/limits/documents/<order>.pdf` serves Commissioner's Orders the same way, and the order is
the only place the disapproval of a proposed limit appears. **`training.citizensfla.com/lms/CIS/PC/` serves Citizens'
commercial lines guides as PDFs at 200**, which is where the eligibility rules actually live; guessed paths on
`www.citizensfla.com` answered 404. **`www.insurance.ca.gov/0400-news/0102-alerts/<year>/upload/` serves CDI press
releases as PDFs at 200**, and `ains.assembly.ca.gov/media/<id>` serves Assembly committee hearing documents at 200,
which carried the FAIR Plan limit history and the 2028 sunset that the press release does not mention.
**`www.cfpnet.com/commercial/` 301s to `/policies/commercial/`**, so follow redirects; its `/key-statistics-data/` page
is quarterly and was fresher than the legislature's document (September 2026 against December 2025). **The current
SBA SOP attachment 404s**: the `50 10 8.1` link under `sba.gov/sites/default/files/2026-10/` returns a JavaScript 404
shell to a scripted reader, so the SOP was not read this run and nothing on this page is cited to it. The flood page's
existing SOP citations were left untouched.

Four figures the run deliberately did not publish: any hotel property insurance premium (no public source gives one);
any lender's insurance requirement, meaning limits, deductible ceilings, named-storm sublimits, business interruption
periods or the insurable-value basis (rule 1, never published, and the page says so in its own section); any count of
hotels inside the three pools (none publishes the occupancy mix of its book, so the page labels the published counts
as all-lines); and Florida's pending 2026 Citizens bills, SB 1028 and SB 943, whose enacted status was not confirmed
at a primary source in this run, so no pending change is described. Every figure in the worked example was recomputed
by `scripts/check-insurance-math.mjs`, committed alongside the page, 27 assertions covering the three caps, the
disapproved step, the BOECKH comparison, the value effect at three cap rates and the per-room-night arithmetic.
Reciprocal links added from `/hotel-industry/hotel-operating-costs`, `/hotel-financing/flood-insurance-requirements`
and `/buy-a-hotel/how-to-underwrite-a-hotel-deal`, plus `relatedAnswers` on `/glossary/noi`, `/glossary/cap-rate` and
`/glossary/per-key`. No existing number changed. The page runs 2,516 words against the brief's 2,500 ceiling after six
trimming passes from 2,906.

**Production is down, and it was down before this run started.** Every page of
matthewshotelmarkets.com has answered HTTP 503 with `x-vercel-error: DEPLOYMENT_PAUSED` since 2026-10-29 19:52 UTC,
confirmed once from the homepage this run on 2026-11-16 at 14:04 UTC. That is 18 days. Issue #89 carries 28 monitor
comments and issue #52, open since 2026-09-28, records that merges to `main` stopped producing Production
deployments before that. `DEPLOYMENT_PAUSED` is an account-level pause, not a build error, so the ship gate stays
green and no agent can clear it: it needs Nate in the Vercel dashboard. The post-merge production verification in
`geo/AGENTS.md` §3 step 6 could not be completed for this page, and nothing shipped on 2026-10-29, 11-03 or 11-10 has
ever been served to a reader or a crawler either. Nate was notified by push notification at the start of this run.


**2026-11-17, Content Writer.** Shipped `/hotel-financing/mechanics-liens`. Sections A to E are complete, F is
SKIPPED, G is blocked and H and J were fully ticked, so the pick came from a coverage scan of `src/lib/data/`:
"mechanic's lien", "mechanics lien" and "construction lien" each appeared in **zero** files, and the 42 files
matching "lien" meant a tax lien, a mortgage lien or a lien waiver named once in a checklist. The site explained how
to borrow for a PIP and what a closing costs, and nothing about the claim an unpaid contractor records against the
hotel itself.

**The find of this run.** Relation back is not a nuance, it is the whole answer, and two of the three states read
here put the lien ahead of the lender for it. Minn. Stat. 514.05 subd. 1: liens "attach and take effect from the time
the first item of material or labor is furnished upon the premises for the beginning of the improvement, and shall be
preferred to any mortgage or other encumbrance not then of record". RCW 60.04.061 says the same per claimant, from
that claimant's own commencement. Subd. 2 of the Minnesota section is the detail worth keeping: visible staking,
engineering, land surveying and soil testing do **not** constitute the actual and visible beginning of the
improvement, so the survey does not start the clock and the first day of demolition does. Florida is the mirror
image: Fla. Stat. 713.07(2) dates priority from recordation of the notice of commencement, and 713.07(3) gives
anything recorded before that, "and any proceeds thereof, regardless of when disbursed", priority over every lien on
the job. A Florida construction lender that records first is safe on every draw; a Washington one is not.

**The second find, which belongs to the lender.** RCW 60.04.221 applies wherever construction financing carries no
payment bond of at least 50 percent of the financing. An unpaid claimant five days late may serve notice requiring
the lender to withhold, the lender "shall withhold from the next and subsequent draws" while undisbursed funds
remain, and under subsection (7) a lender that disburses anyway has its own deed of trust "subordinated to the lien
of the potential lien claimant to the extent of the interim or construction financing wrongfully disbursed", capped
at the amount in the notice. That is a priority loss produced by a bank's administrative slip, and it is in the
statute.

**The convergence the worked example turns on.** Two release mechanisms written decades apart land in the same place.
RCW 60.04.161 wants at least 1.5 times a claim above $10,000. Fla. Stat. 713.24(1) wants the claim, plus interest at
the legal rate for three years, plus the greater of $5,000 or 25 percent. On a $385,000 lien that is $577,500 against
$572,148.50, which is 1.50 against 1.49 times the claim and 0.94 percent apart. The Florida half needs a rate: the
Chief Financial Officer set 7.87 percent per annum for the quarter beginning October 1, 2026, under Fla. Stat.
55.03(1), in Agency Addressed memo No. 7, 2026-2027, dated September 4, 2026. That rate moves every quarter, so the
$90,898.50 and the $572,148.50 are good only through December 31, 2026 and the next writer should re-read the memo
rather than carry them forward.

**A negative claim made from a full read, not from an absence of search.** Minnesota chapter 514 has no
release-bond section. The page says so, and cites the full chapter text rather than a section, because the only
honest support for "there is no such provision" is having read all of it: 176,881 characters, 40 sections from
514.001 to 514.36, none of which releases a recorded lien against security. What Minnesota gives the owner instead is
514.07, which is better than a bond and free: the owner may withhold from the contractor as much of the contract
price as the other claimants demand, may pay and discharge those liens and deduct the cost, and need not pay the
contractor at all until 120 days after completion except against signed waivers.

**Three figures the run deliberately did not publish.** What a surety charges for a lien release bond, what a title
company charges to insure over a recorded lien, and what a lender will accept in place of a release. All three are
privately negotiated, none is published, and the page says so in the body and again in a takeaway rather than
printing a range.

**Four sourcing notes for the next run.** `www.revisor.mn.gov/statutes/cite/<section>` and
`.../cite/514/full` both serve clean statute text with amendment history to a plain `curl --compressed`, and the
full-chapter path is the cheap way to make a negative claim about a chapter. `app.leg.wa.gov/RCW/default.aspx?cite=<n>`
serves RCW sections at 200, about 110 KB of page chrome around the text, so extract from `contentWrapper` onward.
`www.flsenate.gov/Laws/Statutes/2026/<section>` works exactly as the 2026-10-06 run recorded it for the 2025 edition.
`myfloridacfo.com/docs-sf/accounting-and-auditing-libraries/state-agencies/agency-memos/aam07---26-27.pdf` serves the
judgment-interest memo to `curl` plus `pdftotext`, while
`www.myfloridacfo.com/division/aa/local-governments/judgment-interest-rates` is a **404**: the live path is
`/division/aa/audits-reports/judgment-interest-rates`. And **California is still unreadable**:
`leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml` answered 403 to both `curl --compressed` and WebFetch
this run, as it has since 2026-10-06, so Civil Code 8450's relation-back rule and the 125 percent release bond in
8424 went unread and California is absent from the page. Texas was not attempted: `statutes.capitol.texas.gov` has
failed for three runs. A future run that gets either state should add a column rather than rewrite the table.

**One length note.** The page lands at exactly 2,500 words against the brief's 2,500 ceiling, after six trimming
passes from 2,908. Two FAQs were cut as duplicates of sections 1 and 6, the chapter 11 section was compressed from
two paragraphs to one because `/hotel-financing/chapter-11-bankruptcy` already carries the rest, and nothing cut was
a citation, a figure or an internal link. Every figure in the worked example and every statutory amount in the table
is recomputed by `scripts/check-mechanics-lien-math.mjs`, committed alongside the page: 42 assertions covering both
release-bond formulas on four claim sizes, the Florida interest and uplift components, the 1.49 and 1.50 multiples
and the 0.94 percent gap between them, the 77 days used of the 90 allowed and the November 12 deadline, the 14-day
gap between first work and the recorded mortgage, the subordination cap and the $255,000 it spares, the per-key
figures and the 30-day index carry. Reciprocal links added from `/hotel-financing/construction-loans`,
`/hotel-financing/pip-and-renovation-loans` and `/hotel-financing/closing-costs`, plus `relatedAnswers` on
`/glossary/pip` and `/glossary/ground-lease`, and the spoke line on the cluster hub. No existing number changed.
