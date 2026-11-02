import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { RATE_LIMIT_REQUESTS, RATE_LIMIT_WINDOW, devFallbacksAllowed } from "@/config/protection";

/**
 * Tiny storage interface used for rate limiting, caching and spend tracking.
 * Backed by Upstash Redis in production, or an in-memory map for local dev.
 */
export interface Store {
  readonly kind: "upstash" | "memory";
  getString(key: string): Promise<string | null>;
  setString(key: string, value: string, ttlSeconds: number): Promise<void>;
  getNumber(key: string): Promise<number>;
  incrBy(key: string, amount: number, ttlSeconds: number): Promise<number>;
  hincrBy(key: string, fields: Record<string, number>, ttlSeconds: number): Promise<void>;
  rateLimit(identifier: string): Promise<{ success: boolean; reset: number }>;
}

class UpstashStore implements Store {
  readonly kind = "upstash" as const;
  private limiter: Ratelimit;

  constructor(private redis: Redis) {
    this.limiter = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(RATE_LIMIT_REQUESTS, RATE_LIMIT_WINDOW),
      prefix: "rl:paraphrase",
      analytics: false,
    });
  }

  async getString(key: string) {
    // Values are stored as JSON objects so the client never auto-parses user text.
    const value = await this.redis.get<{ v: string }>(key);
    return value && typeof value.v === "string" ? value.v : null;
  }

  async setString(key: string, value: string, ttlSeconds: number) {
    await this.redis.set(key, { v: value }, { ex: ttlSeconds });
  }

  async getNumber(key: string) {
    const value = await this.redis.get<number | string>(key);
    const n = Number(value ?? 0);
    return Number.isFinite(n) ? n : 0;
  }

  async incrBy(key: string, amount: number, ttlSeconds: number) {
    const [total] = await this.redis.pipeline().incrby(key, amount).expire(key, ttlSeconds).exec<[number, number]>();
    return total;
  }

  async hincrBy(key: string, fields: Record<string, number>, ttlSeconds: number) {
    const p = this.redis.pipeline();
    for (const [field, amount] of Object.entries(fields)) p.hincrby(key, field, amount);
    p.expire(key, ttlSeconds);
    await p.exec();
  }

  async rateLimit(identifier: string) {
    const { success, reset } = await this.limiter.limit(identifier);
    return { success, reset };
  }
}

/** Single-process stand-in for local development only. */
class MemoryStore implements Store {
  readonly kind = "memory" as const;
  private data = new Map<string, { value: string | number | Record<string, number>; expires: number }>();
  private hits = new Map<string, number[]>();
  private windowMs = parseWindowMs(RATE_LIMIT_WINDOW);

  private read(key: string) {
    const entry = this.data.get(key);
    if (!entry) return undefined;
    if (entry.expires < Date.now()) {
      this.data.delete(key);
      return undefined;
    }
    return entry.value;
  }

  async getString(key: string) {
    const v = this.read(key);
    return typeof v === "string" ? v : null;
  }

  async setString(key: string, value: string, ttlSeconds: number) {
    this.data.set(key, { value, expires: Date.now() + ttlSeconds * 1000 });
  }

  async getNumber(key: string) {
    const v = this.read(key);
    return typeof v === "number" ? v : 0;
  }

  async incrBy(key: string, amount: number, ttlSeconds: number) {
    const total = (await this.getNumber(key)) + amount;
    this.data.set(key, { value: total, expires: Date.now() + ttlSeconds * 1000 });
    return total;
  }

  async hincrBy(key: string, fields: Record<string, number>, ttlSeconds: number) {
    const current = this.read(key);
    const hash: Record<string, number> = current && typeof current === "object" ? { ...current } : {};
    for (const [field, amount] of Object.entries(fields)) hash[field] = (hash[field] ?? 0) + amount;
    this.data.set(key, { value: hash, expires: Date.now() + ttlSeconds * 1000 });
  }

  async rateLimit(identifier: string) {
    const now = Date.now();
    const recent = (this.hits.get(identifier) ?? []).filter((t) => t > now - this.windowMs);
    const success = recent.length < RATE_LIMIT_REQUESTS;
    if (success) recent.push(now);
    this.hits.set(identifier, recent);
    return { success, reset: (recent[0] ?? now) + this.windowMs };
  }
}

function parseWindowMs(window: string): number {
  const [amount, unit] = window.split(" ");
  const unitMs: Record<string, number> = { ms: 1, s: 1000, m: 60_000, h: 3_600_000, d: 86_400_000 };
  return Number(amount) * (unitMs[unit] ?? 3_600_000);
}

let store: Store | null | undefined;

/**
 * Returns the configured store, or null when Upstash is not configured and dev
 * fallbacks are not allowed (the route then refuses to call Claude).
 */
export function getStore(): Store | null {
  if (store !== undefined) return store;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) {
    store = new UpstashStore(new Redis({ url, token }));
  } else if (devFallbacksAllowed()) {
    console.warn("[store] Upstash is not configured; using in-memory store (local development only).");
    store = new MemoryStore();
  } else {
    store = null;
  }
  return store;
}
