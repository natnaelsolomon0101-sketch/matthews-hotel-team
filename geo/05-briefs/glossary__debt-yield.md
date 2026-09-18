# Brief: /glossary/debt-yield

**Owner: Agent 7** · Type: `glossary` · Wave 1

**Template B in `geo/05-templates.md`. This is NOT a new route.** `/glossary/[term]` already exists.
Deliver a new file `src/lib/data/glossary/debt-yield.ts` exporting `entry: GlossaryEntry`, registered in
`src/lib/data/glossary/index.ts`. **Match the live `GlossaryEntry` type**, which is richer than the
80-150 word floor in Spec 5.1: that budget applies to `shortDef` plus `fullDef`, which is the part
that gets lifted. The `body` field is 400-700 words, like the six live entries.

```yaml
slug: debt-yield
term: "Debt Yield"
lastUpdated: 2026-09-17
authorSlug: luke-thompson
```

## Prompts this term must win

Verbatim from `geo/04-queries.csv` where a row exists, plus the direct definitional query.

- "What is debt yield on a hotel loan?"
- "What debt yield do hotel lenders require?"
- "Is debt yield or DSCR the harder test on a hotel loan?"
- "Why does CMBS use debt yield instead of LTV?"
- "How do I calculate debt yield?"

## shortDef (<=30 words, the lift target)

> Debt yield is a hotel's net operating income divided by the loan amount, expressed as a percentage. It measures the lender's return if it had to take the asset back.

## fullDef (~50 words, self-contained)

> Debt yield is NOI divided by loan amount. It is the one sizing test that does not depend on the interest rate, the amortization schedule or an appraisal, which is why CMBS lenders lean on it. Hotel debt yield floors commonly sit near 10 to 11 percent, meaning a hotel producing $2.0M of NOI supports roughly $18M to $20M of loan.

## body (400-700 words) - cover these, in this order

1. The formula: NOI divided by loan amount, as a percentage.
2. What it is actually measuring: the lender's unlevered return on the loan if it took the keys.
3. Why it is rate-independent, and why that makes it the test that does not move when the market does.
4. Why CMBS lenders lean on debt yield: it is immune to the appraisal and to a long amortization
   schedule, both of which can flatter DSCR and LTV.
5. Typical hotel floors, cited to the September 2026 rate sheet with the date.
6. The relationship to cap rate: debt yield is the cap rate on the loan rather than on the price.
7. How to tell which of the three tests binds on your deal, with the calculation shown.

## example (real arithmetic)

Hypothetical. NOI $2,100,000. Value $26,000,000.
- LTV test at 65%: loan = **$16.90M**
- Debt yield floor at 10.5%: loan = $2.1M / 0.105 = **$20.00M**
- DSCR test at 1.40x, 7.10%, 30-year schedule: loan = **$18.56M**
LTV binds at $16.90M. Now assume the appraisal comes back at $30.0M: the LTV test moves to $19.50M
and the **DSCR** test at $18.56M becomes the constraint. Debt yield never moved, because it does not
use the appraisal.

## misconceptions (1-2, written as "X is not Y")

- Debt yield is not cap rate. Cap rate divides NOI by price; debt yield divides NOI by the loan.
  They coincide only at 100 percent leverage, which does not exist.
- A higher debt yield requirement is not a stricter lender in general. It is a stricter lender on
  loan size specifically, and it may be looser on rate or recourse.

## faq (4-5 pairs)

- **What is debt yield?**
- **What debt yield do hotel lenders require?**
- **How is debt yield different from cap rate?**
- **Why do CMBS lenders use debt yield?**
- **Which test usually binds on a hotel loan?**

## sources (4-6, `{label, url, publisher}`)

- CREFC Investor Reporting Package - https://www.crefc.org (CREFC)
- SEC EDGAR CMBS prospectus filings - https://www.sec.gov/edgar/search/ (SEC)
- FDIC Risk Management Manual, CRE lending - https://www.fdic.gov/regulations/safety/manual/ (FDIC)
- Federal Reserve H.15 Selected Interest Rates - https://www.federalreserve.gov/releases/h15/ (Federal Reserve)
- Matthews Hotel Markets September 2026 rate sheet - /rates (Matthews Hotel Markets, first-party)

## relatedTerms (2-3 live glossary slugs)

`cap-rate`, `dscr` (shipping in this wave), `noi` (shipping in this wave)

## relatedAnswers (NEW FIELD - see architecture §5.1)

`/hotel-financing/loan-requirements`, `/hotel-financing/cmbs-loans`, `/hotel-financing/hotel-lenders-by-type`

**Agent 10:** `GlossaryEntry` has no `relatedAnswers` field today. Add
`relatedAnswers?: string[]` to `src/lib/data/glossary/types.ts` and backfill the six live terms as
specified in `geo/05-architecture.md` §5.1. Rule R11 depends on it.

## Why this term is in Wave 1

`/hotel-financing/cmbs-loans` and `/hotel-financing/loan-requirements` both make debt yield the binding test in their worked examples. Neither page can link a defined term that does not exist (rule R12).

---

*Spec: `geo/05-templates.md` Template B. Voice: Shared Spec 5.5. No em-dashes.
Every number carries a source and a date. Slot order: term, last updated, shortDef, fullDef, body,
example, misconceptions, FAQ, related terms, related answers, sources, CTA.*
