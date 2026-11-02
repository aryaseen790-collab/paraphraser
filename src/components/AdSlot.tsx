"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdSlotProps {
  /** Ad unit ID from AdSense (data-ad-slot). Optional until you create units. */
  slot?: string;
  className?: string;
  label?: string;
}

/**
 * Reserved ad space beside or below the tool, never over it. Renders nothing
 * unless NEXT_PUBLIC_ADS_ENABLED=true. With a publisher ID and slot it shows an
 * AdSense unit; otherwise a clearly marked placeholder of the same size.
 */
export function AdSlot({ slot, className = "", label = "Advertisement" }: AdSlotProps) {
  const ref = useRef<HTMLModElement>(null);
  const live = Boolean(siteConfig.adsenseClient && slot);

  useEffect(() => {
    if (!siteConfig.adsEnabled || !live || !ref.current || ref.current.dataset.loaded) return;
    try {
      ref.current.dataset.loaded = "1";
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blockers: leave the space empty.
    }
  }, [live]);

  if (!siteConfig.adsEnabled) return null;

  return (
    <aside aria-label={label} className={`text-center ${className}`}>
      <div className="mb-1 text-[10px] tracking-wider text-muted uppercase">{label}</div>
      {live ? (
        <ins
          ref={ref}
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client={siteConfig.adsenseClient}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <div className="flex min-h-[250px] items-center justify-center rounded-xl border border-dashed border-border text-xs text-muted">
          Ad slot{slot ? ` ${slot}` : ""}
        </div>
      )}
    </aside>
  );
}
