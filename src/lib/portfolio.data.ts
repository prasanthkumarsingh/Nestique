import { projects } from "@/components/selectedWorks.data";
import hostedImages from "@/data/portfolio-images.json";

const imageUrls: Record<string, string> = hostedImages;
export type PortfolioPhoto = { url: string; caption: string };
export type PortfolioProject = { slug: string; name: string; subtitle: string; category: "Residential" | "Hospitality"; description: string; photos: PortfolioPhoto[] };

export const portfolioProjects: PortfolioProject[] = [
  ...projects.map((project) => ({
    slug: project.slug,
    name: project.title === "AMOGHAM" ? "Amogham" : project.title === "GISMAT JAIL MANDI" ? "Gismat Jail Mandi" : "Villa85",
    subtitle: project.subtitle ?? "Jail-themed dining",
    category: (project.slug === "villa85-iconica-grand" ? "Residential" : "Hospitality") as PortfolioProject["category"],
    description: project.concept,
    photos: project.gallery.map((url, index) => ({ url: imageUrls[url.split("/").pop()!] ?? url, caption: (project.slug === "jismat-jail-mandi" && index === 2 ? "The team & the dining experience" : "Project view " + String(index + 1).padStart(2, "0")) })),
  })),
  {
    slug: "heritage-apartment",
    name: "Heritage Apartment",
    subtitle: "Warm materials. Timeless details.",
    category: "Residential",
    description: "An apartment collection celebrating warm wood, earthy finishes, and traditional details across everyday living spaces.",
    photos: [
      { url: imageUrls["apartment (1).jpeg"], caption: "The heritage bedroom" },
      { url: imageUrls["apartment (1).png"], caption: "A space to gather" },
      { url: imageUrls["apartment (2).png"], caption: "The warm wood kitchen" },
      { url: imageUrls["apartment (3).png"], caption: "A restful retreat" },
      { url: imageUrls["apartment (4).png"], caption: "Bedroom details" },
      { url: imageUrls["apartment (5).png"], caption: "The traditional lounge" },
      { url: imageUrls["apartment (6).png"], caption: "A thoughtfully framed corner" },
    ],
  },
];
