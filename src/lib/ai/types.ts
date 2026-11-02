export type ProviderId = "claude" | "gemini";

export interface ParaphraseCall {
  system: string;
  user: string;
  maxTokens: number;
  signal: AbortSignal;
}

export type StopReason = "end" | "max_tokens" | "refusal";

export type StreamEvent =
  | { type: "text"; text: string }
  | { type: "done"; stopReason: StopReason; inputTokens: number; outputTokens: number };

export interface AiProvider {
  id: ProviderId;
  /** Human-readable name, e.g. for logs and the privacy page. */
  label: string;
  /** True when the provider's API key is set. */
  isConfigured(): boolean;
  /** Streams the rewrite. Throws on API errors (before or during streaming). */
  stream(call: ParaphraseCall): AsyncGenerator<StreamEvent>;
}

/** The provider is out of quota or overloaded (HTTP 429/503/529). */
export class ProviderBusyError extends Error {
  constructor(
    readonly provider: ProviderId,
    readonly status: number,
    options?: { cause?: unknown },
  ) {
    super(`${provider} is busy or out of quota (HTTP ${status})`, options);
    this.name = "ProviderBusyError";
  }
}

export function isBusyStatus(status: number | undefined): boolean {
  return status === 429 || status === 503 || status === 529;
}
