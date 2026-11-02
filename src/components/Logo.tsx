import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
      <span
        aria-hidden="true"
        className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] bg-foreground font-display text-lg font-semibold text-background italic transition group-hover:rotate-[-6deg]"
      >
        p
      </span>
      <span className="font-display text-xl font-semibold tracking-tight">{siteConfig.name}</span>
    </Link>
  );
}
