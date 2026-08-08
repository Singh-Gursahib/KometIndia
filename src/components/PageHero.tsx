import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import type { MediaSlot } from "@/lib/media";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  slot,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  slot: MediaSlot;
}) {
  return (
    <section className="relative isolate flex min-h-[48svh] items-end overflow-hidden bg-ink-950 sm:min-h-[62svh]">
      {/* Art runs at full strength; the scrim only protects the copy on the left. */}
      <Media slot={slot} priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-950/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/75 via-ink-950/25 to-transparent" />

      <div className="container-x relative w-full pb-12 pt-28 sm:pb-20 sm:pt-36">
        {eyebrow && (
          <Reveal>
            <p className="eyebrow text-ember-400">{eyebrow}</p>
          </Reveal>
        )}
        <Reveal delay={100}>
          <h1 className="display-lg mt-5 max-w-3xl text-white text-balance">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={200}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:mt-6 sm:text-lg">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
