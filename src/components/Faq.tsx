import { FAQS, type FaqItem } from "@/content/faq";

export function Faq({ items = FAQS }: { items?: FaqItem[] }) {
  return (
    <div className="divide-y divide-border rounded-3xl border border-border bg-surface">
      {items.map((f) => (
        <details key={f.q} className="group px-5 py-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:hidden">
            {f.q}
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-muted transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 pr-8 leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
