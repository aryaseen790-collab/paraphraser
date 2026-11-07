import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { IMAGES, type ImageKey } from "@/config/images";
import type { Locale } from "@/i18n/locales";

const PALETTES = [
  ["var(--accent)", "var(--violet)", "var(--highlight)"],
  ["var(--mint)", "var(--accent)", "var(--sun)"],
  ["var(--coral)", "var(--violet)", "var(--highlight)"],
];

function exists(file: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", file));
  } catch {
    return false;
  }
}

/**
 * An illustration from the image registry. Renders the real image when the
 * file is in public/images/, otherwise a decorative placeholder in the site's
 * colors so the layout is complete either way.
 */
export function Illustration({
  name,
  locale = "en",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 560px, 100vw",
}: {
  name: ImageKey;
  locale?: Locale;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const spec = IMAGES[name];
  const alt = (spec.alt as Partial<Record<Locale, string>>)[locale] ?? spec.alt.en;

  if (exists(spec.file)) {
    return (
      <Image
        src={spec.file}
        width={spec.width}
        height={spec.height}
        alt={alt}
        sizes={sizes}
        priority={priority}
        className={`h-auto w-full rounded-3xl ${className}`}
      />
    );
  }

  const [a, b, c] = PALETTES[name.length % PALETTES.length];
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden rounded-3xl border border-border ${className}`}
      style={{ aspectRatio: `${spec.width} / ${spec.height}`, background: "var(--tint)" }}
    >
      <div className="absolute -top-1/4 -left-1/4 h-3/4 w-3/4 rounded-full opacity-25 blur-2xl" style={{ background: a }} />
      <div className="absolute -right-1/4 -bottom-1/3 h-3/4 w-3/4 rounded-full opacity-25 blur-2xl" style={{ background: b }} />
      <div className="absolute inset-0 hero-dots opacity-60" style={{ ["--dot" as string]: "color-mix(in srgb, var(--accent) 22%, transparent)" }} />
      <div className="absolute top-1/2 left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 space-y-3">
        <div className="h-3 w-full rounded-full bg-surface/90" />
        <div className="h-3 w-5/6 rounded-full" style={{ background: c }} />
        <div className="h-3 w-4/6 rounded-full bg-surface/90" />
        <div className="h-3 w-3/4 rounded-full bg-surface/90" />
      </div>
    </div>
  );
}
