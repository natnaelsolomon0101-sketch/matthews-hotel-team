import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { buildMcpServer } from "@/lib/agent/mcp-server";
import { clientKey, rateLimit } from "@/lib/agent/rate-limit";

/**
 * Remote MCP endpoint, Streamable HTTP transport, stateless.
 * Spec: https://modelcontextprotocol.io/specification/2025-11-25/basic/transports
 *
 * - POST carries one JSON-RPC message and gets one JSON response
 *   (`enableJsonResponse`), so nothing is held open on a serverless function.
 * - GET and DELETE return 405, which the spec allows for a server that offers
 *   no server-initiated stream and no sessions.
 * - A new server and transport are built per request, the SDK's documented
 *   stateless pattern. No session id is issued.
 * - No auth, no writes, no user data. Every tool is a lookup over public data.
 * - Origin: the spec's Origin check exists to stop DNS rebinding against
 *   local or private servers. This server is public and unauthenticated, and
 *   returns the same public data to every caller, so every origin is allowed
 *   and CORS is open, on purpose.
 *
 * This route lives at /mcp, not /api/mcp, because robots.txt disallows /api/.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 15;

const CORS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Accept, Authorization, Mcp-Session-Id, MCP-Protocol-Version, Last-Event-ID",
  "Access-Control-Expose-Headers": "Mcp-Session-Id, MCP-Protocol-Version, Retry-After",
  "Access-Control-Max-Age": "86400",
};

const MAX_BODY_BYTES = 64 * 1024;

function rpcError(status: number, code: number, message: string, extra: Record<string, string> = {}) {
  return new Response(JSON.stringify({ jsonrpc: "2.0", error: { code, message }, id: null }), {
    status,
    headers: { "Content-Type": "application/json", ...CORS, ...extra },
  });
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS });
}

export async function POST(req: Request) {
  const limit = rateLimit(clientKey(req));
  if (!limit.ok) {
    return rpcError(429, -32000, "Rate limit exceeded. Retry later.", {
      "Retry-After": String(limit.retryAfter),
    });
  }

  const length = Number(req.headers.get("content-length") ?? "0");
  if (length > MAX_BODY_BYTES) return rpcError(413, -32600, "Request body too large.");

  const server = buildMcpServer();
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });

  try {
    await server.connect(transport);
    const res = await transport.handleRequest(req);
    const headers = new Headers(res.headers);
    for (const [k, v] of Object.entries(CORS)) headers.set(k, v);
    headers.set("Cache-Control", "no-store");
    headers.set("X-RateLimit-Remaining", String(limit.remaining));
    return new Response(res.body, { status: res.status, headers });
  } catch {
    return rpcError(500, -32603, "Internal server error.");
  } finally {
    // The JSON response body is already complete when handleRequest resolves.
    void transport.close().catch(() => {});
    void server.close().catch(() => {});
  }
}

function methodNotAllowed() {
  return rpcError(405, -32000, "Method not allowed. This server is stateless: send JSON-RPC over POST.", {
    Allow: "POST, OPTIONS",
  });
}

export async function GET() {
  return methodNotAllowed();
}

export async function DELETE() {
  return methodNotAllowed();
}
