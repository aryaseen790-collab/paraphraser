import { getDailyBudgetUsd } from "@/config/protection";
import type { Store } from "./store";

/** Spend is stored as integer micro-dollars (1 USD = 1,000,000) to avoid float drift. */
const MICRO = 1_000_000;
const KEY_TTL_SECONDS = 3 * 24 * 60 * 60;

/** UTC date, e.g. "2026-11-02". The budget resets at 00:00 UTC. */
export function utcDay(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

function spendKey(day = utcDay()) {
  return `spend:${day}`;
}

export function statsKey(day = utcDay()) {
  return `stats:${day}`;
}

export async function isOverBudget(store: Store): Promise<boolean> {
  const spentMicro = await store.getNumber(spendKey());
  return spentMicro >= getDailyBudgetUsd() * MICRO;
}

export async function recordSpend(store: Store, costUsd: number): Promise<number> {
  const micro = Math.max(0, Math.ceil(costUsd * MICRO));
  if (micro === 0) return 0;
  const total = await store.incrBy(spendKey(), micro, KEY_TTL_SECONDS);
  return total / MICRO;
}

/** Daily counters (visible in the Upstash data browser under stats:YYYY-MM-DD). */
export async function recordStats(store: Store, fields: Record<string, number>): Promise<void> {
  await store.hincrBy(statsKey(), fields, 35 * 24 * 60 * 60);
}
