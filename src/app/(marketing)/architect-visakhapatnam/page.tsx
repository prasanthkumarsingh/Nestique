import type { Metadata } from "next";
import LocalServicePage from "@/components/LocalServicePage";
export const metadata: Metadata = {
  "title": "Architecture & house planning in Visakhapatnam",
  "description": "Architectural design, house and apartment floor plans, elevations and design coordination for your Vizag property.",
  "alternates": {
    "canonical": "https://www.nestiquestudio.in/architect-visakhapatnam"
  },
  "openGraph": {
    "title": "Architecture & house planning in Visakhapatnam",
    "description": "Architectural design, house and apartment floor plans, elevations and design coordination for your Vizag property.",
    "url": "https://www.nestiquestudio.in/architect-visakhapatnam"
  }
};
export default function Page() { return <LocalServicePage title="Architecture & house planning in Visakhapatnam" city="Visakhapatnam" slug="architect-visakhapatnam" serviceSlug="architecture" intro="Architectural design, house and apartment floor plans, elevations and design coordination for your Vizag property." />; }
