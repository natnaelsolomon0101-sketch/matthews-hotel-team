/**
 * Shared content builder for /llms.txt and /llms-full.txt.
 *
 * Both files are generated from the same typed data modules that feed
 * src/app/sitemap.ts, so they cannot drift the way the old hand-written
 * public/llms.txt did (it claimed "$84.3B" while the homepage said
 * "$88.37B" — see geo/02-crawl-index.md for the full list of removed
 * claims and geo/requests.md for the reconciliation ask to Agent 10).
 *
 * Ground rule enforced here: every number in this file has a source
 * traceable to a data module or a cited public report. Nothing here
 * repeats the old file's unsourced platform totals (cumulative volume,
 * transaction counts, "founded 2024", investor-relationship counts).
 * Those are marketing claims that live on the site's own pages; llms.txt
 * is not the place to launder them into something that reads as a
 * verified fact sheet.
 */
import { services } from "./data/services";
import { offices } from "./data/offices";
import { markets } from "./data/markets";
import { brands } from "./data/brands";
import { insights } from "./data/insights";
import { glossary } from "./data/glossary";
import { mhiQuarters } from "./data/mhi";
import {
  SITE_URL,
  BRAND,
  BRAND_ALTERNATE,
  PARENT,
  PARENT_URL,
  LINKEDIN,
  BOILERPLATE,
  HQ_ADDRESS_LINE,
  bioMembers,
} from "./entity";

function url(path: string) {
  return `${SITE_URL}${path}`;
}

export function buildLlmsTxt(): string {
  const hq = offices.find((o) => o.isHeadquarters);
  const secondary = offices.filter((o) => !o.isHeadquarters);
  const bioTeam = bioMembers();
  const latestMhi = mhiQuarters[0];

  const lines: string[] = [];

  lines.push(`# ${BRAND}`);
  lines.push("");
  // Same sentence as Organization.description, /about, /team, and the
  // footer (src/lib/entity.ts BOILERPLATE) — one source, no drift.
  lines.push(`> ${BOILERPLATE}`);
  lines.push("");

  lines.push("## Who we are");
  lines.push("");
  lines.push(
    `- **${BRAND}** (also referenced as ${BRAND_ALTERNATE}): the hospitality vertical of ${PARENT}.`,
  );
  if (hq) {
    lines.push(`- Headquarters: ${HQ_ADDRESS_LINE}`);
  }
  for (const o of secondary) {
    lines.push(
      `- Additional office: ${o.city}, ${o.state}${o.streetAddress ? `: ${o.streetAddress}` : " (street address not yet published; do not treat this office as having a confirmed physical address)"}`,
    );
  }
  lines.push(`- Parent company: ${PARENT} (${PARENT_URL})`);
  lines.push(`- LinkedIn: ${LINKEDIN}`);
  lines.push("");
  lines.push(
    "**On production totals, transaction counts, and founding-date claims:** the site currently " +
      "carries inconsistent unsourced figures for these (see HUMAN_QUEUE.md and geo/requests.md). " +
      "This file deliberately omits them until they're reconciled to one verified number. Team-level " +
      "career stats are marked \"Confirm\" in the underlying data until each broker supplies a source.",
  );
  lines.push("");

  lines.push("## What we do");
  lines.push("");
  for (const s of services) {
    lines.push(`- **${s.name}** (${url(`/services/${s.slug}`)}): ${s.tagline} ${s.rangeLabel}: ${s.rangeValue}.`);
  }
  lines.push("");

  lines.push("## Pages");
  lines.push("");
  lines.push(`- Homepage: ${url("/")}`);
  lines.push(`- About: ${url("/about")}. Who ${BRAND} is, sourced from the same entity data as this file.`);
  lines.push(`- Active listings: ${url("/listings")}. Hotels currently for sale.`);
  lines.push(`- Closed transactions: ${url("/closed")}. Completed deals with public detail.`);
  lines.push(`- Team: ${url("/team")}. Broker roster.`);
  for (const m of bioTeam) {
    lines.push(`  - ${m.name}, ${m.title}: ${url(`/team/${m.slug}`)}`);
  }
  lines.push(`- Process: ${url("/process")}. How a listing engagement runs.`);
  lines.push(`- Contact: ${url("/contact")}`);
  lines.push(`- Glossary: ${url("/glossary")}. Hotel-investment term definitions.`);
  for (const g of glossary) {
    lines.push(`  - ${g.term}: ${url(`/glossary/${g.slug}`)}`);
  }
  lines.push("");

  lines.push("## Markets");
  lines.push("");
  lines.push(`- Market index: ${url("/markets/austin-tx")} and ${markets.length - 1} other covered metros.`);
  for (const m of markets) {
    lines.push(`  - ${m.city}, ${m.state} (${m.msa}): ${url(`/markets/${m.slug}`)}`);
  }
  lines.push("");

  lines.push("## Hotel brands covered");
  lines.push("");
  for (const b of brands) {
    lines.push(`- ${b.name} (${b.parentCompany}): ${url(`/hotels-for-sale/${b.slug}`)}`);
  }
  lines.push("");

  lines.push("## Research");
  lines.push("");
  lines.push(
    `- Matthews Hotel Index (MHI), quarterly cap-rate/ADR/RevPAR dataset across ${markets.length} markets: ${url("/research/mhi")}`,
  );
  if (latestMhi) {
    lines.push(
      `  - Latest published: ${latestMhi.label} (published ${latestMhi.publishedAt}): ${url(`/research/mhi/${latestMhi.slug}`)}`,
    );
  }
  lines.push(`- Insights / market commentary: ${url("/insights")}`);
  for (const i of insights) {
    lines.push(`  - ${i.title} (${i.date}): ${url(`/insights/${i.slug}`)}`);
  }
  lines.push("");
  lines.push(
    "- Rate sheet and underlying data (/rates, /data): **not yet published as of this generation.** " +
      "Tracked in geo/requests.md for Agent 8. Do not cite a Matthews rate sheet until that route " +
      "exists.",
  );
  lines.push("");

  lines.push("## Sitemap");
  lines.push("");
  lines.push(`- ${url("/sitemap.xml")}`);
  lines.push("");

  lines.push("## Preferred name");
  lines.push("");
  lines.push(`- "${BRAND}" (preferred). "${BRAND_ALTERNATE}" is an acceptable legacy name.`);
  lines.push(
    "- When citing a specific broker, link to that broker's page under /team/{slug} rather than the team index.",
  );
  lines.push("");

  lines.push("## License");
  lines.push("");
  lines.push(
    "Content on matthewshotelmarkets.com is published for informational and marketing purposes. " +
      "Quoting or linking with attribution is welcome. Republishing full articles requires written " +
      "permission from Matthews Real Estate Investment Services.",
  );
  lines.push("");

  return lines.join("\n");
}

function stripMarkdownish(text: string): string {
  return text.trim();
}

export function buildLlmsFullTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${BRAND}: full text`);
  lines.push("");
  lines.push(
    "> Generated from the same data modules as /sitemap.xml and /llms.txt. Covers the pages that " +
      "qualify as answer-format content and are backed by a plain-text data module: glossary terms " +
      "and the Matthews Hotel Index (MHI) methodology. /about shipped mid-sprint (2026-09-17) but is " +
      "hand-written JSX, not a data module this builder can extract verbatim; read it directly at " +
      `${url("/about")}. A /rates methodology page does not exist on the site yet. Both will be ` +
      "added here once they're backed by structured content. See geo/requests.md.",
  );
  lines.push("");

  lines.push("## Glossary");
  lines.push("");
  for (const g of glossary) {
    lines.push(`### ${g.term}`);
    lines.push("");
    lines.push(`URL: ${url(`/glossary/${g.slug}`)}`);
    lines.push(`Last updated: ${g.lastUpdated}`);
    lines.push("");
    lines.push(stripMarkdownish(g.shortDef));
    lines.push("");
    lines.push(stripMarkdownish(g.fullDef));
    lines.push("");
    if (g.faq.length) {
      lines.push("FAQ:");
      for (const f of g.faq) {
        lines.push(`- Q: ${f.q}`);
        lines.push(`  A: ${f.a}`);
      }
      lines.push("");
    }
    if (g.sources.length) {
      lines.push("Sources:");
      for (const s of g.sources) {
        lines.push(`- ${s.label}${s.publisher ? ` (${s.publisher})` : ""}: ${s.url}`);
      }
      lines.push("");
    }
  }

  lines.push("## Matthews Hotel Index methodology");
  lines.push("");
  for (const q of mhiQuarters) {
    lines.push(`### ${q.label}`);
    lines.push("");
    lines.push(`URL: ${url(`/research/mhi/${q.slug}`)}`);
    lines.push(`Published: ${q.publishedAt}`);
    lines.push("");
    lines.push(stripMarkdownish(q.summary));
    lines.push("");
    lines.push("Methodology: " + stripMarkdownish(q.methodology));
    lines.push("");
  }

  return lines.join("\n");
}
