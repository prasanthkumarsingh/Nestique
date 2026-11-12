import type { Metadata } from "next";
import LocalServicePage from "@/components/LocalServicePage";
export const metadata: Metadata = {
  "title": "Healthcare interior planning in Visakhapatnam",
  "description": "Discuss patient and staff movement, cleanable finishes, privacy and specialist coordination for a healthcare interior brief. Clinical, infection-control, fire and medical-services requirements need review by appropriate specialists.",
  "alternates": {
    "canonical": "https://www.nestiquestudio.in/hospital-interior-design-visakhapatnam"
  },
  "openGraph": {
    "title": "Healthcare interior planning in Visakhapatnam",
    "description": "Discuss patient and staff movement, cleanable finishes, privacy and specialist coordination for a healthcare interior brief. Clinical, infection-control, fire and medical-services requirements need review by appropriate specialists.",
    "url": "https://www.nestiquestudio.in/hospital-interior-design-visakhapatnam"
  }
};
export default function Page() { return <LocalServicePage title="Healthcare interior planning in Visakhapatnam" city="Visakhapatnam" slug="hospital-interior-design-visakhapatnam" serviceSlug="commercial-interiors" intro="Discuss patient and staff movement, cleanable finishes, privacy and specialist coordination for a healthcare interior brief. Clinical, infection-control, fire and medical-services requirements need review by appropriate specialists." />; }
