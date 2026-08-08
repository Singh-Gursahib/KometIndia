"use client";

import Image from "next/image";
import { useState } from "react";
import type { MediaSlot } from "@/lib/media";

const tones = {
  ember:
    "radial-gradient(120% 90% at 20% 15%, #3a1b06 0%, transparent 60%), radial-gradient(100% 80% at 85% 80%, #ff6a13 0%, transparent 55%), linear-gradient(150deg, #16110d 0%, #241206 55%, #0d0b09 100%)",
  steel:
    "radial-gradient(110% 90% at 75% 20%, #46505c 0%, transparent 60%), radial-gradient(90% 70% at 15% 85%, #ff8f43 0%, transparent 50%), linear-gradient(150deg, #14171b 0%, #232a32 60%, #0e1013 100%)",
  graphite:
    "radial-gradient(120% 100% at 30% 25%, #2b2b31 0%, transparent 62%), radial-gradient(80% 70% at 90% 90%, #ed5502 0%, transparent 55%), linear-gradient(160deg, #0d0d10 0%, #1c1c21 60%, #08080a 100%)",
} as const;

type Props = {
  slot: MediaSlot;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Renders the placeholder even if the file exists. Useful for design review. */
  forcePlaceholder?: boolean;
};

/**
 * Renders a real image when the file exists, and a designed gradient panel when it
 * does not — so missing art reads as intentional rather than broken.
 */
export default function Media({
  slot,
  className = "",
  sizes = "100vw",
  priority = false,
  forcePlaceholder = false,
}: Props) {
  const [missing, setMissing] = useState(false);
  const showPlaceholder = missing || forcePlaceholder;

  if (showPlaceholder) {
    return (
      <div
        role={slot.alt ? "img" : undefined}
        aria-label={slot.alt || undefined}
        className={`absolute inset-0 overflow-hidden ${className}`}
      >
        <div
          className="placeholder-drift absolute -inset-[15%]"
          style={{ background: tones[slot.tone] }}
        />
        {/* Fine grain keeps large flat gradients from banding */}
        <div
          className="absolute inset-0 opacity-[0.16] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          }}
        />
      </div>
    );
  }

  return (
    <Image
      src={slot.src}
      alt={slot.alt}
      fill
      priority={priority}
      sizes={sizes}
      onError={() => setMissing(true)}
      className={`object-cover ${className}`}
    />
  );
}
