import { NextResponse } from "next/server";
import { company } from "@/lib/content";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  company?: string; // honeypot
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill a hidden field. Pretend success so bots move on.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (name.length < 2 || message.length < 5) {
    return NextResponse.json(
      { error: "Please enter your name and a short message." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? company.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("Contact form not configured: RESEND_API_KEY or CONTACT_FROM_EMAIL missing.");
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please call or email us directly." },
      { status: 503 },
    );
  }

  const text = [
    `New enquiry from the ${company.name} website`,
    "",
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Phone:   ${phone || "not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website enquiry from ${name}`,
        text,
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", res.status, await res.text());
      return NextResponse.json(
        { error: "We could not send your message. Please call or email us directly." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Contact form failed:", err);
    return NextResponse.json(
      { error: "We could not send your message. Please call or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
