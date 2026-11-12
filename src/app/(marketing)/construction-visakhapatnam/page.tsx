import type { Metadata } from "next";
import LocalServicePage from "@/components/LocalServicePage";
export const metadata: Metadata = {
  "title": "Residential construction in Visakhapatnam",
  "description": "Plan civil works, specifications and site coordination for houses and apartment buildings in Vizag.",
  "alternates": {
    "canonical": "https://www.nestiquestudio.in/construction-visakhapatnam"
  },
  "openGraph": {
    "title": "Residential construction in Visakhapatnam",
    "description": "Plan civil works, specifications and site coordination for houses and apartment buildings in Vizag.",
    "url": "https://www.nestiquestudio.in/construction-visakhapatnam"
  }
};
export default function Page() { return <LocalServicePage title="Residential construction in Visakhapatnam" city="Visakhapatnam" slug="construction-visakhapatnam" serviceSlug="residential-construction" intro="Plan civil works, specifications and site coordination for houses and apartment buildings in Vizag." />; }
