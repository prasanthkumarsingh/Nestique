import type { Metadata } from "next";
import LocalServicePage from "@/components/LocalServicePage";
export const metadata: Metadata = {
  "title": "Home & apartment interior design in Hyderabad",
  "description": "Discuss layouts, storage, lighting and finishes for your Hyderabad house, villa or apartment.",
  "alternates": {
    "canonical": "https://www.nestiquestudio.in/interior-design-hyderabad"
  },
  "openGraph": {
    "title": "Home & apartment interior design in Hyderabad",
    "description": "Discuss layouts, storage, lighting and finishes for your Hyderabad house, villa or apartment.",
    "url": "https://www.nestiquestudio.in/interior-design-hyderabad"
  }
};
export default function Page() { return <LocalServicePage title="Home & apartment interior design in Hyderabad" city="Hyderabad" slug="interior-design-hyderabad" serviceSlug="home-interiors" intro="Discuss layouts, storage, lighting and finishes for your Hyderabad house, villa or apartment." />; }
