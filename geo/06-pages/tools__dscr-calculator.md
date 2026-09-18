---
url: /tools/dscr-calculator
type: tool
cluster: tools
title: "Hotel DSCR Calculator"
h1: "Hotel DSCR calculator: will my loan size?"
description: "Calculate debt service coverage ratio on a hotel loan, see how it sizes the loan, and compare against the thresholds lenders use in 2026."
updated: 2026-09-17
author: luke-thompson
reviewer: miles-cortez
target_prompts:
  - "What's a debt service coverage ratio (DSCR) and why does it matter for hotel loans?"
  - "What loan-to-value ratio can I get on a hotel purchase?"
  - "How much can I borrow against my hotel?"
  - "What DSCR do hotel lenders require?"
  - "Can a hotel with low occupancy still qualify for financing?"
  - "How does a rate increase change my hotel loan amount?"
answer: >
  DSCR is net operating income divided by annual debt service. Hotel lenders
  generally test between 1.35x and 1.45x, which means the hotel must produce 35
  to 45 percent more cash than the loan payment. Enter your NOI, loan amount,
  rate and amortization below and the calculator returns the ratio and the loan
  size that ratio supports at September 2026 rates.
takeaways:
  - "DSCR = NOI / annual debt service. Both numbers are annual."
  - "Most hotel lenders test at 1.35x to 1.45x. Confirm the exact test before you model anything."
  - "DSCR is the test that turns a rate change into a proceeds change."
  - "If DSCR binds, the fixes are more equity, longer amortization, or higher NOI. Not a better story."
  - "Debt yield and LTV are the other two tests. The lowest of the three sets your loan."
sections:
  - h2: "How the math works"
    lead: "DSCR divides annual NOI by annual debt service, and the loan's amortization schedule and rate together set what that debt service actually is."
    body: |
      Net operating income (NOI) is the hotel's income after operating expenses but before debt
      service, capital reserves, and depreciation; a fuller definition is on `/glossary/noi`. Annual
      debt service is the total of twelve monthly loan payments, where each payment is a function of
      the loan amount, the interest rate, and the amortization period, standard mortgage
      amortization math. Debt service coverage ratio (DSCR), covered in full on `/glossary/dscr`,
      is simply NOI divided by that annual debt service. A DSCR of 1.35x means the property
      produces 35 percent more cash than the loan payment requires, the cushion a lender is testing
      for.

      Working backward, a lender's minimum DSCR test also defines the maximum loan a given NOI can
      support at a given rate and amortization: divide NOI by the test to get the maximum debt
      service, then divide that by the annual payment each dollar of loan would require at the
      quoted rate and amortization, to get the maximum loan amount. The calculator below runs both
      directions at once.
  - h2: "What do the lender thresholds mean for my deal?"
    lead: "DSCR thresholds vary by lender type, and which test actually binds your loan depends on comparing DSCR against the debt yield and LTV tests covered on the hub page."
    body: |
      Bank and CMBS tests cluster in a similar 1.35x to 1.45x range; life insurance companies test
      somewhat higher in exchange for lower leverage; SBA tests somewhat lower, offset by the
      personal guarantee the program requires; debt funds and bridge lenders test interest-only
      coverage against a stabilized pro forma rather than trailing NOI. The table below shows the
      typical range by type; the specific test on any given quote should always be confirmed with
      the lender directly.
faq:
  - q: "What is a good DSCR for a hotel loan?"
    a: "It depends on the lender type, but clearing the specific test with room to spare, typically above 1.35x to 1.45x for most conventional and CMBS lenders, is generally viewed as healthy coverage."
  - q: "How do I calculate DSCR?"
    a: "Divide annual net operating income by annual debt service (twelve months of loan payments). The calculator above runs the full amortization math for you from NOI, loan amount, rate and term."
  - q: "What DSCR do hotel lenders require in 2026?"
    a: "Most hotel lenders test between 1.35x and 1.45x this year. SBA programs test somewhat lower; life insurance companies typically test somewhat higher in exchange for lower leverage."
  - q: "What happens if my DSCR is below the test?"
    a: "The loan amount is reduced, more equity is required, or the deal does not qualify at that lender. There is no shortcut around the math; the fix is more equity, a longer amortization, or higher NOI."
  - q: "Does DSCR use trailing or projected NOI?"
    a: "Permanent lenders generally use trailing twelve-month NOI. Bridge and debt fund lenders will sometimes use a stabilized, forward-looking NOI, which is one reason bridge loans can support more proceeds on a transitional asset."
  - q: "Is DSCR more important than LTV on a hotel loan?"
    a: "Neither is universally more important. A lender runs DSCR, debt yield, and LTV independently and lends the lowest of the three results, so whichever test is binding on your specific deal is the one that matters most."
  - q: "How does a longer amortization change DSCR?"
    a: "A longer amortization lowers the annual payment on the same loan amount and rate, which raises DSCR, or equivalently supports a larger loan at the same DSCR test."
table:
  caption: "DSCR thresholds by hotel lender type, September 2026"
  columns: ["Lender type", "Typical DSCR test", "Typical amortization", "Notes"]
  rows:
    - ["Bank / credit union", "1.35x to 1.45x", "20 to 25 years", "Often paired with a recourse requirement"]
    - ["Life insurance company", "1.40x or higher", "25 to 30 years", "Lower leverage, so DSCR rarely binds"]
    - ["CMBS conduit", "1.35x to 1.45x", "30 years", "Debt yield usually binds before DSCR"]
    - ["SBA 7(a) / 504", "1.20x to 1.35x", "Fully amortizing", "Lower test, offset by a personal guarantee"]
    - ["Debt fund / bridge", "Interest-only coverage, often 1.10x to 1.25x", "Interest only", "Tested on stabilized pro forma, not trailing"]
original_data_point:
  source: rates
  ref: "/rates"
  sentence: "Matthews Hotel Markets' September 2026 rate sheet shows the DSCR tests lenders are actually applying this month: [[RATE-SHEET: DSCR test by lender type]]"
worked_example:
  label: "Pre-computed worked example (server-rendered): 95-key select-service hotel"
  body: |
    Hypothetical, using the calculator's own default inputs so the example and the live tool agree.

    Annual NOI: $1,600,000. Loan amount: $12,000,000. Rate: 7.25 percent, amortization 25 years.
    Monthly payment: $86,753. Annual debt service: $1,041,036.

    DSCR = $1,600,000 / $1,041,036 = 1.54x. Against a 1.35x test, this clears with room to spare.
    Max loan at a 1.35x test = ($1,600,000 / 1.35) divided by the annual constant of about $0.0868
    per dollar at this rate and term, or roughly $13,654,000.

    So this hypothetical borrower could take about $1.65M more loan and still clear the coverage
    test. Whether they should depends on the debt yield and LTV tests, which are the other two
    constraints, covered on `/hotel-financing`.
sources:
  - n: 1
    label: "Selected Interest Rates (H.15)"
    url: "https://www.federalreserve.gov/releases/h15/"
    publisher: "Federal Reserve"
    accessed: 2026-09-17
  - n: 2
    label: "Daily Treasury Par Yield Curve Rates"
    url: "https://home.treasury.gov/interest-rates"
    publisher: "U.S. Department of the Treasury"
    accessed: 2026-09-17
  - n: 3
    label: "7(a) and 504 loan programs"
    url: "https://www.sba.gov/funding-programs/loans"
    publisher: "U.S. Small Business Administration"
    accessed: 2026-09-17
  - n: 4
    label: "Risk Management Manual of Examination Policies, commercial real estate lending"
    url: "https://www.fdic.gov/regulations/safety/manual/"
    publisher: "Federal Deposit Insurance Corporation"
    accessed: 2026-09-17
  - n: 5
    label: "Matthews Hotel Markets September 2026 rate sheet"
    url: "/rates"
    publisher: "Matthews Hotel Markets"
    accessed: 2026-09-17
related:
  hub: /hotel-financing
  siblings:
    - /hotel-financing/loan-requirements
    - /hotel-financing/hotel-loan-rates
    - /hotel-financing/hotel-lenders-by-type
    - /hotel-financing/refinance
  glossary:
    - /glossary/dscr
    - /glossary/debt-yield
    - /glossary/noi
  data:
    - /rates
cta:
  label: "Have us size your loan properly"
  href: /contact
brand_sentence: "Matthews Hotel Markets built this calculator against the same DSCR tests in our September 2026 rate sheet, so the thresholds here are the ones our lenders are quoting."
tool:
  inputs:
    - { key: noi, label: "Annual NOI", type: currency, default: 1600000, min: 0 }
    - { key: loanAmount, label: "Loan amount", type: currency, default: 12000000, min: 0 }
    - { key: rate, label: "Interest rate", type: percent, default: 7.25, min: 0, max: 25, step: 0.05 }
    - { key: amortYears, label: "Amortization (years)", type: integer, default: 25, min: 5, max: 40 }
    - { key: testDscr, label: "Lender DSCR test", type: number, default: 1.35, min: 1.0, max: 2.0, step: 0.05 }
  outputs:
    - { key: monthlyPayment, label: "Monthly payment", format: currency }
    - { key: annualDebtService, label: "Annual debt service", format: currency }
    - { key: dscr, label: "DSCR", format: "0.00x" }
    - { key: verdict, label: "Versus the test", format: text }
    - { key: maxLoan, label: "Max loan at this test", format: currency }
  formula: |
    monthlyRate       = rate / 100 / 12
    n                 = amortYears * 12
    monthlyPayment    = loanAmount * monthlyRate / (1 - (1 + monthlyRate) ** -n)
    annualDebtService = monthlyPayment * 12
    dscr              = noi / annualDebtService
    verdict           = dscr >= testDscr ? "Clears the test" : "Below the test"
    maxDebtService    = noi / testDscr
    constantPerDollar = (monthlyRate / (1 - (1 + monthlyRate) ** -n)) * 12
    maxLoan           = maxDebtService / constantPerDollar
  disclaimer: "Indicative only. Not a loan quote, an offer of credit, or a commitment to lend."
---

Notes for Agent 10 / QA:

- One `[[RATE-SHEET: DSCR test by lender type]]` marker in `original_data_point.sentence`.
- Edge cases to handle in the client island, per the brief: `rate = 0` (fall back to
  `loanAmount / n` for the payment), `noi <= 0` (show "no coverage," not a negative ratio),
  `annualDebtService = 0` (do not divide by zero), and non-numeric input (never render `NaN`).
- The pre-computed worked example uses the tool's own default inputs so the server-rendered
  numbers and the live calculator agree; verify the five figures against the implemented formula
  before publishing, per the brief.
- Disclaimer must render visibly next to the outputs, not in a footer. No `offers` node in
  JSON-LD; `WebApplication` with `applicationCategory: FinanceApplication` plus `FAQPage` only. No
  `AggregateRating`. The calculator is not gated behind a form.
- This is a bonus deliverable beyond the 15 financing answer/hub pages: the brief file
  `geo/05-briefs/tools__dscr-calculator.md` lists ownership as "copy by Agent 6, built by Agent 10."
