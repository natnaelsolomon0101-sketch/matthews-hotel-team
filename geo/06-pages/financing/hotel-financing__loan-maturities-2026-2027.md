STATUS: BLOCKED, unresolved source dispute

# /hotel-financing/loan-maturities-2026-2027

This page is not written. It is blocked per the run's binding ruling: this URL ships only if every
maturity figure on it can be sourced by this agent to a dated public Trepp/MBA release, and I could
not clear that bar in this pass. Below is exactly what is blocking it and what would unblock it.

## Why this is blocked

`HUMAN_QUEUE.md` and `reports/article-fact-check.md` both document a live, unresolved dispute in
this repo. A large, round-number, multi-year hotel CMBS maturity estimate covering 2026 through
year-end 2027 appears repeatedly across `src/lib/data/insights-articles/hotel-refinancing-wave-2026.ts`
(6 times), `src/lib/data/insights.ts` (3 times), and
`src/lib/data/insights-articles/how-to-sell-a-hotel-2026.ts` (1 time). Trepp's own published figure,
cited in both of those repo documents, is a single-year, 2026-only hotel CMBS hard-maturity figure
of $18.7 billion (Trepp, via TreppWire, February 2025). The repeated multi-year estimate is not
attributed to any specific dated Trepp or MBA release anywhere in the repo, and adding a 2027 book
of unknown size to the sourced 2026 figure is not the same calculation as the repeated number. Per
this run's binding ruling, I do not restate that repeated multi-year figure on this page or any
other page I wrote in this pass, so that it stops propagating.

I ran one live web search on 2026-09-17 to see if I could independently source and date a current
figure myself. It returned inconsistent, non-current data: an April 2025 S&P Global figure showing
overall CMBS delinquency at 6.1 percent with lodging at 6.6 percent, and a separate reference to an
August 2025 Trepp print showing lodging delinquency at 9.10 percent. Neither result gave me a
reliable, dated, September 2026 hotel-specific maturity volume figure, as opposed to a delinquency
rate, which is a related but different statistic already used elsewhere in this run on
`/hotel-financing/cmbs-loans`. I did not find a source I could stand behind as "how much hotel debt
matures in 2026 and 2027, as of a specific dated release."

## What would unblock this page

1. A specific, current Trepp release, a TreppTalk post or TreppWire item, stating a hotel-only CMBS
   maturity volume for 2026 and, separately, for 2027, each with its own publication date and URL.
   The sourced 2026-only figure already in the repo covers 2026 only; nothing in this repo or in my
   search sources a comparable, dated 2027 figure.
2. A specific, current MBA release giving the "all commercial and multifamily, hotel subtotal"
   maturity figure the brief's own table asks for. `reports/article-fact-check.md` references an
   MBA February 2025 release ($957 billion, 20 percent of $4.8 trillion, 2025 maturities) and a
   separate MBA February 2026 update (17 percent of balances maturing in 2026), but neither is
   hotel-specific, so neither fills this row honestly.
3. A decision from Nate or Agent 1 on how to frame the Trepp and MBA universes side by side without
   implying they measure the same thing, since the brief's own table requires stating what each
   figure counts, precisely so a reader does not average two numbers that describe different loan
   populations.

## What ships once this is unblocked

The brief (`geo/05-briefs/hotel-financing__loan-maturities-2026-2027.md`) is otherwise complete and
usable as-is. The direct answer, key takeaways, H2 outline, worked example (the maturity
stress-test arithmetic), FAQ questions, and internal links do not depend on the disputed figure and
can be carried forward unchanged once the maturity-figures table has real, sourced, dated cells.
The only blocked element is the "Hotel loan maturity figures, by publisher" table itself.

## What I could NOT source, specifically

- A dated, hotel-specific CMBS maturity volume for 2027 from any public Trepp release.
- Any hotel-specific figure at all from a public Federal Reserve release. The brief's own table
  already anticipates this outcome for the Federal Reserve row.
- A current, September 2026, MBA hotel-subtotal maturity figure. The two MBA figures in this
  repo's existing fact-check are both blended commercial and multifamily totals, not hotel-specific.
- Confirmation of which universe, if either, the repeated multi-year figure was actually built
  from. It is not attributed to a specific dated release anywhere in the repo.

Filed to `geo/requests.md` for Agent 1, Agent 10 and Nate: this page needs either a fresh,
specifically hotel-and-2027 Trepp release to cite, or an explicit editorial decision to publish the
page using only the sourced, single-year figure with a clearly labeled "2027 data not yet public"
gap, rather than any blended or estimated total. I did not make that editorial call myself, because
it is the exact kind of judgment the binding ruling reserves for Nate and Agent 1, not for a writer
under deadline.
