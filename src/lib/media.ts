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

/**
 * Bump when the art behind a filename changes.
 *
 * Filenames stay stable, so a replaced image reuses the same /_next/image URL and
 * browsers keep serving the previous bytes from cache. Appending a version to the
 * source query changes that URL and forces every client to refetch.
 *
 * Bumping this also requires updating `images.localPatterns[0].search` in
 * next.config.ts, or the build will refuse the query string.
 */
export const MEDIA_VERSION = "2";
const v = (path: string) => `${path}?v=${MEDIA_VERSION}`;

export const media = {
  heroHome: {
    src: v("/media/hero-home.jpg"),
    alt: "Forged steel chassis components arranged on a dark surface",
    tone: "ember",
  },
  craftsmanship: {
    src: v("/media/craftsmanship.jpg"),
    alt: "Close detail of a machined steel surface under workshop light",
    tone: "steel",
  },
  facility: {
    src: v("/media/facility.jpg"),
    alt: "The Bhatia Auto Engineers manufacturing floor in Ludhiana",
    tone: "graphite",
  },
  materials: {
    src: v("/media/materials.jpg"),
    alt: "Raw steel bar stock before forging",
    tone: "graphite",
  },
  ctaBackdrop: {
    src: v("/media/cta-backdrop.jpg"),
    alt: "",
    tone: "ember",
  },
  aboutPortrait: {
    src: v("/media/about-portrait.jpg"),
    alt: "A technician inspecting a finished chassis component",
    tone: "steel",
  },
  productsBanner: {
    src: v("/media/products-banner.jpg"),
    alt: "An arrangement of chassis components on a neutral backdrop",
    tone: "graphite",
  },
  contactBanner: {
    src: v("/media/contact-banner.jpg"),
    alt: "The exterior of the Bhatia Auto Engineers works",
    tone: "steel",
  },
} satisfies Record<string, MediaSlot>;

export type MediaKey = keyof typeof media;
