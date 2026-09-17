# Brief: /hotel-financing/pip-and-renovation-loans

**Owner: Agent 6** · Type: `answer` · Cluster: `hotel-financing` · Wave 1

```yaml
url: /hotel-financing/pip-and-renovation-loans
type: answer
cluster: hotel-financing
title: "Financing a Hotel PIP or Renovation in 2026"   # 43 chars
h1: "How do I finance a hotel PIP or renovation?"
description: "What a hotel PIP costs per room, how long you get to complete it, and the four ways owners fund one in 2026."
updated: 2026-09-17
author: luke-thompson
reviewer: nate-solomon
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "How much does a PIP typically cost per room?"
- "How long do I have to complete a PIP once I get the notice?"
- "Can I get a bridge loan for a hotel PIP?"
- "Will a PIP deadline affect my ability to refinance my hotel?"
- "How do I finance a hotel renovation?"
- "Who pays for a PIP, the buyer or the seller?"
- "What happens if I miss my PIP deadline?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> A PIP is funded four ways: cash from reserves, a future-funding facility inside a bridge loan, a capex holdback in a refinance, or a price reduction when you sell. The brand sets the scope and the deadline, usually 12 to 24 months from the notice, and September 2026 pricing on all four is in our rate sheet. Get the scope in writing before you price any of the four.

*Word count of the draft above: 69. Must contain at least one number and one date.*

## Key takeaways (3-5)

- The PIP scope letter is the document. Everything downstream is priced off it, so get it first.
- Per-room cost varies by brand, scope and market. Cite the brand's own published requirement or a public benchmark, never a remembered figure.
- A bridge loan with future funding is the most common financing route for a large PIP.
- A permanent lender will usually reserve for a PIP rather than fund it.
- Missing a PIP deadline puts the franchise agreement at risk, which puts the loan at risk.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **What exactly is a PIP and who decides the scope?**
1. **How long do I have to finish it?**
1. **What does a PIP cost per room?**
1. **How do I pay for it?**
1. **Will my PIP block a refinance?**
1. **Who pays for the PIP in a sale, the buyer or the seller?**
1. **What happens if I miss the deadline?**

## Required table

**Caption:** Four ways to fund a hotel PIP

| Method | Cost | Speed | Best fit |
|---|---|---|---|
| FF&E reserve and cash | Lowest | Immediate | Small scope, funded reserve |
| Bridge loan with future funding | Highest ongoing | 30 to 60 days | Large scope, transitional asset |
| Capex holdback in a refinance | Moderate | 60 to 90 days | Refinancing anyway, moderate scope |
| Price reduction at sale | Paid out of proceeds | Sale timeline | Owner is exiting and does not want the project |

*Add a fifth row only if brand key money is genuinely available and citable from the brand.*

## Required original data point

- **Source:** `rates` → `/rates`
- **Sentence to use:** "Matthews Hotel Markets' September 2026 rate sheet shows what a future-funding facility for a PIP costs this month."
- **Blocked until Agent 8 ships `/rates`.** Until then write the placeholder `[[RATE-SHEET: bridge with future funding, spread and cost of the capex facility]]`. Agent 10 fails the build on any surviving placeholder.

## Worked example (show the arithmetic)

**Hypothetical: funding a $2.6M PIP on 104 keys**

Hypothetical. 104 keys, a $2.6M PIP, which is **$25,000 per key**. Twenty months to
complete. NOI today $1.35M.

- FF&E reserve on hand, 4% of $4.6M revenue accrued over 3 years: about **$552,000**
- Remaining need: $2.6M - $552K = **$2.05M**

Bridge path: a future-funding facility draws the $2.05M as the work progresses. At an 8.75%
all-in floating rate, average outstanding of roughly half the facility over 20 months, the
carry is about $2.05M x 0.5 x 8.75% x (20/12) = **$149,000**.

Sale path: a buyer discounts the price by the full $2.6M, and usually a bit more for the
disruption. So funding it yourself costs about $149,000 of carry. Handing it to a buyer
costs $2.6M or more of price. That spread is why owners with the liquidity usually do the
work.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **What is a hotel PIP?**
- **How much does a hotel PIP cost per room?**
- **How long do I have to complete a PIP?**
- **Can I finance a PIP with a bridge loan?**
- **Does an open PIP stop a refinance?**
- **Who pays for the PIP when a hotel sells?**
- **What happens if I miss the PIP deadline?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/bridge-loans`, `/hotel-financing/refinance`, `/hotel-financing/refinance-or-sell`, `/hotel-financing/loan-requirements`
- **Glossary:** `/glossary/pip`, `/glossary/noi`
- **Data:** `/rates`
- **CTA (exactly one):** "Price the PIP financing before you commit" → `/contact`

## Author / reviewer

- **Author:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- **Reviewed by:** Nate Solomon, Hospitality Associate - `/team/nate-solomon`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- Hilton, Marriott, IHG, Choice and Wyndham Franchise Disclosure Documents (the brand's own FDD, cited by brand and year)
- AHLA published research - https://www.ahla.com/research (cite the specific report and date)
- New York Fed SOFR published rate - https://www.newyorkfed.org/markets/reference-rates/sofr
- ISHC / CapEx study published summaries (public summaries only)
- Matthews Hotel Markets September 2026 rate sheet - /rates (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets prices the PIP financing and the as-is sale side by side, because owners deciding between them need one number, not two conversations.

## Warnings specific to this page

- **Per-key PIP costs must come from a brand FDD or a public benchmark with a date.** The $25,000 per key in the example is explicitly hypothetical arithmetic, not a market figure. Label it.
- This page takes the PIP cost and timing rows off `/glossary/pip` (architecture §9.2c). Link the glossary term; do not restate the definition at length.
- The unverified AHLA figure in `HUMAN_QUEUE.md` must not be reused here.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
