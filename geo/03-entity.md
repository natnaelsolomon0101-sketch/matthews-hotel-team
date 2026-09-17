# geo/03-entity.md — Agent 3, entity-schema-engineer (2026-09-17)

One source of truth for the brand, one JSON-LD `@graph` per page, a real `/about`, and author pages
that an engine can attribute. This was a refactor: 13 route files already emitted inlined JSON-LD
with no shared entity source. All of it now derives from `src/lib/entity.ts`.

---

## 1. The boilerplate

**Long version.** `Organization.description`, `WebSite.description`, the `<meta name="description">`
default in the root layout, visible on `/about`, visible on `/team`:

> Matthews Hotel Markets is the hospitality investment sales and capital markets team of Matthews
> Real Estate Investment Services, based at 515 Congress Ave. in Austin, Texas. The team sells
> hotels from $2 million and places hotel debt from $5 million, nationwide.

**Short version.** Visible in the footer of every page:

> Matthews Hotel Markets is the hospitality investment sales and capital markets team of Matthews
> Real Estate Investment Services, based in Austin, Texas.

### Why every clause is true

| Clause | Backed by | Visible where |
| --- | --- | --- |
| "hospitality investment sales and capital markets team" | `src/lib/data/services.ts` (`investment-sales`, `capital-markets`) | `/services/investment-sales`, `/services/capital-markets` |
| "of Matthews Real Estate Investment Services" | site footer legal line; `public/llms.txt` | every page footer |
| "based at 515 Congress Ave. in Austin, Texas" | `src/lib/data/offices.ts` → `austin.streetAddress` | footer, `/offices/austin`, `/about` |
| "sells hotels from $2 million" | `services.ts` → `investment-sales.rangeValue` = `"$2M to $200M+"` | rendered as `rangeValue` on `/services/investment-sales` |
| "places hotel debt from $5 million" | `services.ts` → `capital-markets.rangeValue` = `"$5M to $200M+"` | rendered as `rangeValue` on `/services/capital-markets` |
| "nationwide" | `areaServed` United States, used throughout the data modules | `/about`, service pages |

No em-dashes. No number that the site cannot show a reader.

**Rule for Agent 10 and for anyone after this run: copy changes to any of these facts go into
`src/lib/entity.ts` first.** Page components import the constant. They never re-type the string.

---

## 2. Entity graph

```
                         Organization (parent)
                         @id .../#parent-org
                         Matthews Real Estate Investment Services
                         sameAs: matthews.com,
                                 linkedin.com/company/4821421,
                                 x.com/Matthews_REIS
                                   ▲
                                   │ parentOrganization
                                   │
   WebSite ────publisher──────▶ RealEstateAgent  ◀──provider──── Service ×3
   @id .../#website             @id .../#org                     @id .../services/<slug>#service
        ▲                        │      ▲                        (investment-sales,
        │ isPartOf               │      │ worksFor                capital-markets,
        │                location│      │                         acquisition-advisory)
   WebPage / AboutPage /         │      │
   ProfilePage / CollectionPage  ▼      │
   (one per route)     LocalBusiness+RealEstateAgent   Person ×3
                       @id .../#office-austin          @id .../team/<slug>#person
                       515 Congress Ave., Suite 2410   Luke Thompson
                       Austin, TX 78701                Miles Cortez III
                       geo 30.2672 / -97.7431          Nate Solomon

   Per-route nodes, @id-linked into the above:
     BreadcrumbList (every non-home page)
     ItemList        (/listings, /closed, /team, /insights, /team/<slug>#transactions)
     Product+Hotel + Offer  (/listings/<slug>, /closed/<slug>)
     Article         (/insights/<slug>, /closed/<slug>, /glossary/<term>)
     DefinedTerm / DefinedTermSet  (/glossary, /glossary/<term>)
     Dataset         (/research/mhi/<quarter>)
     FAQPage         (only where a visible FAQ section renders)
     Organization    (/offices/denver, NOT LocalBusiness, see §4)
     Person ×19      (/team only, minimal: the hospitality bench, see §3a)
```

### How it is wired in code

- `src/lib/entity.ts` — every brand constant and every shared node builder.
  `baseGraph()` returns Organization, parent Organization, WebSite, the Austin LocalBusiness, three
  Person nodes, and three Service nodes.
- `src/components/seo/JsonLd.tsx` — the only place a `<script type="application/ld+json">` is
  written. It merges `baseGraph()` with the page's nodes, de-duplicates by `@id` (a page node is
  shallow-merged over the site-wide node), and emits **one** `@context` and **one** `@graph`.
- The root layout no longer emits JSON-LD. Every page renders `<JsonLd graph={...} />`.

**Routes that gained JSON-LD in this pass (they had none):** `/`, `/listings`, `/closed`, `/team`,
`/insights`, `/process`, `/contact`, and the new `/about`.

---

## 3a. The roster: 22 people, 3 published profiles

`geo/00-repo-map.md` originally said the team was three people. It is not, and the corrected repo map
now says so. **`src/lib/data/team.ts` exports 22 real people with unique slugs.**

- **3 have `hasBio: true`** and full detail pages: `luke-thompson`, `miles-cortez`, `nate-solomon`.
  They get the complete `Person` node (bio, `knowsAbout`, `sameAs`, `alumniOf`, `memberOf`,
  `hasOccupation`, phone, email, photo) in `baseGraph()`, on every page, because their bios are
  published and linkable.
- **19 have `hasBio: false`.** They are the wider Matthews hospitality bench, scraped from
  `matthews.com/about-us/our-agents?specialties=hospitality`. They render on `/team` as cards with
  name, title, office, email, and direct line, and nowhere else.

**What they get in the graph.** A minimal `Person` node with `@id` `…/team#<slug>`, emitted **only on
`/team`**, carrying only what that page renders: `name`, `givenName`/`familyName`, `jobTitle`,
`email`, `telephone`, `image`, `worksFor`, `workLocation`. **No `sameAs`, no `knowsAbout`, no
`description`, no `url`** — the repo has none of those for them, and inventing them would be exactly
the failure this run exists to prevent. `litePersonNode()` in `entity.ts` drops any property whose
value is missing, so an empty phone or title never becomes an empty string in the markup.

**Rule for Agents 6, 7 and 10 — author and reviewer boxes.** An author box, a "Reviewed by" line, or
any byline on an answer page must name **one of the three with a published profile**: Luke Thompson,
Miles Cortez III, or Nate Solomon. They are the only people with a `/team/[slug]` page to link to and
the only ones whose `Person` node carries the E-E-A-T properties (`sameAs`, `knowsAbout`, `alumniOf`,
`memberOf`) that make authorship resolvable. Do not credit a bench member: there is nowhere to link,
and no bio behind the name.

Nothing in the boilerplate, `/about`, or `/team` says "three-person team". `/about` and `/team` both
state the real shape: 22 people cover hospitality across the platform, 3 publish a full profile here.

---

## 3. Verified facts, and how they were verified

| Fact | Value | How |
| --- | --- | --- |
| Brand string | Matthews Hotel Markets | repo-wide, 37 files |
| Alternate name | Matthews Hotel Team | `llms.txt`, several components |
| Parent | Matthews Real Estate Investment Services | footer legal line |
| Parent LinkedIn | `linkedin.com/company/4821421` | the link matthews.com publishes on its own homepage, fetched 2026-09-17. The slug `linkedin.com/company/matthews-real-estate-investment-services/` returns **404** |
| Parent X | `x.com/Matthews_REIS` | same source |
| Team LinkedIn | `linkedin.com/company/matthews-hotel-markets/` | repo, footer |
| HQ | 515 Congress Ave., Suite 2410, Austin, TX 78701 | `offices.ts`, footer |
| HQ geo | 30.2672 / -97.7431 | already in `offices.ts` |
| Team email | hotelteam@matthews.com | 9 occurrences, consistent |
| Nate Solomon phone | (512) 839-6999 | the **only** number for him in the repo (confirmed by a repo-wide phone sweep) |
| Roster size | **22 people**, all real, all in `team.ts` | verified against the file and against the prerendered `/team` HTML, where all 22 names, titles, offices, emails and phones render server-side |
| Published profiles | 3: Luke Thompson, Miles Cortez III, Nate Solomon | `hasBio !== false`; `generateStaticParams` builds exactly these three `/team/[slug]` routes |

---

## 4. What could NOT be verified, and is therefore ABSENT from the graph

1. **Founding year.** `public/llms.txt` asserts "Founded as a dedicated hospitality vertical in 2024"
   with no source anywhere in the repo, and nothing on the site supports it. **No `foundingDate` is
   emitted, for the team or for the parent.** `/about` says so in plain English under "Since when"
   rather than pretending the question was not asked. If Nate confirms the year, it goes in
   `entity.ts` and the `/about` paragraph gets rewritten.
2. **Denver street address.** `offices.ts` literally reads `address: "Confirm address with Miles"`.
   Denver is a real presence (Miles Cortez III, (303) 653-2963, `/offices/denver` exists), but there
   is no street address to publish. `/offices/denver` therefore emits **`Organization`, not
   `LocalBusiness`**, with locality + `areaServed: Colorado` and no `geo`. A LocalBusiness with no
   street address is a local-pack claim the firm cannot back. Fixed from the prior pass, which was
   emitting `LocalBusiness` for Denver.
3. **Wikidata.** No item exists for either entity. Checked 2026-09-17 via the Wikidata API:
   `wbsearchentities` for "Matthews Real Estate Investment Services" and for "Matthews Hotel Markets"
   both returned `"search": []`. The only `Kyle Matthews` item, `Q102443947`, is a different person (a
   TCU Ph.D.). **No Wikidata `sameAs` is emitted.** `content/wikidata/*.qs` and `*.json` from the
   2026-05-10 sprint are *drafts for submission*, not evidence of an existing item.
4. **Wikipedia.** No article exists. Checked via the English Wikipedia search API on the same date:
   zero relevant results. `content/wikipedia/` holds drafts only.
5. **Organization-level telephone.** There is no switchboard number anywhere in the repo: the footer,
   `/contact`, and `offices.ts` all omit one. `Organization` and the Austin `LocalBusiness` carry
   `email` and no `telephone`. Broker direct lines stay on the Person nodes, where they are real.
6. **Career volume / years of experience for all three brokers.** `team.ts` still says `"Confirm"`
   and `yearsExperience: 0` for Luke and Nate. Nothing derived from those fields is in the graph.

---

## 5. Policy audit: schema vs. visible content

The rule is one-to-one. Audited every FAQ emitter on 2026-09-17:

| Emitter | Markup gated on | Visible FAQ gated on | Verdict |
| --- | --- | --- | --- |
| `/listings/[slug]` | `listingFaqs(listing)` | same array, `faqs.map` | PASS |
| `/closed/[slug]` | `closedFaqs(deal)` | same array | PASS |
| `/markets/[city]` | `marketFaqs(m)` | same array | PASS |
| `/hotels-for-sale/[brand]` | `brandFaqs(b)` | same array | PASS |
| `/glossary/[term]` | `entry.faq` | `entry.faq.map` | PASS |
| `/insights/[slug]` | `insight.faq?.length > 0` | same condition in `InsightLayout` | PASS |

**No FAQ markup without visible content was found.** `faqJsonLdNode` now returns `null` on an empty
array so the invariant cannot be broken by a future caller.

Other policy checks: no `AggregateRating` anywhere (no first-party reviews exist). `Offer` on
`/listings/[slug]` only carries a price when one is visible. No `nosnippet`/`noindex` added.

---

## 6. `sameAs` hygiene list for Agent 9 — copy-paste strings

Every profile below must carry **the exact same strings**. Different wording on LinkedIn than on the
site is the single most common reason an engine refuses to merge two profiles into one entity.

### Company name (paste exactly)
```
Matthews Hotel Markets
```

### Tagline / headline (paste exactly)
```
Hospitality investment sales and capital markets at Matthews Real Estate Investment Services
```

### About / description (paste exactly, both sentences)
```
Matthews Hotel Markets is the hospitality investment sales and capital markets team of Matthews Real Estate Investment Services, based at 515 Congress Ave. in Austin, Texas. The team sells hotels from $2 million and places hotel debt from $5 million, nationwide.
```

### Address (paste exactly)
```
515 Congress Ave., Suite 2410
Austin, TX 78701
United States
```

### Website (paste exactly)
```
https://matthewshotelmarkets.com
```

### Email (paste exactly)
```
hotelteam@matthews.com
```

### Phone
**Do not enter a company phone.** No verified switchboard number exists. If a profile requires one,
get a real number from Nate first and add it to `src/lib/entity.ts` before it goes anywhere else.

### Profiles to align

| Profile | Owner action | Status |
| --- | --- | --- |
| LinkedIn company page `linkedin.com/company/matthews-hotel-markets/` | name, tagline, About, website, address, industry "Real Estate" | exists, needs the strings above |
| Luke Thompson `linkedin.com/in/hotelfinance101/` | headline includes "Matthews Hotel Markets"; About opens with the boilerplate; website field = `https://matthewshotelmarkets.com/team/luke-thompson` | exists |
| Miles Cortez III `linkedin.com/in/miles-cortez-iii-3ab26212/` | same, website = `/team/miles-cortez` | exists |
| Nate Solomon `linkedin.com/in/nathaniel-solomon-4b2b9125a/` | same, website = `/team/nate-solomon` | exists |
| matthews.com hospitality page | must link to `https://matthewshotelmarkets.com` and use the brand string | **not confirmed to exist. Agent 9: find it or ask Nate.** Once its URL is known it goes into `PARENT_SAME_AS` and the team `sameAs`. |
| Google Business Profile | Austin address, category "Real estate agency", the description above, website | **unknown whether one exists. Check before creating: a duplicate GBP is worse than none.** |
| Bing Places | mirrors GBP exactly | unknown |
| Apple Business Connect | mirrors GBP exactly | unknown |
| Crunchbase | org page under the brand string, linked to the parent | unknown |
| Wikidata | **create the item first** using `content/wikidata/matthews-hotel-markets.qs`. Nothing exists today. Once the Q-number is live, add it to `PARENT_SAME_AS` / the org `sameAs` in `entity.ts` and nowhere else. | does not exist |
| Wikipedia | drafts only in `content/wikipedia/`. Notability is unproven. Do not submit on the strength of the site alone. | does not exist |

**Denver:** do not create a Google Business Profile, Bing Places, or Apple listing for Denver. There
is no verified street address, and a location listing without one is a fabrication.

---

## 7. Validation

`scripts/schema-validate.ts` (from the 2026-05-10 sprint) was **extended, not duplicated**:

- new `--build` mode reads the prerendered HTML in `.next/server/app`, so the graph is checkable
  offline right after `npm run build`, with no server and no deploy;
- `/about`, `/glossary`, `/glossary/[term]`, `/research`, `/research/mhi/[quarter]` added to the URL
  list; the team list now filters to the three brokers who actually have bio pages;
- new checks: exactly one `ld+json` block per page, duplicate `@id` detection, every internal
  `{"@id": ...}` reference must resolve inside the same graph, and the four required entity nodes
  (`#org`, `#parent-org`, `#website`, `#office-austin`) must be present.

```
npm run build
npx tsx scripts/schema-validate.ts --build
```

**Result 2026-09-17: 119 / 119 blocks valid, one block per page, zero dangling references.**

The one route that reports "no JSON-LD blocks" is `/listings/walden-retreats-hill-country`, which
fails to prerender (`id="__next_error__"` in its built HTML). **This is pre-existing** — confirmed by
stashing this branch's changes and rebuilding from the base commit, where it fails identically.
Logged for Agent 10 in `geo/requests.md`.

### After deploy, paste these into the validators

Google Rich Results Test (`https://search.google.com/test/rich-results`) and the Schema.org validator
(`https://validator.schema.org/`). One per node shape, which covers the whole graph:

```
https://matthewshotelmarkets.com/
https://matthewshotelmarkets.com/about
https://matthewshotelmarkets.com/team
https://matthewshotelmarkets.com/team/luke-thompson
https://matthewshotelmarkets.com/offices/austin
https://matthewshotelmarkets.com/offices/denver
https://matthewshotelmarkets.com/services/capital-markets
https://matthewshotelmarkets.com/listings
https://matthewshotelmarkets.com/listings/hampton-inn-shelbyville
https://matthewshotelmarkets.com/closed
https://matthewshotelmarkets.com/insights/texas-hotel-cap-rates-q2-2026
https://matthewshotelmarkets.com/glossary/cap-rate
https://matthewshotelmarkets.com/markets/austin-tx
https://matthewshotelmarkets.com/research/mhi/q1-2026
```

Expect Rich Results to report FAQ and Breadcrumb eligibility on the detail pages and no errors
anywhere. `Organization`, `Person`, `Service` and `ItemList` are understood but are not rich-result
types, so "no rich results detected" on `/about` is the correct outcome, not a failure.

---

## 8. Files this agent owns and changed

| File | Change |
| --- | --- |
| `src/lib/entity.ts` | **new.** Single source of truth. |
| `src/components/seo/JsonLd.tsx` | **new.** The only JSON-LD emitter. |
| `src/app/about/page.tsx` | **new.** Server-rendered `/about`. |
| `src/app/layout.tsx` | removed the inlined org graph; metadata now derives from `entity.ts`. |
| `src/app/team/page.tsx` | visible boilerplate, `ItemList` of all 22 roster members, minimal `Person` nodes for the 19 bench members, breadcrumb. |
| `src/app/team/[slug]/page.tsx` | `ProfilePage` + shared `Person` node; new visible "Transactions on this site" section driven by `closed.ts`; "Profile last reviewed" line. |
| `src/components/layout/SiteFooter.tsx` | short boilerplate line, `/about` link, address and parent name from `entity.ts`. |
| `src/lib/seo/faq.ts` | `faqJsonLdNode` returns `null` on empty; broker names come from `team.ts`; em-dashes removed from FAQ copy. |
| 13 route files | inlined `jsonLd` objects converted to `graph` arrays rendered through `<JsonLd />`; local `SITE_URL` constants replaced by the entity import. |
| `src/app/offices/[slug]/page.tsx` | Denver downgraded from `LocalBusiness` to `Organization`; office breadcrumb no longer points at a non-existent `/offices` index. |
| `scripts/schema-validate.ts` | extended (see §7). |

---

## 9. Handover notes

- **Copy changes go to `src/lib/entity.ts` first.** The boilerplate is one string used in six places.
- **Denver stays `areaServed` until a street address exists.** Do not "fix" this by adding one.
- **Never re-create `sarah-chen`, `marcus-reyes`, `elena-park`.** `vercel.json` 301s them; `team.ts`
  is the only source of people.
- **The roster is 22, with 3 published profiles.** Do not write "three-person team" anywhere, and do
  not put a bench member in an author box.
- Requests for other lanes are in `geo/requests.md`, under the Agent 3 heading.
