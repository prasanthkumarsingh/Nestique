import type { Metadata } from "next";
import LocalServicePage from "@/components/LocalServicePage";
export const metadata: Metadata = {
  "title": "Villa & house construction in Vizag",
  "description": "Develop a construction brief for an independent house or villa in Visakhapatnam, from available drawings to finishing requirements.",
  "alternates": {
    "canonical": "https://www.nestiquestudio.in/villa-construction-vizag"
  },
  "openGraph": {
    "title": "Villa & house construction in Vizag",
    "description": "Develop a construction brief for an independent house or villa in Visakhapatnam, from available drawings to finishing requirements.",
    "url": "https://www.nestiquestudio.in/villa-construction-vizag"
  }
};
export default function Page() { return <LocalServicePage title="Villa & house construction in Vizag" city="Visakhapatnam" slug="villa-construction-vizag" serviceSlug="residential-construction" intro="Develop a construction brief for an independent house or villa in Visakhapatnam, from available drawings to finishing requirements." />; }
