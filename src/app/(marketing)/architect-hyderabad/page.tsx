import type { Metadata } from "next";
import LocalServicePage from "@/components/LocalServicePage";
export const metadata: Metadata = {
  "title": "Architecture & house planning in Hyderabad",
  "description": "Plan a house, villa, apartment building or commercial property with a clear brief and coordinated architectural design.",
  "alternates": {
    "canonical": "https://www.nestiquestudio.in/architect-hyderabad"
  },
  "openGraph": {
    "title": "Architecture & house planning in Hyderabad",
    "description": "Plan a house, villa, apartment building or commercial property with a clear brief and coordinated architectural design.",
    "url": "https://www.nestiquestudio.in/architect-hyderabad"
  }
};
export default function Page() { return <LocalServicePage title="Architecture & house planning in Hyderabad" city="Hyderabad" slug="architect-hyderabad" serviceSlug="architecture" intro="Plan a house, villa, apartment building or commercial property with a clear brief and coordinated architectural design." />; }
