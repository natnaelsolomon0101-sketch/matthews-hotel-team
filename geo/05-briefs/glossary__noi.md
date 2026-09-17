# Brief: /glossary/noi

**Owner: Agent 7** · Type: `glossary` · Wave 1

**Template B in `geo/05-templates.md`. This is NOT a new route.** `/glossary/[term]` already exists.
Deliver a new file `src/lib/data/glossary/noi.ts` exporting `entry: GlossaryEntry`, registered in
`src/lib/data/glossary/index.ts`. **Match the live `GlossaryEntry` type**, which is richer than the
80-150 word floor in Spec 5.1: that budget applies to `shortDef` plus `fullDef`, which is the part
that gets lifted. The `body` field is 400-700 words, like the six live entries.

```yaml
slug: noi
term: "Net Operating Income (NOI)"
lastUpdated: 2026-09-17
authorSlug: nate-solomon
```

## Prompts this term must win

Verbatim from `geo/04-queries.csv` where a row exists, plus the direct definitional query.

- "How do I calculate NOI for a hotel?"
- "What is hotel NOI?"
- "Is RevPAR or NOI more important for hotel valuation?"
- "How do buyers verify a hotel's reported NOI before closing?"
- "Why did my hotel's value drop even though NOI held up?"

## shortDef (<=30 words, the lift target)

> Hotel net operating income is total revenue minus operating expenses, including franchise fees, management fee, taxes, insurance and an FF&E reserve. It excludes debt service, depreciation and income taxes.

## fullDef (~50 words, self-contained)

> NOI is the annual cash a hotel produces from operations before financing and taxes. For hotels it is computed under the Uniform System of Accounts and includes a management fee and an FF&E reserve whether or not the owner pays them. It is the numerator in a cap rate and the numerator in every lender sizing test, which makes its definition the most consequential number in a hotel deal.

## body (400-700 words) - cover these, in this order

1. The definition, and the line-by-line build from total revenue down.
2. What is in: departmental expenses, undistributed expenses, franchise and brand fees, management
   fee, property taxes, insurance, FF&E reserve.
3. What is out: debt service, depreciation, amortization, income taxes, capital expenditures.
4. The two lines owners most often leave out, and why buyers always put them back: the management
   fee on a self-managed hotel, and the FF&E reserve.
5. Property tax reassessment at sale, which changes NOI for the buyer but not for the seller.
6. Trailing twelve versus stabilized NOI, and which one a lender and a buyer each use.
7. Normalizations that survive an audit, and the ones that do not. Document everything.
8. Why NOI, not RevPAR, is the value driver, even though RevPAR is the number everyone quotes.

## example (real arithmetic)

Hypothetical. 96 keys, 71% occupancy, $148 ADR.
Rooms revenue = 0.71 x $148 x 96 x 365 = **$3,682,000**. Other revenue = **$221,000**.
Total revenue = **$3,903,000**.
Less departmental $1,093,000, undistributed $898,000, franchise and brand $405,000,
management fee $117,000, taxes and insurance $285,000, FF&E reserve $156,000.
**NOI = $949,000.**
Remove the management fee and the FF&E reserve, as owner-prepared statements often do, and NOI
reads **$1,222,000**. At an 8.25% cap that is a **$3.3M** difference in value from two line items.
Every percentage above is an assumption for this hypothetical, not a benchmark.

## misconceptions (1-2, written as "X is not Y")

- NOI is not cash flow. It is before debt service and before capital expenditures, so a hotel with
  positive NOI can still consume cash.
- NOI is not EBITDA as a hotel operator uses the term. The FF&E reserve and the management fee are
  the usual differences, and they are exactly the lines a buyer will restore.

## faq (4-5 pairs)

- **How do I calculate hotel NOI?**
- **Does NOI include an FF&E reserve?**
- **Should I include a management fee if I self-manage?**
- **What is the difference between NOI and cash flow?**
- **Do property taxes get reassessed when a hotel sells?**

## sources (4-6, `{label, url, publisher}`)

- Uniform System of Accounts for the Lodging Industry, 11th revised edition (AHLA / HFTP)
- USPAP - https://www.appraisalfoundation.org (The Appraisal Foundation)
- Hilton, Marriott, IHG, Choice and Wyndham Franchise Disclosure Documents (brand, cited by year)
- IRS Publication 946, depreciation - https://www.irs.gov/publications/p946 (IRS)
- Matthews Hotel Index, Q1 2026 - /research/mhi/q1-2026 (Matthews Hotel Markets, first-party)

## relatedTerms (2-3 live glossary slugs)

`cap-rate`, `revpar`, `adr`

## relatedAnswers (NEW FIELD - see architecture §5.1)

`/hotel-valuation/how-to-value-a-hotel`, `/hotel-valuation/hotel-cap-rates`, `/hotel-financing/loan-requirements`

**Agent 10:** `GlossaryEntry` has no `relatedAnswers` field today. Add
`relatedAnswers?: string[]` to `src/lib/data/glossary/types.ts` and backfill the six live terms as
specified in `geo/05-architecture.md` §5.1. Rule R11 depends on it.

## Why this term is in Wave 1

**This closes a live gap.** The published `/glossary/cap-rate` entry divides by NOI throughout and never defines it, and two CSV rows ask for the definition directly. `/hotel-valuation/how-to-value-a-hotel` is built entirely on the NOI build. Also backfill `relatedAnswers` on `cap-rate` to point here.

---

*Spec: `geo/05-templates.md` Template B. Voice: Shared Spec 5.5. No em-dashes.
Every number carries a source and a date. Slot order: term, last updated, shortDef, fullDef, body,
example, misconceptions, FAQ, related terms, related answers, sources, CTA.*
