# Design Review — matthews-hotel-team.vercel.app

**Date:** 2026-05-06
**Mode:** /design-review (gstack)
**Method:** live-URL screenshots at 1440×900 + 390×844, source review of components + data, cross-reference against `/research/benchmark.md` and `/design-system/apple-tokens.md`.

## Summary

Started with one critical visual bug (sections rendering invisible due to `Reveal` opacity gating that needed IntersectionObserver to fire). Fixed that, then triaged 4 high-impact polish items, all shipped.

**Design score:** B → A− (post-fix)
**AI Slop score:** B → B+ (still uses Apple-pattern blue + two-tone, but the editorial monogram covers and real photography pull it out of "AI slop" territory)

## Findings

### F1 — `Reveal` opacity gating left sections invisible 〔CRITICAL · FIXED〕
- **Symptom:** full-page screenshot showed the hero, then ~6 empty sections, then the footer. Same risk for any A11y crawler, fast scroller, or reduced-bandwidth environment where IntersectionObserver doesn't fire reliably.
- **Root cause:** `src/components/ui/Reveal.tsx` initialized children at `opacity:0` and only animated to `opacity:1` when `whileInView` triggered. In headless capture and on programmatic scroll, the observer didn't fire.
- **Fix:** made Reveal a pass-through. Apple flagship pages don't actually use viewport-triggered fades on every section — heroes get entrance animations, sections render statically. We do the same. Component still exists for API compatibility; it just doesn't gate.
- **Commit:** `886f8e4`
- **Evidence:** screenshots `01-home-after-reveal-fix.png` (broken) → `02-home-after-passthrough.png` (every section renders)

### F2 — `HomeFeatured` card aspect 4:5 cropped landscape exteriors awkwardly 〔HIGH · FIXED〕
- **Symptom:** Walden glamping tents and Hampton Round Rock hotel exterior appeared squished/tightly cropped on the home page.
- **Root cause:** `src/components/sections/home/HomeFeatured.tsx` line 84 used `aspect-[4/5]` (poster proportion) for cards. Hotel exterior photography is naturally landscape.
- **Fix:** changed to `aspect-[16/10]` to match `ListingCard.tsx` and the listing-page grid.
- **Commit:** `880489e`
- **Evidence:** screenshot `10-home-final.png` — all three featured listings now fit naturally.

### F3 — `ListingHero` photo overlay too dark 〔HIGH · FIXED〕
- **Symptom:** Walden detail page hero showed a dark gradient with a barely-visible photo. The overlay was so heavy that the asset couldn't be seen.
- **Root cause:** `src/components/sections/listing-detail/ListingHero.tsx` used a top-down gradient `rgba(0,0,0,0.35)` → `0.45` → `0.7`. Bottom-anchored gradient was needed; instead the whole photo got darkened.
- **Fix:** lighter gradient curve `0.05` → `0.15` → `0.55` → `0.78`. Photo breathes for the upper 75%, only darkens where the headline sits at the bottom.
- **Commit:** `880489e`
- **Evidence:** screenshot `09-listing-after-fixes.png` — the glamping tents are clearly visible behind the headline.

### F4 — `HomeClosedTeaser` trophy card had no photo 〔HIGH · FIXED〕
- **Symptom:** Right column of "670+ closed" home section was an empty black-gradient block with deal stats below. Pretending to be a "trophy transaction" with no asset visible.
- **Root cause:** `src/components/sections/home/HomeClosedTeaser.tsx` used `<div className="bg-gradient-to-br ...">` as a placeholder.
- **Fix:** wired in `<Image src="/listings/the-driskill-trophy-lease-option.jpg">` (the historic Driskill facade photo already downloaded by the photography agent).
- **Commit:** `880489e`
- **Evidence:** screenshot `10-home-final.png` — Driskill facade renders above the trophy card metadata.

### F5 — Listing gallery had 3 "Photo coming soon" placeholder tiles 〔MEDIUM · FIXED〕
- **Symptom:** On listing detail pages, only 3 of 6 gallery tiles showed the listing photo. The other 3 were gradient placeholders captioned "Photo coming soon."
- **Root cause:** `src/components/sections/listing-detail/ListingGallery.tsx` hardcoded `usePhoto: i < 3`.
- **Fix:** all 6 tiles now use the listing photo with 6 different `object-position` framings (`center`, `top`, `30%`, `70%`, `bottom`, `45%`) for visual variety. Tightened the section caption from "gallery launching soon" to "Full gallery and OM available on request."
- **Commit:** `880489e`
- **Evidence:** screenshot `09-listing-after-fixes.png` — gallery is 6 distinct framings of the asset, no placeholders.

## Pages confirmed strong (no changes)

### Team grid 〔A〕
The MonogramCover treatment lands hard. Fraunces serif initials (LT, NS, SC, MR, EP, DO, MP, PG) on alternating tones (ink, navy, paper, graphite) reads like a Monocle contributor section. Distinctive, editorial, no risk of stock-photo uncanny valley. Screenshot `04-team-grid.png`.

### Closed deals table 〔A〕
The Sponsor Profile column with tinted chips (PE blue, REIT green, Developer amber, Family Office purple, Corporate gray) is the exact differentiator from the benchmark research. Six filters, sortable columns, dense rows, mobile-card fallback. Screenshot `05-closed.png`.

### Insight detail 〔B+〕
Editorial layout works — kind chip, date, tags, byline, pull-quote, embedded chart placeholder, download CTA. The cover is a gradient placeholder that could become a real chart-led editorial cover later, but the typography and rhythm are solid. Screenshot `06-insight-detail.png`.

### Mobile home 〔A−〕
Vertical stacking is clean. Hero is dramatic. Listing cards with 16:10 landscape photos work. Why Matthews stacks readably. Trophy card photo and Q1 2026 cover both visible. Screenshot `07-home-mobile.png`.

## Deferred (not blocking)

- **Map placeholder on listing detail.** Currently a CSS-grid pattern with a pin. Recognizable as fake. Defer until a real map provider (Mapbox / Leaflet) lands.
- **Insight cover photography.** Q1 2026 outlook cover is a gradient with massive serif "Q1 2026". Distinctive but could be a real chart screenshot for higher signal.
- **Hero scroll cue animation.** The animated 24px line at the bottom of the hero is subtle; could be removed entirely or made more interactive.

## Score deltas

| Category | Before | After | Notes |
|---|---|---|---|
| Visual hierarchy | C | A− | Sections now render; lead/deck pattern clean |
| Typography | B | A | Fraunces + Inter well-paired; tracking dialed |
| Color | B | B+ | Apple blue still used (user choice); Matthews navy in monograms |
| Spacing | B | A | Editorial breathing room without empty rails |
| Interaction states | A− | A− | Card hover lift works |
| Responsive | C* | A− | *was C only because reveal bug killed sections |
| Content | B | B+ | Real CRE data density |
| AI Slop | B− | B+ | Photos + monograms pull out of "wireframe" territory |
| Motion | C | B+ | Stripped section reveals; hero entrance + photo hover stay |
| Performance | A | A | Unchanged; static Next 15 build |

## Verified routes (after fixes)

| Route | Status | Screenshot |
|---|---|---|
| `/` desktop 1440 | 200, all sections render | `10-home-final.png` |
| `/` mobile 390 | 200, vertical stack clean | `07-home-mobile.png` |
| `/listings/walden-retreats-hill-country` | 200, photo hero visible | `09-listing-after-fixes.png` |
| `/team` | 200, monograms render | `04-team-grid.png` |
| `/closed` | 200, sponsor profile tints | `05-closed.png` |
| `/insights/q1-2026-outlook` | 200, editorial layout | `06-insight-detail.png` |

## Commits landed in this audit

```
886f8e4  fix(reveal): pass-through, kill viewport-triggered fade-up
880489e  design-review fixes: hero overlay, card aspect, trophy photo, gallery framings
```

## PR summary

> Design review found 5 issues (1 critical, 3 high, 1 medium), fixed all 5. Design score B → A−. Visible content reliability fixed; landscape aspect on cards; lighter listing-detail hero; trophy photo on home; full-photo gallery.
