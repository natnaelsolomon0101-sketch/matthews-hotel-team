# Brief: /tools/dscr-calculator

**Owner: copy by Agent 6, built by Agent 10** · Type: `tool` · Cluster: `tools` · Wave 1

**Template D in `geo/05-templates.md`. Server-rendered page, one client island.
The explanation text must be in the HTML. A calculator that is blank until JS runs is
invisible to an extractor, which defeats the reason for building it.**

```yaml
url: /tools/dscr-calculator
type: tool
cluster: tools
title: "Hotel DSCR Calculator"   # 24 chars
h1: "Hotel DSCR calculator: will my loan size?"
description: "Calculate debt service coverage ratio on a hotel loan, see how it sizes the loan, and compare against the thresholds lenders use in 2026."
updated: 2026-09-17
author: luke-thompson
reviewer: miles-cortez
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`, plus the calculator intent behind them.

- "What's a debt service coverage ratio (DSCR) and why does it matter for hotel loans?"
- "What loan-to-value ratio can I get on a hotel purchase?"
- "How much can I borrow against my hotel?"
- "What DSCR do hotel lenders require?"
- "Can a hotel with low occupancy still qualify for financing?"
- "How does a rate increase change my hotel loan amount?"

## Direct answer to open with (40-70 words, server-rendered)

> DSCR is net operating income divided by annual debt service. Hotel lenders generally test
> between 1.35x and 1.45x, which means the hotel must produce 35 to 45 percent more cash than the
> loan payment. Enter your NOI, loan amount, rate and amortization below and the calculator returns
> the ratio and the loan size that ratio supports at September 2026 rates.

## Key takeaways (server-rendered, above the calculator)

- DSCR = NOI / annual debt service. Both numbers are annual.
- Most hotel lenders test at 1.35x to 1.45x. Confirm the exact test before you model anything.
- DSCR is the test that turns a rate change into a proceeds change.
- If DSCR binds, the fixes are more equity, longer amortization, or higher NOI. Not a better story.
- Debt yield and LTV are the other two tests. The lowest of the three sets your loan.

## Tool spec

```yaml
tool:
  inputs:
    - { key: noi,        label: "Annual NOI",           type: currency, default: 1600000, min: 0 }
    - { key: loanAmount, label: "Loan amount",          type: currency, default: 12000000, min: 0 }
    - { key: rate,       label: "Interest rate",        type: percent,  default: 7.25, min: 0, max: 25, step: 0.05 }
    - { key: amortYears, label: "Amortization (years)", type: integer,  default: 25, min: 5, max: 40 }
    - { key: testDscr,   label: "Lender DSCR test",     type: number,   default: 1.35, min: 1.0, max: 2.0, step: 0.05 }
  outputs:
    - { key: monthlyPayment,    label: "Monthly payment",       format: currency }
    - { key: annualDebtService, label: "Annual debt service",   format: currency }
    - { key: dscr,              label: "DSCR",                  format: "0.00x" }
    - { key: verdict,           label: "Versus the test",       format: text }
    - { key: maxLoan,           label: "Max loan at this test", format: currency }
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
```

**Edge cases Agent 10 must handle:** `rate = 0` (the payment formula divides by zero; fall back to
`loanAmount / n`), `noi <= 0` (show "no coverage", not a negative ratio), `annualDebtService = 0`
(do not divide), and non-numeric input (do not render `NaN`).

## Required table (server-rendered)

**Caption:** DSCR thresholds by hotel lender type, September 2026

| Lender type | Typical DSCR test | Typical amortization | Notes |
|---|---|---|---|
| Bank / credit union | 1.35x to 1.45x | 20 to 25 years | Often paired with a recourse requirement |
| Life insurance company | 1.40x or higher | 25 to 30 years | Lower leverage, so DSCR rarely binds |
| CMBS conduit | 1.35x to 1.45x | 30 years | Debt yield usually binds before DSCR |
| SBA 7(a) / 504 | 1.20x to 1.35x | Fully amortizing | Lower test, offset by a personal guarantee |
| Debt fund / bridge | Interest-only coverage, often 1.10x to 1.25x | Interest only | Tested on stabilized pro forma, not trailing |

*Fill every threshold from the September 2026 rate sheet. Do not carry these forward from memory in
a later quarter.*

## Required original data point

- **Source:** `rates` → `/rates`
- **Sentence to use:** "Matthews Hotel Markets' September 2026 rate sheet shows the DSCR tests lenders are actually applying this month."
- **Blocked until Agent 8 ships `/rates`.** Until then write `[[RATE-SHEET: DSCR test by lender type]]`.

## Pre-computed worked example (server-rendered, slot D7)

**This renders in HTML with real numbers, so the page answers the question even when JS does not
run.** Use the tool's own defaults so the example and the calculator agree.

**Hypothetical: 95-key select-service hotel**

- Annual NOI: **$1,600,000**
- Loan amount: **$12,000,000**
- Rate: **7.25%**, amortization **25 years**
- Monthly payment: **$86,753**
- Annual debt service: **$1,041,036**
- **DSCR = $1,600,000 / $1,041,036 = 1.54x**
- Against a 1.35x test: **clears, with room**
- Max loan at 1.35x = ($1,600,000 / 1.35) / $0.0868 per dollar = **$13,654,000**

So this hypothetical borrower could take $1.65M more and still clear the coverage test. Whether they
should depends on the debt yield and LTV tests, which are the other two constraints.

*Agent 10: verify these five figures against the implemented formula before publishing. If the code
and the prose disagree, the page is wrong.*

## "How the math works" section (server-rendered, slot D8)

Write out the formula in plain text, define NOI, annual debt service, amortization and the DSCR
test, and link `/glossary/dscr` and `/glossary/noi` on first use.

## FAQ (5-8, visible, mirrored into FAQPage)

- **What is a good DSCR for a hotel loan?**
- **How do I calculate DSCR?**
- **What DSCR do hotel lenders require in 2026?**
- **What happens if my DSCR is below the test?**
- **Does DSCR use trailing or projected NOI?**
- **Is DSCR more important than LTV on a hotel loan?**
- **How does a longer amortization change DSCR?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/loan-requirements`, `/hotel-financing/hotel-loan-rates`, `/hotel-financing/hotel-lenders-by-type`, `/hotel-financing/refinance`
- **Glossary:** `/glossary/dscr`, `/glossary/debt-yield`, `/glossary/noi`
- **Data:** `/rates`
- **CTA (exactly one):** "Have us size your loan properly" → `/contact`

## Author / reviewer

- **Author:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- **Reviewed by:** Miles Cortez III, VP & Director, Hospitality Capital Markets - `/team/miles-cortez`

## Sources

- Federal Reserve H.15 Selected Interest Rates - https://www.federalreserve.gov/releases/h15/
- U.S. Treasury daily par yield curve - https://home.treasury.gov/interest-rates
- SBA 7(a) and 504 program pages - https://www.sba.gov/funding-programs/loans
- FDIC Risk Management Manual, CRE lending - https://www.fdic.gov/regulations/safety/manual/
- Matthews Hotel Markets September 2026 rate sheet - /rates (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets built this calculator against the same DSCR tests in our September 2026
> rate sheet, so the thresholds here are the ones our lenders are quoting.

## Warnings specific to this page

- **The disclaimer is required and must be visible next to the outputs.** It is not a footer item.
- JSON-LD is `WebApplication` with `applicationCategory: FinanceApplication`, plus `FAQPage`. **No `offers` node.** Nothing is sold here.
- Do not gate the calculator behind a form. A gated calculator earns no citations and no links.
- No `AggregateRating`. There are no reviews of this tool.

---

*Spec: `geo/05-templates.md` Template D. Voice: Shared Spec 5.5. No em-dashes.*
