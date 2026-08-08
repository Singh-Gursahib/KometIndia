import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/content";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${company.name}, Dhandari Kalan, Ludhiana. Call ${company.phones[0].number} or send an enquiry for bulk orders.`,
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        subtitle="Tell us which parts you need and the quantities, and we will send you a quote. We take enquiries from India and overseas."
        slot={media.contactBanner}
      />

      <section className="container-x py-14 sm:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Details */}
          <div>
            <Reveal>
              <h2 className="display-md text-ink-900">Our details</h2>
            </Reveal>

            <dl className="mt-8 divide-y divide-black/[0.07] border-y border-black/[0.07] sm:mt-12">
              <Reveal>
                <div className="py-6">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                    Factory
                  </dt>
                  <dd className="mt-3 text-[15px] leading-relaxed text-ink-700">
                    {company.address}
                  </dd>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="py-6">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                    Phone
                  </dt>
                  <dd className="mt-3 space-y-2.5">
                    {company.phones.map((p) => (
                      <div key={p.number}>
                        <a
                          href={`tel:${p.tel}`}
                          className="text-[15px] font-medium text-ink-900 transition-colors hover:text-ember-500"
                        >
                          {p.number}
                        </a>
                        <span className="block text-xs text-ink-400">{p.label}</span>
                      </div>
                    ))}
                  </dd>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="py-6">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                    Email
                  </dt>
                  <dd className="mt-3">
                    <a
                      href={`mailto:${company.email}`}
                      className="text-[15px] font-medium text-ink-900 transition-colors hover:text-ember-500"
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
              </Reveal>
            </dl>

            <Reveal delay={220}>
              <div className="mt-10 overflow-hidden rounded-2xl border border-black/[0.07]">
                <iframe
                  title={`Map showing ${company.name} in Ludhiana`}
                  src={`https://maps.google.com/maps?q=${company.mapsQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-60 w-full border-0 grayscale transition-all duration-700 hover:grayscale-0 sm:h-72"
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-black/[0.07] bg-ink-50 p-6 sm:rounded-3xl sm:p-11">
              <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
                Send an enquiry
              </h2>
              <p className="mt-2 text-sm text-ink-500">
                Fields marked with an asterisk are required.
              </p>
              <div className="mt-9">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
