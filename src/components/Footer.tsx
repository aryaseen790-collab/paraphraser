import Link from "next/link";
import { LANGUAGE_PAGES, MODE_PAGES } from "@/config/landing";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";

const company = [
  { href: "/about", label: "About" },
  { href: "/guides", label: "Writing guides" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

function Column({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="mb-3 text-xs font-semibold tracking-[0.14em] text-foreground uppercase">{title}</h2>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-muted transition hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            A free tool for rewording your own writing. No account, no credit counter, and nothing to install.
          </p>
        </div>
        <Column
          title="Tools"
          links={[
            { href: "/humanize-ai", label: "AI Humanizer" },
            { href: "/humanize-ai-tagalog", label: "Tagalog Humanizer" },
            ...MODE_PAGES.map((p) => ({ href: `/${p.slug}`, label: p.h1 })),
          ]}
        />
        <Column title="Languages" links={LANGUAGE_PAGES.slice(0, 7).map((p) => ({ href: `/${p.slug}`, label: p.h1.replace(" Paraphrasing Tool", "") }))} />
        <Column title="Company" links={company} />
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted">
          © {siteConfig.name}. Use it on your own writing, and always read the result before you send it.
        </p>
      </div>
    </footer>
  );
}
