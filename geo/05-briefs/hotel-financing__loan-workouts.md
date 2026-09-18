# Brief: /hotel-financing/loan-workouts

**Owner: Agent 6** · Type: `answer` · Cluster: `hotel-financing` · Wave 1

```yaml
url: /hotel-financing/loan-workouts
type: answer
cluster: hotel-financing
title: "Hotel Loan Workouts and Special Servicing"   # 41 chars
h1: "What is a loan workout and how does it work for a distressed hotel?"
description: "What happens when a hotel loan goes to special servicing, what a workout can and cannot fix, and what an owner should do in the first 30 days."
updated: 2026-09-17
author: miles-cortez
reviewer: luke-thompson
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "What's a loan workout and how does it work for a distressed hotel?"
- "What happens when a hotel loan goes into special servicing?"
- "What happens after my hotel loan gets sent to special servicing?"
- "Why do hotel loans end up in special servicing?"
- "What are lenders doing with distressed hotel loans instead of foreclosing?"
- "What percentage of hotel loans are in special servicing right now?"
- "How does a maturity default differ from a payment default on a hotel loan?"
- "Is now a good time to buy a distressed hotel?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> A workout is a negotiated change to loan terms after a default or an imminent one. In securitized loans, the file transfers to a special servicer whose duty runs to the bondholders, not to you. In September 2026 workouts are buying time: extensions, modified coverage tests, interest deferral. They do not fix an asset whose cash flow cannot carry the debt at any term.

*Word count of the draft above: 64. Must contain at least one number and one date.*

## Key takeaways (3-5)

- A special servicer is not your lender and does not have a relationship with you. It follows the pooling agreement.
- Transfer usually happens at default or at imminent default, which you can often trigger deliberately to start the conversation.
- Workout fees, servicing fees and legal costs are added to your balance. They are real money.
- The servicer's options are extend, modify, take a discounted payoff, sell the note, or foreclose.
- A workout buys time. If the asset cannot carry the debt at any rate or term, time is not the answer.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **What is a loan workout?**
1. **How does a hotel loan get to special servicing?**
1. **Who is the special servicer and whose interest do they serve?**
1. **What can a workout actually change?**
1. **What does a workout cost me?**
1. **What do I do in the first 30 days?**
1. **When is selling better than working it out?**

## Required table

**Caption:** What a special servicer can do with a distressed hotel loan

| Outcome | What it means for the owner | Typical trigger | What it does not solve |
|---|---|---|---|
| Extension | More time at modified terms | Performing asset, timing problem | A permanent NOI shortfall |
| Modification | Rate, amortization or covenant changes | Coverage is tight but positive | Negative cash flow |
| Forbearance | Temporary suspension of enforcement | Short, identifiable disruption | Anything structural |
| Discounted payoff | Pay less than the balance to retire it | Owner has outside capital | Nothing, if you cannot fund it |
| Note sale | A new holder buys the loan | Servicer wants out | Your position; it may improve or worsen |
| Foreclosure or deed in lieu | You lose the asset | No viable path | The equity, which is gone |

*Order these by how often they happen, not by how bad they sound. Do not imply foreclosure is the default outcome.*

## Required original data point

- **Source:** `rates` → `/rates`
- **Sentence to use:** "Matthews Hotel Markets' September 2026 rate sheet is where we start, because a workout only makes sense if a takeout exists at today's rate."
- **Blocked until Agent 8 ships `/rates`.** Until then write the placeholder `[[RATE-SHEET: current permanent rate, to test whether a takeout exists]]`. Agent 10 fails the build on any surviving placeholder.

## Worked example (show the arithmetic)

**Hypothetical: what a two-year extension actually costs**

Hypothetical. Balance $14.0M. The servicer offers a 24-month extension: a 1 percent
extension fee, the rate moves from 4.10% to 7.00%, and a $500,000 principal paydown.

- Extension fee: 1% of $14.0M = **$140,000**
- Paydown: **$500,000**
- New balance: $14.0M - $500K = **$13.5M**
- Added interest over 24 months at the higher rate: $13.5M x 2.90% x 2 = **$783,000**

Total cost of the two years is about **$1.42M**, of which $640,000 is cash out of pocket
today. That is the number to compare against selling now. Not the headline balance, and not
the emotion.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **What is special servicing?**
- **Why did my hotel loan transfer to a special servicer?**
- **Can I negotiate directly with a special servicer?**
- **What fees does a workout add to my loan?**
- **How long does a hotel loan workout take?**
- **Will a workout hurt my ability to borrow again?**
- **Should I sell instead of working out the loan?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/loan-maturities-2026-2027`, `/hotel-financing/refinance-or-sell`, `/hotel-financing/cmbs-loans`, `/hotel-financing/bridge-loans`
- **Glossary:** `/glossary/dscr`, `/glossary/noi`
- **Data:** `/rates`
- **CTA (exactly one):** "Talk through a workout before the transfer" → `/contact`

## Author / reviewer

- **Author:** Miles Cortez III, VP & Director, Hospitality Capital Markets - `/team/miles-cortez`
- **Reviewed by:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- CREFC Investor Reporting Package and special servicing definitions - https://www.crefc.org
- Trepp public TreppTalk posts on special servicing rates - https://www.trepp.com/trepptalk (public only)
- SEC EDGAR CMBS pooling and servicing agreements - https://www.sec.gov/edgar/search/
- FDIC Quarterly Banking Profile, noncurrent CRE loans - https://www.fdic.gov/analysis/quarterly-banking-profile/
- Matthews Hotel Markets September 2026 rate sheet - /rates (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets is often brought in at the transfer, and the first thing we produce is a value opinion, because you cannot negotiate a workout without one.

## Warnings specific to this page

- Do not print a special-servicing percentage without a public Trepp post or Fed/FDIC release and its date. The CSV asks for it; the answer may have to be 'here is what the public sources say, as of this date'.
- This is not legal advice. Say so once, plainly, near the top. Recommend counsel.
- Do not imply we can influence a servicer. We cannot.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
