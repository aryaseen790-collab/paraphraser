import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  number?: string;
  title: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
}

/** A content section with a small numbered label and a serif heading. */
export function Section({ id, number, title, lede, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto mt-24 max-w-6xl scroll-mt-20 px-4">
      <div className="mb-8 max-w-2xl">
        {number && (
          <p className="mb-3 font-mono text-xs tracking-[0.18em] text-accent-text uppercase">{number}</p>
        )}
        <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {lede && <div className="mt-4 text-lg leading-relaxed text-muted">{lede}</div>}
      </div>
      {children}
    </section>
  );
}
