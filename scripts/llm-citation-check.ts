#!/usr/bin/env -S npx tsx
/**
 * Monthly LLM citation-share check across the 30 prompts hotel investors
 * actually type into AI search (sourced from SEO_LLM_PLAN_v2.md).
 *
 * Calls the major engines via their public APIs when keys are present:
 *   - Perplexity API (PERPLEXITY_API_KEY) — has built-in web search
 *   - OpenAI Responses API with web_search tool (OPENAI_API_KEY)
 *   - Anthropic Messages API with web_search tool (ANTHROPIC_API_KEY)
 *
 * For each prompt + engine we record:
 *   - whether matthewshotelmarkets.com appears in citations
 *   - whether competitor domains appear (HVS, Hunter, JLL, CBRE, M&M, Berkadia)
 *   - the cited URL
 *
 * Output: reports/llm-citation-history.jsonl + reports/llm-citation-latest.md
 *
 * Run: pnpm tsx scripts/llm-citation-check.ts
 */
import fs from "node:fs";
import path from "node:path";

const TARGET = "matthewshotelmarkets.com";
/**
 * Domains are matched with `String.includes`, so an entry that is a prefix of
 * another domain matches both. That is how "hunterhotels.co" quietly matched
 * "hunterhotels.com" here.
 *
 * Corrected 2026-09-17: hunterhotels.com is NOT Hunter Hotel Advisors (Agent 4
 * flagged it; it resolves to an unrelated South African luxury hotel group).
 * hunterhotels.net 301s to hunteradvisors.co, which is the real firm
 * ("Hunter Advisors is the top hotel-only brokerage firm in the U.S.",
 * fetched 2026-09-17). Both of the firm's own domains are listed; the
 * unrelated .com is not.
 */
const COMPETITOR_DOMAINS = [
  "hvs.com",
  "hunteradvisors.co",
  "hunterhotels.net",
  "jll.com",
  "cbre.com",
  "marcusmillichap.com",
  "berkadia.com",
  "newmark.com",
  "cushmanwakefield.com",
  "hodgeswardelliott.com",
  "eastdilsecured.com",
  "loopnet.com",
  "crexi.com",
];

/**
 * The prompt set.
 *
 * Was a hardcoded 30-prompt list from the 2026-05-10 sprint, all
 * brokerage/investment-sales intent, and it contained
 * "Who closed the Walden Retreats Hill Country deal?". Walden Retreats is an
 * ACTIVE listing (listings.ts, OM hosted off-domain via omUrl), not a closed
 * deal, so the prompt asked about something that has not happened. Removed.
 *
 * Now read from geo/tracking/prompts.csv, the 60-prompt curated subset Agent 4
 * built for exactly this purpose, so the tracking harness and the query
 * research cannot drift apart. Edit the CSV, not this file.
 */
function loadPrompts(): { prompt: string; bucket: string; cluster: string }[] {
  const csv = path.join(process.cwd(), "geo", "tracking", "prompts.csv");
  const rows = fs.readFileSync(csv, "utf8").trim().split(/\r?\n/).slice(1);
  return rows
    .map((line) => {
      // Fields may be quoted and may contain commas.
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
      return { prompt: cells[0]?.trim() ?? "", bucket: cells[1] ?? "", cluster: cells[2] ?? "" };
    })
    .filter((r) => r.prompt.length > 0);
}

const PROMPTS = loadPrompts().map((r) => r.prompt);

type Citation = { url: string };
type EngineResult = {
  engine: "perplexity" | "openai" | "anthropic";
  prompt: string;
  runAt: string;
  citations: Citation[];
  ourDomainCited: boolean;
  competitorsCited: string[];
  responsePreview: string;
  error?: string;
};

async function askPerplexity(prompt: string): Promise<EngineResult> {
  const key = process.env.PERPLEXITY_API_KEY;
  const out: EngineResult = {
    engine: "perplexity",
    prompt,
    runAt: new Date().toISOString(),
    citations: [],
    ourDomainCited: false,
    competitorsCited: [],
    responsePreview: "",
  };
  if (!key) {
    out.error = "PERPLEXITY_API_KEY missing";
    return out;
  }
  try {
    const res = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "sonar",
        messages: [{ role: "user", content: prompt }],
        return_citations: true,
      }),
    });
    const json: {
      choices?: { message?: { content?: string } }[];
      citations?: string[];
    } = await res.json();
    const citations = (json.citations ?? []).map((u) => ({ url: u }));
    const text = json.choices?.[0]?.message?.content ?? "";
    out.citations = citations;
    out.responsePreview = text.slice(0, 400);
    out.ourDomainCited = citations.some((c) => c.url.includes(TARGET));
    out.competitorsCited = uniq(
      citations.flatMap((c) => COMPETITOR_DOMAINS.filter((d) => c.url.includes(d))),
    );
  } catch (e) {
    out.error = (e as Error).message;
  }
  return out;
}

async function askOpenAI(prompt: string): Promise<EngineResult> {
  const key = process.env.OPENAI_API_KEY;
  const out: EngineResult = {
    engine: "openai",
    prompt,
    runAt: new Date().toISOString(),
    citations: [],
    ourDomainCited: false,
    competitorsCited: [],
    responsePreview: "",
  };
  if (!key) {
    out.error = "OPENAI_API_KEY missing";
    return out;
  }
  try {
    const res = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        tools: [{ type: "web_search" }],
        input: prompt,
      }),
    });
    const json: {
      output?: { content?: { type: string; text?: string; url?: string }[] }[];
      output_text?: string;
    } = await res.json();
    const text = json.output_text ?? "";
    const urls: string[] = [];
    for (const out of json.output ?? []) {
      for (const c of out.content ?? []) {
        if (c.url) urls.push(c.url);
      }
    }
    out.citations = urls.map((url) => ({ url }));
    out.responsePreview = text.slice(0, 400);
    out.ourDomainCited = urls.some((u) => u.includes(TARGET));
    out.competitorsCited = uniq(
      urls.flatMap((u) => COMPETITOR_DOMAINS.filter((d) => u.includes(d))),
    );
  } catch (e) {
    out.error = (e as Error).message;
  }
  return out;
}

async function askAnthropic(prompt: string): Promise<EngineResult> {
  const key = process.env.ANTHROPIC_API_KEY;
  const out: EngineResult = {
    engine: "anthropic",
    prompt,
    runAt: new Date().toISOString(),
    citations: [],
    ourDomainCited: false,
    competitorsCited: [],
    responsePreview: "",
  };
  if (!key) {
    out.error = "ANTHROPIC_API_KEY missing";
    return out;
  }
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1024,
        tools: [{ type: "web_search_20250305", name: "web_search" }],
        messages: [{ role: "user", content: prompt }],
      }),
    });
    const json: {
      content?: { type: string; text?: string; citations?: { url: string }[] }[];
    } = await res.json();
    const text = (json.content ?? [])
      .filter((b) => b.type === "text")
      .map((b) => b.text ?? "")
      .join("\n");
    const urls: string[] = [];
    for (const block of json.content ?? []) {
      for (const c of block.citations ?? []) {
        urls.push(c.url);
      }
    }
    out.citations = urls.map((url) => ({ url }));
    out.responsePreview = text.slice(0, 400);
    out.ourDomainCited = urls.some((u) => u.includes(TARGET));
    out.competitorsCited = uniq(
      urls.flatMap((u) => COMPETITOR_DOMAINS.filter((d) => u.includes(d))),
    );
  } catch (e) {
    out.error = (e as Error).message;
  }
  return out;
}

function uniq<T>(xs: T[]): T[] {
  return Array.from(new Set(xs));
}

async function main() {
  const runAt = new Date().toISOString();
  const outFile = path.join(process.cwd(), "reports", "llm-citation-history.jsonl");
  const summaryFile = path.join(process.cwd(), "reports", "llm-citation-latest.md");
  fs.mkdirSync(path.dirname(outFile), { recursive: true });

  const allResults: EngineResult[] = [];

  for (const prompt of PROMPTS) {
    console.log(`\n[${prompt.slice(0, 60)}…]`);
    const results = await Promise.all([
      askPerplexity(prompt),
      askOpenAI(prompt),
      askAnthropic(prompt),
    ]);
    for (const r of results) {
      console.log(`  ${r.engine.padEnd(10)} ${r.error ? "skipped (" + r.error + ")" : (r.ourDomainCited ? "✓ cited" : "✗ not cited")}`);
      allResults.push(r);
    }
    await new Promise((r) => setTimeout(r, 800));
  }

  fs.appendFileSync(outFile, allResults.map((r) => JSON.stringify(r)).join("\n") + "\n");

  const byEngine = ["perplexity", "openai", "anthropic"] as const;
  const summary: string[] = [`# LLM citation check — ${runAt}`, ``];
  for (const engine of byEngine) {
    const rows = allResults.filter((r) => r.engine === engine);
    const ran = rows.filter((r) => !r.error);
    const cited = ran.filter((r) => r.ourDomainCited);
    summary.push(`## ${engine}`);
    if (ran.length === 0) {
      summary.push(`Skipped (no API key).`);
      summary.push(``);
      continue;
    }
    summary.push(`Cited Matthews in ${cited.length} of ${ran.length} prompts (${Math.round((cited.length / ran.length) * 100)}%).`);
    summary.push(``);
    summary.push(`| Prompt | Cited? | Competitors cited |`);
    summary.push(`| --- | :-: | --- |`);
    for (const r of rows) {
      summary.push(`| ${r.prompt.slice(0, 72)}${r.prompt.length > 72 ? "…" : ""} | ${r.error ? "—" : r.ourDomainCited ? "✓" : "✗"} | ${r.competitorsCited.join(", ") || "—"} |`);
    }
    summary.push(``);
  }
  fs.writeFileSync(summaryFile, summary.join("\n"));
  console.log(`\n→ ${outFile}\n→ ${summaryFile}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
