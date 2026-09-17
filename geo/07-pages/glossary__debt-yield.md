---
slug: debt-yield
term: "Debt Yield"
lastUpdated: 2026-09-17
authorSlug: luke-thompson
target_prompts:
  - "What is debt yield on a hotel loan?"
  - "What debt yield do hotel lenders require?"
  - "Is debt yield or DSCR the harder test on a hotel loan?"
  - "Why does CMBS use debt yield instead of LTV?"
  - "How do I calculate debt yield?"
shortDef: >
  Debt yield is a hotel's net operating income divided by the loan amount, expressed as a
  percentage. It measures the lender's return if it had to take the asset back.
fullDef: >
  Debt yield is NOI divided by loan amount. It is the one sizing test that does not depend on
  rate, amortization or an appraisal, which is why CMBS lenders lean on it. Hotel floors
  commonly sit near 10 to 11 percent: $2.0 million of NOI supports roughly $18 to $20 million
  of loan.
example: >
  Hypothetical. NOI $2,100,000. Value $26,000,000. LTV test at 65%: loan = $16.90M. Debt yield
  floor at 10.5%: loan = $2.1M / 0.105 = $20.00M. DSCR test at 1.40x, 7.10%, 30-year schedule:
  loan = $18.56M. LTV binds at $16.90M. Now assume the appraisal comes back at $30.0M: the LTV
  test moves to $19.50M and the DSCR test at $18.56M becomes the constraint. Debt yield never
  moved, because it does not use the appraisal.
misconceptions:
  - "Debt yield is not cap rate. Cap rate divides NOI by price; debt yield divides NOI by the loan. They coincide only at 100 percent leverage, which does not exist."
  - "A higher debt yield requirement is not a stricter lender in general. It is a stricter lender on loan size specifically, and it may be looser on rate or recourse."
faq:
  - q: "What is debt yield?"
    a: "Net operating income divided by loan amount, expressed as a percentage. It is the return a lender would earn on the loan balance if it took the property back at closing."
  - q: "What debt yield do hotel lenders require?"
    a: "Floors commonly sit near 10 to 11 percent for hotels, higher than the 7 to 9 percent typical for multifamily, reflecting a hotel's operating volatility. Current floors are on the rate sheet."
  - q: "How is debt yield different from cap rate?"
    a: "Cap rate divides NOI by purchase price. Debt yield divides the same NOI by the loan amount, a smaller number, so debt yield is always higher than the cap rate on a levered deal."
  - q: "Why do CMBS lenders use debt yield?"
    a: "It does not depend on an appraisal, an interest rate, or an amortization schedule, all of which can be flattered. It is the one test a borrower cannot improve by negotiating terms."
  - q: "Which test usually binds on a hotel loan?"
    a: "Whichever of debt yield, DSCR and LTV produces the smallest loan amount for that specific deal. It varies by rate environment and by how the appraisal compares to the purchase price."
sources:
  - label: "Investor Reporting Package"
    url: "https://www.crefc.org"
    publisher: "CRE Finance Council"
  - label: "EDGAR full-text search, CMBS prospectus filings"
    url: "https://www.sec.gov/edgar/search/"
    publisher: "U.S. Securities and Exchange Commission"
  - label: "Risk Management Manual, CRE lending"
    url: "https://www.fdic.gov/regulations/safety/manual/"
    publisher: "FDIC"
  - label: "H.15 Selected Interest Rates"
    url: "https://www.federalreserve.gov/releases/h15/"
    publisher: "Federal Reserve"
  - label: "Matthews Hotel Markets rate sheet"
    url: "/rates"
    publisher: "Matthews Hotel Markets (first-party)"
relatedTerms:
  - cap-rate
  - dscr
  - noi
relatedAnswers:
  - /hotel-financing/loan-requirements
  - /hotel-financing/cmbs-loans
  - /hotel-financing/hotel-lenders-by-type
---

Debt yield is a hotel's net operating income divided by the loan amount, expressed as a
percentage. It measures the lender's return if it had to take the asset back.

Debt yield is NOI divided by loan amount. It is the one sizing test that does not depend on the
interest rate, the amortization schedule or an appraisal, which is why CMBS lenders lean on it.
Hotel debt yield floors commonly sit near 10 to 11 percent, meaning a hotel producing $2.0
million of NOI supports roughly $18 million to $20 million of loan.

The formula is simple: NOI divided by loan amount, as a percentage. What it actually measures is
the lender's unlevered cash-on-cash return on the loan balance in the scenario the lender hopes
never to face, foreclosing and taking the keys. A 10.5 percent debt yield means the lender would
earn a 10.5 percent return on its own money, at the current NOI, if it owned the asset outright
at the loan amount.

Debt yield is rate-independent, which is what separates it from DSCR and makes it useful to a
lender in a way the other two tests are not. DSCR moves with the interest rate and the
amortization schedule; loan-to-value moves with the appraisal. Debt yield moves only when NOI or
the loan amount changes, which means it cannot be flattered by a longer amortization schedule,
an optimistic appraisal, or a temporarily low rate.

That immunity is exactly why CMBS lenders lean on debt yield as a primary sizing test. A CMBS
loan is pooled and sold to bond investors who are not in the room during underwriting, and a
test that cannot be gamed through amortization stretching or appraisal shopping gives those
investors a cleaner floor on loan quality. Typical hotel debt yield floors sit near 10 to 11
percent, current specific floors by lender program are on the rate sheet.[[RATE-SHEET: hotel
debt yield floors by loan program, September 2026]]

Debt yield and cap rate are related but not the same calculation, and confusing them is the most
common error. Cap rate divides NOI by purchase price; debt yield divides the identical NOI by
the loan amount instead. Because the loan amount is smaller than the purchase price on any
leveraged deal, debt yield is always a higher percentage than the cap rate on the same asset. The
two numbers would only converge at 100 percent leverage, which no lender offers.

To find which of the three sizing tests, debt yield, DSCR, or loan-to-value, actually binds on a
specific deal, run all three and take the smallest resulting loan amount. The worked example
below shows this directly: an appraisal change moves the LTV test and can shift which test
binds, while the debt yield number does not move at all, because it never touched the
appraisal in the first place.

**Common misconceptions.** Debt yield is not cap rate. Cap rate divides NOI by price; debt
yield divides NOI by the loan. They coincide only at 100 percent leverage, which does not
exist. A higher debt yield requirement is also not a stricter lender in general terms. It is a
stricter lender on loan size specifically, and that same lender may be more flexible on rate or
recourse than a lender with a looser debt yield floor.

*See how debt yield, DSCR and LTV interact on a real deal at [/hotel-financing/loan-requirements](/hotel-financing/loan-requirements) and [/hotel-financing/cmbs-loans](/hotel-financing/cmbs-loans).*
