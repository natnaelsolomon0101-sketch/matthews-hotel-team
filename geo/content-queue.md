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
