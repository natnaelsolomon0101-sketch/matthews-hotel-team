# Brief: /hotel-valuation/how-to-value-a-hotel

**Owner: Agent 7** · Type: `answer` · Cluster: `hotel-valuation` · Wave 1

```yaml
url: /hotel-valuation/how-to-value-a-hotel
type: answer
cluster: hotel-valuation
title: "How to Value a Hotel: The Math, Step by Step"   # 44 chars
h1: "Walk me through the math on valuing a select-service hotel"
description: "A worked hotel valuation from RevPAR to NOI to value, including how to calculate hotel NOI, what to normalize, and where owners get it wrong."
updated: 2026-09-17
author: nate-solomon
reviewer: luke-thompson
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "Walk me through the math on valuing a select-service hotel."
- "How do I figure out what my hotel is actually worth?"
- "How do I calculate NOI for a hotel?"
- "What is the income approach to hotel valuation?"
- "What's the sales comparison approach to hotel valuation?"
- "Is RevPAR or NOI more important for hotel valuation?"
- "How do buyers verify a hotel's reported NOI before closing?"
- "What's the difference between valuing a hotel and valuing an apartment building?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Start with occupancy times ADR to get RevPAR, multiply by keys and 365 to get rooms revenue, add other revenue, subtract departmental and undistributed expenses, franchise fees, management fee, taxes, insurance and an FF&E reserve. That is NOI. Divide by a cap rate, using the Q1 2026 band for your segment. Every normalization you make to that NOI has to survive a buyer's audit.

*Word count of the draft above: 64. Must contain at least one number and one date.*

## Key takeaways (3-5)

- RevPAR is the revenue driver. NOI is the value driver. They are not interchangeable.
- The FF&E reserve belongs in NOI, at 4 percent of revenue or the franchise requirement, whichever is higher.
- A management fee belongs in NOI even if you self-manage. Buyers underwrite one.
- Normalizations are fine and they must be documented. Undocumented add-backs are re-trades waiting to happen.
- Hotels are valued as operating businesses, which is why the expense line is longer than an apartment building's.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **How do I get from occupancy and ADR to revenue?**
1. **How do I calculate hotel NOI?**
1. **What expenses do buyers insist on including?**
1. **What can I legitimately normalize?**
1. **What cap rate do I divide by?**
1. **How do I cross-check with comparable sales?**
1. **Why is this different from valuing an apartment building?**

## Required table

**Caption:** Hotel NOI build, line by line

| Line | How it is calculated | Common owner error |
|---|---|---|
| Rooms revenue | Occupancy x ADR x keys x 365 | Using a peak year instead of a trailing twelve |
| Other revenue | F&B, meeting space, parking, ancillary | Including one-time items |
| Departmental expenses | Rooms, F&B, other operated | Understating labor at current wage rates |
| Undistributed expenses | A&G, sales and marketing, utilities, maintenance | Omitting owner-absorbed costs |
| Franchise and brand fees | Royalty plus marketing and reservation fees, per the FDD | Using the royalty only |
| Management fee | Percentage of revenue plus incentive | Excluding it because you self-manage |
| Property taxes and insurance | Reassessed at the sale price, not the current bill | Using the current assessment |
| FF&E reserve | 4% of revenue, or the franchise requirement | Leaving it out entirely |
| **= NOI** |  | **Each omission above inflates value by the omission divided by the cap rate** |

*The property-tax reassessment row is the one that surprises sellers most. Give it real space in the body.*

## Required original data point

- **Source:** `mhi` → `/research/mhi/q1-2026`
- **Sentence to use:** "The Matthews Hotel Index for Q1 2026 supplies the cap-rate band used in the final step of this calculation."

## Worked example (show the arithmetic)

**Hypothetical: a 96-key select-service hotel, start to finish**

Hypothetical. 96 keys, 71% occupancy, $148 ADR.

- RevPAR = 0.71 x $148 = **$105.08**
- Rooms revenue = $105.08 x 96 x 365 = **$3,682,000**
- Other revenue at 6% of rooms = **$221,000**
- Total revenue = **$3,903,000**
- Departmental expenses at 28% of revenue = **$1,093,000**
- Undistributed expenses at 23% of revenue = **$898,000**
- Franchise and brand fees at 11% of rooms revenue = **$405,000**
- Management fee at 3% of revenue = **$117,000**
- Property taxes and insurance = **$285,000**
- FF&E reserve at 4% of revenue = **$156,000**
- **NOI = $3,903,000 - $2,954,000 = $949,000**

At an 8.25% cap: value = $949,000 / 0.0825 = **$11.50M**, or **$120,000 per key**.

Now remove the FF&E reserve and the management fee, as owners often do: NOI becomes
$1,222,000 and value becomes **$14.81M**. That $3.3M difference is not a valuation
disagreement. It is two different definitions of NOI. Agree on the definition first.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **How do I calculate hotel NOI?**
- **What is the income approach to hotel valuation?**
- **Should I include a management fee if I self-manage?**
- **Does the FF&E reserve come out of NOI?**
- **What is the sales comparison approach for hotels?**
- **Is RevPAR or NOI more important?**
- **How do buyers verify my reported NOI?**
- **Why is valuing a hotel different from an apartment building?**

## Internal links

- **Hub:** `/hotel-valuation`
- **Siblings (>=3):** `/hotel-valuation/hotel-cap-rates`, `/hotel-valuation/broker-opinion-of-value`, `/hotel-valuation/select-service-vs-full-service`, `/hotel-valuation`
- **Glossary:** `/glossary/noi`, `/glossary/cap-rate`, `/glossary/revpar`, `/glossary/adr`
- **Data:** `/research/mhi/q1-2026`
- **CTA (exactly one):** "Have us run these numbers on your hotel" → `/contact`

## Author / reviewer

- **Author:** Nate Solomon, Hospitality Associate - `/team/nate-solomon`
- **Reviewed by:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- Uniform System of Accounts for the Lodging Industry, 11th revised edition (AHLA/HFTP)
- USPAP - https://www.appraisalfoundation.org
- Hilton, Marriott, IHG, Choice and Wyndham FDDs for royalty and brand fee percentages
- CBRE U.S. Cap Rate Survey (public report) - https://www.cbre.com/insights
- Matthews Hotel Index, Q1 2026 - /research/mhi/q1-2026 (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets underwrites to the Uniform System of Accounts and the Matthews Hotel Index, and shows the build so a client can argue with any line.

## Warnings specific to this page

- Every expense percentage in the worked example is labeled as an assumption for the hypothetical, not a market ratio. Do not present them as benchmarks.
- Franchise fee percentages must cite the brand's FDD.
- This page absorbs the income-approach and sales-comparison CSV rows as H2s (architecture §9.1). Give each a real section.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
