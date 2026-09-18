# Directory submissions: exact NAP and description strings

Every string below is copied verbatim from `geo/03-entity.md` section 6, the single source of truth
Agent 3 built. **Do not reword any of these**, an engine merges two profiles into one entity by
matching the exact string; a paraphrase in one place and the original in another is the single most
common reason that merge fails.

## The strings (paste exactly)

**Company name:**
```
Matthews Hotel Markets
```

**Tagline / headline** (92 characters):
```
Hospitality investment sales and capital markets at Matthews Real Estate Investment Services
```

**Long description / About** (262 characters, fits LinkedIn About 2,000-char limit, GBP 750-char
"from the business" limit, Crunchbase description field):
```
Matthews Hotel Markets is the hospitality investment sales and capital markets team of Matthews Real Estate Investment Services, based at 515 Congress Ave. in Austin, Texas. The team sells hotels from $2 million and places hotel debt from $5 million, nationwide.
```

**Short description** (152 characters, fits X/Twitter bio 160-char limit and any directory field
under ~200 characters):
```
Matthews Hotel Markets is the hospitality investment sales and capital markets team of Matthews Real Estate Investment Services, based in Austin, Texas.
```

**Address:**
```
515 Congress Ave., Suite 2410
Austin, TX 78701
United States
```

**Website:**
```
https://matthewshotelmarkets.com
```

**Email:**
```
hotelteam@matthews.com
```

**Phone:** leave blank on every profile below. No verified organization-level switchboard number
exists anywhere in the repo (`geo/03-entity.md` section 4, item 5; also confirmed independently in
`geo/01-baseline.md`). If a form requires a phone field and refuses to save without one, stop and
flag it, do not enter a broker's personal mobile as the org number.

**Category (where a category field exists):** Real Estate Agency (primary). Add "Real Estate Agent"
or "Real Estate Consultant" as a secondary category only where the platform supports multiple
categories and it is accurate.

---

## Per-directory submission notes

### LinkedIn company page
`linkedin.com/company/matthews-hotel-markets/` (already exists). Tagline field, About field
(long description), Website field = `https://matthewshotelmarkets.com`, Industry = Real Estate,
Location = the address above. Cover status: `existing-draft`, needs the strings pasted, not a new
page.

### Google Business Profile, Austin
NEEDS CORPORATE MARKETING SIGN-OFF before creating. Check first whether one already exists for this
address, a duplicate GBP is worse than none. Category: Real Estate Agency. Description field: long
description (fits the 750-char limit with room to spare). Verification: postcard to the Austin
address, since no org phone exists for phone verification. **Do not create a Denver listing, there is
no verified street address to back it.**

### Bing Places, Austin
NEEDS CORPORATE MARKETING SIGN-OFF. Mirror the Google Business Profile exactly once that one is live,
same name, address, category, description, website. Do not create before GBP exists; Bing's own
onboarding flow imports from GBP where possible. Denver: do not create.

### Apple Business Connect, Austin
NEEDS CORPORATE MARKETING SIGN-OFF. Same NAP as GBP and Bing. Apple's category taxonomy uses
"Real Estate Agency" as well; if it does not appear, use the closest real-estate category and note
the substitution in the submission record. Denver: do not create.

### Crunchbase
`crunchbase.com/organization/matthews-real-estate-investment-services` exists for the parent already
(generic retail/multifamily-focused description as of a 2026-09-17 search; claim status unverified,
their site blocked automated fetches). Ask to add "Hospitality" as a named specialty/industry tag and
the long description as a sub-section, plus a link to `matthewshotelmarkets.com`. Low effort, low
individual impact; do this after the higher-priority items in `targets.csv`.

### AAHOA Vendor Partner directory listing
Once Vendor Partner status is granted (see `content/outreach/memberships/aahoa-membership.md`),
AAHOA's own directory listing form will ask for company name, description, and website. Use the long
description. Their platform-specific character limit was not independently verified in this pass,
paste the long description first and trim to the short description only if the form rejects it.

### AHLA Premier Partner directory listing
Same pattern as AAHOA: once Premier Partner status is granted (see
`content/outreach/memberships/ahla-premier-partner-application.md`), use the long description for
their partner directory entry, trim to short if their field is character-limited.

### Texas Hotel & Lodging Association (THLA) member directory
Once Allied Membership is granted (see `targets.csv` row and `90-day-calendar.md`), use the long
description for their online member directory listing.

### Hospitality Net organization profile
`hospitalitynet.org/organization/17024312` already exists for the parent. Request an update (or
claim, if unclaimed) adding "Matthews Hotel Markets" as the named hospitality division, the short
description, and a link to `matthewshotelmarkets.com`. This is bundled with the guest-post pitch to
this outlet in `guest-post-pitches.md` pitch 4, since it is a different desk (directory vs.
editorial) but the same company contact can raise both.

---

## What NOT to do

- Do not enter a phone number anywhere on this list. Blank is correct.
- Do not create Denver GBP, Bing Places, or Apple Business Connect listings. `offices.ts` has no
  street address for Denver; a location listing without one is a fabrication, not a placeholder.
- Do not paraphrase the tagline or description "to make it sound more natural" for any individual
  platform. Exact-string matching across profiles is the point.
- Do not submit any of the Austin local-listing rows without corporate marketing sign-off, per the
  mission brief's explicit instruction.
