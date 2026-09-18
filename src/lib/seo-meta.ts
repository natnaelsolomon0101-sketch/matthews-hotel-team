import { BRAND } from "@/lib/entity";

/**
 * Title and Open Graph helpers shared by every metadata function.
 *
 * Why this exists (geo/14-seo-tech.md): the root layout sets
 * `title.template = "%s | Matthews Hotel Markets"`, and most routes ALSO typed
 * the brand into their own title, so 200+ pages shipped
 * "... | Matthews Hotel Markets | Matthews Hotel Markets" at 90 to 120
 * characters. `seoTitle()` returns an `absolute` title, which bypasses the
 * template, so the brand can only ever appear once.
 */

const TITLE_MAX = 60;
const SHORT_BRAND = "Matthews";
const BRAND_SUFFIX = new RegExp(`\\s*\\|\\s*(?:${BRAND}|Matthews Hotel|${SHORT_BRAND})\\s*$`);

/** The page's own title with any trailing brand segment removed. */
export function bareTitle(raw: string): string {
  let t = raw.trim();
  while (BRAND_SUFFIX.test(t)) t = t.replace(BRAND_SUFFIX, "").trim();
  return t;
}

/**
 * Fit a title into 60 characters where possible, in this order of preference:
 *   1. "<title> | Matthews Hotel Markets"
 *   2. "<title> | Matthews"
 *   3. "<title>"
 * and, when the title has " | " sub-segments and still does not fit, the same
 * three attempts again with the last sub-segment dropped. A single segment
 * longer than 60 characters is returned as is: the words of the page's own
 * headline are never cut or rewritten here.
 */
export function fitTitle(raw: string): string {
  const segments = bareTitle(raw).split(/\s+\|\s+/);
  for (let n = segments.length; n >= 1; n--) {
    const base = segments.slice(0, n).join(" | ");
    const brandAlreadyIn = base.includes(BRAND);
    const candidates = brandAlreadyIn
      ? [base]
      : [`${base} | ${BRAND}`, `${base} | ${SHORT_BRAND}`, base];
    const fit = candidates.find((c) => c.length <= TITLE_MAX);
    if (fit) return fit;
  }
  return segments[0];
}

/** Use as `title: seoTitle("...")` in a route's metadata. */
export function seoTitle(raw: string): { absolute: string } {
  return { absolute: fitTitle(raw) };
}

/** Social cards have no 60-character limit: full title, brand exactly once. */
export function socialTitle(raw: string): string {
  const base = bareTitle(raw);
  return base.includes(BRAND) ? base : `${base} | ${BRAND}`;
}

/**
 * A route that sets its own `openGraph` object replaces the parent's
 * wholesale, which drops the file-based site image (src/app/opengraph-image).
 * Routes without their own opengraph-image file spread this in so every page
 * has an og:image.
 */
export const DEFAULT_OG_IMAGES = [
  {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${BRAND} | Hotel investment sales and capital markets`,
  },
];

/**
 * Trim a meta description to at most 160 characters on a word boundary, so a
 * `.slice(0, 160)` never ends mid-word. Text only ever gets shorter; nothing
 * is added, so no figure or claim can change.
 */
export function fitDescription(raw: string, max = 160): string {
  const text = raw.replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max + 1);
  const sentenceEnd = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "));
  if (sentenceEnd >= 110) return cut.slice(0, sentenceEnd + 1);
  const space = cut.lastIndexOf(" ", max - 1);
  return cut.slice(0, space).replace(/[\s,;:(]+$/, "");
}

/**
 * Try progressively shorter phrasings of the same title, longest first, and
 * use the first that fits in 60 characters. The last candidate is the
 * fallback when none fit.
 */
export function seoTitleFrom(candidates: string[]): { absolute: string } {
  for (const c of candidates) {
    const t = fitTitle(c);
    if (t.length <= TITLE_MAX) return { absolute: t };
  }
  return { absolute: fitTitle(candidates[candidates.length - 1]) };
}
