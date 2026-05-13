import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, city, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Nestique Studio <hello@nestiquestudio.in>",
      to: "hello@nestiquestudio.in",
      replyTo: email,
      subject: `Contact Form: ${subject || "General Enquiry"} — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e8e0d4;border-radius:12px;overflow:hidden;">
          <div style="background:#1a1a1a;padding:24px 32px;">
            <h2 style="color:#e8773a;margin:0;font-size:1.3rem;">New Contact Form Submission</h2>
            <p style="color:rgba(255,255,255,0.6);margin:6px 0 0;font-size:0.85rem;">nestiquestudio.in</p>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe4;color:#6b7280;font-size:0.85rem;width:130px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe4;color:#1a1a1a;font-weight:600;">${name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe4;color:#6b7280;font-size:0.85rem;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe4;"><a href="mailto:${email}" style="color:#e8773a;">${email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe4;color:#6b7280;font-size:0.85rem;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe4;color:#1a1a1a;">${phone || "—"}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe4;color:#6b7280;font-size:0.85rem;">City</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe4;color:#1a1a1a;">${city || "—"}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ebe4;color:#6b7280;font-size:0.85rem;">Subject</td><td style="padding:10px 0;border-bottom:1px solid #f0ebe4;color:#1a1a1a;">${subject || "—"}</td></tr>
            </table>
            <div style="margin-top:24px;">
              <p style="color:#6b7280;font-size:0.85rem;margin-bottom:8px;">Message</p>
              <div style="background:#faf8f5;border-radius:8px;padding:16px;color:#1a1a1a;line-height:1.6;white-space:pre-wrap;">${message}</div>
            </div>
            <div style="margin-top:28px;text-align:center;">
              <a href="mailto:${email}" style="background:#e8773a;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:600;font-size:0.9rem;">Reply to ${name}</a>
            </div>
          </div>
          <div style="background:#faf8f5;padding:16px 32px;text-align:center;border-top:1px solid #ede8e0;">
            <p style="color:#9ca3af;font-size:0.78rem;margin:0;">Nestique Studio · hello@nestiquestudio.in · +91 78160 86291</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
