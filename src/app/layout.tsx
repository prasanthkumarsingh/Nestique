import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Nestique Studio | Architecture, Interiors & Construction", template: "%s | Nestique Studio" },
  description: "Architecture, house planning, residential and commercial interiors, construction, renovation and landscape design. Discuss your project with Nestique Studio.",
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "en_IN", siteName: "Nestique Studio", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nestique Studio" }] },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};
const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization", "@id": SITE_URL + "/#organization",
  name: "Nestique Studio", url: SITE_URL, logo: SITE_URL + "/logo.png",
  telephone: "+917816086291", email: "hello@nestiquestudio.in",
};
const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "Nestique Studio", url: SITE_URL };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.className, "font-sans", geist.variable)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e8773a" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body>{children}</body>
    </html>
  );
}
