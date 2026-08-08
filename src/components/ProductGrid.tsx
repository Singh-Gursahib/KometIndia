"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { categories, products } from "@/lib/content";

export default function ProductGrid() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (active === "All" || p.category === active) &&
        (q === "" || p.name.toLowerCase().includes(q)),
    );
  }, [active, query]);

  const tabs = ["All", ...categories];

  return (
    <>
      {/* Sticky filter bar */}
      {/* Negative margin must track container-x's padding at every breakpoint,
          otherwise the bar overhangs and the page scrolls sideways. */}
      <div className="sticky top-[68px] z-30 -mx-5 border-b border-black/[0.07] bg-white/85 px-5 py-4 backdrop-blur-xl backdrop-saturate-150 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="tablist"
            aria-label="Product categories"
            className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {tabs.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ease-[var(--ease-out-soft)] ${
                  active === c
                    ? "bg-ink-900 text-white"
                    : "bg-ink-100 text-ink-500 hover:bg-ink-200 hover:text-ink-900"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative lg:w-64">
            <label htmlFor="product-search" className="sr-only">
              Search products
            </label>
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full rounded-full border border-black/[0.09] bg-white py-2.5 pl-10 pr-4 text-[13px] outline-none transition-all duration-300 placeholder:text-ink-400 focus:border-ember-400 focus:ring-4 focus:ring-ember-500/10"
            />
            <svg
              viewBox="0 0 24 24"
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-ink-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      <p className="mt-8 text-[13px] text-ink-400" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "component" : "components"}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-3xl bg-ink-50 py-24 text-center">
          <p className="text-ink-500">Nothing matches that search.</p>
          <button
            type="button"
            className="mt-4 text-sm font-semibold text-ember-600 transition-colors hover:text-ember-500"
            onClick={() => {
              setQuery("");
              setActive("All");
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <article
              key={p.image}
              /* Cards stay white because the product PNGs have opaque white
                 backgrounds, which would otherwise read as boxes on a tinted card. */
              className="group relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white transition-all duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:border-black/[0.02] hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.2)]"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-5 transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.08] sm:p-7"
                />
              </div>
              <div className="px-4 pb-5 sm:px-5 sm:pb-6">
                <p className="truncate text-[10px] font-medium uppercase tracking-[0.08em] text-ember-600 sm:tracking-[0.14em]">
                  {p.category}
                </p>
                <h2 className="mt-1.5 line-clamp-2 min-h-[2.5em] text-sm font-semibold leading-snug tracking-tight text-ink-900 sm:text-[15px]">
                  {p.name}
                </h2>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
