import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Media sources carry a ?v= cache-buster (see MEDIA_VERSION in src/lib/media.ts).
    // Next 16 rejects query strings on local images unless they are allow-listed here,
    // so the `search` value below must be kept in step with that constant.
    //
    // Note this list is exhaustive: once localPatterns is set, any local path not
    // matched is refused with a 400. The three entries cover every optimized image
    // on the site (media art, product shots, the logo).
    localPatterns: [
      { pathname: "/media/**", search: "?v=2" },
      { pathname: "/products/**", search: "" },
      { pathname: "/brand/**", search: "" },
    ],
  },
};

export default nextConfig;
