import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent text-sm font-bold text-white">
            P
          </span>
          <span>{siteConfig.name}</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm sm:gap-3">
          <Link href="/about" className="hidden rounded px-2 py-1 text-muted hover:text-foreground sm:inline">
            About
          </Link>
          <Link href="/contact" className="hidden rounded px-2 py-1 text-muted hover:text-foreground sm:inline">
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
