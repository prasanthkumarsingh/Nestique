import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nestique Studio | Architecture, Interior Design & Construction — Hyderabad, Vizag, Bangalore",
    template: "%s | Nestique Studio",
  },
  description:
    "Nestique Studio is a premier architecture, interior design, and construction company in Hyderabad, Visakhapatnam, Vijayawada & Bangalore. Residential homes, commercial buildings, malls, office interiors, and renovation services. Get a free consultation today.",
  keywords: [
    "architecture firm Hyderabad",
    "interior design Hyderabad",
    "construction company Visakhapatnam",
    "commercial construction India",
    "residential construction Hyderabad",
    "mall construction India",
    "office interior design Hyderabad",
    "architecture firm Bangalore",
    "home construction Vizag",
    "interior designer Hyderabad",
    "building construction company AP",
    "architecture interior design firm India",
    "Nestique Studio",
    "best architect Hyderabad",
    "turnkey construction India",
  ],
  authors: [{ name: "Nestique Studio", url: SITE_URL }],
  creator: "Nestique Studio",
  publisher: "Nestique Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Nestique Studio",
    title: "Nestique Studio | Architecture, Interior Design & Construction",
    description:
      "Premier architecture, interior design, and construction services for residential homes, commercial buildings, malls, and offices across India.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Nestique Studio — Architecture, Interior Design & Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nestique Studio | Architecture, Interior Design & Construction",
    description:
      "Premier architecture, interior design, and construction services across India. Residential, commercial, malls, offices.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN_HERE",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: "Nestique Studio",
  alternateName: "Nestique Architecture & Interior Design",
  description:
    "Premier architecture, interior design, and construction company in India. Specialising in residential homes, commercial buildings, malls, office interiors, and renovation.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: "+917816086291",
  email: "hello@nestiquestudio.in",
  foundingDate: "2020",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Bank Transfer, UPI",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  ],
  areaServed: [
    "Visakhapatnam", "Vijayawada", "Hyderabad",
    "Bangalore", "Mumbai", "Pune",
  ],
  sameAs: [
    "https://www.instagram.com/nestiquestudio",
    "https://www.facebook.com/nestiquestudio",
    "https://www.linkedin.com/company/nestique-studio",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Architecture & Construction Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Architecture & Structural Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Construction" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Construction" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mall Construction" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Interior Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renovation & Remodelling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscape Design" } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nestique Studio",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e8773a" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
