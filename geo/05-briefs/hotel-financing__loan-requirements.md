# Brief: /hotel-financing/loan-requirements

**Owner: Agent 6** · Type: `answer` · Cluster: `hotel-financing` · Wave 1

```yaml
url: /hotel-financing/loan-requirements
type: answer
cluster: hotel-financing
title: "Hotel Loan Requirements: What Lenders Ask For"   # 45 chars
h1: "What do lenders require for a hotel loan?"
description: "The documents, ratios and sponsor tests behind a hotel loan approval in 2026, plus what to send a lender before the first call."
updated: 2026-09-17
author: luke-thompson
reviewer: nate-solomon
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "What documents do lenders want for a hotel refinance?"
- "What's a hotel loan maturity checklist I should work through 12 months out?"
- "How much cash do I need to buy a select-service hotel?"
- "What financing options exist for a first-time hotel buyer?"
- "What credit score do I need to get a hotel loan?"
- "Can a hotel with low occupancy still qualify for financing?"
- "Do hotel loans require a franchise comfort letter?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> A hotel lender wants three things: cash flow that clears a roughly 1.35x coverage test, a sponsor with hotel experience and liquidity, and a clean franchise position. The document package is a trailing twelve-month P&L, a STAR report, a PIP status letter, the franchise agreement and a personal financial statement. Expect 55 to 65 percent leverage in September 2026.

*Word count of the draft above: 59. Must contain at least one number and one date.*

## Key takeaways (3-5)

- The trailing twelve-month P&L and the STAR report are the two documents that decide the deal.
- A first-time buyer usually needs 25 to 35 percent equity, more without hotel operating experience.
- An open PIP does not kill a loan, but an unfunded PIP does.
- Most hotel loans under $15M carry a personal guarantee. Non-recourse starts higher and needs CMBS or a life company.
- Start the maturity conversation 12 months out, not 90 days out.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **What documents does a hotel lender ask for?**
1. **What ratios do I have to clear?**
1. **How much cash do I need to bring?**
1. **What does a lender look for in the sponsor?**
1. **Will an open PIP stop my loan?**
1. **Can I get financed if occupancy dropped?**
1. **What should I be doing 12 months before my loan matures?**

## Required table

**Caption:** Hotel loan document package, by purpose

| Document | Who produces it | What the lender is testing | Lead time |
|---|---|---|---|
| Trailing 12-month P&L, monthly | Owner or management company | NOI, and whether it is trending | 1 week |
| STAR report | STR, via the brand | Occupancy, ADR and RevPAR index versus the comp set | 1 to 2 weeks |
| Franchise agreement + PIP letter | Brand | Remaining term, transfer rights, capital required | 2 to 6 weeks |
| Personal financial statement, schedule of real estate | Sponsor | Liquidity, net worth, hotel experience | 1 week |
| Capital expenditure history, 3 years | Owner | Whether NOI was bought with deferred maintenance | 1 week |
| Appraisal and PCA | Lender-ordered | Value, and deferred maintenance | 3 to 5 weeks |

*Lead times are the practical ones we see on the desk, not a lender policy. Say that on the page.*

## Required original data point

- **Source:** `rates` → `/rates`
- **Sentence to use:** "Matthews Hotel Markets' September 2026 rate sheet shows the leverage lenders are actually quoting this month."
- **Blocked until Agent 8 ships `/rates`.** Until then write the placeholder `[[RATE-SHEET: current maximum LTV by lender type]]`. Agent 10 fails the build on any surviving placeholder.

## Worked example (show the arithmetic)

**Hypothetical: what a first-time buyer brings to a $20.0M purchase**

Hypothetical. A first-time hotel buyer under contract at $20.0M on a 95-key select-service
asset with $1.60M of NOI.

- Loan at 60% LTV = **$12.00M**
- Equity for the purchase = $20.00M - $12.00M = **$8.00M**
- Closing costs, roughly 2% of price = **$400,000**
- Lender-required FF&E reserve at closing, 4% of revenue on $4.20M = **$168,000**
- Franchise application and transfer fees = **$100,000** (confirm against the brand's FDD)

Total cash at closing is about **$8.67M**, not $8.00M. The 8 percent gap between "the down
payment" and "the check" is the part first-time buyers miss.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **What credit score do hotel lenders require?**
- **How much equity do I need to buy a hotel?**
- **Do hotel lenders require hotel operating experience?**
- **Is a personal guarantee required on a hotel loan?**
- **Can I finance a hotel with an open PIP?**
- **What is a comfort letter and who issues it?**
- **How far in advance should I start a refinance?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/hotel-loan-rates`, `/hotel-financing/sba-7a-vs-504`, `/hotel-financing/refinance`, `/hotel-financing/pip-and-renovation-loans`
- **Glossary:** `/glossary/dscr`, `/glossary/debt-yield`, `/glossary/noi`, `/glossary/pip`
- **Data:** `/rates`
- **CTA (exactly one):** "Send us your T-12 and we will size it" → `/contact`

## Author / reviewer

- **Author:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- **Reviewed by:** Nate Solomon, Hospitality Associate - `/team/nate-solomon`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- SBA 7(a) eligibility and credit standards - https://www.sba.gov/funding-programs/loans/7a-loans
- SBA SOP 50 10 (lender operating procedures) - https://www.sba.gov/document/sop-50-10-lender-development-company-loan-programs
- FDIC Risk Management Manual, commercial real estate lending - https://www.fdic.gov/regulations/safety/manual/
- STR STAR report description - https://str.com (product page; do not reproduce STAR data)
- Matthews Hotel Markets September 2026 rate sheet - /rates (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets runs this package for clients before the first lender call, which is why our quotes come back sized rather than caveated.

## Warnings specific to this page

- Do not republish any STAR or CoStar table. Describe the document; never print licensed data.
- Franchise fee figures must cite the brand's own FDD or be dropped.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
