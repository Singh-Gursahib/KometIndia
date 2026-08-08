import type { Metadata } from "next";
import Media from "@/components/Media";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { company, values } from "@/lib/content";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Company",
  description: `${company.name} has manufactured chassis components in Ludhiana, Punjab for over two decades. ISO 9001:2015 certified.`,
};

const principles = [
  {
    title: "Open and honest",
    body: "Acting with integrity and communicating openly is the only way we know to build partnerships that outlast a single order.",
  },
  {
    title: "Innovative",
    body: "We keep developing the ideas that improve what we make, and we welcome the demands of a market that never stands still.",
  },
  {
    title: "Passionate",
    body: "Being determined is essential to contributing something real to our customers' businesses. Our team cares about what leaves the floor.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Our company"
        subtitle="Our company and manufacturing unit are based in Ludhiana, Punjab, India. We supply customers across India and export overseas."
        slot={media.aboutPortrait}
      />

      {/* Narrative */}
      <section className="container-x py-28 sm:py-36">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow text-ember-600 lg:sticky lg:top-28">Profile</p>
          </Reveal>
          <div className="space-y-8 text-lg leading-relaxed text-ink-500">
            <Reveal>
              <p className="text-2xl leading-snug tracking-tight text-ink-900">
                {company.name} has spent over twenty years supplying a wide range of chassis
                components for auto parts, tractor parts, motor parts and agricultural
                implements.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p>
                Our company and our manufacturing unit are based in Ludhiana, Punjab. From
                there we deliver to customers in every corner of India, and we export to
                customers overseas.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p>
                Our sincerity towards delivering quality leads us to abide strictly by the
                norms of recognised authorities. We operate under an ISO 9001:2015 certified
                quality system.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full-bleed image */}
      <section className="relative isolate h-[60svh] overflow-hidden bg-ink-900">
        <Media slot={media.facility} sizes="100vw" className="opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
      </section>

      {/* Values */}
      <section className="container-x py-28 sm:py-36">
        <Reveal>
          <p className="eyebrow text-ember-600">Values</p>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="display-md mt-5 max-w-2xl text-ink-900 text-balance">
            What we stand for
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-black/[0.07] md:grid-cols-2 lg:grid-cols-3">
          {[...values, ...principles].map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 90}>
              <article className="group h-full bg-white p-9 transition-colors duration-500 hover:bg-ink-50">
                <span className="text-[11px] font-semibold tabular-nums text-ember-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{v.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Materials split */}
      <section className="container-x pb-28 sm:pb-36">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-ink-100">
              <Media slot={media.materials} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow text-ember-600">Facility</p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="display-md mt-5 text-ink-900 text-balance">
                Our infrastructure
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 text-lg leading-relaxed text-ink-500">
                Continuous change is necessary. It is what keeps us able to deliver front and
                rear axle flanges, brake discs and chassis hangers into a market where the
                requirement improves every year.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
