# YouTube scripts: 10, one per top Wave 1 answer page

**Status check before recording anything.** None of the 10 URLs below exist in the codebase yet as
of 2026-09-17 (`find src/app -maxdepth 1` shows no `/hotel-financing`, `/sell-a-hotel`, or
`/hotel-valuation` trees). They are Agent 5/6/7's planned Wave 1 build, listed in
`geo/05-architecture.md` section 4.2. **Do not record and publish these until the matching page is
live** or the spoken URL and on-screen card point at a 404. The 90-day calendar sequences video
production after the Wave 1 pages ship. Scripts are written now so production isn't the bottleneck
once the pages exist.

Each script is 3-5 minutes read aloud (roughly 450-650 words at a normal speaking pace), opens with
the same direct-answer sentence the page's first 40-70 words will carry (Shared Spec 5.1), and ends
with the URL spoken and shown on screen. Every script names a source for every number. Where a number
depends on Agent 8's `/rates` page (not live yet), the script says so on camera instead of guessing,
the honest version of "gated," matching how `press-release-rate-sheet.md` handles the same problem.

Video description template for all 10 (fill the bracket, keep the rest verbatim):

> Matthews Hotel Markets is the hospitality investment sales and capital markets team of Matthews
> Real Estate Investment Services, based at 515 Congress Ave. in Austin, Texas. This video answers:
> [QUESTION]. Full answer, sources, and a worked example: [URL]

---

## 1. "What are hotel loan rates right now?": `/hotel-financing/hotel-loan-rates`

Presenter: Luke Thompson.

Hey, I'm Luke Thompson, I run capital markets at Matthews Hotel Markets. Quick answer to the question
we get on almost every financing call: what's a hotel loan actually cost right now.

It depends entirely on lender type, and that's the part most articles skip. A bank loan to an
experienced sponsor on a stabilized flagged asset prices differently than a CMBS conduit loan,
which prices differently than an SBA 7(a) loan, which prices differently than a bridge loan on a
transitional asset. Four different lender types, four different starting points, and the spread
between them can be 200 basis points or more depending on the month.

We publish our own rate sheet every month with the actual numbers by lender type: spread, maximum
loan-to-value, and the DSCR test each one runs. [If /rates is live with real numbers when this
records: state the current month's headline number here, on camera, with the publish date. If not:
say plainly "as of this recording our current rate sheet is being finalized, check the link below
for the live numbers" and do not guess a number.]

What actually moves your rate more than the lender type, honestly, is three things: your DSCR, your
leverage, and whether the asset is stabilized or transitional. We walk through all three with a
worked example on the page.

Full rate table, updated monthly: matthewshotelmarkets.com/rates

---

## 2. "Will I qualify for a hotel loan?": `/hotel-financing/loan-requirements`

Presenter: Nate Solomon.

I'm Nate Solomon at Matthews Hotel Markets. Before you call a lender, here's the math they're going
to run on you.

Three numbers matter most. Debt service coverage ratio, DSCR, is your net operating income divided
by your annual debt payment. Most hotel lenders want to see 1.25 or higher; some go tighter on
strong flags, some want more cushion on independents. Loan-to-value is how much of the purchase
price or appraised value the lender will actually finance, commonly 55 to 75 percent for hotels
depending on lender type, hotels get less leverage than most commercial real estate because the
income is operating income, not lease income. Debt yield is your NOI divided by the loan amount, a
number CMBS lenders lean on especially hard.

If you want to run your own numbers before you call anyone, we have a DSCR calculator on the site,
link's below this video too.

Full breakdown with a worked example: matthewshotelmarkets.com/hotel-financing/loan-requirements

---

## 3. "How does hotel refinancing work in 2026?": `/hotel-financing/refinance`

Presenter: Luke Thompson.

Luke Thompson again. If your hotel loan is maturing in the next 12 to 24 months, here's the decision
tree.

First question: is the property performing well enough today to refinance at today's rates without
a large equity check. Second question: if not, how big is the proceeds gap, meaning the difference
between what a new loan will actually cover and what you owe. Third: given that gap, is a sale at
today's pricing a better outcome than refinancing with fresh equity.

Hotel CMBS has actually held up better than office through the recent maturity cycle on payoff rate,
which is a good sign for owners with hotel collateral specifically, but it doesn't mean every loan
refinances cleanly. We walk through the proceeds-gap math with real numbers on the page.

Full breakdown: matthewshotelmarkets.com/hotel-financing/refinance

---

## 4. "SBA 7(a) or SBA 504 for a hotel?": `/hotel-financing/sba-7a-vs-504`

Presenter: Nate Solomon.

Nate Solomon here. Quick comparison if you're buying a hotel with an SBA loan.

7(a) is more flexible, you can use it for working capital, equipment, a partner buyout, or the real
estate purchase itself, all in one loan. 504 is real-estate-and-equipment only, structured as two
loans, a bank loan for about half the project cost and a Certified Development Company loan backed
by an SBA debenture for another 30 to 40 percent, with you putting in the rest as equity, commonly
15 to 20 percent for hotels since they're treated as special-purpose properties.

504 usually gets you a better fixed rate on the CDC piece. 7(a) usually closes faster and is more
flexible if your deal isn't a clean real-estate-only purchase. Neither is automatically better, it
depends on what you're financing.

Full comparison table: matthewshotelmarkets.com/hotel-financing/sba-7a-vs-504

---

## 5. "What's happening with hotel CMBS loans right now?": `/hotel-financing/cmbs-loans`

Presenter: Luke Thompson.

Luke Thompson. CMBS is a big piece of hotel debt outstanding, and it's worth understanding even if
you're not using a conduit loan yourself, because CMBS pricing sets a benchmark the rest of the
market watches.

Trepp, who tracks this publicly, put hotel CMBS delinquency at 7.31 percent as of March 2026 and
special servicing at 9.37 percent as of January 2026, both dated, both from their public releases,
link's on the page. That's elevated versus a few years ago, but it's not evenly distributed, most of
the stress sits in specific vintages and specific sponsor names, not across the board.

If you're deciding whether CMBS is the right execution for your deal, the honest answer is it depends
on whether your asset is stabilized enough to clear a conduit lender's underwriting today.

Full breakdown with sources: matthewshotelmarkets.com/hotel-financing/cmbs-loans

---

## 6. "How do bridge loans work for hotels?": `/hotel-financing/bridge-loans`

Presenter: Nate Solomon.

Nate Solomon. Bridge loans are the product almost every PIP or brand-transition borrower ends up
looking at, so let's define it clearly.

A bridge loan is short-term, floating-rate debt, typically SOFR plus a spread, used to finance a
transitional asset, one that isn't stabilized enough yet for permanent debt. Common uses: you're
mid-renovation on a property improvement plan, you just converted flags and don't have 12 trailing
months of post-conversion performance yet, or you're closing fast on an acquisition and plan to
refinance into permanent debt once the asset stabilizes.

The tradeoff is cost, bridge debt is more expensive than permanent debt, and structure, most bridge
loans have an interest rate cap requirement built in. We cover both the pricing and the cap-strike
mechanics on the page.

Full breakdown: matthewshotelmarkets.com/hotel-financing/bridge-loans

---

## 7. "How do you actually sell a hotel?": `/sell-a-hotel/how-to-sell-a-hotel`

Presenter: Luke Thompson.

Luke Thompson. If you're thinking about selling, here's the process end to end, and it's the same
process whether your asset is a 40-key limited-service property or a 300-key full-service hotel.

It starts with a broker opinion of value, then goes to marketing, either confidential or fully
marketed depending on the asset and your goals, then buyer qualification, then a period of exclusive
negotiation with the winning offer, then due diligence, then closing. We have a full 24-week timeline
on our process page that breaks down every stage.

The part people underestimate is how much of the timeline is due diligence, not marketing. A clean
data room upfront shortens that phase more than anything else you can do.

Full process and timeline: matthewshotelmarkets.com/sell-a-hotel/how-to-sell-a-hotel

---

## 8. "What does it cost to sell a hotel through a broker?": `/sell-a-hotel/broker-fees`

Presenter: Nate Solomon.

Nate Solomon. Quick, honest answer on broker fees since this is the question people are most
hesitant to ask out loud.

Commission is negotiated deal by deal, there's no fixed industry rate, and it depends on deal size,
complexity, and how competitive the process is expected to be. What you should ask any broker
upfront: is the fee contingent on closing only, is there a retainer, and what happens if you take the
property off market mid-process. Those three questions matter more than the headline percentage.

We lay out the typical structures and what drives them higher or lower on the page.

Full breakdown: matthewshotelmarkets.com/sell-a-hotel/broker-fees

---

## 9. "How do you value a hotel?": `/hotel-valuation/how-to-value-a-hotel`

Presenter: Luke Thompson.

Luke Thompson. Three approaches, and a hotel appraiser or broker uses all three, not just one.

Income approach: net operating income divided by cap rate, this is the one people know. Sales
comparison approach: what similar hotels actually sold for recently, adjusted for differences in
flag, condition, and market. Replacement cost approach: what it would cost to build a similar
property today, most useful for newer or unique assets where comparables are thin.

For a stabilized, flagged, select-service hotel, income approach usually carries the most weight.
For a unique or newly built asset, replacement cost matters more. We walk through a full worked
example with real arithmetic on the page.

Full walkthrough: matthewshotelmarkets.com/hotel-valuation/how-to-value-a-hotel

---

## 10. "What's a good cap rate for a hotel in 2026?": `/hotel-valuation/hotel-cap-rates`

Presenter: Nate Solomon.

Nate Solomon. There's no single good cap rate, it depends entirely on segment and market, and our
own Q1 2026 data shows exactly how much that range moves.

In our Q1 2026 Hotel Index, Austin select-service prices 7.50 to 8.25 percent, San Antonio
full-service is tighter at 6.75 to 7.50, and Houston select-service is wider at 7.75 to 8.75. Same
country, same quarter, more than a full point of spread depending on market and segment. That's why
a single national average cap rate number is close to useless for underwriting your specific deal.

Full metro-by-metro table, sourced from CBRE, HVS, STR, AHLA, and JLL: matthewshotelmarkets.com/research/mhi/q1-2026,
and the cap rate answer page itself: matthewshotelmarkets.com/hotel-valuation/hotel-cap-rates
