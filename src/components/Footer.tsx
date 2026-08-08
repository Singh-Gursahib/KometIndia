import Image from "next/image";
import Link from "next/link";
import { categories, company } from "@/lib/content";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Company" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-white/55">
      <div className="container-x py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/brand/logo.png"
              alt={`${company.name} logo`}
              width={280}
              height={64}
              className="h-11 w-auto rounded-lg bg-white px-3 py-2"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed">
              Chassis components for commercial vehicles, tractors and agricultural
              implements. Manufactured in Ludhiana, Punjab, India. Supplied across India and
              exported overseas.
            </p>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.16em] text-ember-500">
              {company.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              Navigate
            </h2>
            <ul className="mt-6 space-y-3.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition-colors hover:text-ember-400">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              Categories
            </h2>
            <ul className="mt-6 space-y-3.5 text-sm">
              {categories.map((c) => (
                <li key={c}>
                  <Link href="/products" className="transition-colors hover:text-ember-400">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              Get in touch
            </h2>
            <address className="mt-6 space-y-4 text-sm not-italic leading-relaxed">
              <p>{company.address}</p>
              {company.phones.slice(0, 2).map((p) => (
                <p key={p.number}>
                  <a href={`tel:${p.tel}`} className="transition-colors hover:text-ember-400">
                    {p.number}
                  </a>
                  <span className="block text-xs text-white/35">{p.label}</span>
                </p>
              ))}
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-ember-400"
                >
                  {company.email}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.08]">
        <div className="container-x flex flex-col gap-3 py-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="text-white/35">Ludhiana, Punjab, India</p>
        </div>
      </div>
    </footer>
  );
}
