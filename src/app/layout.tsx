import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nestique Studio | Commercial Interior Design, Architecture & Construction — Visakhapatnam & Hyderabad",
    template: "%s | Nestique Studio",
  },
  description:
    "Nestique Studio — specialists in commercial interior design, architecture & construction in Visakhapatnam and Hyderabad. Offices, hospitals, hotels, and residential projects. IIT Kharagpur-trained architects. 130+ projects. Free consultation today.",
  keywords: [
    // Commercial Vizag — primary
    "commercial interior designer Visakhapatnam",
    "office interior design Visakhapatnam",
    "hospital interior design Visakhapatnam",
    "hotel interior design Visakhapatnam",
    "commercial interior design Vizag",
    "office interior designer Vizag",
    "commercial architect Visakhapatnam",
    "commercial construction Visakhapatnam",
    "best commercial interior designer Vizag",
    // Commercial Hyderabad — primary
    "commercial interior designer Hyderabad",
    "office interior design Hyderabad",
    "hospital interior design Hyderabad",
    "hotel interior design Hyderabad",
    "commercial architect Hyderabad",
    // Architecture & construction
    "architect in Visakhapatnam",
    "architecture firm Visakhapatnam",
    "IIT architect Visakhapatnam",
    "construction company Visakhapatnam",
    // Residential — secondary
    "interior designer in Visakhapatnam",
    "interior designer Hyderabad",
    "home interior design Visakhapatnam",
    "residential construction Vizag",
    "villa construction Visakhapatnam",
    // Brand
    "Nestique Studio",
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
    title: "Nestique Studio | Commercial Interior Design & Architecture in Vizag & Hyderabad",
    description:
      "Specialists in office, hospital & hotel interior design, architecture & construction in Visakhapatnam & Hyderabad. IIT Kharagpur-trained architects. 130+ projects.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Nestique Studio — Commercial Interior Design, Architecture & Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nestique Studio | Commercial Interior Design & Architecture",
    description:
      "Office, hospital & hotel interior design, architecture & construction in Visakhapatnam & Hyderabad.",
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
  "@type": ["LocalBusiness", "InteriorDesigner", "ArchitectureFirm", "GeneralContractor"],
  "@id": SITE_URL,
  name: "Nestique Studio",
  alternateName: ["Nestique Architecture & Interior Design", "Nestique Commercial Interiors"],
  description:
    "Commercial interior design, architecture & construction specialists in Visakhapatnam and Hyderabad. Offices, hospitals, hotels, and residential projects. IIT Kharagpur-trained architects.",
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
    name: "Commercial & Residential Interior Design, Architecture & Construction Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Interior Design Visakhapatnam", areaServed: "Visakhapatnam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hospital Interior Design Visakhapatnam", areaServed: "Visakhapatnam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hotel Interior Design Visakhapatnam", areaServed: "Visakhapatnam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Interior Design Hyderabad", areaServed: "Hyderabad" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Interior Design Hyderabad", areaServed: "Hyderabad" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Architecture Visakhapatnam", areaServed: "Visakhapatnam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Construction Visakhapatnam", areaServed: "Visakhapatnam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Interior Design Visakhapatnam", areaServed: "Visakhapatnam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Interior Design Hyderabad", areaServed: "Hyderabad" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Villa Construction Visakhapatnam", areaServed: "Visakhapatnam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Architecture Visakhapatnam", areaServed: "Visakhapatnam" } },
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
    <html lang="en" className={inter.className}>
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
