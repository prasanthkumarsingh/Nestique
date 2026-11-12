import { MetadataRoute } from "next";
import { services } from "@/lib/services.data";
import { blogPosts } from "@/lib/blog.data";
import { escapeXmlText } from "@/lib/xml";

const SITE_URL = "https://www.nestiquestudio.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    ...services.map(service => ({ url: `${SITE_URL}/services/${service.slug}` })),
    { url: SITE_URL, changeFrequency: "weekly", priority: 1.0 },
    // Commercial primary pages — highest priority
    { url: `${SITE_URL}/office-interior-design-visakhapatnam`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/hospital-interior-design-visakhapatnam`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/hotel-interior-design-visakhapatnam`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/commercial-interior-designer-hyderabad`, changeFrequency: "monthly", priority: 0.95 },
    // Core service & consultation pages
    { url: `${SITE_URL}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/consultation`, changeFrequency: "monthly", priority: 0.9 },
    // Commercial architecture & construction
    { url: `${SITE_URL}/architect-visakhapatnam`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/commercial-construction-visakhapatnam`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/architect-hyderabad`, changeFrequency: "monthly", priority: 0.85 },
    // Residential location pages
    { url: `${SITE_URL}/interior-design-visakhapatnam`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/interior-design-hyderabad`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/construction-visakhapatnam`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/villa-construction-vizag`, changeFrequency: "monthly", priority: 0.7 },
    // Portfolio & about
    { url: `${SITE_URL}/portfolio`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${SITE_URL}/careers`, changeFrequency: "monthly", priority: 0.55 },
    // Blog entries match actual, published routes and their publication dates.
    { url: SITE_URL + "/blog", lastModified: "2026-10-28", changeFrequency: "weekly", priority: 0.75 },
    ...blogPosts.map((post) => ({ url: SITE_URL + "/blog/" + post.slug, lastModified: post.published, images: [post.image] })),
  ];
  // Next's metadata sitemap serializer interpolates these strings verbatim.
  // Keep source data and URL encoding intact; XML-escape only the final values.
  // This sitemap emits page/image URLs, with no image titles or captions.
  return entries.map(entry => ({
    ...entry,
    url: escapeXmlText(entry.url),
    ...(entry.images ? { images: entry.images.map(escapeXmlText) } : {}),
  }));
}
