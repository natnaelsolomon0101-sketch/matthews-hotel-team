/**
 * When /data/hotel-financing-statistics was last reviewed end to end.
 *
 * It lives in its own module so the page's visible "Last updated" line and
 * `src/app/sitemap.ts` read the SAME value. Agent 8 asked for this explicitly
 * (geo/requests.md item 4): the sitemap must use a real authored date for this
 * route, never `new Date()`.
 *
 * Bump it when a statistic on that page changes, not on every deploy.
 */
export const UPDATED = "2026-09-17";
