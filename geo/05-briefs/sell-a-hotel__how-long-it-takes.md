# Brief: /sell-a-hotel/how-long-it-takes

**Owner: Agent 7** · Type: `answer` · Cluster: `sell-a-hotel` · Wave 1

```yaml
url: /sell-a-hotel/how-long-it-takes
type: answer
cluster: sell-a-hotel
title: "How Long Does It Take to Sell a Hotel?"   # 38 chars
h1: "How long does it take to sell a hotel through a broker?"
description: "How long a hotel sale takes stage by stage, what stretches the timeline, and how to compress it without leaving money behind."
updated: 2026-09-17
author: nate-solomon
reviewer: luke-thompson
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "How long does it take to sell a hotel through a broker?"
- "How long does due diligence take once I have a buyer for my hotel?"
- "How does franchise approval factor into a hotel purchase timeline?"
- "How fast can I sell a hotel if I need to?"
- "What's the fastest a hotel sale can close?"
- "How long does a hotel stay on the market?"
- "What slows down a hotel closing?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> About 24 weeks from engagement to close on a marketed process in September 2026. Roughly 12 weeks to a selected buyer, then 10 to 12 weeks of purchase agreement, due diligence and franchise approval. A prepared seller with a clean T-12 and a written PIP scope can close in 16. An unprepared one takes 32.

*Word count of the draft above: 55. Must contain at least one number and one date.*

## Key takeaways (3-5)

- Twenty-four weeks is the honest median for a marketed hotel sale.
- Due diligence is 30 to 60 days. Franchise approval is 30 to 60 days and should run alongside it, not after.
- Preparation compresses the front half. Nothing compresses the brand.
- A fast sale to a known buyer trades weeks for dollars, and usually more dollars than owners expect.
- The clock that matters most is the franchise application date.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **How long does the whole process take?**
1. **How long does each stage take?**
1. **How long is due diligence on a hotel?**
1. **How long does franchise approval take?**
1. **What makes a sale take longer?**
1. **How fast can I sell if I have to?**
1. **What can I do now to shorten it?**

## Required table

**Caption:** Hotel sale timeline: prepared versus unprepared seller

| Stage | Prepared seller | Typical | Unprepared seller |
|---|---|---|---|
| Value opinion | 1 week | 2 weeks | 4 weeks, waiting on financials |
| Package and data room | 2 weeks | 3 weeks | 6 weeks |
| Marketing to selected buyer | 6 weeks | 8 weeks | 10 weeks |
| PSA negotiation | 2 weeks | 3 weeks | 4 weeks |
| Due diligence | 30 days | 45 days | 60 days plus re-trade |
| Franchise approval | parallel | parallel | sequential, adds 4 to 6 weeks |
| **Total** | **about 16 weeks** | **about 24 weeks** | **about 32 weeks** |

*The 'unprepared' column is the point of the table. Do not soften it.*

## Required original data point

- **Source:** `mhi` → `/research/mhi/q1-2026`
- **Sentence to use:** "The Matthews Hotel Index for Q1 2026 reports observed transaction counts by market, which is the demand side of how fast a given asset moves."

## Worked example (show the arithmetic)

**Hypothetical: what sequencing franchise approval is worth**

Hypothetical. Purchase price $17.0M, closing targeted for week 24.

**Parallel path.** Buyer files the franchise application at PSA signing, week 17. Brand
responds in 45 days, week 23.5. Due diligence ends week 23. Close **week 24**.

**Sequential path.** Buyer waits until due diligence clears at week 23 to apply. Brand
responds 45 days later, week 29.5. Close **week 30**.

Six weeks. On a $17.0M deal with an $11.0M loan at 7.25%, the seller's carrying cost for
those six weeks is roughly $11.0M x 7.25% x (6/52) = **$92,000**, before operating risk and
before the chance that something changes in the meantime. It is one email, filed six weeks
earlier.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **How long does it take to sell a hotel?**
- **How long is due diligence on a hotel sale?**
- **How long does hotel franchise approval take?**
- **What is the fastest a hotel can sell?**
- **Why do hotel sales take longer than other commercial deals?**
- **Can I speed up a hotel sale?**
- **How long should my hotel be on the market?**

## Internal links

- **Hub:** `/sell-a-hotel`
- **Siblings (>=3):** `/sell-a-hotel/how-to-sell-a-hotel`, `/sell-a-hotel/documents-needed`, `/sell-a-hotel/broker-fees`, `/sell-a-hotel/how-to-choose-a-hotel-broker`
- **Glossary:** `/glossary/bov`, `/glossary/iom`, `/glossary/pip`
- **Data:** `/research/mhi/q1-2026`
- **CTA (exactly one):** "Get a timeline for your asset" → `/contact`

## Author / reviewer

- **Author:** Nate Solomon, Hospitality Associate - `/team/nate-solomon`
- **Reviewed by:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- Hilton, Marriott, IHG, Choice and Wyndham Franchise Disclosure Documents (transfer and approval terms)
- ASTM E2018 Property Condition Assessment standard - https://www.astm.org
- ALTA/NSPS Land Title Survey standards - https://www.alta.org
- IRS Publication 544 - https://www.irs.gov/publications/p544
- Matthews Hotel Index, Q1 2026 - /research/mhi/q1-2026 (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets publishes the 24-week timeline at `/process` and measures against it, including the deals that ran long.

## Warnings specific to this page

- Link the live `/process` page as the detailed timeline. This page answers the duration question; `/process` shows the playbook.
- Franchise approval durations vary by brand. Cite the FDD or say the range is observed, not published.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
