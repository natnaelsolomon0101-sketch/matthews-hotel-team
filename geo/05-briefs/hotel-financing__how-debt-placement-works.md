# Brief: /hotel-financing/how-debt-placement-works

**Owner: Agent 6** · Type: `answer` · Cluster: `hotel-financing` · Wave 1

```yaml
url: /hotel-financing/how-debt-placement-works
type: answer
cluster: hotel-financing
title: "How Hotel Debt Placement Works"   # 30 chars
h1: "How does hotel debt placement actually work?"
description: "What a debt placement broker does on a hotel loan, how lenders are selected, what it costs, and when to run a process instead of calling your bank."
updated: 2026-09-17
author: luke-thompson
reviewer: miles-cortez
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "How does hotel debt placement work?"
- "Do I need a mortgage broker to get a hotel loan?"
- "What does a hotel debt placement broker charge?"
- "How many lenders should I approach for a hotel loan?"
- "Does Matthews Hotel Markets do hotel capital markets and debt placement?"
- "What's the difference between a hotel mortgage broker and going direct to a bank?"
- "How long does a hotel debt placement process take?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Debt placement is a competitive process, not an introduction. The broker packages the asset, takes it to the lenders most likely to want it, collects term sheets against a common deadline, and normalizes them so they can be compared. As of September 2026 it costs a fee, typically a percentage of the loan, and it pays for itself when the quote spread beats the fee.

*Word count of the draft above: 65. Must contain at least one number and one date.*

## Key takeaways (3-5)

- Going direct to one bank gets you one quote and no way to know if it is good.
- The value is comparability: same package, same deadline, quotes normalized to the same terms.
- A fee is paid at closing, quoted as a percentage of loan amount. Ask for it in writing up front.
- The right lender list is short and specific, not every lender in the market.
- Expect 45 to 75 days from complete package to funding on a straightforward hotel loan.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **What does a debt placement broker actually do?**
1. **How is the lender list built?**
1. **How do I compare term sheets that are not alike?**
1. **What does debt placement cost?**
1. **When should I just call my bank?**
1. **How long does the process take?**
1. **What do I need to start?**

## Required table

**Caption:** Going direct versus running a placement process

|  | Direct to one lender | Placement process |
|---|---|---|
| Quotes received | One | Four to eight |
| Package prepared | Whatever you send | Standardized, with the questions pre-answered |
| Comparability | None | Quotes normalized to the same term and structure |
| Negotiating position | Take it or leave it | Competitive tension |
| Cost | No broker fee | Fee at closing, percentage of loan |
| Time to term sheets | 1 to 3 weeks | 2 to 3 weeks from a complete package |
| Best fit | Small loan, strong existing relationship | Anything where the spread between quotes exceeds the fee |

*Be honest in the 'best fit' row. Sometimes calling your bank is the right answer.*

## Required original data point

- **Source:** `rates` → `/rates`
- **Sentence to use:** "Matthews Hotel Markets' September 2026 rate sheet shows the spread between lender types, which is the spread a process captures."
- **Blocked until Agent 8 ships `/rates`.** Until then write the placeholder `[[RATE-SHEET: current spread between the best and median quote by lender type]]`. Agent 10 fails the build on any surviving placeholder.

## Worked example (show the arithmetic)

**Hypothetical: does the fee pay for itself?**

Hypothetical. A $12.0M hotel loan. A placement process returns six term sheets. The best
rate is 7.10%; the one the owner would have taken from their existing bank is 7.55%.

- Rate difference: **45 basis points**
- Annual interest saved: $12.0M x 0.45% = **$54,000**
- Over a 5-year term: **$270,000**
- Placement fee at 0.75% of $12.0M: **$90,000**

The process nets **$180,000** over the term in this hypothetical, before considering that
the best quote also came with a year of interest-only. Run the same math with a 10 basis
point spread and the fee does not pay for itself. Both outcomes happen. Ask for the spread
history before you engage anyone, including us.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **What does a hotel debt placement broker do?**
- **How much does hotel debt placement cost?**
- **Do I need a broker to get a hotel loan?**
- **How many lenders will see my deal?**
- **How long does hotel debt placement take?**
- **Who pays the placement fee, me or the lender?**
- **What documents do I need to start a placement process?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/hotel-lenders-by-type`, `/hotel-financing/loan-requirements`, `/hotel-financing/hotel-loan-rates`, `/hotel-financing/refinance`
- **Glossary:** `/glossary/dscr`, `/glossary/debt-yield`
- **Data:** `/rates`
- **CTA (exactly one):** "Start a debt placement process" → `/contact`

## Author / reviewer

- **Author:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- **Reviewed by:** Miles Cortez III, VP & Director, Hospitality Capital Markets - `/team/miles-cortez`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- MBA Commercial Real Estate Finance originations press releases - https://www.mba.org/news-and-research
- Federal Reserve H.15 Selected Interest Rates - https://www.federalreserve.gov/releases/h15/
- FDIC Quarterly Banking Profile, CRE lending trends - https://www.fdic.gov/analysis/quarterly-banking-profile/
- SBA 7(a) lender participation data - https://www.sba.gov/about-sba/open-government/foia
- Matthews Hotel Markets September 2026 rate sheet - /rates (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets runs hotel debt placement as a competitive process and publishes the rate sheet so clients can see the spread we are working against.

## Warnings specific to this page

- This is the informational twin of `/services/capital-markets` (architecture §3.3). Link it once as the CTA path. Do not turn this page into a pitch.
- Do not claim a fee percentage as an industry standard. State what is typical as a range and say it is negotiable.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
