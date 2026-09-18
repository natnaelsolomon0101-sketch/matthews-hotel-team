# geo/05-briefs/ - Wave 1 index

30 briefs, one per Wave 1 page. Read `geo/05-architecture.md` first for why these 30 and not others,
and `geo/05-templates.md` for the front matter and slot order every draft must carry.

**Filename convention:** the URL with `/` replaced by `__`. `/hotel-financing/cmbs-loans` →
`hotel-financing__cmbs-loans.md`.

## Agent 6 - financing (15 briefs, drafts go to `geo/06-pages/`)

| Brief | URL | Type |
|---|---|---|
| `hotel-financing.md` | `/hotel-financing` | hub |
| `hotel-financing__hotel-loan-rates.md` | `/hotel-financing/hotel-loan-rates` | answer |
| `hotel-financing__loan-requirements.md` | `/hotel-financing/loan-requirements` | answer |
| `hotel-financing__refinance.md` | `/hotel-financing/refinance` | answer |
| `hotel-financing__sba-7a-vs-504.md` | `/hotel-financing/sba-7a-vs-504` | answer |
| `hotel-financing__cmbs-loans.md` | `/hotel-financing/cmbs-loans` | answer |
| `hotel-financing__bridge-loans.md` | `/hotel-financing/bridge-loans` | answer |
| `hotel-financing__loan-maturities-2026-2027.md` | `/hotel-financing/loan-maturities-2026-2027` | answer **(blocked, see below)** |
| `hotel-financing__loan-workouts.md` | `/hotel-financing/loan-workouts` | answer |
| `hotel-financing__refinance-or-sell.md` | `/hotel-financing/refinance-or-sell` | answer |
| `hotel-financing__pip-and-renovation-loans.md` | `/hotel-financing/pip-and-renovation-loans` | answer |
| `hotel-financing__1031-exchange-hotels.md` | `/hotel-financing/1031-exchange-hotels` | answer |
| `hotel-financing__how-debt-placement-works.md` | `/hotel-financing/how-debt-placement-works` | answer |
| `hotel-financing__hotel-lenders-by-type.md` | `/hotel-financing/hotel-lenders-by-type` | answer |
| `hotel-financing__faq.md` | `/hotel-financing/faq` | answer |

Also written by Agent 6: the copy for `tools__dscr-calculator.md` (Agent 10 builds the island).

## Agent 7 - sales, valuation, glossary (14 briefs, drafts go to `geo/07-pages/`)

| Brief | URL | Type |
|---|---|---|
| `sell-a-hotel.md` | `/sell-a-hotel` | hub |
| `sell-a-hotel__how-to-sell-a-hotel.md` | `/sell-a-hotel/how-to-sell-a-hotel` | answer |
| `sell-a-hotel__how-long-it-takes.md` | `/sell-a-hotel/how-long-it-takes` | answer |
| `sell-a-hotel__broker-fees.md` | `/sell-a-hotel/broker-fees` | answer |
| `sell-a-hotel__documents-needed.md` | `/sell-a-hotel/documents-needed` | answer |
| `sell-a-hotel__how-to-choose-a-hotel-broker.md` | `/sell-a-hotel/how-to-choose-a-hotel-broker` | answer |
| `hotel-valuation.md` | `/hotel-valuation` | hub |
| `hotel-valuation__how-to-value-a-hotel.md` | `/hotel-valuation/how-to-value-a-hotel` | answer |
| `hotel-valuation__hotel-cap-rates.md` | `/hotel-valuation/hotel-cap-rates` | answer |
| `hotel-valuation__broker-opinion-of-value.md` | `/hotel-valuation/broker-opinion-of-value` | answer |
| `hotel-valuation__select-service-vs-full-service.md` | `/hotel-valuation/select-service-vs-full-service` | answer |
| `glossary__dscr.md` | `/glossary/dscr` | glossary (Template B) |
| `glossary__debt-yield.md` | `/glossary/debt-yield` | glossary (Template B) |
| `glossary__noi.md` | `/glossary/noi` | glossary (Template B) |

## Agent 10 - build

| Brief | URL | Note |
|---|---|---|
| `tools__dscr-calculator.md` | `/tools/dscr-calculator` | Template D. Server-rendered page, one client island. Copy from Agent 6. |

Plus: the market, brand, glossary-type and internal-link changes in `geo/05-architecture.md` §5 and
§6.5, and the three `vercel.json` items in §8.3.

## Wave 2

`_wave2-stubs.md`. Specified, deliberately not written.

---

## Blocking dependencies - read before writing anything

1. **`/rates` does not exist yet (Agent 8).** Thirteen financing briefs name a rate-sheet row as
   their required original data point. Until it ships, writers leave
   `[[RATE-SHEET: <metric>]]` in place. **Agent 10 fails the build on any surviving `[[…]]` marker.**
   Do not substitute a remembered number. No source, no number.

2. **`/hotel-financing/loan-maturities-2026-2027` is blocked outright** until Agent 1 resolves the
   `HUMAN_QUEUE.md` dispute between a $30B figure used six times on the site and Trepp's published
   $18.7B. Write the page; do not publish it with either number unsourced.

3. **No firm-level volume, transaction-count, or founding-date claim in any Wave 1 page.**
   `llms.txt` says $84.3B, the homepage reportedly says $88.37B, and "670+ hotel transactions" and
   "founded in 2024" have no source. Author boxes say who the person is and what they do, and
   nothing about how much the firm has traded.

4. **Authors and reviewers must be `luke-thompson`, `miles-cortez` or `nate-solomon`.** `team.ts`
   holds 22 real people, but only those three have `hasBio: true`, a bio, and a verified LinkedIn.
   Never invent a person. Never recreate `sarah-chen`, `marcus-reyes` or `elena-park`, which
   `vercel.json` 301s to `/team` because they were fabricated.

5. **Never republish licensed data.** No STR/STAR tables, no CoStar tables, no Trepp subscriber
   data. Describe what a document contains; cite the public release with its URL and date.

6. **No em-dashes in user-facing copy.** Commas, colons, or a period.
