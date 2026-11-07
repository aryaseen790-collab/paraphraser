import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  number?: string;
  title: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
  /** Light tinted background band, to alternate with white sections. */
  tint?: boolean;
  /** Illustration shown beside the heading and lede on large screens. */
  media?: ReactNode;
  /** Put the illustration on the left instead of the right. */
  mediaLeft?: boolean;
}

/** A content section with a pill label, a bold heading and an optional illustration. */
export function Section({ id, number, title, lede, children, tint, media, mediaLeft }: SectionProps) {
  const heading = (
    <div className="max-w-2xl">
      {number && (
        <p className="mb-4 inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-bold tracking-[0.12em] text-accent-text uppercase">
          {number}
        </p>
      )}
      <h2 className="font-display text-3xl leading-[1.1] font-extrabold tracking-tight sm:text-[2.6rem]">{title}</h2>
      {lede && <div className="mt-4 text-lg leading-relaxed text-muted">{lede}</div>}
    </div>
  );

  return (
    <section id={id} className={`scroll-mt-20 py-16 sm:py-20 ${tint ? "bg-tint" : ""}`}>
      <div className="mx-auto max-w-6xl px-4">
        {media ? (
          <div className="mb-10 grid items-center gap-10 lg:grid-cols-2">
            <div className={mediaLeft ? "lg:order-2" : ""}>{heading}</div>
            <div className={mediaLeft ? "lg:order-1" : ""}>{media}</div>
          </div>
        ) : (
          <div className="mb-10">{heading}</div>
        )}
        {children}
      </div>
    </section>
  );
}
