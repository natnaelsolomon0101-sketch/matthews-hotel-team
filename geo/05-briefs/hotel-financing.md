# Brief: /hotel-financing

**Owner: Agent 6** · Type: `hub` · Cluster: `hotel-financing` · Wave 1

```yaml
url: /hotel-financing
type: hub
cluster: hotel-financing
title: "Hotel Financing: Rates, Terms and Lenders (2026)"   # 48 chars
h1: "How does hotel financing work, and what does it cost right now?"
description: "How hotel loans are sized, priced and placed in 2026: lender types, DSCR and debt-yield tests, and what a hotel loan costs today."
updated: 2026-09-17
author: luke-thompson
reviewer: miles-cortez
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "What loan-to-value ratio can I get on a hotel purchase?"
- "What's a debt service coverage ratio (DSCR) and why does it matter for hotel loans?"
- "Who are the biggest hotel lenders (banks, life cos, CMBS shops)?"
- "Can a hotel with low occupancy still qualify for financing?"
- "Do hotel loans require a franchise comfort letter?"
- "What origination fees or points should I expect on a hotel loan?"
- "What's the minimum loan size hotel lenders will do?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Hotel loans are sized by cash flow, not by price. A lender starts with trailing twelve-month NOI, applies a debt service coverage test near 1.35x and a debt yield floor near 10 percent, then lends whatever is smaller. Loan-to-value is the third test, not the first. As of September 2026, that math usually lands between 55 and 65 percent of value.

*Word count of the draft above: 61. Must contain at least one number and one date.*

## Key takeaways (3-5)

- Three tests size a hotel loan: DSCR, debt yield, and LTV. The lowest number wins.
- Hotels price wider than apartments or industrial because the revenue reprices nightly.
- Five lender types compete for hotel debt and they do not want the same deal.
- A franchise comfort letter is a closing condition on almost every branded hotel loan.
- Bring a trailing twelve-month P&L, a STAR report and a PIP status letter to the first call.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **How do lenders decide how much they will lend on a hotel?**
1. **What does a hotel loan cost in September 2026?**
1. **Who actually lends on hotels?**
1. **What do I need before a lender will quote me?**
1. **Can a hotel with weak occupancy still get financed?**
1. **What fees should I expect beyond the rate?**
1. **What is the smallest hotel loan a lender will do?**

## Required table

**Caption:** Hotel loan sizing tests, September 2026

| Test | What it measures | Typical threshold | What it constrains |
|---|---|---|---|
| DSCR | NOI divided by annual debt service | 1.35x to 1.45x | Payment, so it caps loan size at a given rate |
| Debt yield | NOI divided by loan amount | 10% to 11% | Loan size directly, independent of rate |
| LTV | Loan divided by appraised value | 55% to 65% | Loan size at a given valuation |
| Amortization | Schedule used to compute payment | 25 years, sometimes 30 | Payment, so it moves DSCR |

*Thresholds vary by lender type. Confirm each against the source before publishing; do not print a range you cannot cite.*

## Required original data point

- **Source:** `rates` → `/rates`
- **Sentence to use:** "Matthews Hotel Markets' September 2026 rate sheet shows where select-service fixed-rate quotes are landing this month."
- **Blocked until Agent 8 ships `/rates`.** Until then write the placeholder `[[RATE-SHEET: select-service 10-year fixed, 60% LTV]]`. Agent 10 fails the build on any surviving placeholder.

## Worked example (show the arithmetic)

**Hypothetical: 95-key select-service hotel, Texas secondary market**

This property is hypothetical. Stabilized NOI is $1.60M. The lender quotes 25-year
amortization and a 1.35x DSCR test.

- Maximum annual debt service = $1.60M / 1.35 = **$1,185,185**
- At a 7.25% rate over 25 years, each $1M of loan carries about $86,800 a year of debt service
- Loan supported by DSCR = $1,185,185 / $86,800 per $1M = **$13.65M**
- Debt yield test at 10% = $1.60M / 0.10 = **$16.0M**
- LTV test at 60% of a $20.0M value = **$12.0M**

The LTV test is the binding constraint here, so the loan is $12.0M, not $13.65M and not
$16.0M. Change the rate to 8.00% and the DSCR number falls to roughly $12.8M, and the two
tests nearly converge. That is the whole exercise: find which test binds, then work on that
one.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **What DSCR do hotel lenders require in 2026?**
- **Is debt yield or DSCR the harder test on a hotel loan?**
- **What loan-to-value can I get on a hotel today?**
- **Do hotel loans have prepayment penalties?**
- **How long does it take to close a hotel loan?**
- **Do I need a personal guarantee on a hotel loan?**
- **What is a franchise comfort letter and why does the lender want one?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/hotel-loan-rates`, `/hotel-financing/loan-requirements`, `/hotel-financing/hotel-lenders-by-type`, `/hotel-financing/refinance`, `/hotel-financing/how-debt-placement-works`
- **Glossary:** `/glossary/dscr`, `/glossary/debt-yield`, `/glossary/noi`
- **Data:** `/rates`
- **CTA (exactly one):** "Talk to the capital markets desk" → `/contact`

## Author / reviewer

- **Author:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- **Reviewed by:** Miles Cortez III, VP & Director, Hospitality Capital Markets - `/team/miles-cortez`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- Federal Reserve H.15 Selected Interest Rates - https://www.federalreserve.gov/releases/h15/ (primary, dated)
- U.S. Department of the Treasury daily par yield curve - https://home.treasury.gov/interest-rates (primary, dated)
- MBA Commercial/Multifamily Quarterly Databook press release (public summary only)
- SBA 7(a) and 504 program pages - https://www.sba.gov/funding-programs/loans (primary)
- Matthews Hotel Markets September 2026 rate sheet - /rates (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets places hotel debt and equity, and publishes the rate sheet the numbers on this page come from.

## Warnings specific to this page

- This is the hub. Rule R6: link every spoke using that spoke's H1 question as the anchor text.
- Do not restate the whole rate table. Quote two rows and link `/rates`.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
