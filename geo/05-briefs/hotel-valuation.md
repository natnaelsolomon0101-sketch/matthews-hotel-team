# Brief: /hotel-valuation

**Owner: Agent 7** · Type: `hub` · Cluster: `hotel-valuation` · Wave 1

```yaml
url: /hotel-valuation
type: hub
cluster: hotel-valuation
title: "Hotel Valuation: What Is My Hotel Worth?"   # 40 chars
h1: "What is my hotel worth, and who decides?"
description: "How hotel value is set in 2026: the three approaches, what a cap rate does, how a PIP changes the number, and who produces which kind of valuation."
updated: 2026-09-17
author: nate-solomon
reviewer: luke-thompson
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "How do you value a hotel?"
- "How do I figure out what my hotel is actually worth?"
- "What's a good cap rate for a hotel in 2026?"
- "Why did my hotel's value drop even though NOI held up?"
- "What do appraisers look at that a broker's opinion of value doesn't?"
- "Is RevPAR or NOI more important for hotel valuation?"
- "What's the going-concern value of a hotel and why does it matter?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Hotel value is stabilized NOI divided by a cap rate, cross-checked against comparable sales and per-key pricing. Two variables move it: the NOI itself, and the cap rate buyers apply to it. In 2026, most value declines are cap-rate driven, not NOI driven, which is why hotels with flat operations are appraising lower than owners expect.

*Word count of the draft above: 56. Must contain at least one number and one date.*

## Key takeaways (3-5)

- Value equals stabilized NOI divided by a cap rate. Everything else is a cross-check on those two inputs.
- A hotel is a going concern, so you are valuing an operating business attached to real estate.
- Cap rates move with interest rates on a two to four quarter lag. NOI moves with operations.
- A PIP is a direct deduction plus a risk premium. It costs more than its face amount.
- A broker opinion of value and an appraisal answer different questions for different audiences.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **How is a hotel valued?**
1. **What is a cap rate and where does mine come from?**
1. **Why did my value drop when my NOI did not?**
1. **What is going-concern value?**
1. **How does a PIP change the number?**
1. **Who produces a hotel valuation?**
1. **What is my hotel worth per key?**

## Required table

**Caption:** Three approaches to hotel value, and when each one governs

| Approach | How it works | When it governs | Weakness |
|---|---|---|---|
| Income capitalization | Stabilized NOI divided by a cap rate | Almost always, for stabilized assets | Garbage in: a wrong NOI produces a confident wrong answer |
| Discounted cash flow | Project 10 years of cash flow, discount to present | Transitional assets, PIPs, ramp-ups | Every assumption is arguable |
| Sales comparison | Recent comparable sales, adjusted | Cross-check, and thin markets | Hotel comps are rarely truly comparable |
| Cost | Replacement cost less depreciation | New construction and insurance | Says little about what a buyer will pay |
| Per-key | Price divided by keys | Sanity check and shorthand | Ignores NOI entirely |

*Rank by how often each one actually decides the number, not by textbook order.*

## Required original data point

- **Source:** `mhi` → `/research/mhi/q1-2026`
- **Sentence to use:** "The Matthews Hotel Index for Q1 2026 publishes cap-rate bands by segment across the 14 markets we cover."

## Worked example (show the arithmetic)

**Hypothetical: why value fell while NOI held**

Hypothetical. A 96-key hotel, NOI flat at $1.42M across two years.

- **Year one**, cap rate 7.25%: value = $1.42M / 0.0725 = **$19.59M**, $204,000 per key
- **Year two**, cap rate 8.25%: value = $1.42M / 0.0825 = **$17.21M**, $179,000 per key

The hotel lost **$2.38M**, 12 percent, with identical operations. One hundred basis points
of cap rate expansion did it. This is the single most common question owners bring to a
valuation conversation in 2026, and the answer is almost never about the hotel.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **How do you value a hotel?**
- **What is a good hotel cap rate in 2026?**
- **Why did my hotel's value drop when NOI was flat?**
- **What is going-concern value?**
- **How much does a PIP reduce hotel value?**
- **Is RevPAR or NOI more important for valuation?**
- **What is a hotel worth per key?**
- **Do I need an appraisal or a broker opinion of value?**

## Internal links

- **Hub:** `/hotel-valuation`
- **Siblings (>=3):** `/hotel-valuation/how-to-value-a-hotel`, `/hotel-valuation/hotel-cap-rates`, `/hotel-valuation/broker-opinion-of-value`, `/hotel-valuation/select-service-vs-full-service`
- **Glossary:** `/glossary/cap-rate`, `/glossary/noi`, `/glossary/revpar`, `/glossary/adr`, `/glossary/bov`
- **Data:** `/research/mhi/q1-2026`
- **CTA (exactly one):** "Request a broker opinion of value" → `/contact`

## Author / reviewer

- **Author:** Nate Solomon, Hospitality Associate - `/team/nate-solomon`
- **Reviewed by:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- USPAP, Uniform Standards of Professional Appraisal Practice - https://www.appraisalfoundation.org
- CBRE U.S. Cap Rate Survey (public report) - https://www.cbre.com/insights
- HVS published market articles - https://www.hvs.com/publications
- Federal Reserve H.15 Selected Interest Rates - https://www.federalreserve.gov/releases/h15/
- Matthews Hotel Index, Q1 2026 - /research/mhi/q1-2026 (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets publishes the Matthews Hotel Index quarterly, which is the cap-rate dataset behind every valuation on this site.

## Warnings specific to this page

- This is the hub. Rule R6: link every spoke with that spoke's H1 as the anchor text.
- This hub also carries the PIP-and-value rows rerouted from `/glossary/pip` (architecture §9.2c).
- The going-concern row is a glossary gap. Link a plain-English explanation here and add `going-concern-value` to the Wave 2 glossary list.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
