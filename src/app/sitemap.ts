import { MetadataRoute } from "next";

const SITE_URL = "https://www.nestiquestudio.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    // Commercial primary pages — highest priority
    { url: `${SITE_URL}/office-interior-design-visakhapatnam`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/hospital-interior-design-visakhapatnam`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/hotel-interior-design-visakhapatnam`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/commercial-interior-designer-hyderabad`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    // Core service & consultation pages
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/consultation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // Commercial architecture & construction
    { url: `${SITE_URL}/architect-visakhapatnam`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/commercial-construction-visakhapatnam`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/architect-hyderabad`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // Residential location pages
    { url: `${SITE_URL}/interior-designer-visakhapatnam`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/interior-designer-hyderabad`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/interior-design-visakhapatnam`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/interior-design-hyderabad`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/construction-visakhapatnam`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/villa-construction-vizag`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // Portfolio & about
    { url: `${SITE_URL}/portfolio`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.65 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.65 },
    { url: `${SITE_URL}/careers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.55 },
    // Blog
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.75 },
    { url: `${SITE_URL}/blog/interior-design-cost-visakhapatnam-2025`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/house-construction-cost-hyderabad-2025`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/bangkok-luxury-structural-design-international-project`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.55 },
    { url: `${SITE_URL}/blog/5-floor-residential-building-construction-vizag-hyderabad`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.55 },
    { url: `${SITE_URL}/blog/landscape-design-luxury-real-estate-vizag`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.55 },
    { url: `${SITE_URL}/blog/interior-design-residential-apartments-ap-telangana`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.55 },
  ];
}
