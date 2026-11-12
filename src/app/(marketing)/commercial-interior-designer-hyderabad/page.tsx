import type { Metadata } from "next";
import LocalServicePage from "@/components/LocalServicePage";
export const metadata: Metadata = {
  "title": "Office & commercial interiors in Hyderabad",
  "description": "Plan workplaces, shops and hospitality interiors around staff, customers and the way your business operates.",
  "alternates": {
    "canonical": "https://www.nestiquestudio.in/commercial-interior-designer-hyderabad"
  },
  "openGraph": {
    "title": "Office & commercial interiors in Hyderabad",
    "description": "Plan workplaces, shops and hospitality interiors around staff, customers and the way your business operates.",
    "url": "https://www.nestiquestudio.in/commercial-interior-designer-hyderabad"
  }
};
export default function Page() { return <LocalServicePage title="Office & commercial interiors in Hyderabad" city="Hyderabad" slug="commercial-interior-designer-hyderabad" serviceSlug="commercial-interiors" intro="Plan workplaces, shops and hospitality interiors around staff, customers and the way your business operates." />; }
