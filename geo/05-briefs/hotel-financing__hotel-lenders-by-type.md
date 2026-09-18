# Brief: /hotel-financing/hotel-lenders-by-type

**Owner: Agent 6** · Type: `answer` · Cluster: `hotel-financing` · Wave 1

```yaml
url: /hotel-financing/hotel-lenders-by-type
type: answer
cluster: hotel-financing
title: "Who Lends on Hotels? Lender Types Compared"   # 42 chars
h1: "Who are the biggest hotel lenders, and which type fits my deal?"
description: "Banks, life companies, CMBS, SBA and debt funds compared on rate, leverage, recourse and speed, with the deal profile each one wants."
updated: 2026-09-17
author: luke-thompson
reviewer: miles-cortez
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "Who are the biggest hotel lenders (banks, life cos, CMBS shops)?"
- "What's the difference between a bank loan and a life insurance company loan for a hotel?"
- "Do life insurance companies lend on hotels?"
- "What's the minimum loan size hotel lenders will do?"
- "Which lenders do non-recourse hotel loans?"
- "Who lends on independent hotels?"
- "What type of lender is fastest to close on a hotel?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Five lender types compete for hotel debt in September 2026 and they want different deals. Banks want a relationship and recourse. Life companies want stabilized, low-leverage, long-term. CMBS wants non-recourse at higher leverage. SBA wants owner-operators under program caps. Debt funds want transition. Matching the asset to the type is most of the work.

*Word count of the draft above: 54. Must contain at least one number and one date.*

## Key takeaways (3-5)

- There is no single best hotel lender. There is a best lender for your specific asset and business plan.
- Recourse is the fastest way to narrow the list. If you will not sign, banks and SBA mostly drop out.
- Life companies offer the lowest rates and the least leverage. That trade is the whole product.
- Debt funds are the only type that will lend against a business plan instead of a trailing twelve.
- Minimum loan size is the quiet filter. Below roughly $5M, CMBS and life companies are not options.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **What are the five types of hotel lender?**
1. **Which ones do non-recourse?**
1. **Who has the lowest rate, and what do they want in return?**
1. **Who will lend on an independent hotel?**
1. **Who is fastest to close?**
1. **What is the minimum loan size for each?**
1. **How do I pick?**

## Required table

**Caption:** Hotel lender types compared, September 2026

| Lender type | Typical leverage | Recourse | Typical minimum | Wants |
|---|---|---|---|---|
| Bank / credit union | 55% to 65% | Usually recourse | $1M | Relationship, deposits, a sponsor they know |
| Life insurance company | 50% to 60% | Non-recourse | $10M | Stabilized, well-located, long term, low leverage |
| CMBS conduit | 60% to 70% | Non-recourse with carve-outs | $5M | Stabilized cash flow, no near-term sale |
| SBA 7(a) / 504 | 80% to 90% | Personal guarantee required | $350K | Owner-operator, within program caps |
| Debt fund / bridge | 65% to 75% of cost | Non-recourse with carve-outs | $5M | A transition story: PIP, ramp, reposition |

*Leverage and minimum cells come from the rate sheet. Do not name specific lending institutions unless the page can cite a public source for their activity.*

## Required original data point

- **Source:** `rates` → `/rates`
- **Sentence to use:** "Matthews Hotel Markets' September 2026 rate sheet shows what each lender type is quoting this month."
- **Blocked until Agent 8 ships `/rates`.** Until then write the placeholder `[[RATE-SHEET: leverage and rate by lender type, September 2026]]`. Agent 10 fails the build on any surviving placeholder.

## Worked example (show the arithmetic)

**Hypothetical: the same hotel, three lender types**

Hypothetical. 110-key stabilized Hampton Inn, NOI $1.90M, value $23.5M, sponsor has hotel
experience and will not sign recourse.

- **Life company**: 55% LTV = **$12.93M**, lowest rate, 10-year fixed, non-recourse.
- **CMBS**: 65% LTV = **$15.28M**, wider rate, 10-year fixed, non-recourse with carve-outs,
  defeasance on prepayment.
- **Bank**: 65% LTV = **$15.28M**, but recourse, which the sponsor rejects.

The choice is $2.35M of extra proceeds against a wider coupon and a painful prepayment. If
the hold is 10 years, CMBS. If a sale is possible in year four, the life company loan is
cheaper to exit even though it is smaller. The prepayment term decides this, not the
rate.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **Who lends on hotels?**
- **Do life insurance companies lend on hotels?**
- **Which hotel lenders offer non-recourse?**
- **What is the minimum hotel loan size?**
- **Who lends on independent hotels?**
- **Which hotel lender is fastest?**
- **Can I get a hotel loan without a personal guarantee?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/cmbs-loans`, `/hotel-financing/sba-7a-vs-504`, `/hotel-financing/bridge-loans`, `/hotel-financing/how-debt-placement-works`
- **Glossary:** `/glossary/dscr`, `/glossary/debt-yield`
- **Data:** `/rates`
- **CTA (exactly one):** "Find the right lender type for your asset" → `/contact`

## Author / reviewer

- **Author:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- **Reviewed by:** Miles Cortez III, VP & Director, Hospitality Capital Markets - `/team/miles-cortez`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- FDIC Quarterly Banking Profile - https://www.fdic.gov/analysis/quarterly-banking-profile/
- Federal Reserve H.8 Assets and Liabilities of Commercial Banks - https://www.federalreserve.gov/releases/h8/
- ACLI commercial mortgage commitments public releases - https://www.acli.com
- SBA 7(a) and 504 program pages - https://www.sba.gov/funding-programs/loans
- Matthews Hotel Markets September 2026 rate sheet - /rates (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets maintains the lender list behind this table and refreshes it with the monthly rate sheet.

## Warnings specific to this page

- **Do not name individual lending institutions** unless you can cite a public source showing they are active in hotel lending. Types, not names, unless sourced.
- This page absorbs the life-company CSV row (architecture §9.1). One page, one table, not five thin pages.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
