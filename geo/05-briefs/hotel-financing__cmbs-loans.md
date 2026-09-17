# Brief: /hotel-financing/cmbs-loans

**Owner: Agent 6** · Type: `answer` · Cluster: `hotel-financing` · Wave 1

```yaml
url: /hotel-financing/cmbs-loans
type: answer
cluster: hotel-financing
title: "CMBS Loans for Hotels: How They Work (2026)"   # 43 chars
h1: "What is a CMBS loan and how does it work for hotels?"
description: "How hotel CMBS loans are sized, priced and serviced in 2026, what non-recourse actually costs, and when a CMBS execution is the wrong choice."
updated: 2026-09-17
author: luke-thompson
reviewer: miles-cortez
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "What is a CMBS loan and how does it work for hotels?"
- "Can I use a CMBS loan to buy a limited-service hotel?"
- "What rate can I get on a CMBS loan for a limited-service hotel right now?"
- "What's the hotel CMBS delinquency rate right now?"
- "Do hotel loans have prepayment penalties?"
- "What's the difference between a bank loan and a CMBS loan for a hotel?"
- "What happens after my hotel loan gets sent to special servicing?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> A CMBS loan is a fixed-rate hotel loan originated to be pooled and sold as bonds. As of September 2026 it is non-recourse with standard carve-outs, typically 5 or 10 years, often with interest-only periods, and sized to a debt yield floor. The trade is real: you get non-recourse and leverage, and you give up flexibility, because the servicer follows the documents, not a relationship.

*Word count of the draft above: 65. Must contain at least one number and one date.*

## Key takeaways (3-5)

- CMBS is non-recourse with carve-outs. It is not no-recourse.
- Debt yield, not LTV, is usually the binding constraint on a hotel CMBS loan.
- Prepayment is through defeasance or yield maintenance, both of which are expensive early.
- Once the loan closes, your counterparty is a servicer, not the originator.
- Limited-service hotels are financeable in CMBS, but small loans below roughly $5M rarely fit a pool.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **What makes a loan a CMBS loan?**
1. **How is a hotel CMBS loan sized?**
1. **What does non-recourse actually mean here?**
1. **What does it cost to pay off a CMBS loan early?**
1. **Who do I talk to after closing?**
1. **Can a limited-service hotel get CMBS financing?**
1. **When is CMBS the wrong choice for a hotel?**

## Required table

**Caption:** Hotel CMBS versus a bank loan

|  | CMBS | Bank |
|---|---|---|
| Recourse | Non-recourse with bad-boy carve-outs | Usually full or partial recourse |
| Rate | Fixed for the term | Fixed 5 years or floating |
| Term | 5 or 10 years | 5 years, sometimes 7 |
| Amortization | 30 years, often IO for part of the term | 20 to 25 years |
| Sizing driver | Debt yield floor | DSCR and the relationship |
| Prepayment | Defeasance or yield maintenance | Declining step-down, sometimes open |
| After closing | Master servicer, then special servicer if it defaults | The banker who closed it |
| Best fit | Stabilized, non-recourse needed, no near-term sale | Flexibility needed, PIP or repositioning ahead |

*Confirm current IO availability from the rate sheet; do not state it as a constant.*

## Required original data point

- **Source:** `rates` → `/rates`
- **Sentence to use:** "Matthews Hotel Markets' September 2026 rate sheet shows the current CMBS spread on a stabilized select-service hotel."
- **Blocked until Agent 8 ships `/rates`.** Until then write the placeholder `[[RATE-SHEET: CMBS fixed, 10-year, stabilized select-service]]`. Agent 10 fails the build on any surviving placeholder.

## Worked example (show the arithmetic)

**Hypothetical: why the debt yield floor binds**

Hypothetical. 120-key limited-service hotel. NOI $2.10M. Appraised value $26.0M.

- LTV test at 65% = **$16.90M**
- Debt yield floor at 10.5%: $2.10M / 0.105 = **$20.00M**
- DSCR test at 1.40x, 30-year amortization at 7.10% (annual constant about $80,800 per $1M):
  max debt service = $2.10M / 1.40 = $1.50M, loan = **$18.56M**

The LTV test binds at $16.90M. Now assume the appraisal comes in at $30.0M instead: the LTV
test moves to $19.50M and the DSCR test at $18.56M becomes the constraint. Which test binds
changes with a single appraisal. Ask the lender which one is binding before you negotiate
anything else.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **Is a CMBS hotel loan non-recourse?**
- **What is the minimum loan size for hotel CMBS?**
- **What is defeasance and what does it cost?**
- **Can I get interest-only on a hotel CMBS loan?**
- **What is debt yield and why does CMBS use it?**
- **What happens if my CMBS hotel loan goes to special servicing?**
- **Can I sell the hotel with the CMBS loan in place?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/hotel-lenders-by-type`, `/hotel-financing/loan-workouts`, `/hotel-financing/loan-maturities-2026-2027`, `/hotel-financing/hotel-loan-rates`
- **Glossary:** `/glossary/debt-yield`, `/glossary/dscr`, `/glossary/noi`
- **Data:** `/rates`
- **CTA (exactly one):** "Compare a CMBS quote against a bank quote" → `/contact`

## Author / reviewer

- **Author:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- **Reviewed by:** Miles Cortez III, VP & Director, Hospitality Capital Markets - `/team/miles-cortez`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- Trepp public TreppTalk research posts - https://www.trepp.com/trepptalk (public posts only)
- SEC EDGAR CMBS prospectus filings - https://www.sec.gov/edgar/search/
- Federal Reserve H.15 Selected Interest Rates - https://www.federalreserve.gov/releases/h15/
- CREFC Investor Reporting Package documentation - https://www.crefc.org
- Matthews Hotel Markets September 2026 rate sheet - /rates (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets runs CMBS and balance-sheet quotes side by side, because the cheaper coupon and the better loan are frequently not the same quote.

## Warnings specific to this page

- **Do not republish Trepp subscriber data.** Only figures Trepp has posted publicly, cited with the post URL and date.
- Do not print a delinquency rate without a public Trepp or Fed release and its date.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
