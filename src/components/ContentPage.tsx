import type { ReactNode } from "react";

export function ContentPage({ children }: { children: ReactNode }) {
  return <article className="prose-page mx-auto max-w-3xl px-4 py-10 sm:py-14">{children}</article>;
}
