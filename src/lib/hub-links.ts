/**
 * Links from the market and brand pages into the answer pages
 * (geo/05-architecture.md 5.2 item 3 and 5.3).
 *
 * Every target is resolved against the data module that renders it, and the
 * anchor text is that page's own H1, so a reworded question rewords its links.
 * A path that is not a registered page throws, which fails the static build
 * instead of shipping a dead link.
 */
import { clusters } from "./data/answers";
import type { BrandFlag } from "./data/brands";
import type { Market } from "./data/markets";
import { stateH1, statePageByCode } from "./sba/states";

export type HubLink = { href: string; label: string };

/** Answer pages every brand page links (5.3), after the brand's own franchise-cost pages. */
const BRAND_RELATED_ANSWERS = [
  "/hotel-valuation/hotel-cap-rates",
  "/hotel-financing/pip-and-renovation-loans",
  "/sell-a-hotel",
  "/sell-a-hotel/franchise-transfer",
  "/sell-a-hotel/franchise-agreement-expiration",
];

function answerLink(path: string): HubLink {
  for (const c of clusters) {
    if (path === `/${c.cluster}`) return { href: path, label: c.hub.h1 };
    const spoke = c.spokes.find((s) => `/${c.cluster}/${s.slug}` === path);
    if (spoke) return { href: path, label: spoke.h1 };
  }
  throw new Error(`hub-links: ${path} is not a registered answer page`);
}

function dedupe(paths: string[]): string[] {
  return [...new Set(paths)];
}

/** A market's chosen answer pages, plus its state's SBA lending page when that page exists. */
export function marketRelatedLinks(m: Market): { answers: HubLink[]; data: HubLink[] } {
  const state = statePageByCode(m.state);
  return {
    answers: dedupe(m.relatedAnswers).map(answerLink),
    data: state ? [{ href: state.path, label: stateH1(state) }] : [],
  };
}

/** A brand family's franchise-cost pages, then the answer pages every brand page links. */
export function brandRelatedLinks(b: BrandFlag): HubLink[] {
  for (const p of b.franchiseCostPages) {
    if (p !== "/hotel-franchise-costs" && !p.startsWith("/hotel-franchise-costs/")) {
      throw new Error(`hub-links: ${b.slug} franchiseCostPages entry ${p} is not under /hotel-franchise-costs`);
    }
  }
  return dedupe([...b.franchiseCostPages, ...BRAND_RELATED_ANSWERS]).map(answerLink);
}
