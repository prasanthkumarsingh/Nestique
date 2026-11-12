import { submitEnquiry } from "@/lib/enquiry-server";
export async function POST(req: Request) { return submitEnquiry(req, "contact"); }
