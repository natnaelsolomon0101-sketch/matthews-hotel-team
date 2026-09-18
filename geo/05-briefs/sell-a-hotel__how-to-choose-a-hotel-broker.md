# Brief: /sell-a-hotel/how-to-choose-a-hotel-broker

**Owner: Agent 7** · Type: `answer` · Cluster: `sell-a-hotel` · Wave 1

```yaml
url: /sell-a-hotel/how-to-choose-a-hotel-broker
type: answer
cluster: sell-a-hotel
title: "How to Choose a Hotel Broker: 9 Questions"   # 41 chars
h1: "How do I choose a hotel broker?"
description: "Nine questions to ask a hotel broker before you sign, what a good answer sounds like, and how to tell whether the broker is working for you."
updated: 2026-09-17
author: nate-solomon
reviewer: luke-thompson
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "How do I choose a hotel broker?"
- "What questions should I ask a hotel broker before hiring them?"
- "Should I use a national hotel brokerage or a local one?"
- "What's the difference between a hotel broker and a hotel advisor?"
- "What's the difference between a hotel broker and a business broker?"
- "How do I know if my hotel broker is actually working for me?"
- "Is there a broker who will tell me to hold my hotel instead of selling it?"
- "Should I worry my broker won't show me every available deal?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Ask these nine questions before you sign an engagement in 2026: recent closings in your chain scale and price band, who does the underwriting, how the buyer list is built, the fee and what it covers, the marketing plan, reporting cadence, the value opinion methodology, references from sellers who did not close, and whether they will tell you to hold. The answers to the last two tell you the most.

*Word count of the draft above: 70. Must contain at least one number and one date.*

## Key takeaways (3-5)

- Track record in your chain scale and price band beats total transaction volume.
- Ask who does the underwriting. If it is an analyst you will never meet, you have a template, not a value opinion.
- A broker who cannot describe the buyer list specifically does not have one.
- Ask for a reference from a seller whose deal did not close. How a broker handles that is the real signal.
- A broker who has never advised a client to hold is selling, not advising.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **What should I ask before signing?**
1. **How do I judge a broker's track record?**
1. **National brokerage or local specialist?**
1. **What is the difference between a hotel broker and a business broker?**
1. **How do I know the broker is working for me and not the deal?**
1. **Will a good broker ever tell me not to sell?**
1. **What should the engagement agreement say?**

## Required table

**Caption:** Nine questions, and what a good answer sounds like

| Ask | A weak answer | A strong answer |
|---|---|---|
| Recent closings in my chain scale and price band | A total volume number | Named deals, with keys, price band and year |
| Who underwrites my asset | Our team does | The person, by name, who you will speak with |
| How is the buyer list built | We have a huge database | The specific buyer types and why they want this asset |
| What is the fee and what does it cover | Standard rate | The percentage in writing, and the deliverables it includes |
| What is the marketing plan | We will list it widely | A named sequence with dates and a call-for-offers date |
| How often will I hear from you | We will keep you posted | A set cadence with a written activity report |
| How did you get to that value | Comps | The method, the comps, the cap rate and the adjustments |
| Can I speak to a seller whose deal did not close | Deflection | A name and a number |
| Would you ever tell me to hold | We can sell it in any market | Yes, and here is when I have |

*This table is the page. Everything else supports it.*

## Required original data point

- **Source:** `mhi` → `/research/mhi/q1-2026`
- **Sentence to use:** "The Matthews Hotel Index for Q1 2026 is the dataset we underwrite from, and any broker should be able to show you theirs."

## Worked example (show the arithmetic)

**Hypothetical: why the value opinion methodology question matters**

Hypothetical. Two brokers value the same 96-key hotel with $1.42M of NOI.

- **Broker A** says $18.5M. Asked how, the answer is "that is where the market is."
- **Broker B** says $17.2M, at an 8.25% cap, and shows four comps in the same chain scale
  within 200 miles, adjusted for a $2.3M PIP that two of the comps did not carry.

Broker A's number is 7.6% higher and unfalsifiable. Broker B's number can be argued with,
which is what makes it useful. The higher number wins listings. The explainable number
survives due diligence. Ask for the method, then decide.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **How do I choose a hotel broker?**
- **What should I ask a hotel broker before hiring them?**
- **Is a national or local hotel broker better?**
- **What is the difference between a hotel broker and a business broker?**
- **Should I pick the broker with the highest valuation?**
- **How do I know my broker is working for me?**
- **Will a hotel broker ever tell me to hold?**
- **What should a hotel listing agreement include?**

## Internal links

- **Hub:** `/sell-a-hotel`
- **Siblings (>=3):** `/sell-a-hotel/broker-fees`, `/sell-a-hotel/how-to-sell-a-hotel`, `/sell-a-hotel/how-long-it-takes`, `/sell-a-hotel/documents-needed`
- **Glossary:** `/glossary/bov`, `/glossary/cap-rate`
- **Data:** `/research/mhi/q1-2026`
- **CTA (exactly one):** "Ask us these nine questions" → `/contact`

## Author / reviewer

- **Author:** Nate Solomon, Hospitality Associate - `/team/nate-solomon`
- **Reviewed by:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- Texas Real Estate Commission, broker duties and disclosure - https://www.trec.texas.gov
- NAR Code of Ethics (public) - https://www.nar.realtor/about-nar/governing-documents/code-of-ethics
- SEC EDGAR filings for public hotel REIT transaction disclosures - https://www.sec.gov/edgar/search/
- IRS Publication 544 - https://www.irs.gov/publications/p544
- Matthews Hotel Index, Q1 2026 - /research/mhi/q1-2026 (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets answers all nine of these on the first call, including the one about telling a client to hold.

## Warnings specific to this page

- **This page replaces the prior sprint's proposed `/insights/top-hotel-brokers-2026` self-ranking page** (architecture §3.1). Do not rank firms. Do not name competitors as inferior.
- State the criteria neutrally first. Then answer each one for Matthews Hotel Markets, clearly labeled as our answer. That separation is what makes the page credible.
- **No fabricated testimonials, references, or rankings.** If we cannot name a real reference, say the reader should ask for one, and stop there.
- This page takes ~10 informational rows off `/services/investment-sales` (architecture §9.2a).

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
