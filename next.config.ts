import type { NextConfig } from "next";
import path from "node:path";
import fs from "node:fs";

// Answer clusters are the directories under src/lib/data/answers, so a new
// cluster gets its Markdown twin routing without an edit here.
const ANSWER_CLUSTERS = fs
  .readdirSync(path.resolve(__dirname, "src/lib/data/answers"), { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .join("|");

const nextConfig: NextConfig = {
  // Pin Turbopack workspace root to silence the multi-lockfile warning
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 1080, 1200, 1470, 1920, 2560],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "cms.matthews.com" },
    ],
  },
  reactStrictMode: true,
  poweredByHeader: false,

  // Markdown twins for AI agents (geo/12-agent-access.md). Two public ways to
  // reach the same prerendered document under src/app/agent-md/:
  //   1. `<page path>.md`, the llms.txt convention (llmstxt.org).
  //   2. the page's own URL with `Accept: text/markdown`, the content
  //      negotiation convention Cloudflare and Vercel document.
  // Only the page families that have a twin are negotiated, so every other
  // URL keeps returning HTML whatever the Accept header says.
  // Advertise each twin from its HTML page with an HTTP Link header
  // (RFC 8288), so pages whose metadata is not built by answerMetadata()
  // announce their Markdown copy too.
  async headers() {
    const CLUSTERS = ANSWER_CLUSTERS;
    const SITE = "https://matthewshotelmarkets.com";
    const alt = (p: string) => [
      { key: "Link", value: `<${SITE}${p}.md>; rel="alternate"; type="text/markdown"` },
    ];
    return [
      { source: `/:cluster(${CLUSTERS})`, headers: alt("/:cluster") },
      { source: `/:cluster(${CLUSTERS})/:slug((?!.*\\.md$)[^/]+)`, headers: alt("/:cluster/:slug") },
      { source: "/:section(glossary|tools)/:slug((?!.*\\.md$)[^/]+)", headers: alt("/:section/:slug") },
      { source: "/:page(rates|about)", headers: alt("/:page") },
      { source: "/rates/methodology", headers: alt("/rates/methodology") },
      { source: "/data/hotel-financing-statistics", headers: alt("/data/hotel-financing-statistics") },
      { source: "/data/sba-hotel-lending", headers: alt("/data/sba-hotel-lending") },
      { source: "/data/sba-hotel-lending/:state((?!.*\\.md$)[^/]+)", headers: alt("/data/sba-hotel-lending/:state") },
    ];
  },

  async rewrites() {
    const wantsMarkdown = [
      { type: "header" as const, key: "accept", value: "(.*)text/markdown(.*)" },
    ];
    const CLUSTERS = ANSWER_CLUSTERS;
    return {
      beforeFiles: [
        { source: "/:path*.md", destination: "/agent-md/:path*" },
        { source: `/:cluster(${CLUSTERS})`, has: wantsMarkdown, destination: "/agent-md/:cluster" },
        { source: `/:cluster(${CLUSTERS})/:slug`, has: wantsMarkdown, destination: "/agent-md/:cluster/:slug" },
        { source: "/:section(glossary|tools)/:slug", has: wantsMarkdown, destination: "/agent-md/:section/:slug" },
        { source: "/:page(rates|about)", has: wantsMarkdown, destination: "/agent-md/:page" },
        { source: "/rates/methodology", has: wantsMarkdown, destination: "/agent-md/rates/methodology" },
        {
          source: "/data/hotel-financing-statistics",
          has: wantsMarkdown,
          destination: "/agent-md/data/hotel-financing-statistics",
        },
        { source: "/data/sba-hotel-lending", has: wantsMarkdown, destination: "/agent-md/data/sba-hotel-lending" },
        { source: "/data/sba-hotel-lending/:state", has: wantsMarkdown, destination: "/agent-md/data/sba-hotel-lending/:state" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
