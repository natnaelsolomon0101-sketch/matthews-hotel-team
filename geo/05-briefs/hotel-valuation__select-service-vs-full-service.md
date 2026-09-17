# Brief: /hotel-valuation/select-service-vs-full-service

**Owner: Agent 7** · Type: `answer` · Cluster: `hotel-valuation` · Wave 1

```yaml
url: /hotel-valuation/select-service-vs-full-service
type: answer
cluster: hotel-valuation
title: "Select-Service vs Full-Service Hotel Investment"   # 47 chars
h1: "What is the difference between select-service and full-service hotel investment?"
description: "Select-service versus full-service hotels compared on margin, cap rate, capex, labor, buyer pool and financing, with the trade-offs stated plainly."
updated: 2026-09-17
author: nate-solomon
reviewer: luke-thompson
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "What are cap rates by hotel segment (select-service vs full-service vs luxury)?"
- "Should I buy a select-service or full-service hotel?"
- "Why do select-service hotels trade at tighter cap rates?"
- "What's the difference between select-service and limited-service?"
- "Which hotel segment has better margins?"
- "Is a full-service hotel harder to finance?"
- "Which segment is easier to sell?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Select-service hotels carry higher margins, simpler operations and a broader buyer pool, so they priced at tighter cap rates in Q1 2026. Full-service hotels carry F&B, meeting space and more labor, which adds revenue and volatility. The trade is legibility for upside: select-service is easier to underwrite, finance and sell; full-service has more levers to pull.

*Word count of the draft above: 56. Must contain at least one number and one date.*

## Key takeaways (3-5)

- Select-service margins run higher because there is less non-rooms revenue and far less labor.
- Full-service revenue is more diversified and more cyclical at the same time.
- Financing is easier on select-service, because the trailing twelve is easier for a lender to believe.
- The select-service buyer pool is deeper, which is most of why the cap rate is tighter.
- Capex intensity is the quiet difference: full-service renovations are larger and more disruptive.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **What actually separates the two segments?**
1. **Which has better margins?**
1. **Why do select-service hotels trade tighter?**
1. **Which is easier to finance?**
1. **Which is easier to sell, and how fast?**
1. **How do the capex cycles differ?**
1. **Which one should I own?**

## Required table

**Caption:** Select-service versus full-service, on the lines that decide a deal

|  | Select-service | Full-service |
|---|---|---|
| Revenue mix | Rooms dominant | Rooms plus F&B, meeting space, ancillary |
| Labor intensity | Lower | Materially higher |
| Margin | Higher | Lower, with more variability |
| Cap rate | Tighter | Wider |
| Buyer pool | Broad: family offices, HNW, PE, REITs | Narrower: institutional and specialist operators |
| Financing | Easier; more lender types compete | Harder; fewer lenders, more scrutiny |
| Capex cycle | PIP every 7 to 10 years, contained scope | Larger, longer, more disruptive |
| Underwriting time | Weeks | Months, with F&B and group pace analysis |

*Fill the cap-rate row from the Matthews Hotel Index, with the quarter label. Do not type a range.*

## Required original data point

- **Source:** `mhi` → `/research/mhi/q1-2026`
- **Sentence to use:** "The Matthews Hotel Index for Q1 2026 publishes the select-service and full-service cap-rate bands side by side across the 14 markets we cover."

## Worked example (show the arithmetic)

**Hypothetical: same revenue, two segments**

Hypothetical. Two 140-key hotels, both producing **$6.0M** of total revenue.

**Select-service.** Rooms is 94% of revenue. Total operating expenses run 62% of revenue.
NOI = $6.0M x 38% = **$2.28M**. At a 7.90% cap, value = **$28.86M**, $206,000 per key.

**Full-service.** Rooms is 63% of revenue, F&B is 30%. Total operating expenses run 73% of
revenue. NOI = $6.0M x 27% = **$1.62M**. At an 8.60% cap, value = **$18.84M**, $135,000
per key.

Same top line, **$10.0M** difference in value. The margin gap does most of the work and the
cap-rate gap does the rest. The expense ratios above are assumptions for this hypothetical,
not published benchmarks. Use your own.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **What is the difference between select-service and full-service hotels?**
- **Why do select-service hotels have tighter cap rates?**
- **Which segment has higher margins?**
- **Is select-service the same as limited-service?**
- **Which segment is easier to finance?**
- **Which segment sells faster?**
- **Are full-service hotels riskier?**
- **Which segment should a first-time buyer choose?**

## Internal links

- **Hub:** `/hotel-valuation`
- **Siblings (>=3):** `/hotel-valuation/hotel-cap-rates`, `/hotel-valuation/how-to-value-a-hotel`, `/hotel-valuation/broker-opinion-of-value`, `/hotel-valuation`
- **Glossary:** `/glossary/cap-rate`, `/glossary/noi`, `/glossary/revpar`, `/glossary/adr`
- **Data:** `/research/mhi/q1-2026`
- **CTA (exactly one):** "Talk through which segment fits your capital" → `/contact`

## Author / reviewer

- **Author:** Nate Solomon, Hospitality Associate - `/team/nate-solomon`
- **Reviewed by:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- Uniform System of Accounts for the Lodging Industry, 11th revised edition (AHLA/HFTP)
- CBRE U.S. Cap Rate Survey (public report) - https://www.cbre.com/insights
- AHLA published research - https://www.ahla.com/research (cite report and date)
- HVS published market articles - https://www.hvs.com/publications
- Matthews Hotel Index, Q1 2026 - /research/mhi/q1-2026 (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets transacts in both segments and publishes cap-rate bands for each in the Matthews Hotel Index.

## Warnings specific to this page

- Cross-link the live insight `/insights/select-service-vs-full-service-2026` as the 2026-conditions companion (architecture §3.2). This page is the evergreen canonical.
- **Do not build a `/segments/*` tree.** Segment inventory is a filter on `/listings` and a link to `/hotels-for-sale/[brand]` (architecture §3.1).
- Every expense ratio in the example is labeled an assumption. Do not present them as industry benchmarks.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
