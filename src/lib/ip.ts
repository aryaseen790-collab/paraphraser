/**
 * Best-effort client IP for rate limiting. On Vercel, x-forwarded-for is set by
 * the platform (the left-most entry is the client). Behind Cloudflare, prefer
 * cf-connecting-ip, which Cloudflare overwrites on every request.
 */
export function getClientIp(request: Request): string | null {
  const h = request.headers;
  const candidates = [
    h.get("cf-connecting-ip"),
    h.get("x-real-ip"),
    h.get("x-forwarded-for")?.split(",")[0],
  ];
  for (const c of candidates) {
    const ip = c?.trim();
    if (ip) return ip;
  }
  return null;
}
