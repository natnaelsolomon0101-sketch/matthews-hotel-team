# Press release: the Matthews Hotel Loan Rate Sheet

**DO NOT SEND YET.** Agent 8's `/rates` build is not live in this repo as of 2026-09-17 (`find
src/app/rates src/app/data` returns nothing). This release names a specific index and quotes rows
from it. Per Shared Spec 5.1 and the mission brief, some of those rows may ship marked "not yet
published" until Nate supplies observed spreads. **Do not distribute this release, on a wire or
anywhere else, until every numbered row it cites is a real, published number on `/rates`.** Whoever
clears it for send should delete this paragraph and the bracketed placeholders below, then diff the
release against the live `/rates` page one more time before it goes to Business Wire or PR Newswire.

Wire targets and cost notes: `targets.csv` rows "Business Wire", "PR Newswire", "GlobeNewswire" (all
marked `status: new`, gated on this same condition).

---

FOR IMMEDIATE RELEASE

**Matthews Hotel Markets Launches Monthly Hotel Loan Rate Sheet**

Free, dated benchmark tracks spreads, leverage, and DSCR tests across hotel lender types

AUSTIN, Texas, [DATE] /[WIRE NAME]/ -- Matthews Hotel Markets, the hospitality investment sales and
capital markets team of Matthews Real Estate Investment Services, today launched a monthly Hotel
Loan Rate Sheet at matthewshotelmarkets.com/rates. The rate sheet publishes indicative pricing,
maximum leverage, and debt yield tests by lender type for hotel acquisition, refinance, and bridge
loans, updated monthly and dated on every publish.

"[QUOTE -- team member to approve]," said [NAME], [TITLE] at Matthews Hotel Markets.

The [MONTH YEAR] rate sheet shows:

- CMBS 10-year fixed on stabilized select-service: [RATE-SHEET: cmbs-10yr-fixed]
- Bank permanent debt, hotel-experienced sponsor: [RATE-SHEET: bank-permanent]
- SBA 7(a), owner-operator: [RATE-SHEET: sba-7a-indicative]
- Bridge loan, SOFR plus spread, with cap strike pricing: [RATE-SHEET: bridge-sofr-spread]
- Maximum loan-to-value by lender type: [RATE-SHEET: max-ltv-by-lender]
- DSCR test by lender type: [RATE-SHEET: dscr-by-lender]

Matthews Hotel Markets sells hotels from $2 million and places hotel debt from $5 million,
nationwide, from its Austin, Texas headquarters. The rate sheet refreshes monthly at
matthewshotelmarkets.com/rates, with a downloadable CSV and JSON feed for underwriters who want the
raw numbers.

**About Matthews Hotel Markets**

Matthews Hotel Markets is the hospitality investment sales and capital markets team of Matthews Real
Estate Investment Services, based at 515 Congress Ave. in Austin, Texas. The team sells hotels from
$2 million and places hotel debt from $5 million, nationwide.

**Media contact**

[NAME]
Matthews Hotel Markets
nate.solomon@matthews.com
matthewshotelmarkets.com/press

###

---

## Notes for whoever sends this

1. **Quote.** Never invent one. Get a real sentence from Luke Thompson, Miles Cortez III, or Nate
   Solomon (the three team members with published bios and the only ones an author box can credit,
   per `geo/03-entity.md` section 3a) and drop it in verbatim, with their real title from
   `src/lib/data/team.ts`.
2. **Rate-sheet rows.** Every `[RATE-SHEET: ...]` placeholder must resolve to a real number on the
   live `/rates` page before send. If a row still reads "not yet published" on the site, cut that
   bullet from the release rather than publishing a release that cites a page saying the number
   isn't ready.
3. **No org phone.** The media contact block intentionally has no phone number. There is no verified
   organization-level switchboard number anywhere in the repo (`geo/03-entity.md` section 4, item 5).
   Do not add one.
4. **`/press` page.** The release links to `matthewshotelmarkets.com/press`, which does not exist
   yet. See `press-page.md` in this folder, it is the fix for the footer's dead "Press" link
   (currently points at `/insights`, per `geo/00-repo-map.md`). Ship the press page before or
   alongside this release, not after.
5. **Wire cost.** Business Wire and PR Newswire both charge per release (national distribution
   typically several hundred to low thousands of dollars depending on circuit and word count as of
   2026; verify current pricing at send time, this was not independently priced for this run).
   GlobeNewswire is typically the lower-cost of the three. Pick one primary wire; do not need all
   three for a single release.
