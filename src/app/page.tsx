import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import { categories, company, products, stats, whyUs } from "@/lib/content";
import { media } from "@/lib/media";

export default function Home() {
  const showcase = products.slice(0, 6);

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-ink-950">
        <Media slot={media.heroHome} priority sizes="100vw" className="scale-105" />
        {/* The art is already dark with an empty left third, so the scrim only has to
            protect the headline and seat the bottom edge. */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/45 to-ink-950/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/30 to-transparent" />

        <div className="container-x relative w-full pb-14 pt-28 sm:pb-24 sm:pt-36">
          <Reveal>
            <p className="eyebrow text-ember-400">{company.tagline}</p>
          </Reveal>

          <Reveal delay={120}>
            {/* Three deliberate beats: two setup lines, then the payoff in accent.
                Breaks are explicit so the last line never splits. */}
            <h1 className="display-xl mt-6 text-white">
              Standard range.
              <br />
              Custom sizes.
              <br />
              <span className="text-ember-500">Same standard.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:mt-8 sm:text-lg">
              Chassis and spring components for commercial vehicles, tractors and
              agricultural implements. Made under an ISO 9001:2015 quality system, whether
              it comes from our catalogue or your drawing.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/products"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ember-500 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-ember-400 hover:shadow-[0_8px_30px_-6px] hover:shadow-ember-500/50 sm:w-auto sm:py-3.5"
              >
                See the full range
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  aria-hidden
                >
                  <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="w-full rounded-full border border-white/20 px-7 py-4 text-center text-sm font-semibold text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/45 hover:bg-white/5 sm:w-auto sm:py-3.5"
              >
                Send your specification
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-6 hidden lg:block">
          <div className="animate-float-slow flex flex-col items-center gap-2 text-white/30">
            <span className="text-[10px] font-medium uppercase tracking-[0.22em]">Scroll</span>
            <span className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ---------------- Category marquee ---------------- */}
      <section className="border-b border-black/[0.07] bg-white py-6">
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
            {[...categories, ...categories, ...categories, ...categories].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="whitespace-nowrap text-sm font-medium tracking-tight text-ink-400"
              >
                {c}
                <span className="ml-12 text-ember-500">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Statement ---------------- */}
      <section className="container-x py-16 sm:py-24 lg:py-32">
        <Reveal>
          <p className="eyebrow text-ember-600">Quality</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg mt-7 max-w-4xl text-ink-900 text-balance">
            Made under an ISO 9001:2015 quality system.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-500 sm:mt-8 sm:text-lg">
            U-bolts, spring bushes, centre bolts, chassis hangers, hubs and axles, for
            commercial vehicles, tractors and agricultural implements.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-black/[0.07] sm:mt-16 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="h-full bg-white px-5 py-7 sm:px-7 sm:py-10">
                <p className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
                  {stat.count !== undefined ? (
                    <CountUp value={stat.count} suffix={stat.suffix} />
                  ) : (
                    stat.text
                  )}
                </p>
                <p className="mt-2 text-xs leading-snug text-ink-500 sm:mt-3 sm:text-sm">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Full-bleed feature ---------------- */}
      <section className="relative isolate min-h-[68svh] overflow-hidden bg-ink-900 sm:min-h-[80svh]">
        <Media slot={media.craftsmanship} sizes="100vw" />
        {/* On mobile the copy sits lower, over the bright diagonal, so the scrim runs
            top-to-bottom there. On wider screens it can stay diagonal and lighter. */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/65 to-ink-950/85 sm:bg-gradient-to-br sm:from-ink-950/85 sm:via-ink-950/35 sm:to-transparent" />
        <div className="container-x relative flex min-h-[68svh] items-center py-20 sm:min-h-[80svh] sm:py-28">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow text-ember-400">Materials</p>
            </Reveal>
            <Reveal delay={110}>
              <h2 className="display-md mt-6 text-white text-balance">
                Quality starts with the steel.
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 text-base leading-relaxed text-white/60 sm:mt-7 sm:text-lg">
                Our components are forged, machined and heat-treated in house at our unit in
                Ludhiana, Punjab. We have been making them this way for over twenty years.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <Link
                href="/about"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-ember-400 transition-colors hover:text-ember-300"
              >
                Our company profile
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  aria-hidden
                >
                  <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Product showcase ---------------- */}
      <section className="bg-ink-50 py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="eyebrow text-ember-600">Products</p>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="display-md mt-5 max-w-xl text-ink-900 text-balance">
                  {products.length} components in our range.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={180}>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-900 transition-colors hover:text-ember-500"
              >
                View all
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  aria-hidden
                >
                  <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-3">
            {showcase.map((p, i) => (
              <Reveal key={p.image} delay={(i % 3) * 100}>
                <article className="group relative h-full overflow-hidden rounded-2xl bg-white transition-all duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.22)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 30vw"
                      className="object-contain p-5 transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.07] sm:p-8"
                    />
                  </div>
                  <div className="px-4 pb-5 pt-1 sm:px-6 sm:pb-7">
                    <p className="truncate text-[10px] font-medium uppercase tracking-[0.08em] text-ember-600 sm:tracking-[0.14em]">
                      {p.category}
                    </p>
                    <h3 className="mt-1.5 line-clamp-2 min-h-[2.5em] text-sm font-semibold leading-snug tracking-tight text-ink-900 sm:mt-2 sm:text-base">
                      {p.name}
                    </h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why us, split ---------------- */}
      <section className="container-x py-16 sm:py-24 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-100 sm:rounded-3xl lg:aspect-[4/5]">
              <Media
                slot={media.facility}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] hover:scale-105"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow text-ember-600">Why us</p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="display-md mt-5 text-ink-900 text-balance">
                Why customers choose us.
              </h2>
            </Reveal>

            <ul className="mt-8 divide-y divide-black/[0.07] border-y border-black/[0.07] sm:mt-12">
              {whyUs.map((w, i) => (
                <Reveal key={w} delay={i * 70}>
                  <li className="group flex items-start gap-5 py-5">
                    <span className="mt-0.5 text-[11px] font-semibold tabular-nums text-ember-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-700 transition-colors duration-300 group-hover:text-ink-900">
                      {w}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative isolate overflow-hidden bg-ink-950">
        <Media slot={media.ctaBackdrop} sizes="100vw" className="opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/60" />
        <div className="container-x relative py-16 text-center sm:py-24 lg:py-32">
          <Reveal>
            <h2 className="display-lg mx-auto max-w-3xl text-white text-balance">
              Tell us what you need and we will send a quote.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:mt-7 sm:text-lg">
              Send us a part number, a drawing, or a description of what you need. We
              handle bulk and repeat orders, in India and for export.
            </p>
          </Reveal>
          <Reveal delay={230}>
            <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="/contact"
                className="w-full rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-ink-900 transition-all duration-300 hover:bg-ember-500 hover:text-white sm:w-auto"
              >
                Start an enquiry
              </Link>
              <a
                href={`tel:${company.phones[0].tel}`}
                className="w-full rounded-full border border-white/20 px-8 py-4 text-center text-sm font-semibold text-white transition-all duration-300 hover:border-white/45 hover:bg-white/5 sm:w-auto"
              >
                {company.phones[0].number}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
