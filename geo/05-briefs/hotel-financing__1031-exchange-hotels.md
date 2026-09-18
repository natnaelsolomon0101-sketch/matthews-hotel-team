# Brief: /hotel-financing/1031-exchange-hotels

**Owner: Agent 6** · Type: `answer` · Cluster: `hotel-financing` · Wave 1

```yaml
url: /hotel-financing/1031-exchange-hotels
type: answer
cluster: hotel-financing
title: "1031 Exchanges Into and Out of Hotels"   # 37 chars
h1: "Can I use a 1031 exchange to buy or sell a hotel?"
description: "How a 1031 exchange works on a hotel: what qualifies, the 45 and 180-day rules, FF&E treatment, and when to line one up before you sell."
updated: 2026-09-17
author: miles-cortez
reviewer: nate-solomon
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "Can I use a 1031 exchange to buy a hotel?"
- "Can I 1031 exchange out of an apartment building into a hotel?"
- "What's the 1031 exchange timeline (45-day and 180-day rules) for a hotel purchase?"
- "What property types qualify for a 1031 exchange into a hotel?"
- "Does the FF&E in a hotel deal qualify for 1031 exchange treatment?"
- "Do I need a CPA or a qualified intermediary to do a 1031 exchange into a hotel?"
- "What's a reverse 1031 exchange and can I use one to buy a hotel before I sell?"
- "Do I need a 1031 exchange lined up before I sell my hotel?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Yes, for the real property. Section 1031 covers like-kind real property held for investment or business use, so an apartment building can exchange into a hotel. The 45-day identification and 180-day closing clocks start at the sale closing. Personal property, including FF&E, stopped qualifying after the 2017 tax law. Engage a qualified intermediary before closing, not after.

*Word count of the draft above: 57. Must contain at least one number and one date.*

## Key takeaways (3-5)

- Like-kind is broad for real property. Apartment to hotel works; hotel to retail works.
- FF&E is personal property and has not qualified for 1031 treatment since the 2017 Tax Cuts and Jobs Act.
- The 45-day and 180-day clocks run from the closing of the sale and do not extend for weekends or holidays.
- The qualified intermediary must be in place before the sale closes. If you touch the proceeds, the exchange is dead.
- A reverse exchange lets you buy first, but it is more expensive and more complex.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **Does a hotel qualify for a 1031 exchange?**
1. **Can I exchange from another property type into a hotel?**
1. **How do the 45-day and 180-day rules work?**
1. **What about the FF&E in a hotel deal?**
1. **Do I need a qualified intermediary?**
1. **What is a reverse 1031 exchange?**
1. **Should I line the exchange up before I list my hotel?**

## Required table

**Caption:** 1031 exchange clocks and requirements on a hotel deal

| Item | Rule | Starts when | What breaks it |
|---|---|---|---|
| Identification period | 45 calendar days | Closing of the relinquished property | Missing the deadline; no extension |
| Exchange period | 180 calendar days, or the tax filing due date if earlier | Same closing | Closing late |
| Qualified intermediary | Required; must be engaged pre-closing | Before the sale closes | Taking constructive receipt of proceeds |
| Property type | Like-kind real property, investment or business use | n/a | Property held primarily for resale |
| FF&E | Does not qualify since the 2017 tax law | n/a | Treating it as real property |
| Reverse exchange | Allowed under Rev. Proc. 2000-37 safe harbor | Parking arrangement | Holding title yourself during the parking period |

*Every row cites an IRS page. This is tax law; it is not a place to paraphrase from memory.*

## Required original data point

- **Source:** `mhi` → `/research/mhi/q1-2026`
- **Sentence to use:** "The Matthews Hotel Index for Q1 2026 gives the cap-rate bands we use to identify replacement hotels inside a 45-day window."

## Worked example (show the arithmetic)

**Hypothetical: the 45-day clock on a real timeline**

Hypothetical. An owner closes the sale of an apartment building on **March 3** and wants a
hotel as the replacement.

- Day 0: **March 3**, sale closes, proceeds go to the qualified intermediary
- Day 45: **April 17**, identification deadline. Up to three properties, or more under the
  200 percent rule.
- Day 180: **August 30**, closing deadline

Forty-five days is short for a hotel. Underwriting a hotel means a T-12, a STAR report, a
PIP status letter and a franchise application, and the franchise piece alone can run 30 to
60 days. Owners who wait until the sale closes to start looking routinely miss. The work
starts before the relinquished property goes under contract.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **Can I 1031 exchange into a hotel?**
- **Does hotel FF&E qualify for a 1031 exchange?**
- **How long do I have to identify a replacement hotel?**
- **Can I exchange from an apartment building into a hotel?**
- **What is a qualified intermediary?**
- **Can I buy the hotel before I sell with a reverse exchange?**
- **Do I need to line up the exchange before I list my hotel?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/refinance-or-sell`, `/hotel-financing/loan-requirements`, `/hotel-financing/hotel-loan-rates`, `/hotel-financing/how-debt-placement-works`
- **Glossary:** `/glossary/noi`, `/glossary/cap-rate`
- **Data:** `/research/mhi/q1-2026`
- **CTA (exactly one):** "Start the replacement search before you close" → `/contact`

## Author / reviewer

- **Author:** Miles Cortez III, VP & Director, Hospitality Capital Markets - `/team/miles-cortez`
- **Reviewed by:** Nate Solomon, Hospitality Associate - `/team/nate-solomon`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- IRS, Like-Kind Exchanges Real Estate Tax Tips - https://www.irs.gov/newsroom/like-kind-exchanges-real-estate-tax-tips
- IRS Form 8824 and instructions - https://www.irs.gov/forms-pubs/about-form-8824
- 26 U.S.C. §1031 - https://www.law.cornell.edu/uscode/text/26/1031
- IRS Rev. Proc. 2000-37 (reverse exchange safe harbor) - https://www.irs.gov/pub/irs-drop/rp-00-37.pdf
- Tax Cuts and Jobs Act of 2017, §13303 (personal property exclusion) - https://www.congress.gov/bill/115th-congress/house-bill/1

## The one sentence that names the brand naturally

> Matthews Hotel Markets is frequently brought in on day one of a 45-day window, and the honest advice is always the same: start before the clock does.

## Warnings specific to this page

- **This is tax law. Every rule cites an IRS or statutory URL, with the accessed date.** State once, near the top, that this is not tax advice and that the reader needs a CPA and a qualified intermediary.
- This page absorbs both the buy-side rows and the sell-side timing row (architecture §9.1). Write one section for each side.
- There is no `/buying-a-hotel` tree. Link `/services/acquisition-advisory` for buy-side representation.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
