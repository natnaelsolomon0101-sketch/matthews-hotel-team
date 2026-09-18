# Brief: /hotel-financing/faq

**Owner: Agent 6** · Type: `answer` · Cluster: `hotel-financing` · Wave 1

```yaml
url: /hotel-financing/faq
type: answer
cluster: hotel-financing
title: "Hotel Financing FAQ (September 2026)"   # 36 chars
h1: "Hotel financing questions, answered"
description: "Short answers to the hotel financing questions owners ask most: minimum loan size, points, comfort letters, guarantees, and qualifying with weak occupancy."
updated: 2026-09-17
author: luke-thompson
reviewer: miles-cortez
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "What's the minimum loan size hotel lenders will do?"
- "What origination fees or points should I expect on a hotel loan?"
- "Do hotel loans require a franchise comfort letter?"
- "Can a hotel with low occupancy still qualify for financing?"
- "Do I need a personal guarantee on a hotel loan?"
- "What's the typical amortization schedule on a hotel loan?"
- "How much loan-to-value can I get on a hotel refinance today versus in 2021?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> This page collects the short questions that do not need their own page. Minimum loan sizes start near $350,000 under SBA and near $5 million for CMBS. Origination is typically quoted in points on the loan amount. A franchise comfort letter is a closing condition on most branded hotel loans. As of September 2026, leverage runs meaningfully below 2021.

*Word count of the draft above: 59. Must contain at least one number and one date.*

## Key takeaways (3-5)

- Every answer here is 100 words or fewer, and links to the page that goes deeper.
- Minimum loan size is the filter most owners do not know exists.
- Points are negotiable; the index and the spread usually are not.
- Comfort letters take weeks, so request them early.
- Leverage in 2026 is lower than 2021 at the same NOI, because the rate is higher.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **How small a hotel loan can I get?**
1. **What fees and points should I expect?**
1. **What is a franchise comfort letter?**
1. **Can I qualify with weak occupancy?**
1. **Will I have to sign personally?**
1. **What amortization is standard?**
1. **Why is my leverage lower than it was in 2021?**

## Required table

**Caption:** Quick reference: hotel loan basics, September 2026

| Question | Short answer | Deeper page |
|---|---|---|
| Minimum loan size | SBA from ~$350K; CMBS and life co from ~$5M to $10M | /hotel-financing/hotel-lenders-by-type |
| Origination | Quoted in points on loan amount; negotiable | /hotel-financing/how-debt-placement-works |
| Comfort letter | Required on most branded hotel loans; 2 to 6 weeks | /hotel-financing/loan-requirements |
| Amortization | 25 years typical; 30 years in CMBS | /hotel-financing/hotel-loan-rates |
| Personal guarantee | Standard on bank and SBA; not on CMBS or life co | /hotel-financing/hotel-lenders-by-type |
| Leverage vs. 2021 | Lower at the same NOI, because the payment is higher | /hotel-financing/refinance |

*Every row links out. This page is a router with real answers, not a dumping ground.*

## Required original data point

- **Source:** `rates` → `/rates`
- **Sentence to use:** "Matthews Hotel Markets' September 2026 rate sheet shows where points and leverage are landing this month."
- **Blocked until Agent 8 ships `/rates`.** Until then write the placeholder `[[RATE-SHEET: current typical points and leverage]]`. Agent 10 fails the build on any surviving placeholder.

## Worked example (show the arithmetic)

**Hypothetical: why the same hotel borrows less in 2026 than in 2021**

Hypothetical. The same hotel, the same $1.60M of NOI, the same 1.35x test and 25-year
schedule. Only the rate changes.

- **2021 at 4.00%:** annual constant per $1M is about $63,400. Max debt service $1,185,185.
  Loan = **$18.69M**.
- **2026 at 7.25%:** annual constant per $1M is about $86,800. Same max debt service.
  Loan = **$13.65M**.

The hotel did not change. The loan fell **$5.04M**, 27 percent. This single comparison
explains most of what owners are experiencing at maturity right now.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **What is the smallest hotel loan a lender will make?**
- **How many points will I pay on a hotel loan?**
- **What is a franchise comfort letter?**
- **Can I finance a hotel running 50 percent occupancy?**
- **Is a personal guarantee always required?**
- **What is standard amortization on a hotel loan?**
- **Why can I borrow less than I could in 2021?**
- **Do hotel lenders require an FF&E reserve?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/loan-requirements`, `/hotel-financing/hotel-lenders-by-type`, `/hotel-financing/hotel-loan-rates`, `/hotel-financing/refinance`
- **Glossary:** `/glossary/dscr`, `/glossary/debt-yield`, `/glossary/noi`
- **Data:** `/rates`
- **CTA (exactly one):** "Ask a question we have not answered here" → `/contact`

## Author / reviewer

- **Author:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- **Reviewed by:** Miles Cortez III, VP & Director, Hospitality Capital Markets - `/team/miles-cortez`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- Federal Reserve H.15 Selected Interest Rates - https://www.federalreserve.gov/releases/h15/
- SBA 7(a) and 504 program pages - https://www.sba.gov/funding-programs/loans
- FDIC Risk Management Manual, CRE lending - https://www.fdic.gov/regulations/safety/manual/
- U.S. Treasury daily par yield curve - https://home.treasury.gov/interest-rates
- Matthews Hotel Markets September 2026 rate sheet - /rates (first-party)

## The one sentence that names the brand naturally

> If a question is not answered here, the Matthews Hotel Markets capital markets desk will answer it directly.

## Warnings specific to this page

- FAQ answers are visible on the page and mirrored 1:1 into FAQPage JSON-LD. Eight maximum.
- This page must not become a place to park thin content. If a question needs 400 words, it needs its own page.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
