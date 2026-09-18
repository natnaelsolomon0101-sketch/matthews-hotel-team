# geo/05-templates.md - Agent 5, content-architect

Four page templates for Agent 10 to build, and the front matter the writers (Agents 6 and 7) must
carry so Agent 10 can render a draft mechanically, without re-reading the brief.

**Repo convention this matches:** content on this site lives in **typed TypeScript modules under
`src/lib/data/`**. There is no CMS and no MDX, and this run does not introduce one. The writers
produce Markdown with YAML front matter because that is a sane authoring format; **Agent 10 converts
each file into a typed object in `src/lib/data/answers/<cluster>/<slug>.ts`** the same way
`src/lib/data/glossary/` and `src/lib/data/insights-articles/` already work. §5 gives the converter
contract.

---

## 1. Front matter - the contract

Every Wave 1 draft carries exactly these keys. Agent 10 fails the build on a missing required key
rather than rendering a partial page.

```yaml
---
url: /hotel-financing/loan-requirements          # required, absolute, no trailing slash, no date
type: answer                                     # required: answer | hub | glossary | market | tool
cluster: hotel-financing                         # required: hotel-financing | sell-a-hotel | hotel-valuation | glossary | markets | tools
title: "Hotel Loan Requirements in 2026"         # required, <=60 chars incl. spaces
h1: "What do lenders require for a hotel loan?"  # required, the question as asked, one H1
description: "..."                               # required, <=155 chars, used for meta + OG
updated: 2026-09-17                              # required, ISO. -> visible "Last updated" AND dateModified
author: luke-thompson                            # required, MUST be a slug in src/lib/data/team.ts
reviewer: nate-solomon                           # optional, same constraint, omit if nobody reviewed
target_prompts:                                  # required, 5-10, verbatim from geo/04-queries.csv
  - "What's a debt service coverage ratio (DSCR) and why does it matter for hotel loans?"
answer: >                                        # required, 40-70 words, >=1 number, >=1 date
  ...
takeaways:                                       # required, 3-5 strings
  - "..."
sections:                                        # required, ordered. Each h2 is a sub-question.
  - h2: "How much can I borrow against a hotel?"
    lead: "One sentence that answers this H2 before anything else."
table:                                           # required, >=1
  caption: "Hotel loan sizing tests, September 2026"
  columns: ["Test", "Typical threshold", "What it constrains"]
  rows:
    - ["DSCR", "1.35x-1.45x", "Annual debt service"]
original_data_point:                             # required
  source: rates                                  # rates | mhi
  ref: "/rates#select-service-fixed"             # the exact row or section cited
  sentence: "Matthews Hotel Markets' September 2026 rate sheet shows ..."
worked_example:                                  # required
  label: "Hypothetical: 95-key Hampton Inn, Texas secondary market"
  body: "Show the arithmetic. Say it is hypothetical."
faq:                                             # required, 5-8, each answer <=50 words
  - q: "..."
    a: "..."
sources:                                         # required, >=4, numbered in order of first reference
  - n: 1
    label: "SBA 7(a) loan program"
    url: "https://www.sba.gov/funding-programs/loans/7a-loans"
    publisher: "U.S. Small Business Administration"
    accessed: 2026-09-17
related:                                         # required
  hub: /hotel-financing
  siblings: [/hotel-financing/hotel-loan-rates, /hotel-financing/cmbs-loans, /hotel-financing/refinance]
  glossary: [/glossary/dscr, /glossary/debt-yield, /glossary/noi]
  data: [/rates]                                 # /rates and/or /research/mhi/<quarter>
cta:                                             # required, exactly one
  label: "Talk to the capital markets desk"
  href: /contact
brand_sentence: "..."                            # required, the one natural brand mention
---
```

### 1.1 Validation rules Agent 10 enforces at build time

| Rule | Failure mode if skipped |
|---|---|
| `title` ≤ 60 chars | Truncated in results |
| exactly one `h1` | Multiple H1s dilute the extracted question |
| `answer` between 40 and 70 words, contains a digit and a date | The block that gets lifted says nothing |
| `author` and `reviewer` ∈ `team.ts` slugs | **Invented people.** Hard fail. |
| `updated` ≤ today, and unchanged unless the body changed | Fake freshness |
| `faq` length 5–8, every `a` ≤ 50 words | FAQPage schema bloat |
| every `faq` item appears **visibly** in the rendered page | Schema for invisible content (Spec 5.6) |
| `sources` ≥ 4, every `url` resolves | Unsourced numbers |
| `original_data_point.ref` resolves to a live anchor | `[[RATE-SHEET: …]]` placeholder shipped to production |
| `related.siblings` ≥ 3, all in the same `cluster` | Orphan page |
| exactly one `cta`, `href: /contact` | Conversion path drift |
| no em-dash anywhere in rendered copy | Nate flags it as an AI tell |
| no `noindex`, no `nosnippet`, no `data-nosnippet` | Removes the page from AI features (`geo/00-guidance.md` §A.5) |

---

## 2. Template A - answer page (`type: answer`, also `hub`)

`src/app/(answers)/[cluster]/[slug]/page.tsx`, static, `generateStaticParams` from the data module.
Hub pages use the same template with `type: hub` and one extra slot (A8).

**Slot order. Do not reorder; this is the order an extractor reads.**

| # | Slot | Source | Notes |
|---|---|---|---|
| A1 | Breadcrumb | `related.hub` | `Home / Hotel Financing / Loan Requirements`. Emits `BreadcrumbList`. |
| A2 | `<h1>` | `h1` | The question. Exactly one on the page. |
| A3 | "Last updated: September 17, 2026" | `updated` | **Visible**, directly under the H1. Same value in `dateModified`. |
| A4 | Direct answer block | `answer` | 40–70 words, styled as a lead paragraph, no wind-up. First text after A3. |
| A5 | Key takeaways | `takeaways` | 3–5 bullets. **The only bullet list allowed above the first H2.** |
| A6 | Body sections | `sections[]` | Each renders `<h2>{h2}</h2>` then `<p class="lead">{lead}</p>` then the writer's prose. |
| A7 | Comparison table | `table` | Rendered as a real `<table>` with `<caption>`, `<thead>`, `<th scope="col">`. Never a div grid. |
| A8 | *(hub only)* Spoke list | computed | Every spoke in the cluster, anchor text = that spoke's `h1`. Rule R6. |
| A9 | Worked example | `worked_example` | Labeled "Worked example". If hypothetical, the label says so. |
| A10 | FAQ | `faq[]` | Visible `<h3>`/`<p>` pairs, mirrored 1:1 into `FAQPage` JSON-LD. |
| A11 | Author box | `author`, `reviewer` | Name, title, firm, phone, email, LinkedIn, all from `team.ts`. Links `/team/[slug]`. "Reviewed by" only when `reviewer` is set. |
| A12 | Sources | `sources[]` | Numbered `<ol>`, outbound links, publisher and accessed date shown. |
| A13 | Related links | `related` | Hub + ≥3 siblings + glossary terms + `/rates` or `/research/mhi`. |
| A14 | CTA | `cta` | One. To `/contact`. |

**JSON-LD** (emitted by Agent 3's `src/lib/entity.ts` into the page `@graph`, not hand-inlined):
`WebPage` (with `dateModified` = `updated`, `isPartOf` the cluster `CollectionPage`), `Article` or
`FAQPage` as appropriate, `BreadcrumbList`, `Person` for the author, and the shared `Organization`
node by `@id` reference. **No `AggregateRating`. No `Review`.** No schema for anything not in A1–A14.

---

## 3. Template B - glossary term (`type: glossary`)

**No new route.** `/glossary/[term]` exists. A new term is a new file in
`src/lib/data/glossary/<slug>.ts` exporting `entry: GlossaryEntry`, registered in
`src/lib/data/glossary/index.ts`.

Front matter maps onto the **live** `GlossaryEntry` type, which is richer than the answer-page spec's
80–150-word floor. Match the live type:

| Front-matter key | `GlossaryEntry` field | Constraint |
|---|---|---|
| `h1` | `term` | The term, e.g. "Debt Service Coverage Ratio (DSCR)" |
| `answer` | `shortDef` | ≤30 words. This is the lift target. |
| - | `fullDef` | ~50 words, self-contained |
| `sections[]` prose | `body` | 400–700 words, paragraphs joined with `\n\n` |
| `worked_example.body` | `example` | Real arithmetic |
| `takeaways` | `misconceptions` | 1–2, written as "X is not Y" |
| `faq` | `faq` | 4–5 pairs |
| `sources` | `sources` | 4–6, `{label, url, publisher}` |
| `related.glossary` | `relatedTerms` | 2–3 sibling slugs |
| - | `relatedMarkets` / `relatedBrands` / `relatedInsights` | optional, existing fields |
| `related.hub` + `related.siblings` | **`relatedAnswers` (NEW FIELD)** | 1–3 absolute cluster paths. Agent 10 adds this field and backfills the six live terms (architecture §5.1). |
| `updated` | `lastUpdated` | ISO |
| `author` | `authorSlug` | `team.ts` slug |

Slot order: term → last updated → `shortDef` → `fullDef` → body → example → misconceptions → FAQ →
related terms → **related answers** → sources → CTA. JSON-LD: `DefinedTerm` inside a
`DefinedTermSet` for `/glossary`, plus `FAQPage`. This is what the live pages already emit; do not
change it.

---

## 4. Template C - market page (`type: market`)

**No new route and no new URLs in Wave 1.** `/markets/[city]` exists. This template describes the
*additions* to the live page (architecture §5.2).

| # | Slot | Source | New? |
|---|---|---|---|
| C1 | Breadcrumb | `/markets` index (§8.3) | new |
| C2 | `<h1>` | `"Hotels for sale in {city}, {state}"` | live |
| C3 | **Last updated** | new `Market.lastUpdated` | **new - the page shows no date today** |
| C4 | Direct answer, 40–70 words | new `Market.directAnswer` | **new** |
| C5 | Key takeaways | new `Market.takeaways` | **new** |
| C6 | Market commentary | `marketCommentary` | live |
| C7 | **MHI table** | `mhi.ts` `MarketDataPoint` for this slug | **new** - cap-rate bands by segment, ADR low/high, RevPAR low/high, occupancy, QoQ and YoY RevPAR change, with a link to `/research/mhi/q1-2026` |
| C8 | Demand drivers | `demandDrivers` | live |
| C9 | Live listings in this metro | `listings.ts` | live |
| C10 | Closed deals in this metro | `closed.ts` | live |
| C11 | Brokers | `brokerSlugs` → `/team/[slug]` | live |
| C12 | Related brands | `/hotels-for-sale/[brand]` | live |
| C13 | **Related answers** | new `Market.relatedAnswers` | **new** - 3 cluster links |
| C14 | CTA | `/contact` | live |

Length 800–1,500 words. JSON-LD: `WebPage` + `BreadcrumbList` + `Dataset` for the MHI table (it is
first-party and visible, so the node is honest) + the shared `Organization` by `@id`. **No
`LocalBusiness` node on a market page** unless there is a real street address for that metro;
`offices.ts` has two, and that is Agent 3's call, not this template's.

---

## 5. Template D - tool page (`type: tool`)

Spec 5.1 and the orchestrator brief both require this: **server-rendered, with a small client island.
The explanation text must be in the HTML.** A calculator whose page is empty until JS runs is
invisible to the extractor, which defeats the point of building it.

| # | Slot | Rendering | Notes |
|---|---|---|---|
| D1 | Breadcrumb | server | |
| D2 | `<h1>` | server | The question, e.g. "Hotel DSCR calculator" |
| D3 | Last updated | server | |
| D4 | Direct answer, 40–70 words | server | Defines the metric and states the typical threshold with a source and a date |
| D5 | Key takeaways | server | |
| D6 | **Calculator island** | `"use client"` | The only client component on the page |
| D7 | **Pre-computed worked example** | **server** | The same calculation, with numbers, rendered in HTML. This is what gets extracted when JS does not run. |
| D8 | "How the math works" | server | The formula written out, plus each input defined |
| D9 | Comparison table | server | Thresholds by lender type |
| D10 | FAQ | server | 5–8, visible, mirrored into `FAQPage` |
| D11 | Author box, sources, related, CTA | server | Same as Template A |

Front matter adds one block:

```yaml
tool:
  inputs:
    - { key: noi,          label: "Annual NOI",            type: currency, default: 1600000, min: 0 }
    - { key: loanAmount,   label: "Loan amount",           type: currency, default: 12000000, min: 0 }
    - { key: rate,         label: "Interest rate",         type: percent,  default: 7.25, min: 0, max: 25 }
    - { key: amortYears,   label: "Amortization (years)",  type: integer,  default: 25, min: 5, max: 40 }
  outputs:
    - { key: annualDebtService, label: "Annual debt service", format: currency }
    - { key: dscr,              label: "DSCR",                format: "0.00x" }
    - { key: verdict,           label: "Versus a 1.35x test", format: text }
  formula: |
    monthlyRate = rate / 100 / 12
    n           = amortYears * 12
    payment     = loanAmount * monthlyRate / (1 - (1 + monthlyRate) ** -n)
    annualDebtService = payment * 12
    dscr        = noi / annualDebtService
  disclaimer: "Indicative only. Not a loan quote, an offer of credit, or a commitment to lend."
```

`disclaimer` is required on every tool page and renders visibly next to the outputs. JSON-LD:
`WebApplication` (`applicationCategory: FinanceApplication`) plus `FAQPage`. **No `offers` node** -
the calculator is free and nothing is being sold on the page.

---

## 6. Where drafts land, and how Agent 10 converts them

| Writer output | Agent 10 target |
|---|---|
| `geo/06-pages/<slug>.md` (Agent 6, financing) | `src/lib/data/answers/hotel-financing/<slug>.ts` |
| `geo/07-pages/<slug>.md` (Agent 7, sales + valuation) | `src/lib/data/answers/sell-a-hotel/<slug>.ts`, `src/lib/data/answers/hotel-valuation/<slug>.ts` |
| glossary drafts | `src/lib/data/glossary/<slug>.ts`, registered in that folder's `index.ts` |
| market-page field additions | new fields on `Market` in `src/lib/data/markets.ts` |
| tool drafts | `src/lib/data/tools/<slug>.ts` + one client component per tool |

New type, mirroring the shape of `GlossaryEntry` so the codebase stays consistent:

```ts
// src/lib/data/answers/types.ts
export type AnswerCluster = "hotel-financing" | "sell-a-hotel" | "hotel-valuation";
export type AnswerSection = { h2: string; lead: string; body: string };
export type AnswerTable   = { caption: string; columns: string[]; rows: string[][] };
export type AnswerSource  = { n: number; label: string; url: string; publisher: string; accessed: string };

export type AnswerPage = {
  slug: string;
  cluster: AnswerCluster;
  isHub: boolean;
  title: string;            // <=60 chars
  h1: string;
  description: string;      // <=155 chars
  lastUpdated: string;      // ISO
  authorSlug: string;       // must exist in team.ts
  reviewerSlug?: string;    // must exist in team.ts
  targetPrompts: string[];  // verbatim from geo/04-queries.csv
  answer: string;           // 40-70 words
  takeaways: string[];      // 3-5
  sections: AnswerSection[];
  table: AnswerTable;
  originalDataPoint: { source: "rates" | "mhi"; ref: string; sentence: string };
  workedExample: { label: string; body: string };
  faq: { q: string; a: string }[];   // 5-8, a <= 50 words
  sources: AnswerSource[];
  related: { hub: string; siblings: string[]; glossary: string[]; data: string[] };
  cta: { label: string; href: "/contact" };
  brandSentence: string;
};
```

The `sitemap.ts` and `llms.txt` generators (Agent 2's lane) read from these modules, which is the
whole reason to keep content in typed TS rather than loose Markdown: the hand-written `llms.txt`
already drifted once (`geo/00-repo-map.md`), and the fix is generation, not discipline.

---

## 7. Two hard stops for the writers

1. **A number without a source does not ship.** If the rate sheet row you need does not exist yet,
   write `[[RATE-SHEET: 10-year fixed, select-service, 65% LTV]]` and leave it. Agent 10 blocks the
   build on any surviving `[[…]]` marker. Do not substitute a remembered number.
2. **No firm-level volume, transaction-count, or founding-date claim appears in any Wave 1 page.**
   `llms.txt` says $84.3B, the homepage reportedly says $88.37B, and "670+ hotel transactions" and
   "founded in 2024" have no source. Until Agent 1 resolves those, the author box says who the person
   is and what they do, and nothing about how much the firm has traded.
