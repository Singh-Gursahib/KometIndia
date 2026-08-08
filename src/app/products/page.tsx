import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import { company, products } from "@/lib/content";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Products",
  description: `Browse ${products.length} chassis components from ${company.name}: U-bolts, spring bushes, centre bolts, chassis hangers, shackle plates, hubs, axles and workshop tools.`,
};

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our range"
        title="Our products"
        subtitle={`${products.length} chassis components for commercial vehicles, tractors and agricultural implements. Supplied in India and exported overseas.`}
        slot={media.productsBanner}
      />

      <section className="container-x py-16 sm:py-20">
        <ProductGrid />
      </section>

      <section className="border-t border-black/[0.07] bg-ink-50 py-24">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="display-md mx-auto max-w-2xl text-ink-900 text-balance">
              Need a part that is not listed?
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
              We also manufacture to specification. Send us a drawing or a part number and
              we will come back with a quote.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <Link
              href="/contact"
              className="mt-10 inline-block rounded-full bg-ink-900 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-ember-500"
            >
              Request a quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
