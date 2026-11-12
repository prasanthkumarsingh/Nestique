import type { Metadata } from "next";
import LocalServicePage from "@/components/LocalServicePage";
export const metadata: Metadata = {
  "title": "Commercial construction in Visakhapatnam",
  "description": "Discuss construction scope and site coordination for offices, showrooms and other commercial buildings in Vizag.",
  "alternates": {
    "canonical": "https://www.nestiquestudio.in/commercial-construction-visakhapatnam"
  },
  "openGraph": {
    "title": "Commercial construction in Visakhapatnam",
    "description": "Discuss construction scope and site coordination for offices, showrooms and other commercial buildings in Vizag.",
    "url": "https://www.nestiquestudio.in/commercial-construction-visakhapatnam"
  }
};
export default function Page() { return <LocalServicePage title="Commercial construction in Visakhapatnam" city="Visakhapatnam" slug="commercial-construction-visakhapatnam" serviceSlug="commercial-construction" intro="Discuss construction scope and site coordination for offices, showrooms and other commercial buildings in Vizag." />; }
