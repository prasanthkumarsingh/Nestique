import type { Metadata } from "next";
import LocalServicePage from "@/components/LocalServicePage";
export const metadata: Metadata = {
  "title": "Hotel & hospitality interiors in Visakhapatnam",
  "description": "Plan guest areas, reception, dining and back-of-house relationships around your hospitality brief, maintenance needs and operational constraints.",
  "alternates": {
    "canonical": "https://www.nestiquestudio.in/hotel-interior-design-visakhapatnam"
  },
  "openGraph": {
    "title": "Hotel & hospitality interiors in Visakhapatnam",
    "description": "Plan guest areas, reception, dining and back-of-house relationships around your hospitality brief, maintenance needs and operational constraints.",
    "url": "https://www.nestiquestudio.in/hotel-interior-design-visakhapatnam"
  }
};
export default function Page() { return <LocalServicePage title="Hotel & hospitality interiors in Visakhapatnam" city="Visakhapatnam" slug="hotel-interior-design-visakhapatnam" serviceSlug="commercial-interiors" intro="Plan guest areas, reception, dining and back-of-house relationships around your hospitality brief, maintenance needs and operational constraints." />; }
