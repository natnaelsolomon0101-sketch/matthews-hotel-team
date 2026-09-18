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
import { clusters, answerPath } from "./data/answers";
import { tools } from "./data/tools/dscr-calculator";
import { latestEdition, cellCounts } from "./rates/sheet";
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
  lines.push(`- Service index: ${url("/services")}`);
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
  lines.push(`- Press kit and media contact: ${url("/press")}`);
  lines.push(`- Glossary: ${url("/glossary")}. Hotel-investment term definitions.`);
  for (const g of glossary) {
    lines.push(`  - ${g.term}: ${url(`/glossary/${g.slug}`)}`);
  }
  lines.push("");

  // The answer clusters. Anchor text is each page's own H1, because the H1 IS
  // the question the page answers, which is the single most useful thing this
  // file can tell a model.
  lines.push("## Questions we answer, and where");
  lines.push("");
  for (const c of clusters) {
    lines.push(`### ${c.hub.h1}`);
    lines.push(`${url(`/${c.cluster}`)} (last updated ${c.hub.lastUpdated})`);
    lines.push("");
    for (const p of c.spokes) {
      lines.push(`- ${p.h1}`);
      lines.push(`  ${url(answerPath(p))} (last updated ${p.lastUpdated})`);
    }
    lines.push("");
  }

  lines.push("## Calculators");
  lines.push("");
  for (const t of tools) {
    lines.push(`- ${t.h1}: ${url(`/tools/${t.slug}`)} (last updated ${t.lastUpdated})`);
  }
  lines.push(
    "  Server-rendered. The formula, the worked example, the thresholds and the FAQ are in the HTML without JavaScript.",
  );
  lines.push("");

  lines.push("## Markets");
  lines.push("");
  lines.push(`- Market index: ${url("/markets")}. ${markets.length} covered metros with the Matthews Hotel Index summary table.`);
  for (const m of markets) {
    lines.push(`  - ${m.city}, ${m.state} (${m.msa}): ${url(`/markets/${m.slug}`)}`);
  }
  lines.push("");

  lines.push("## Hotel brands covered");
  lines.push("");
  lines.push(`- Brand index: ${url("/hotels-for-sale")}`);
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
  const edition = latestEdition();
  const counts = cellCounts(edition);
  lines.push(
    `- Hotel rate sheet, ${edition.label}, published ${edition.publishedAt}` +
      (edition.modifiedAt ? `, corrected ${edition.modifiedAt}` : "") +
      `: ${url("/rates")}. ` +
      `Public benchmarks and published lender-program rules, refreshed monthly. ` +
      `${counts.published} of ${counts.total} priced cells are published with a source link; the other ` +
      `${counts.pending} read "Not yet published" with a one-line reason, because no lender type ` +
      `publishes them and we do not print a number we have not seen quoted three times in a month. ` +
      `Methodology: ${url("/rates/methodology")}.`,
  );
  lines.push(
    `  - Machine readable: ${url("/rates.json")} (JSON) and ${url("/rates.csv")} (CSV). ` +
      "Both are declared in the Dataset node's distribution on /rates.",
  );
  lines.push(
    `- Hotel financing statistics, sourced and dated: ${url("/data/hotel-financing-statistics")}. ` +
      "Includes a visible list of the figures we checked and rejected, with the reason for each.",
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
    "> Generated from the same data modules as /sitemap.xml and /llms.txt. Covers every page on " +
      "this site backed by a plain-text data module: the answer clusters, the calculators, " +
      "the glossary, and the Matthews Hotel Index methodology. Each entry carries its own last-" +
      "updated date, its direct answer, its FAQ and its sources, so a model can cite a specific " +
      "dated claim rather than the site in general. Two pages are deliberately not extracted " +
      `verbatim because they are hand-written JSX rather than data: ${url("/about")} and ` +
      `${url("/rates")}. Read those directly; /rates also publishes ${url("/rates.json")} and ` +
      `${url("/rates.csv")}.`,
  );
  lines.push("");

  // The answer clusters, in full. This is the part a model can actually quote.
  for (const c of clusters) {
    lines.push(`## ${c.hub.h1}`);
    lines.push("");
    for (const p of [c.hub, ...c.spokes]) {
      lines.push(`### ${p.h1}`);
      lines.push("");
      lines.push(`URL: ${url(answerPath(p))}`);
      lines.push(`Last updated: ${p.lastUpdated}`);
      lines.push("");
      lines.push(stripMarkdownish(p.answer));
      lines.push("");
      lines.push("Key takeaways:");
      for (const t of p.takeaways) lines.push(`- ${t}`);
      lines.push("");
      for (const sec of p.sections) {
        lines.push(`#### ${sec.h2}`);
        lines.push("");
        lines.push(stripMarkdownish(sec.lead));
        lines.push("");
        lines.push(stripMarkdownish(sec.body));
        lines.push("");
      }
      lines.push(`Table: ${p.table.caption}`);
      lines.push(p.table.columns.join(" | "));
      for (const row of p.table.rows) lines.push(row.join(" | "));
      lines.push("");
      lines.push(`First-party data point: ${stripMarkdownish(p.originalDataPoint.sentence)}`);
      lines.push(`Source: ${url(p.originalDataPoint.ref)}`);
      lines.push("");
      lines.push(`Worked example (${p.workedExample.label}):`);
      lines.push(stripMarkdownish(p.workedExample.body));
      lines.push("");
      lines.push("FAQ:");
      for (const f of p.faq) {
        lines.push(`- Q: ${f.q}`);
        lines.push(`  A: ${f.a}`);
      }
      lines.push("");
      lines.push("Sources:");
      for (const src of p.sources) {
        lines.push(`- [${src.n}] ${src.label} (${src.publisher}, accessed ${src.accessed}): ${src.url.startsWith("/") ? url(src.url) : src.url}`);
      }
      lines.push("");
    }
  }

  lines.push("## Calculators");
  lines.push("");
  for (const t of tools) {
    lines.push(`### ${t.h1}`);
    lines.push("");
    lines.push(`URL: ${url(`/tools/${t.slug}`)}`);
    lines.push(`Last updated: ${t.lastUpdated}`);
    lines.push("");
    lines.push(stripMarkdownish(t.answer));
    lines.push("");
    lines.push("Formula:");
    lines.push(t.tool.formula);
    lines.push("");
    lines.push(`Worked example (${t.workedExample.label}):`);
    lines.push(stripMarkdownish(t.workedExample.body));
    lines.push("");
    lines.push(t.tool.disclaimer);
    lines.push("");
    lines.push("FAQ:");
    for (const f of t.faq) {
      lines.push(`- Q: ${f.q}`);
      lines.push(`  A: ${f.a}`);
    }
    lines.push("");
  }

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
