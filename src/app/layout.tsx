import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { company } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bhatiaautoengineers.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Chassis Components Manufacturer in Ludhiana`,
    template: `%s | ${company.name}`,
  },
  description: company.blurb,
  keywords: [
    "chassis components",
    "U-bolts",
    "spring bush",
    "shackle plate",
    "centre bolt",
    "auto parts Ludhiana",
    "tractor parts manufacturer",
    "KOMET auto parts",
  ],
  openGraph: {
    type: "website",
    siteName: company.name,
    title: `${company.name} | Chassis Components Manufacturer in Ludhiana`,
    description: company.blurb,
    url: siteUrl,
  },
  icons: { icon: "/brand/favicon.png" },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#08080a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: siteUrl,
  logo: `${siteUrl}/brand/logo.png`,
  email: company.email,
  telephone: company.phones[0].number,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 536/6/1, Opp Big-Ben Industries, Single Cycle Road, Dhandari Kalan",
    addressLocality: "Ludhiana",
    addressRegion: "Punjab",
    postalCode: "141003",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} flex min-h-screen flex-col bg-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
