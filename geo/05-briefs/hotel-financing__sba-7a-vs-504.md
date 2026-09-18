# Brief: /hotel-financing/sba-7a-vs-504

**Owner: Agent 6** · Type: `answer` · Cluster: `hotel-financing` · Wave 1

```yaml
url: /hotel-financing/sba-7a-vs-504
type: answer
cluster: hotel-financing
title: "SBA 7(a) vs 504 for Hotels: Which One?"   # 38 chars
h1: "What is the difference between an SBA 7(a) loan and an SBA 504 loan for a hotel?"
description: "SBA 7(a) versus 504 for a hotel purchase: eligibility, down payment, rate structure, loan caps and which one fits which deal."
updated: 2026-09-17
author: luke-thompson
reviewer: miles-cortez
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "What's the difference between an SBA 7(a) loan and an SBA 504 loan for a hotel?"
- "Can I get an SBA loan to buy a hotel?"
- "What's the minimum down payment for an SBA loan on a hotel?"
- "What down payment do I need for an SBA hotel loan?"
- "Are SBA hotel loan rates fixed or variable?"
- "Can I get 100% financing on a hotel purchase?"
- "What credit score do I need to get a hotel loan?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Both programs finance hotels. 7(a) is one loan from one lender, capped at $5 million, usually variable, and it can cover working capital. 504 is two loans: a bank first plus a fixed-rate CDC debenture, with no dollar cap on the bank piece. As of September 2026, 7(a) is faster and more flexible, and 504 is cheaper on a large, real-estate-heavy purchase.

*Word count of the draft above: 62. Must contain at least one number and one date.*

## Key takeaways (3-5)

- Hotels are eligible for both programs. Owner-occupancy is satisfied because the owner operates the business.
- 7(a) caps at $5 million of SBA-guaranteed loan. 504 has no equivalent cap on the bank's first lien.
- Down payment is typically 10 to 20 percent under 7(a) and 10 to 15 percent under 504, with more required for a first-time hotel owner.
- 504's debenture piece is fixed for 20 or 25 years. 7(a) is usually variable off Prime.
- Neither program offers 100 percent financing on a hotel purchase.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **Is a hotel eligible for an SBA loan at all?**
1. **What is the actual structural difference between 7(a) and 504?**
1. **How much do I have to put down under each?**
1. **Are the rates fixed or variable?**
1. **How big a hotel can each program finance?**
1. **Which is faster to close?**
1. **Which one fits my deal?**

## Required table

**Caption:** SBA 7(a) versus SBA 504 for a hotel purchase

|  | SBA 7(a) | SBA 504 |
|---|---|---|
| Structure | One loan, one lender, SBA guaranty | Bank first lien + CDC debenture + borrower equity |
| Maximum SBA exposure | $5,000,000 | Debenture caps apply; bank first lien is uncapped |
| Typical borrower equity | 10% to 20% | 10% to 15%, more for a special-purpose property |
| Rate type | Usually variable off Prime; fixed available | Debenture is fixed for 20 or 25 years |
| Use of proceeds | Real estate, FF&E, working capital, refinance | Real estate and long-lived fixed assets only |
| Prepayment | Declining penalty on terms over 15 years | Declining penalty over the first 10 years |
| Best fit | Smaller purchase, needs working capital, wants speed | Larger real-estate-heavy purchase, wants fixed rate |

*Every cell in this table must be verified against the SBA's own pages on the day of publication and dated on the page.*

## Required original data point

- **Source:** `rates` → `/rates`
- **Sentence to use:** "Matthews Hotel Markets' September 2026 rate sheet shows where SBA hotel quotes are landing against the conventional alternative."
- **Blocked until Agent 8 ships `/rates`.** Until then write the placeholder `[[RATE-SHEET: SBA 7(a) indicative rate, September 2026]]`. Agent 10 fails the build on any surviving placeholder.

## Worked example (show the arithmetic)

**Hypothetical: $6.0M hotel purchase under each program**

Hypothetical. A 62-key exterior-corridor hotel at a $6.0M purchase price.

**7(a) path.** SBA-guaranteed loan capped at $5.0M. At 85% of price that is $5.1M, so the
cap binds: loan = **$5.0M**, borrower equity = **$1.0M**, or 16.7%. One closing, one lender.

**504 path.** Bank first lien at 50% = **$3.0M**. CDC debenture at 35% = **$2.1M**.
Borrower equity at 15% = **$900,000**. Two closings, and the $2.1M piece is fixed for 25
years.

The 504 path costs $100,000 less at closing and fixes a third of the stack for 25 years.
The 7(a) path closes faster and leaves room for working capital. Neither is wrong. Confirm
the current percentage splits against SBA.gov before you rely on this.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **Can I buy a hotel with an SBA loan?**
- **What is the maximum SBA 7(a) loan for a hotel?**
- **How much do I need to put down on an SBA hotel loan?**
- **Is an SBA 504 loan fixed rate?**
- **Can I use an SBA loan to refinance an existing hotel loan?**
- **How long does an SBA hotel loan take to close?**
- **Does an SBA loan require a personal guarantee?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/loan-requirements`, `/hotel-financing/hotel-lenders-by-type`, `/hotel-financing/hotel-loan-rates`, `/hotel-financing/cmbs-loans`
- **Glossary:** `/glossary/dscr`, `/glossary/noi`
- **Data:** `/rates`
- **CTA (exactly one):** "Ask which program fits your deal" → `/contact`

## Author / reviewer

- **Author:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- **Reviewed by:** Miles Cortez III, VP & Director, Hospitality Capital Markets - `/team/miles-cortez`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- SBA 7(a) loan program - https://www.sba.gov/funding-programs/loans/7a-loans
- SBA 504 loan program - https://www.sba.gov/funding-programs/loans/504-loans
- SBA SOP 50 10 - https://www.sba.gov/document/sop-50-10-lender-development-company-loan-programs
- SBA maximum allowable 7(a) interest rates (current notice on sba.gov)
- Matthews Hotel Markets September 2026 rate sheet - /rates (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets quotes SBA and conventional side by side, because on a $6M hotel the cheaper headline rate is often the more expensive deal.

## Warnings specific to this page

- SBA percentages and caps change. Every number on this page cites an sba.gov URL and shows the accessed date.
- Do not state a 'typical SBA rate' without the Prime reference and the date.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
