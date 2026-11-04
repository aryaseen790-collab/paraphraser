/**
 * Best-effort client IP for rate limiting.
 *
 * On Vercel, x-real-ip and x-forwarded-for are set by the platform itself, so
 * clients can't forge them. Cloudflare's cf-connecting-ip is only trustworthy
 * when every request really passes through Cloudflare's proxy (orange cloud);
 * otherwise anyone can send it to dodge the rate limit. So it is used only when
 * TRUST_CLOUDFLARE_IP=true.
 */
export function getClientIp(request: Request): string | null {
  const h = request.headers;
  const candidates = [
    process.env.TRUST_CLOUDFLARE_IP === "true" ? h.get("cf-connecting-ip") : null,
    h.get("x-real-ip"),
    h.get("x-forwarded-for")?.split(",")[0],
  ];
  for (const c of candidates) {
    const ip = c?.trim();
    if (ip) return ip;
  }
  return null;
}
