/**
 * Image slots for art we intend to replace with generated assets.
 *
 * Drop a file at the given `src` path and it appears automatically — the <Media>
 * component falls back to a designed gradient panel whenever a file is missing,
 * so the site never looks broken while assets are in progress.
 *
 * Prompts for every slot live in IMAGE-PROMPTS.md alongside package.json.
 */

export type MediaSlot = {
  src: string;
  alt: string;
  /** Drives the fallback gradient's palette. */
  tone: "ember" | "steel" | "graphite";
};

export const media = {
  heroHome: {
    src: "/media/hero-home.jpg",
    alt: "Forged steel chassis components arranged on a dark surface",
    tone: "ember",
  },
  craftsmanship: {
    src: "/media/craftsmanship.jpg",
    alt: "Close detail of a machined steel surface under workshop light",
    tone: "steel",
  },
  facility: {
    src: "/media/facility.jpg",
    alt: "The Bhatia Auto Engineers manufacturing floor in Ludhiana",
    tone: "graphite",
  },
  materials: {
    src: "/media/materials.jpg",
    alt: "Raw steel bar stock before forging",
    tone: "graphite",
  },
  ctaBackdrop: {
    src: "/media/cta-backdrop.jpg",
    alt: "",
    tone: "ember",
  },
  aboutPortrait: {
    src: "/media/about-portrait.jpg",
    alt: "A technician inspecting a finished chassis component",
    tone: "steel",
  },
  productsBanner: {
    src: "/media/products-banner.jpg",
    alt: "An arrangement of chassis components on a neutral backdrop",
    tone: "graphite",
  },
  contactBanner: {
    src: "/media/contact-banner.jpg",
    alt: "The exterior of the Bhatia Auto Engineers works",
    tone: "steel",
  },
} satisfies Record<string, MediaSlot>;

export type MediaKey = keyof typeof media;
