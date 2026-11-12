import type { Metadata } from "next";
import LocalServicePage from "@/components/LocalServicePage";
export const metadata: Metadata = {
  "title": "Office planning & interiors in Visakhapatnam",
  "description": "Connect workstation layouts, meeting spaces, circulation and building services for a practical Vizag workplace.",
  "alternates": {
    "canonical": "https://www.nestiquestudio.in/office-interior-design-visakhapatnam"
  },
  "openGraph": {
    "title": "Office planning & interiors in Visakhapatnam",
    "description": "Connect workstation layouts, meeting spaces, circulation and building services for a practical Vizag workplace.",
    "url": "https://www.nestiquestudio.in/office-interior-design-visakhapatnam"
  }
};
export default function Page() { return <LocalServicePage title="Office planning & interiors in Visakhapatnam" city="Visakhapatnam" slug="office-interior-design-visakhapatnam" serviceSlug="office-planning" intro="Connect workstation layouts, meeting spaces, circulation and building services for a practical Vizag workplace." />; }
