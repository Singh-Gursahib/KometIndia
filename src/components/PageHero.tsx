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
    <section className="relative isolate flex min-h-[62svh] items-end overflow-hidden bg-ink-950">
      <Media slot={slot} priority sizes="100vw" className="opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/30" />

      <div className="container-x relative w-full pb-16 pt-36 sm:pb-20">
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
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
