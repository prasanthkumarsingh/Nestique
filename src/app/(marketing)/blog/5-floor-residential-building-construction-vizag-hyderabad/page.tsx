import type { Metadata } from "next";
import PlanningGuide from "@/components/PlanningGuide";
import { planningGuides } from "@/lib/planning-guides";
const slug = "5-floor-residential-building-construction-vizag-hyderabad";
const guide = planningGuides.find(item => item.slug === slug)!;
export const metadata: Metadata = { title: guide.title, description: guide.description, alternates: { canonical: "https://www.nestiquestudio.in/blog/" + slug }, openGraph: { title: guide.title, description: guide.description, url: "https://www.nestiquestudio.in/blog/" + slug } };
export default function Page() { return <PlanningGuide slug={slug} />; }
