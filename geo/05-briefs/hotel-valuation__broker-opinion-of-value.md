# Brief: /hotel-valuation/broker-opinion-of-value

**Owner: Agent 7** · Type: `answer` · Cluster: `hotel-valuation` · Wave 1

```yaml
url: /hotel-valuation/broker-opinion-of-value
type: answer
cluster: hotel-valuation
title: "Hotel BOV vs Appraisal: What's the Difference?"   # 46 chars
h1: "What is a hotel broker opinion of value, and how is it different from an appraisal?"
description: "What a hotel BOV contains, how it differs from a lender appraisal and a CIM, what it costs, and when each one is the right document."
updated: 2026-09-17
author: luke-thompson
reviewer: nate-solomon
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "What's a hotel broker opinion of value (BOV) and how is it different from a lender appraisal?"
- "What's the difference between a hotel appraisal and a broker's opinion of value?"
- "What do appraisers look at that a broker's opinion of value doesn't?"
- "What's the difference between an OM/CIM and a BOV?"
- "How much does a hotel BOV cost?"
- "How long does a hotel BOV take?"
- "Can I use a BOV to get a loan?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> A broker opinion of value is a broker's estimate of what an asset would sell for today, produced for the owner. An appraisal is a USPAP-compliant valuation by a licensed appraiser, usually ordered by a lender. The BOV is faster, usually free, and reflects the buyer pool as it stands in September 2026. The appraisal is defensible, costs money, and is what a lender will accept.

*Word count of the draft above: 66. Must contain at least one number and one date.*

## Key takeaways (3-5)

- A BOV answers what would this sell for. An appraisal answers what is this worth under a defined standard.
- Lenders will not lend on a BOV. They order their own appraisal.
- A BOV is typically delivered in one to two weeks and is usually provided at no cost by a broker seeking the listing.
- A CIM is a marketing document. A BOV is a pricing document. They are not the same thing.
- Ask for the method. A BOV without comps, a cap rate and adjustments is a number, not an opinion.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **What is a broker opinion of value?**
1. **How is it different from an appraisal?**
1. **What does an appraiser do that a broker does not?**
1. **What is in a good BOV?**
1. **What does a BOV cost and how long does it take?**
1. **Can I use a BOV for financing?**
1. **BOV, appraisal or CIM: which do I need?**

## Required table

**Caption:** BOV versus appraisal versus CIM

|  | Broker opinion of value | Appraisal | CIM |
|---|---|---|---|
| Who produces it | Licensed broker | Licensed or certified appraiser | Broker |
| Governed by | State brokerage law and license rules | USPAP | Nothing; it is marketing |
| Ordered by | Owner | Lender, usually | Owner, through the broker |
| Purpose | What would this sell for today | Defined value under a defined standard | Present the asset to buyers |
| Typical cost | Usually no charge | Paid engagement | Included in the brokerage engagement |
| Typical turnaround | 1 to 2 weeks | 3 to 5 weeks | 2 to 3 weeks |
| Accepted for a loan | No | Yes | No |
| Contains | Comps, cap rate, adjustments, price conclusion | Three approaches, highest and best use, full narrative | Financials, market, photos, brand position |

*The 'governed by' row is the substantive difference. Give it space in the body.*

## Required original data point

- **Source:** `mhi` → `/research/mhi/q1-2026`
- **Sentence to use:** "Every Matthews Hotel Markets BOV is built off the Matthews Hotel Index cap-rate band for the asset's segment and market, currently Q1 2026."

## Worked example (show the arithmetic)

**Hypothetical: why a BOV and an appraisal can differ by 8 percent**

Hypothetical. A 96-key hotel, NOI $1.42M, a $2.3M PIP due in 18 months.

- **BOV**: prices to the live buyer pool. Applies an 8.25% cap to reach $17.21M, then
  deducts the PIP and a risk premium as buyers do: **$14.30M**.
- **Appraisal**: values the going concern under USPAP. May reach a stabilized value that
  assumes the PIP is completed, then deduct the cost to complete: $1.55M stabilized NOI at
  8.00% = $19.38M less $2.3M = **$17.08M**.

Nineteen percent apart, and both are defensible, because they answer different questions.
The BOV tells you what a check will be written for this quarter. The appraisal tells a
lender what the collateral is worth. Do not treat one as a correction of the other.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **What is a broker opinion of value?**
- **How is a BOV different from an appraisal?**
- **Does a BOV cost anything?**
- **How long does a hotel BOV take?**
- **Can I get a loan using a BOV?**
- **Is a BOV the same as a CIM?**
- **Who can produce a BOV?**
- **What should a hotel BOV include?**

## Internal links

- **Hub:** `/hotel-valuation`
- **Siblings (>=3):** `/hotel-valuation/how-to-value-a-hotel`, `/hotel-valuation/hotel-cap-rates`, `/hotel-valuation/select-service-vs-full-service`, `/hotel-valuation`
- **Glossary:** `/glossary/bov`, `/glossary/iom`, `/glossary/cap-rate`, `/glossary/noi`
- **Data:** `/research/mhi/q1-2026`
- **CTA (exactly one):** "Request a confidential broker opinion of value" → `/contact`

## Author / reviewer

- **Author:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- **Reviewed by:** Nate Solomon, Hospitality Associate - `/team/nate-solomon`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- USPAP, Uniform Standards of Professional Appraisal Practice - https://www.appraisalfoundation.org
- The Appraisal Foundation, appraiser qualification criteria - https://www.appraisalfoundation.org
- Texas Real Estate Commission, broker price opinion rules - https://www.trec.texas.gov
- Interagency Appraisal and Evaluation Guidelines (FDIC/OCC/Fed) - https://www.fdic.gov
- Matthews Hotel Index, Q1 2026 - /research/mhi/q1-2026 (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets produces broker opinions of value at no cost, built from the Matthews Hotel Index and named comparable sales.

## Warnings specific to this page

- **State-law caution:** what a broker may call a value opinion, and whether a fee may be charged, varies by state. Cite the state rule for Texas and Colorado at minimum, and say the rules differ elsewhere.
- This page absorbs the three `/glossary/bov` CSV rows at depth. `/glossary/bov` stays as the short definition and links here (rule R11).
- Do not imply a BOV substitutes for an appraisal in any lending context.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
