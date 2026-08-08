"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company } from "@/lib/content";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Company" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  // Every page opens on a dark hero, so the header inverts until the user scrolls.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        open
          ? "border-b border-black/[0.07] bg-white"
          : scrolled
            ? "border-b border-black/[0.07] bg-white/80 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-[68px] items-center justify-between gap-6">
        {/* The logo PNG has an opaque white background, so it sits on a white plate
            rather than being inverted, which would flatten it to a solid block. */}
        <Link
          href="/"
          aria-label={`${company.name} home`}
          className={`shrink-0 overflow-hidden rounded-lg transition-all duration-500 ${
            solid ? "bg-transparent" : "bg-white px-2.5 py-1.5 shadow-sm"
          }`}
        >
          <Image
            src="/brand/logo.png"
            alt={`${company.name} logo`}
            width={280}
            height={64}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                      solid
                        ? active
                          ? "text-ink-900"
                          : "text-ink-500 hover:text-ink-900"
                        : active
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-4 -bottom-px h-px origin-center bg-ember-500 transition-transform duration-500 ease-[var(--ease-out-soft)] ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${company.phones[0].tel}`}
            className={`hidden text-[13px] font-medium transition-colors sm:block ${
              solid ? "text-ink-500 hover:text-ink-900" : "text-white/60 hover:text-white"
            }`}
          >
            {company.phones[0].number}
          </a>
          <Link
            href="/contact"
            className={`hidden rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 sm:block ${
              solid
                ? "bg-ink-900 text-white hover:bg-ember-500"
                : "bg-white text-ink-900 hover:bg-ember-500 hover:text-white"
            }`}
          >
            Get a quote
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`grid size-10 place-items-center rounded-full transition-colors lg:hidden ${
              solid ? "text-ink-900 hover:bg-black/5" : "text-white hover:bg-white/10"
            }`}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-5 rounded bg-current transition-all duration-400 ease-[var(--ease-out-soft)] ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-5 rounded bg-current transition-all duration-400 ease-[var(--ease-out-soft)] ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden lg:hidden ${
          open ? "max-h-[70vh]" : "max-h-0"
        } transition-[max-height] duration-500 ease-[var(--ease-out-soft)]`}
      >
        <nav className="container-x pb-8 pt-2">
          <ul className="flex flex-col">
            {nav.map((item, i) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href} className="border-b border-black/[0.06]">
                  <Link
                    href={item.href}
                    style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                    className={`block py-4 text-2xl font-semibold tracking-tight transition-all duration-500 ease-[var(--ease-out-soft)] ${
                      open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                    } ${active ? "text-ember-500" : "text-ink-900"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="mt-7 block rounded-full bg-ink-900 py-3.5 text-center text-sm font-semibold text-white"
          >
            Get a quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
