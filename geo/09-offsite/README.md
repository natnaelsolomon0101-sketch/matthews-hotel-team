# geo/09-offsite/ — Agent 9, offsite-authority (2026-09-17)

Off-site mentions and links: drafts and a calendar only. Nothing here has been sent, posted, or
submitted. Nate sends.

**Read this first if you already know `content/outreach/`:** that folder (2026-05-10 sprint) has 15
ready-to-paste files still unsent, covering 4 memberships, 4 press pitches, 4 podcast pitches, and 2
university partnerships. This folder does not duplicate any of them. It sequences them (they are week
1-3 of `90-day-calendar.md`), extends every category past what that sprint covered, and adds the two
highest-authority asks this run found: the matthews.com hospitality-page link, and the exact-string
profile updates for LinkedIn.

## Files

| File | What it is | New vs. carried forward |
| --- | --- | --- |
| `targets.csv` | 100 rows, every off-site target this run identified, ranked | 15 rows existing-draft (already in `content/outreach/`, `content/pr/`), 85 rows new |
| `press-release-rate-sheet.md` | Wire-ready release for the rate sheet launch | New. **Gated**, cannot send until `/rates` has real numbers |
| `linkedin-series.md` | 12 data-led LinkedIn posts | New. Interim numbers from the live MHI dataset since `/rates`/`/data` don't exist yet; 4 posts marked to swap once they do |
| `guest-post-pitches.md` | 10 byline pitches to trade/CRE press | New. Does not duplicate the 4 existing press pitches |
| `podcast-pitches.md` | 20 podcast pitches | 4 existing (referenced, not restated in full), 16 new |
| `youtube-scripts.md` | 10 explainer scripts | New. Targets Wave 1 answer pages that are not built yet; scripts are ready, publishing is gated on those pages shipping |
| `directory-submissions.md` | Exact NAP/description strings, per directory | New file; the strings themselves are Agent 3's, from `geo/03-entity.md` |
| `reddit-quora-playbook.md` | Community rules plus 10 real, linked threads | New. 5 BiggerPockets and 5 Quora threads verified via WebSearch; live Reddit threads could not be surfaced by the same tool, noted honestly |
| `press-page.md` | Content for the not-yet-built `/press` route | New. Fixes the footer's "Press" link, which currently points at `/insights` |
| `90-day-calendar.md` | Week-by-week schedule, ≤2 hours/week | New. Week 1-3 is almost entirely unsent prior-sprint work |

## The one thing to do before anything else

Email Matthews corporate marketing asking `matthews.com/services/investment-sales/hospitality` to
name "Matthews Hotel Markets" and link to matthewshotelmarkets.com. Confirmed 2026-09-17: that page
exists, lists Luke Thompson as a featured agent, and currently does neither. It is the single
highest-authority link on this entire list, an internal ask, and it is `targets.csv` row 1 and
`90-day-calendar.md` week 1's first task.

## What this pass found wrong or stale in the prior sprint

- **Broker titles in the existing outreach drafts are wrong.** `content/outreach/memberships/` calls
  Nate Solomon "Director, Matthews Hotel Markets" throughout. His real title in
  `src/lib/data/team.ts` is "Hospitality Associate." Luke Thompson is called plain "Director" in
  several drafts; his real title is "VP & Director, Capital Markets." Fix before sending the AAHOA
  and AHLA applications (flagged in both `targets.csv` and `90-day-calendar.md` week 2).
- **A reporter-outlet conflict between two prior-sprint files.** `content/outreach/press/lodging-magazine-stephanie-ricca.md`
  pitches Stephanie Ricca as LODGING's editor. `content/pr/reporter-targets.md` separately lists a
  "Stephanie Ricca" on Hotel News Now's operations/brand beat. Both can't be current; verify which
  outlet she is actually at before sending either pitch.
- **`content/outreach/README.md` still carries May 2026 send dates** (2026-05-12 through 2026-05-25).
  It is now September. The drafts' content is still sound; the dates are not. `90-day-calendar.md`
  re-sequences all of it starting 2026-09-22.
- **The Wikidata and Wikipedia drafts in `content/wikidata/` and `content/wikipedia/` are still
  correctly unsubmitted**, and should stay that way. Confirmed again this run: neither entity has a
  Wikidata item or a Wikipedia article as of 2026-09-17. Notability memo is in `90-day-calendar.md`'s
  header section.
- **`content/pr/pitch-calendar-q2-2026.md`'s 5 pitches were never actually drafted as sendable
  emails** beyond Pitch 1's draft text; the file is a plan, not ready-to-send material like
  `content/outreach/`. Its Hotel News Now, Bisnow, Hotel Investment Today (MHI preview), LODGING
  byline, and Skift/Commercial Observer angles are folded into `targets.csv` and
  `guest-post-pitches.md` as new rows rather than re-drafted twice.
