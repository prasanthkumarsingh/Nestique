import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import WhatsAppButton from "../components/WhatsAppButton";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nestique Studio | Best Interior Design & Civil Construction — Visakhapatnam, Hyderabad",
    template: "%s | Nestique Studio",
  },
  description:
    "Nestique Studio — #1 rated interior design & civil construction company in Visakhapatnam and Hyderabad. Modular kitchens, false ceilings, home interiors, villa construction, apartment interiors & office fit-outs. 130+ projects delivered. Free consultation today.",
  keywords: [
    // Visakhapatnam interior
    "interior designer in Visakhapatnam",
    "interior design Visakhapatnam",
    "best interior designer Vizag",
    "home interior design Visakhapatnam",
    "modular kitchen Visakhapatnam",
    "false ceiling design Vizag",
    "bedroom interior design Visakhapatnam",
    "apartment interior design Vizag",
    "living room interior design Visakhapatnam",
    "wardrobe design Vizag",
    "interior design cost Visakhapatnam",
    // Visakhapatnam civil/construction
    "civil contractor Visakhapatnam",
    "house construction Visakhapatnam",
    "home construction Vizag",
    "residential construction Visakhapatnam",
    "villa construction Vizag",
    "building construction Visakhapatnam",
    "construction company Vizag",
    "best civil contractor Visakhapatnam",
    // Hyderabad interior
    "interior designer Hyderabad",
    "best interior designer Hyderabad",
    "home interior design Hyderabad",
    "modular kitchen Hyderabad",
    "false ceiling Hyderabad",
    "apartment interior design Hyderabad",
    "office interior design Hyderabad",
    "bedroom interior design Hyderabad",
    "interior design cost Hyderabad",
    "turnkey interior design Hyderabad",
    // Hyderabad civil/construction
    "civil contractor Hyderabad",
    "house construction Hyderabad",
    "villa construction Hyderabad",
    "residential construction Hyderabad",
    "building contractor Hyderabad",
    "construction company Hyderabad",
    "best civil contractor Hyderabad",
    // General
    "architecture firm Hyderabad",
    "architecture firm Visakhapatnam",
    "Nestique Studio",
    "turnkey construction AP Telangana",
    "home renovation Hyderabad",
    "home renovation Visakhapatnam",
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
  alternateName: ["Nestique Architecture & Interior Design", "Nestique Civil & Interiors"],
  description:
    "Best interior design and civil construction company in Visakhapatnam and Hyderabad. Specialising in home interiors, modular kitchens, false ceilings, residential construction, villa construction, office interiors, and renovation across South India.",
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
      postalCode: "530001",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500001",
      addressCountry: "IN",
    },
  ],
  geo: [
    { "@type": "GeoCoordinates", latitude: 17.6868, longitude: 83.2185, name: "Visakhapatnam Office" },
    { "@type": "GeoCoordinates", latitude: 17.3850, longitude: 78.4867, name: "Hyderabad Office" },
  ],
  areaServed: [
    { "@type": "City", name: "Visakhapatnam" },
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Vijayawada" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Pune" },
  ],
  sameAs: [
    "https://www.instagram.com/nestiquestudio",
    "https://www.facebook.com/nestiquestudio",
    "https://www.linkedin.com/company/nestique-studio",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Interior Design & Civil Construction Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Interior Design Visakhapatnam", areaServed: "Visakhapatnam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Interior Design Hyderabad", areaServed: "Hyderabad" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modular Kitchen Design Visakhapatnam", areaServed: "Visakhapatnam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modular Kitchen Design Hyderabad", areaServed: "Hyderabad" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "False Ceiling Design Visakhapatnam", areaServed: "Visakhapatnam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Civil Construction Visakhapatnam", areaServed: "Visakhapatnam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Construction Hyderabad", areaServed: "Hyderabad" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Villa Construction Visakhapatnam", areaServed: "Visakhapatnam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Interior Design Hyderabad", areaServed: "Hyderabad" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Apartment Interior Design Vizag", areaServed: "Visakhapatnam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Renovation Hyderabad", areaServed: "Hyderabad" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Architecture & Structural Design" } },
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
