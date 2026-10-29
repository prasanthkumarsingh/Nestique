/** Curated showcase photos copied from the named Supabase uploads. */

export interface Project {
  /** Stable identifier for the project gallery. */
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
  category: string;
  location: string;
  image: string;
  gallery: string[];
  alt: string;
  concept: string;
  description: string;
  scope: string[];
  href: string;
  cta: string;
}

export const projects: Project[] = [
  {
    slug: "amogham-telugu-kitchen",
    number: "01",
    title: "AMOGHAM",
    subtitle: "TELUGU KITCHEN",
    category: "Restaurant Interior Design",
    location: "Visakhapatnam, Andhra Pradesh",
    image: "/images/projects/amogham.jpeg",
    gallery: ["amogham.jpeg", ...Array.from({ length: 6 }, (_, i) => `amogham${i + 2}.jpeg`)].map((name) => `/images/projects/${name}`),
    alt: "Amogham Telugu Kitchen interior designed by Nestique Studio in Visakhapatnam",
    concept: "Telugu heritage, reimagined for the modern diner.",
    description:
      "Traditional Telugu and South Indian visual influences meet contemporary interiors — warm lighting, earthy materials and carefully considered decorative detail. Rather than a literal recreation, the space reinterprets cultural character through a modern design language, so that food, culture and architecture read as a single experience.",
    scope: ["Interior Design", "Concept Development", "Space Planning", "Design Detailing"],
    href: "/portfolio#amogham-telugu-kitchen",
    cta: "Explore Project",
  },
  {
    slug: "jismat-jail-mandi",
    number: "02",
    title: "GISMAT JAIL MANDI",
    category: "Restaurant Theme & Interior Design",
    location: "Visakhapatnam, Andhra Pradesh",
    image: "/images/projects/jismat.jpg",
    gallery: ["jismat.jpg", "jismat2.jpg", "jismat3.webp"].map((name) => `/images/projects/${name}`),
    alt: "Gismat Jail Mandi restaurant interior designed by Nestique Studio in Visakhapatnam",
    concept: "Turning a meal into an experience.",
    description:
      "A distinctive jail-themed dining experience, with exposed brick, dark metalwork and atmospheric lighting. The design brings a playful brand identity into the architecture while creating welcoming spaces for shared meals.",
    scope: [
      "Restaurant Interior Design",
      "Theme Development",
      "Space Planning",
      "Design Detailing",
      "Execution Support",
    ],
    href: "/portfolio#jismat-jail-mandi",
    cta: "Explore Project",
  },
  {
    slug: "villa85-iconica-grand",
    number: "03",
    title: "VILLA85",
    subtitle: "ICONICA GRAND",
    category: "Residential Interior Design",
    location: "Iconica Grand",
    image: "/images/projects/villa85-1.jpeg",
    gallery: Array.from({ length: 15 }, (_, i) => `/images/projects/villa85-${i + 1}.jpeg`),
    alt: "Villa85 at Iconica Grand, residential interiors by Nestique Studio",
    concept: "Modern living, grounded in functional planning.",
    description:
      "A thoughtfully composed home at Iconica Grand, where warm timber, soft neutrals and carefully layered lighting create a calm, contemporary setting. From shared living spaces to quieter corners, the interiors balance everyday comfort with considered materials and details.",
    scope: [
      "Architecture",
      "House Planning",
      "Space Planning",
      "Interior Design",
      "Design Development",
    ],
    href: "/portfolio#villa85-iconica-grand",
    cta: "Explore Project",
  },
];

/* Structured data — rendered by the parent page (server component). */
export const selectedWorksSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Spaces With A Story — Selected Works by Nestique Studio",
  description:
    "Restaurant interior design and residential architecture projects by Nestique Studio in Visakhapatnam.",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: [p.title, p.subtitle].filter(Boolean).join(" "),
    item: {
      "@type": "CreativeWork",
      name: [p.title, p.subtitle].filter(Boolean).join(" "),
      about: p.category,
      locationCreated: { "@type": "Place", name: p.location },
      creator: { "@type": "Organization", name: "Nestique Studio" },
    },
  })),
};
