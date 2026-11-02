import { getProviderOrder } from "@/config/ai";
import { claudeProvider } from "./claude";
import { geminiProvider } from "./gemini";
import type { AiProvider, ProviderId } from "./types";

export * from "./types";

const PROVIDERS: Record<ProviderId, AiProvider> = {
  claude: claudeProvider,
  gemini: geminiProvider,
};

/**
 * Providers to try, in order, for each request (from AI_PROVIDER), keeping only
 * those whose API key is set. The next one is used only if the previous one
 * fails before sending any text (for example, Gemini's free quota ran out).
 */
export function getProviderChain(): AiProvider[] {
  return getProviderOrder()
    .map((id) => PROVIDERS[id])
    .filter((p) => p.isConfigured());
}
