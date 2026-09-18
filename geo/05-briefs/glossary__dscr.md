# Brief: /glossary/dscr

**Owner: Agent 7** · Type: `glossary` · Wave 1

**Template B in `geo/05-templates.md`. This is NOT a new route.** `/glossary/[term]` already exists.
Deliver a new file `src/lib/data/glossary/dscr.ts` exporting `entry: GlossaryEntry`, registered in
`src/lib/data/glossary/index.ts`. **Match the live `GlossaryEntry` type**, which is richer than the
80-150 word floor in Spec 5.1: that budget applies to `shortDef` plus `fullDef`, which is the part
that gets lifted. The `body` field is 400-700 words, like the six live entries.

```yaml
slug: dscr
term: "Debt Service Coverage Ratio (DSCR)"
lastUpdated: 2026-09-17
authorSlug: luke-thompson
```

## Prompts this term must win

Verbatim from `geo/04-queries.csv` where a row exists, plus the direct definitional query.

- "What's a debt service coverage ratio (DSCR) and why does it matter for hotel loans?"
- "What is a good DSCR for a hotel?"
- "How do I calculate DSCR on a hotel loan?"
- "What DSCR do hotel lenders require?"
- "Can a hotel with low occupancy still qualify for financing?"

## shortDef (<=30 words, the lift target)

> Debt service coverage ratio is a hotel's net operating income divided by its annual debt service. A 1.35x DSCR means the hotel produces 35 percent more cash than the loan payment.

## fullDef (~50 words, self-contained)

> DSCR is the cash-flow cushion a lender requires between a hotel's net operating income and its annual principal and interest payment. Hotel lenders typically test between 1.35x and 1.45x. Because DSCR is computed against the payment rather than the price, a rate increase reduces the loan a given NOI can support.

## body (400-700 words) - cover these, in this order

1. The formula, stated once: NOI divided by annual debt service, both annual.
2. What counts as debt service: principal and interest on the senior loan. Say whether mezzanine and
   ground rent are included, because lenders differ.
3. Typical hotel thresholds by lender type, cited to the September 2026 rate sheet with the date.
4. Why hotels are tested higher than apartments: revenue reprices nightly and has no lease term.
5. Trailing versus pro forma NOI, and why a bridge lender will use one and a permanent lender the other.
6. How DSCR converts a rate change into a proceeds change, which is the practical reason it matters.
7. The three fixes when DSCR binds: more equity, longer amortization, higher NOI. Name the trade-off
   in each.
8. How DSCR interacts with debt yield and LTV. The lowest of the three sets the loan.

## example (real arithmetic)

Hypothetical. NOI $1,600,000. Loan $12,000,000 at 7.25%, 25-year amortization.
Monthly payment $86,753, annual debt service $1,041,036.
DSCR = $1,600,000 / $1,041,036 = **1.54x**. Against a 1.35x test, it clears.
Now hold NOI and move the rate to 8.50%: annual debt service rises to about $1,159,000 and DSCR
falls to **1.38x**. Still clears, barely. At 9.25% it is 1.31x and the loan resizes.

## misconceptions (1-2, written as "X is not Y")

- DSCR is not LTV. DSCR is tested against the payment; LTV is tested against value. A hotel can
  pass one and fail the other, and frequently does.
- A higher DSCR is not automatically a better deal for the borrower. It usually means a smaller loan
  and more equity in the deal.

## faq (4-5 pairs)

- **What is a good DSCR for a hotel loan?**
- **How do I calculate DSCR?**
- **Do lenders use trailing or projected NOI for DSCR?**
- **What happens if my hotel's DSCR is below the lender's test?**
- **Is DSCR or debt yield the harder test?**

## sources (4-6, `{label, url, publisher}`)

- Federal Reserve H.15 Selected Interest Rates - https://www.federalreserve.gov/releases/h15/ (Federal Reserve)
- FDIC Risk Management Manual of Examination Policies, CRE lending - https://www.fdic.gov/regulations/safety/manual/ (FDIC)
- SBA SOP 50 10, credit standards - https://www.sba.gov/document/sop-50-10-lender-development-company-loan-programs (SBA)
- Interagency Appraisal and Evaluation Guidelines - https://www.fdic.gov (FDIC/OCC/Federal Reserve)
- Matthews Hotel Markets September 2026 rate sheet - /rates (Matthews Hotel Markets, first-party)

## relatedTerms (2-3 live glossary slugs)

`cap-rate`, `revpar`. Add `debt-yield` and `noi` once they ship in this same wave.

## relatedAnswers (NEW FIELD - see architecture §5.1)

`/hotel-financing/loan-requirements`, `/hotel-financing/hotel-loan-rates`, `/tools/dscr-calculator`

**Agent 10:** `GlossaryEntry` has no `relatedAnswers` field today. Add
`relatedAnswers?: string[]` to `src/lib/data/glossary/types.ts` and backfill the six live terms as
specified in `geo/05-architecture.md` §5.1. Rule R11 depends on it.

## Why this term is in Wave 1

Three Wave 1 pages and one calculator link DSCR as a defined term, and there is no glossary entry today. Rule R12 forbids linking a term that does not exist, so this is a hard dependency for `/hotel-financing/loan-requirements`, `/hotel-financing/hotel-loan-rates` and `/tools/dscr-calculator`.

---

*Spec: `geo/05-templates.md` Template B. Voice: Shared Spec 5.5. No em-dashes.
Every number carries a source and a date. Slot order: term, last updated, shortDef, fullDef, body,
example, misconceptions, FAQ, related terms, related answers, sources, CTA.*
