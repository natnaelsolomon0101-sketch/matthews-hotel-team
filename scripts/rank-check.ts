#!/usr/bin/env -S npx tsx
/**
 * Weekly rank-check for the 30 priority queries in
 * reports/priority-targets.md.
 *
 * Two modes:
 *   1. SerpAPI (real Google SERP) — set SERPAPI_KEY env var (free tier: 100/mo).
 *   2. Free DuckDuckGo HTML scrape — fallback when SERPAPI_KEY is absent.
 *      Lower fidelity, but zero-cost and good enough for trend tracking.
 *
 * Output: appends one row per query/run to reports/rank-history.jsonl.
 *
 * Run: pnpm tsx scripts/rank-check.ts
 * Cron: vercel.json or GitHub Actions weekly.
 */
import fs from "node:fs";
import path from "node:path";

const TARGET_DOMAIN = "matthewshotelmarkets.com";

/**
 * Rank-check queries.
 *
 * The 30 hand-written queries that used to live here covered brokerage and
 * investment-sales intent only, from the 2026-05-10 sprint. They are kept
 * below as the transactional seed set, and the financing, refinance,
 * valuation, underwriting and 1031 intent from this pass is appended from
 * geo/tracking/prompts.csv, which also carries each prompt's target URL. Edit
 * the CSV to change the informational half.
 */
const QUERIES: { q: string; intent: string; targetUrl?: string }[] = [
  { q: "hotel broker", intent: "transactional", targetUrl: "/" },
  { q: "hotel investment sales", intent: "transactional", targetUrl: "/services/investment-sales" },
  { q: "sell my hotel", intent: "transactional", targetUrl: "/services/investment-sales" },
  { q: "Hampton Inn for sale", intent: "transactional/brand", targetUrl: "/hotels-for-sale/hampton-inn" },
  { q: "Holiday Inn Express for sale", intent: "transactional/brand", targetUrl: "/hotels-for-sale/holiday-inn-express" },
  { q: "Marriott hotel for sale", intent: "transactional/brand", targetUrl: "/hotels-for-sale/marriott" },
  { q: "Hilton hotel for sale", intent: "transactional/brand", targetUrl: "/hotels-for-sale/hilton" },
  { q: "hotel broker Austin", intent: "transactional/local", targetUrl: "/markets/austin-tx" },
  { q: "hotel for sale Austin Texas", intent: "transactional/local", targetUrl: "/markets/austin-tx" },
  { q: "hotel for sale Dallas", intent: "transactional/local", targetUrl: "/markets/dallas-tx" },
  { q: "hotel for sale Houston", intent: "transactional/local", targetUrl: "/markets/houston-tx" },
  { q: "hotel for sale Nashville", intent: "transactional/local", targetUrl: "/markets/nashville-tn" },
  { q: "hotel for sale Phoenix", intent: "transactional/local", targetUrl: "/markets/phoenix-az" },
  { q: "hotel for sale Charleston SC", intent: "transactional/local", targetUrl: "/markets/charleston-sc" },
  { q: "hotel for sale Denver", intent: "transactional/local", targetUrl: "/markets/denver-co" },
  { q: "hotel for sale Miami", intent: "transactional/local", targetUrl: "/markets/miami-fl" },
  { q: "boutique hotel for sale Texas", intent: "transactional/long-tail" },
  { q: "select-service hotel for sale", intent: "transactional" },
  { q: "hotel disposition advisor", intent: "transactional" },
  { q: "hotel BOV broker opinion of value", intent: "informational" },
  { q: "hotel cap rates 2026", intent: "informational", targetUrl: "/insights/q1-2026-outlook" },
  { q: "Texas hotel cap rates", intent: "informational", targetUrl: "/insights/texas-hotel-cap-rates-q2-2026" },
  { q: "how to value a hotel", intent: "informational" },
  { q: "how to sell a hotel", intent: "informational", targetUrl: "/insights/how-to-sell-a-hotel-2026" },
  { q: "Sun Belt hotel investment", intent: "informational", targetUrl: "/insights/sun-belt-hospitality-investment-2026" },
  { q: "hotel CMBS distress 2026", intent: "informational", targetUrl: "/insights/hotel-cmbs-distress-trepp-2026" },
  { q: "Hampton Inn franchise economics", intent: "informational/brand" },
  { q: "select-service vs full-service hotel investment", intent: "informational", targetUrl: "/insights/select-service-vs-full-service-2026" },
  { q: "Marcus Millichap vs Matthews", intent: "navigational/comparison" },
  { q: "best hotel brokers 2026", intent: "transactional/comparison" },
  ...loadCsvQueries(),
];

/** Informational queries and their target URLs, from Agent 4's curated CSV. */
function loadCsvQueries(): { q: string; intent: string; targetUrl?: string }[] {
  const csv = path.join(process.cwd(), "geo", "tracking", "prompts.csv");
  let raw: string;
  try {
    raw = fs.readFileSync(csv, "utf8");
  } catch {
    console.warn("[rank-check] geo/tracking/prompts.csv not found; using the seed queries only");
    return [];
  }
  return raw
    .trim()
    .split(/\r?\n/)
    .slice(1)
    .map((line): { q: string; intent: string; targetUrl?: string } | null => {
      const cells: string[] = [];
      let cur = "";
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
          if (inQuotes && line[i + 1] === '"') {
            cur += '"';
            i++;
          } else inQuotes = !inQuotes;
        } else if (ch === "," && !inQuotes) {
          cells.push(cur);
          cur = "";
        } else cur += ch;
      }
      cells.push(cur);
      const [prompt, bucket, , targetUrl] = cells;
      if (!prompt?.trim()) return null;
      return {
        q: prompt.trim(),
        intent: (bucket || "informational").trim(),
        targetUrl: targetUrl?.trim() || undefined,
      };
    })
    .filter((x): x is { q: string; intent: string; targetUrl?: string } => x !== null);
}

type Result = { q: string; intent: string; runAt: string; rank: number | null; cited: boolean; engine: "serpapi" | "ddg"; targetUrl?: string };

async function checkSerpApi(query: string): Promise<{ rank: number | null; cited: boolean }> {
  const key = process.env.SERPAPI_KEY!;
  const url = `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(query)}&hl=en&gl=us&num=20&api_key=${key}`;
  const res = await fetch(url);
  if (!res.ok) return { rank: null, cited: false };
  const json: { organic_results?: { position: number; link: string }[] } = await res.json();
  const hits = json.organic_results ?? [];
  const idx = hits.findIndex((h) => h.link.includes(TARGET_DOMAIN));
  return { rank: idx >= 0 ? hits[idx].position : null, cited: idx >= 0 };
}

async function checkDuckDuckGo(query: string): Promise<{ rank: number | null; cited: boolean }> {
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (rank-check.ts; matthewshotelmarkets.com)" } });
  if (!res.ok) return { rank: null, cited: false };
  const html = await res.text();
  const linkRegex = /<a[^>]+class="[^"]*result__a[^"]*"[^>]+href="([^"]+)"/g;
  const links: string[] = [];
  let match;
  while ((match = linkRegex.exec(html)) !== null && links.length < 30) {
    links.push(match[1]);
  }
  const idx = links.findIndex((l) => l.includes(TARGET_DOMAIN));
  return { rank: idx >= 0 ? idx + 1 : null, cited: idx >= 0 };
}

async function main() {
  const engine: "serpapi" | "ddg" = process.env.SERPAPI_KEY ? "serpapi" : "ddg";
  const checker = engine === "serpapi" ? checkSerpApi : checkDuckDuckGo;
  const runAt = new Date().toISOString();
  const outFile = path.join(process.cwd(), "reports", "rank-history.jsonl");
  const summaryFile = path.join(process.cwd(), "reports", "rank-latest.md");
  fs.mkdirSync(path.dirname(outFile), { recursive: true });

  const rows: Result[] = [];
  let cited = 0;
  for (const q of QUERIES) {
    process.stdout.write(`[${q.q}] `);
    try {
      const r = await checker(q.q);
      const row: Result = { q: q.q, intent: q.intent, runAt, rank: r.rank, cited: r.cited, engine, targetUrl: q.targetUrl };
      rows.push(row);
      if (r.cited) cited++;
      console.log(r.rank == null ? "—" : `#${r.rank}`);
    } catch (e) {
      const row: Result = { q: q.q, intent: q.intent, runAt, rank: null, cited: false, engine, targetUrl: q.targetUrl };
      rows.push(row);
      console.log(`ERR ${(e as Error).message}`);
    }
    await new Promise((r) => setTimeout(r, engine === "ddg" ? 1500 : 250));
  }

  fs.appendFileSync(outFile, rows.map((r) => JSON.stringify(r)).join("\n") + "\n");

  const md = [
    `# Rank check — ${runAt}`,
    ``,
    `Engine: \`${engine}\` · Domain: \`${TARGET_DOMAIN}\` · Queries: ${QUERIES.length} · In top 20: ${cited}`,
    ``,
    `| Query | Intent | Rank | Target URL |`,
    `| --- | --- | :-: | --- |`,
    ...rows.map((r) => `| ${r.q} | ${r.intent} | ${r.rank == null ? "—" : "#" + r.rank} | ${r.targetUrl ?? "—"} |`),
  ].join("\n");
  fs.writeFileSync(summaryFile, md);
  console.log(`\n→ ${outFile}\n→ ${summaryFile}\n→ Visible: ${cited}/${QUERIES.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
