import Link from "next/link";
import { siteConfig } from "@/config/site";

const links = [
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {siteConfig.name}: a free tool for improving your own writing.
        </p>
        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
