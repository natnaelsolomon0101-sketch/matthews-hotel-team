/**
 * Best-effort fixed-window rate limit, held in the memory of one serverless
 * instance. It is not a global limit: a second instance has its own counters
 * and a cold start resets them. That is acceptable here because the endpoint
 * is read-only, serves public data and does no expensive work. It exists to
 * stop one runaway client loop from pinning an instance, not to meter usage.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 60;
const MAX_KEYS = 5_000;

const hits = new Map<string, { start: number; count: number }>();

export function clientKey(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd ? fwd.split(",")[0].trim() : req.headers.get("x-real-ip")) || "unknown";
}

export function rateLimit(key: string, now = Date.now()): { ok: boolean; remaining: number; retryAfter: number } {
  if (hits.size > MAX_KEYS) {
    for (const [k, v] of hits) if (now - v.start >= WINDOW_MS) hits.delete(k);
    if (hits.size > MAX_KEYS) hits.clear();
  }
  const cur = hits.get(key);
  if (!cur || now - cur.start >= WINDOW_MS) {
    hits.set(key, { start: now, count: 1 });
    return { ok: true, remaining: MAX_PER_WINDOW - 1, retryAfter: 0 };
  }
  cur.count += 1;
  const retryAfter = Math.max(1, Math.ceil((cur.start + WINDOW_MS - now) / 1000));
  return { ok: cur.count <= MAX_PER_WINDOW, remaining: Math.max(0, MAX_PER_WINDOW - cur.count), retryAfter };
}

export const RATE_LIMIT_DESCRIPTION = `${MAX_PER_WINDOW} requests per minute per IP address, best effort`;
