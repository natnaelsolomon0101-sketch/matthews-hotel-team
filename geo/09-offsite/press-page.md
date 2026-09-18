# Content for `/press`

**Why this page needs to exist:** the site footer's "Press" link currently points at `/insights`
(`geo/00-repo-map.md`, `geo/01-baseline.md` section 10 item 9). `/insights` is dated commentary, not
a press kit, a reporter landing there finds articles, not a media contact, a boilerplate, or downloadable
assets. This is content only; building the actual `/press` route and repointing the footer link is a
code change outside `geo/**` (no lane in the mission brief owns `SiteFooter.tsx`'s Press link
specifically; Agent 1 and Agent 3 already flagged the same file to `geo/requests.md`, this is the
same fix, one pass, please, per Agent 3's note there).

---

## Page copy

### H1
Press

### Intro (40-70 words, direct answer to "how do I cover Matthews Hotel Markets")

Matthews Hotel Markets is the hospitality investment sales and capital markets team of Matthews Real
Estate Investment Services, based at 515 Congress Ave. in Austin, Texas. For interviews, data
requests, or deal coverage, contact the team directly below. Recent releases and the current media
kit are on this page.

### Releases

[This section lists releases in reverse-chronological order once any exist. As of 2026-09-17, none
have been issued. The first candidate is `press-release-rate-sheet.md` in this folder, gated until
Agent 8's `/rates` numbers are real. Do not publish this section with a release listed until that
release has actually gone out on a wire; an empty "no releases yet" state is honest, a listed release
that was never sent is not.]

### Media contact

Matthews Hotel Markets
nate.solomon@matthews.com

[No phone number. No verified organization-level switchboard number exists anywhere in the repo,
per `geo/03-entity.md` section 4 item 5. Do not add one, and do not substitute a broker's personal
mobile.]

### Media kit

- Company boilerplate (below, approved copy, do not edit without going through `src/lib/entity.ts`
  first per Agent 3's rule)
- Logo files: [confirm with Nate whether a downloadable logo package exists; not found in this repo's
  `public/` during this pass. Flagged to `geo/requests.md` if it needs to be sourced from Matthews
  corporate brand assets before this section can go live.]
- Headshots: Luke Thompson, Miles Cortez III, Nate Solomon, current paths in `src/lib/data/team.ts`
  (`/headshots/luke-thompson.avif`, etc.). `HUMAN_QUEUE.md` item 25 already flags that Nate's headshot
  is a `.jpg` while the others are `.avif`, confirm it is high-resolution before bundling it into a
  press kit; a low-res press photo is a worse look than no photo.

### Boilerplate (paste exactly, do not paraphrase)

> Matthews Hotel Markets is the hospitality investment sales and capital markets team of Matthews
> Real Estate Investment Services, based at 515 Congress Ave. in Austin, Texas. The team sells hotels
> from $2 million and places hotel debt from $5 million, nationwide.

---

## What NOT to put on this page

- No transaction volume or founding-year claim. Neither is sourced anywhere in the repo
  (`geo/03-entity.md` section 4, items 1 and 6); Agent 2 already stripped both from `llms.txt` and
  Agent 3 from `/about`. A press page is not the place to reintroduce them.
- No fabricated awards, rankings, or "as featured in" logos for outlets that have not actually
  covered the firm yet. Once the first placements from `guest-post-pitches.md` /
  `podcast-pitches.md` land, add them here with a real link to the coverage, not before.
- No phone number, per the media contact section above.
