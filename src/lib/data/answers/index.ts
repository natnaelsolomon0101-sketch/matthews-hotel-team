/**
 * All answer-cluster content, in one place.
 *
 * sitemap.ts, llms.txt, feed.xml, scripts/schema-validate.ts and
 * scripts/internal-links-audit.ts all read from here, so a new page appears in
 * every one of them by being added to its cluster barrel. The hand-written
 * llms.txt drifted once already (geo/00-repo-map.md); the fix is generation,
 * not discipline.
 */
import { hub as financingHub, spokes as financingSpokes } from "./hotel-financing";
import { hub as sellHub, spokes as sellSpokes } from "./sell-a-hotel";
import { hub as valuationHub, spokes as valuationSpokes } from "./hotel-valuation";
import { hub as buyHub, spokes as buySpokes } from "./buy-a-hotel";
import type { AnswerCluster, AnswerPage } from "./types";

export type { AnswerCluster, AnswerPage } from "./types";

export type ClusterDefinition = {
  cluster: AnswerCluster;
  /** Nav label, short. */
  label: string;
  hub: AnswerPage;
  spokes: AnswerPage[];
};

export const clusters: ClusterDefinition[] = [
  {
    cluster: "hotel-financing",
    label: "Financing",
    hub: financingHub,
    spokes: financingSpokes,
  },
  {
    cluster: "sell-a-hotel",
    label: "Sell a Hotel",
    hub: sellHub,
    spokes: sellSpokes,
  },
  {
    cluster: "hotel-valuation",
    label: "Valuation",
    hub: valuationHub,
    spokes: valuationSpokes,
  },
  {
    cluster: "buy-a-hotel",
    label: "Buy a Hotel",
    hub: buyHub,
    spokes: buySpokes,
  },
];

/** Every answer page on the site, hubs included. */
export const answerPages: AnswerPage[] = clusters.flatMap((c) => [c.hub, ...c.spokes]);

export function getCluster(cluster: string): ClusterDefinition | undefined {
  return clusters.find((c) => c.cluster === cluster);
}

export function getAnswer(cluster: string, slug: string): AnswerPage | undefined {
  const c = getCluster(cluster);
  if (!c) return undefined;
  return c.spokes.find((p) => p.slug === slug);
}

/** Absolute site path for a page, e.g. "/hotel-financing/refinance". */
export function answerPath(p: AnswerPage): string {
  return p.isHub ? `/${p.cluster}` : `/${p.cluster}/${p.slug}`;
}

/** Newest `lastUpdated` across a cluster, for hub-level sitemap entries. */
export function clusterLastUpdated(c: ClusterDefinition): string {
  return [c.hub, ...c.spokes].reduce(
    (latest, p) => (p.lastUpdated > latest ? p.lastUpdated : latest),
    c.hub.lastUpdated,
  );
}
