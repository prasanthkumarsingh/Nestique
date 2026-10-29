import { Resend } from "resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";

let client: Resend | null = null;

export function getResend() {
  if (!client) {
    let apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      try {
        const env = getCloudflareContext().env as CloudflareEnv & { RESEND_API_KEY?: string };
        apiKey = env.RESEND_API_KEY;
      } catch {
        // Outside Workers, local development uses .env.local.
      }
    }
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is missing. Configure it as a production Worker secret.");
    }
    client = new Resend(apiKey);
  }
  return client;
}
