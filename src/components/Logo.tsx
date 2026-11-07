import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="group flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
      <span
        aria-hidden="true"
        className="inline-flex h-8 min-w-8 items-center justify-center rounded-[10px] bg-accent px-1.5 font-display text-[15px] font-extrabold text-on-accent transition group-hover:rotate-[-6deg]"
      >
        OG
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight">
        {siteConfig.name === "OG Humanizer" ? (
          <>
            OG <span className="text-accent-text">Humanizer</span>
          </>
        ) : (
          siteConfig.name
        )}
      </span>
    </Link>
  );
}
