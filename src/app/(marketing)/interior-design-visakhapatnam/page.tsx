import type { Metadata } from "next";
import LocalServicePage from "@/components/LocalServicePage";
export const metadata: Metadata = {
  "title": "Home & office interior design in Visakhapatnam",
  "description": "Interior planning for Vizag homes and workplaces, with layouts, material choices and execution options agreed around your property.",
  "alternates": {
    "canonical": "https://www.nestiquestudio.in/interior-design-visakhapatnam"
  },
  "openGraph": {
    "title": "Home & office interior design in Visakhapatnam",
    "description": "Interior planning for Vizag homes and workplaces, with layouts, material choices and execution options agreed around your property.",
    "url": "https://www.nestiquestudio.in/interior-design-visakhapatnam"
  }
};
export default function Page() { return <LocalServicePage title="Home & office interior design in Visakhapatnam" city="Visakhapatnam" slug="interior-design-visakhapatnam" serviceSlug="home-interiors" intro="Interior planning for Vizag homes and workplaces, with layouts, material choices and execution options agreed around your property." />; }
