import Link from "next/link";
import { EN_CHROME } from "@/i18n/en";
import { LOCALE_INFO, type Locale } from "@/i18n/locales";
import type { ChromeStrings } from "@/i18n/types";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  href: string;
  label: string;
  /** Tailwind visibility classes. */
  show: string;
}

function navFor(locale: Locale, chrome: ChromeStrings): NavItem[] {
  const paths = LOCALE_INFO[locale].paths;
  const items: NavItem[] = [
    { href: paths.home, label: chrome.navHumanizer, show: "hidden sm:inline-block" },
    { href: paths.paraphraser, label: chrome.navParaphraser, show: "hidden lg:inline-block" },
  ];
  if (locale === "en") {
    items.push(
      { href: "/guides", label: "Guides", show: "hidden md:inline-block" },
      { href: "/about", label: "About", show: "hidden md:inline-block" },
    );
  }
  return items;
}

export function Header({ locale = "en", chrome = EN_CHROME }: { locale?: Locale; chrome?: ChromeStrings }) {
  const home = LOCALE_INFO[locale].paths.home;
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <Logo href={home} />
        <nav aria-label="Main" className="flex items-center gap-1 text-sm">
          {navFor(locale, chrome).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-1.5 text-muted transition hover:bg-surface-muted hover:text-foreground ${item.show}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`${home === "/" ? "" : home}/#tool`}
            className="ml-1 hidden rounded-full bg-foreground px-4 py-1.5 font-medium text-background transition hover:opacity-85 sm:inline-block"
          >
            {chrome.cta}
          </Link>
          <span className="ml-1">
            <LanguageSwitcher locale={locale} label={chrome.languageMenu} />
          </span>
          <span className="ml-1">
            <ThemeToggle label={chrome.themeToggle} />
          </span>
        </nav>
      </div>
    </header>
  );
}
