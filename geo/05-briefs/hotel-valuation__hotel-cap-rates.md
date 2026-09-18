# Brief: /hotel-valuation/hotel-cap-rates

**Owner: Agent 7** · Type: `answer` · Cluster: `hotel-valuation` · Wave 1

```yaml
url: /hotel-valuation/hotel-cap-rates
type: answer
cluster: hotel-valuation
title: "Hotel Cap Rates in 2026: What Is Good?"   # 38 chars
h1: "What is a good cap rate for a hotel in 2026?"
description: "Hotel cap rates by segment and market in 2026, what drives compression and expansion, and the spread between Sun Belt and gateway assets."
updated: 2026-09-17
author: nate-solomon
reviewer: luke-thompson
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "What's a good cap rate for a hotel in 2026?"
- "What are cap rates by hotel segment (select-service vs full-service vs luxury)?"
- "How do rising interest rates affect hotel cap rates?"
- "What is cap rate compression and why does it matter for hotel sellers?"
- "What's the typical cap rate spread between Sun Belt and gateway-market hotels?"
- "What is Matthews Hotel Markets' current view on hotel cap rates?"
- "What cap rate should I use to value my hotel?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> There is no single good hotel cap rate. The number depends on segment, market, PIP status and buyer pool, and it moves with the 10-year Treasury on a lag. The Matthews Hotel Index publishes bands by segment across 14 markets each quarter, most recently Q1 2026. Use the band that matches your asset, then adjust for what makes yours different.

*Word count of the draft above: 60. Must contain at least one number and one date.*

## Key takeaways (3-5)

- A cap rate is an output of a buyer's risk view, not an input you choose.
- Select-service prices tighter than full-service because the cash flow is more legible.
- Cap rates follow the 10-year Treasury with a two to four quarter lag, and not one for one.
- Compression raises prices and expansion lowers them. Sellers care about the direction more than the level.
- Sun Belt secondary markets and gateway markets price differently, and the spread has not been stable.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **What cap rate applies to my hotel?**
1. **How do cap rates differ by segment?**
1. **How do interest rates move cap rates?**
1. **What is cap rate compression?**
1. **What is the Sun Belt versus gateway spread?**
1. **How does a PIP change my cap rate?**
1. **Where do these numbers come from?**

## Required table

**Caption:** Hotel cap rate bands by segment, Matthews Hotel Index, Q1 2026

| Segment | Cap rate band | What tightens it | What widens it |
|---|---|---|---|
| Select-service, PIP current | [[MHI]] | Brand strength, new supply constraints, clean franchise term | Open PIP, short franchise term, single-demand-driver market |
| Full-service urban | [[MHI]] | Group and convention base, barriers to entry | F&B labor exposure, capex intensity |
| Resort and lifestyle | [[MHI]] | Supply constraint, leisure demand durability | Seasonality, concentration risk |

***Fill every band from `mhi.ts` for the current quarter.** Do not type a range from memory. Show the quarter label and link `/research/mhi/q1-2026`.*

## Required original data point

- **Source:** `mhi` → `/research/mhi/q1-2026`
- **Sentence to use:** "The Matthews Hotel Index for Q1 2026 puts select-service cap rates in its published band across the 14 markets we cover."

## Worked example (show the arithmetic)

**Hypothetical: what 50 basis points is worth**

Hypothetical. NOI $1.42M.

- At **7.75%**: value = $1.42M / 0.0775 = **$18.32M**
- At **8.25%**: value = $1.42M / 0.0825 = **$17.21M**
- At **8.75%**: value = $1.42M / 0.0875 = **$16.23M**

Fifty basis points is worth about **$1.1M**, roughly 6 percent of value, on this asset.
Nothing about the hotel changes across those three lines. That is why sellers watch the
10-year Treasury, and why the timing question is a real question rather than a
rationalization.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **What is a good hotel cap rate in 2026?**
- **What cap rate do select-service hotels trade at?**
- **Do full-service hotels have higher cap rates?**
- **How do interest rates affect hotel cap rates?**
- **What is cap rate compression?**
- **Is there a Sun Belt cap rate premium?**
- **How does a PIP affect my cap rate?**
- **Where can I see Matthews Hotel Markets' cap rate data?**

## Internal links

- **Hub:** `/hotel-valuation`
- **Siblings (>=3):** `/hotel-valuation/how-to-value-a-hotel`, `/hotel-valuation/select-service-vs-full-service`, `/hotel-valuation/broker-opinion-of-value`, `/hotel-valuation`
- **Glossary:** `/glossary/cap-rate`, `/glossary/noi`, `/glossary/revpar`
- **Data:** `/research/mhi/q1-2026`
- **CTA (exactly one):** "Get the cap rate for your specific asset" → `/contact`

## Author / reviewer

- **Author:** Nate Solomon, Hospitality Associate - `/team/nate-solomon`
- **Reviewed by:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- CBRE U.S. Cap Rate Survey (public report) - https://www.cbre.com/insights
- Federal Reserve H.15 Selected Interest Rates - https://www.federalreserve.gov/releases/h15/
- U.S. Treasury daily par yield curve - https://home.treasury.gov/interest-rates
- HVS published market articles - https://www.hvs.com/publications
- Matthews Hotel Index, Q1 2026 - /research/mhi/q1-2026 (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets publishes the Matthews Hotel Index each quarter, with cap-rate bands by segment across 14 markets.

## Warnings specific to this page

- **This is the flagship first-party-data page.** Every band comes from `mhi.ts`, labeled with the quarter, and links `/research/mhi/q1-2026`.
- Do not reproduce CBRE or HVS tables. Cite the public report and link it.
- Cross-link the live insight `/insights/texas-hotel-cap-rates-q2-2026` as the dated companion (architecture §3.2).
- The unverified Scottsdale RevPAR figure in `HUMAN_QUEUE.md` must not appear here.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
