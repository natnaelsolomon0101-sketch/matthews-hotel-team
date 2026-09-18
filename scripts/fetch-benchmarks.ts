/**
 * fetch-benchmarks.ts: pull the public rate benchmarks that anchor /rates.
 *
 *   npx tsx scripts/fetch-benchmarks.ts
 *
 * Writes content/rates/benchmarks.json. Run it on the first business day of
 * the month, before you publish the new rate sheet edition. It is the only
 * automated step in the monthly refresh; the observed spreads are typed by
 * hand into src/lib/rates/sheet.ts because only the team has them.
 *
 * ENDPOINTS, ALL PUBLIC, NO API KEY REQUIRED (verified 2026-09-17):
 *   - Treasury par yield curve CSV:
 *     https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv
 *     Official publisher of the constant-maturity Treasury yields. Primary source.
 *   - New York Fed SOFR JSON:
 *     https://markets.newyorkfed.org/api/rates/secured/sofr/last/1.json
 *     The administrator of SOFR. Primary source.
 *   - FRED graph CSV (no key):
 *     https://fred.stlouisfed.org/graph/fredgraph.csv?id=DPRIME
 *     Used for the bank prime loan rate, which the Fed publishes in H.15.
 *
 * NEVER add STR, CoStar, Trepp subscriber, or any other licensed feed here.
 * Everything in this file must be redistributable, because /rates.json and
 * /rates.csv hand it back out under CC BY 4.0.
 */

import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const OUT = path.join(process.cwd(), "content", "rates", "benchmarks.json");

type Benchmark = {
  key: string;
  label: string;
  value: number;
  asOf: string;
  seriesId?: string;
  sourceName: string;
  sourceUrl: string;
};

const TREASURY_CSV =
  "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/all/all?type=daily_treasury_yield_curve&_format=csv";
const TREASURY_SOURCE = {
  sourceName:
    "U.S. Department of the Treasury, Daily Treasury Par Yield Curve Rates",
  sourceUrl:
    "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve",
};

async function text(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { "User-Agent": "matthewshotelmarkets.com rate-sheet refresh" },
  });
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return res.text();
}

/** Treasury publishes one CSV row per business day, newest first. */
async function treasury(): Promise<Benchmark[]> {
  const csv = await text(
    TREASURY_CSV.replace("/all/all", `/${new Date().getUTCFullYear()}/all`),
  );
  const lines = csv.trim().split(/\r?\n/);
  const header = splitCsv(lines[0]);
  const row = splitCsv(lines[1]);
  const col = (name: string) => {
    const i = header.findIndex((h) => h.replace(/"/g, "").trim() === name);
    if (i < 0) throw new Error(`Treasury CSV has no column "${name}"`);
    const v = Number(row[i]);
    if (!Number.isFinite(v)) throw new Error(`Treasury "${name}" not numeric`);
    return v;
  };
  const [mm, dd, yyyy] = row[0].split("/");
  const asOf = `${yyyy}-${mm}-${dd}`;

  return [
    { key: "ust5", label: "5-year Treasury", value: col("5 Yr"), asOf, seriesId: "DGS5", ...TREASURY_SOURCE },
    { key: "ust7", label: "7-year Treasury", value: col("7 Yr"), asOf, seriesId: "DGS7", ...TREASURY_SOURCE },
    { key: "ust10", label: "10-year Treasury", value: col("10 Yr"), asOf, seriesId: "DGS10", ...TREASURY_SOURCE },
  ];
}

async function sofr(): Promise<Benchmark> {
  const raw = await text(
    "https://markets.newyorkfed.org/api/rates/secured/sofr/last/1.json",
  );
  const json = JSON.parse(raw) as {
    refRates?: { effectiveDate: string; percentRate: number }[];
  };
  const r = json.refRates?.[0];
  if (!r) throw new Error("NY Fed returned no SOFR observation");
  return {
    key: "sofr",
    label: "SOFR",
    value: r.percentRate,
    asOf: r.effectiveDate,
    seriesId: "SOFR",
    sourceName:
      "Federal Reserve Bank of New York, Secured Overnight Financing Rate",
    sourceUrl: "https://www.newyorkfed.org/markets/reference-rates/sofr",
  };
}

async function prime(): Promise<Benchmark> {
  const csv = await text(
    "https://fred.stlouisfed.org/graph/fredgraph.csv?id=DPRIME",
  );
  const lines = csv.trim().split(/\r?\n/);
  for (let i = lines.length - 1; i > 0; i--) {
    const [date, value] = lines[i].split(",");
    const v = Number(value);
    if (Number.isFinite(v) && value.trim() !== ".") {
      return {
        key: "prime",
        label: "Prime rate",
        value: v,
        asOf: date.trim(),
        seriesId: "DPRIME",
        sourceName: "Federal Reserve Bank of St. Louis (FRED), series DPRIME",
        sourceUrl: "https://fred.stlouisfed.org/series/DPRIME",
      };
    }
  }
  throw new Error("FRED DPRIME returned no usable observation");
}

/** Minimal CSV splitter. Treasury quotes its header cells and nothing else. */
function splitCsv(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let q = false;
  for (const ch of line) {
    if (ch === '"') q = !q;
    else if (ch === "," && !q) {
      out.push(cur);
      cur = "";
    } else cur += ch;
  }
  out.push(cur);
  return out;
}

async function main() {
  const results = await Promise.allSettled([treasury(), sofr(), prime()]);
  const benchmarks: Benchmark[] = [];
  const failures: string[] = [];

  for (const r of results) {
    if (r.status === "fulfilled") {
      benchmarks.push(...(Array.isArray(r.value) ? r.value : [r.value]));
    } else {
      failures.push(String(r.reason));
    }
  }

  if (failures.length) {
    console.error("\nFAILED FETCHES (the old value is kept for these):");
    failures.forEach((f) => console.error("  " + f));
  }

  // The SBA 504 debenture rate is priced monthly and is not on a machine
  // endpoint. It is carried forward from the existing file and re-typed by
  // hand during the monthly refresh. See the runbook in geo/08-data.md.
  const existing = JSON.parse(
    await (await import("node:fs/promises")).readFile(OUT, "utf8"),
  ) as { benchmarks: Benchmark[] };
  const fetchedKeys = new Set(benchmarks.map((b) => b.key));
  for (const b of existing.benchmarks) {
    if (!fetchedKeys.has(b.key)) benchmarks.push(b);
  }

  // Never replace a newer observation with an older one. This happens when a
  // series lags a move that its publishers have already announced: after the
  // September 16, 2026 FOMC decision, FRED's DPRIME still ended at 6.75% on
  // September 15 while the banks' own 7.00% took effect September 17. The
  // existing file keeps the newer, hand-sourced value until the feed catches up.
  for (let i = 0; i < benchmarks.length; i++) {
    const prior = existing.benchmarks.find((b) => b.key === benchmarks[i].key);
    if (prior && prior.asOf > benchmarks[i].asOf) {
      console.warn(
        `  keeping ${prior.key} ${prior.value}% as of ${prior.asOf}; the feed's latest is ${benchmarks[i].value}% as of ${benchmarks[i].asOf}`,
      );
      benchmarks[i] = prior;
    }
  }

  const order = ["prime", "sofr", "ust5", "ust7", "ust10", "sba504"];
  benchmarks.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));

  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(
    OUT,
    JSON.stringify(
      {
        _comment:
          "Generated by scripts/fetch-benchmarks.ts. Public benchmarks only. Never add licensed STR/CoStar/Trepp subscriber data to this file.",
        fetchedAt: new Date().toISOString(),
        benchmarks,
      },
      null,
      2,
    ) + "\n",
    "utf8",
  );

  console.log(`\nWrote ${benchmarks.length} benchmarks to ${OUT}`);
  for (const b of benchmarks) {
    console.log(`  ${b.label.padEnd(28)} ${b.value.toFixed(2)}%  as of ${b.asOf}`);
  }
  console.log(
    "\nNext: update the SBA 504 debenture rate by hand if it moved, then type",
  );
  console.log("this month's observed spreads into src/lib/rates/sheet.ts.");

  if (failures.length) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
