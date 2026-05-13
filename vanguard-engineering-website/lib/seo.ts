import type { Metadata } from "next";

const SITE_URL = "https://vanguard-engineering.it";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Vanguard Engineering Group | Infrastruttura AI per PMI Italiane",
  description:
    "Costruiamo sistemi operativi AI per PMI da 2M€+ che vogliono passare da operative-reattive a guidate dai dati. In 90 giorni.",
  keywords: [
    "AI per aziende",
    "automazione PMI",
    "intelligenza artificiale business",
    "consulenza AI Italia",
  ],
  authors: [{ name: "Vanguard Engineering Group" }],
  openGraph: {
    title: "Vanguard Engineering Group",
    description: "Infrastruttura AI per PMI Italiane",
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
    siteName: "Vanguard Engineering Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanguard Engineering Group",
    description: "Infrastruttura AI per PMI Italiane",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Build a page-level Metadata object overriding the defaults.
 */
export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...(overrides.openGraph ?? {}),
    },
  };
}

/**
 * JSON-LD Organization schema for the root layout.
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vanguard Engineering Group",
  description: "Infrastruttura AI per PMI Italiane",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Padova",
    addressCountry: "IT",
  },
};
