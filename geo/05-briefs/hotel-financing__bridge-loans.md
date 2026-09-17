# Brief: /hotel-financing/bridge-loans

**Owner: Agent 6** · Type: `answer` · Cluster: `hotel-financing` · Wave 1

```yaml
url: /hotel-financing/bridge-loans
type: answer
cluster: hotel-financing
title: "Hotel Bridge Loans: When They Make Sense"   # 40 chars
h1: "What is a bridge loan and when should a hotel owner use one?"
description: "How hotel bridge loans are priced and structured in 2026, what the rate cap costs, and the three situations where bridge debt is the right answer."
updated: 2026-09-17
author: luke-thompson
reviewer: miles-cortez
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "What's a bridge loan and when should a hotel owner use one?"
- "What do bridge loan rates look like for a hotel that needs to stabilize first?"
- "How do I bridge my hotel loan until permanent financing is available?"
- "What's a rate cap and do I need one to refinance my hotel?"
- "Can I get a bridge loan for a hotel PIP?"
- "How long does a hotel bridge loan last?"
- "What's the exit on a hotel bridge loan?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> A bridge loan is short-term floating-rate debt, usually one to three years, interest-only, used when the hotel is not yet financeable by a permanent lender. It buys time for a PIP, a ramp-up, or a repositioning. As of September 2026 it costs more than permanent debt and requires a purchased rate cap. The exit has to be identified before you sign, not after.

*Word count of the draft above: 63. Must contain at least one number and one date.*

## Key takeaways (3-5)

- Bridge debt is priced over SOFR and floats, so a rate cap is a required purchase, not an option.
- The three real use cases: an in-progress PIP, a ramp after a brand change, and a maturity you cannot refinance yet.
- Interest-only preserves cash flow during the transition, which is the point.
- Extension options are cheap to buy at closing and expensive to buy later.
- If you cannot name the takeout lender at closing, you do not have a bridge plan.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **What makes a loan a bridge loan?**
1. **When does a hotel actually need one?**
1. **What does a hotel bridge loan cost?**
1. **What is a rate cap and how much is it?**
1. **How do I get out of it?**
1. **What happens if my business plan slips?**
1. **Bridge or an extension from my current lender?**

## Required table

**Caption:** Bridge debt versus permanent debt for a hotel

|  | Bridge | Permanent |
|---|---|---|
| Rate | SOFR plus a spread, floating | Fixed |
| Term | 1 to 3 years plus extensions | 5 or 10 years |
| Amortization | Interest only | 25 or 30 years |
| Requires | A purchased rate cap | No cap |
| Funds capex | Yes, usually a future-funding facility | Rarely |
| Prepayment | Short lockout, often open after 12 months | Defeasance or yield maintenance |
| Underwritten to | Stabilized pro forma NOI | Trailing twelve-month NOI |

*Fill the spread and cap-cost cells from the rate sheet. Do not estimate a cap cost; it is a live quote.*

## Required original data point

- **Source:** `rates` → `/rates`
- **Sentence to use:** "Matthews Hotel Markets' September 2026 rate sheet shows the current bridge spread over SOFR and where cap strikes are pricing."
- **Blocked until Agent 8 ships `/rates`.** Until then write the placeholder `[[RATE-SHEET: bridge SOFR spread and current cap strike pricing]]`. Agent 10 fails the build on any surviving placeholder.

## Worked example (show the arithmetic)

**Hypothetical: bridging a $3.0M PIP**

Hypothetical. A 104-key hotel with a $3.0M brand-mandated PIP. Current NOI $1.35M.
Stabilized pro forma NOI after the renovation is $1.95M.

- A permanent lender sizes against trailing NOI of $1.35M at 1.40x: max debt service
  $964,286, loan about **$11.1M** at a 25-year schedule and 7.25%.
- A bridge lender sizes against the stabilized $1.95M, funds the $3.0M PIP through a
  future-funding facility, and lends **$16.5M** total, interest only.

The bridge provides $5.4M more and funds the renovation. It also costs more every month and
floats. The deal only works if the stabilized $1.95M shows up. Write down what happens if
it comes in at $1.65M instead, before you close.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **What is a typical hotel bridge loan rate?**
- **How long is a hotel bridge loan?**
- **Do I need a rate cap on a bridge loan?**
- **Can a bridge loan fund my PIP?**
- **Is a hotel bridge loan recourse?**
- **What happens at the end of a bridge loan?**
- **Can I extend a hotel bridge loan?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/pip-and-renovation-loans`, `/hotel-financing/refinance`, `/hotel-financing/hotel-lenders-by-type`, `/hotel-financing/loan-workouts`
- **Glossary:** `/glossary/dscr`, `/glossary/noi`, `/glossary/pip`
- **Data:** `/rates`
- **CTA (exactly one):** "Price a bridge against a permanent quote" → `/contact`

## Author / reviewer

- **Author:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- **Reviewed by:** Miles Cortez III, VP & Director, Hospitality Capital Markets - `/team/miles-cortez`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- New York Fed SOFR published rate - https://www.newyorkfed.org/markets/reference-rates/sofr
- CME SOFR futures settlement data - https://www.cmegroup.com
- Federal Reserve H.15 Selected Interest Rates - https://www.federalreserve.gov/releases/h15/
- MBA Commercial Real Estate Finance quarterly originations press release
- Matthews Hotel Markets September 2026 rate sheet - /rates (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets prices the bridge and the takeout at the same time, so the exit is underwritten before the bridge closes.

## Warnings specific to this page

- Say plainly that bridge debt is more expensive. Do not sell it as a clever trick.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
