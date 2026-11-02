import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "/#styles", label: "Styles" },
  { href: "/#languages", label: "Languages" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Logo />
        <nav aria-label="Main" className="flex items-center gap-1 text-sm">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-1.5 text-muted transition hover:bg-surface-muted hover:text-foreground ${
                i < 2 ? "hidden md:inline-block" : "hidden sm:inline-block"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#tool"
            className="ml-1 hidden rounded-full bg-foreground px-4 py-1.5 font-medium text-background transition hover:opacity-85 sm:inline-block"
          >
            Try it free
          </Link>
          <span className="ml-1">
            <ThemeToggle />
          </span>
        </nav>
      </div>
    </header>
  );
}
