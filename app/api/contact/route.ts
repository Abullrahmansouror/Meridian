import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  website?: string;
};

const serviceOptions = new Set([
  "Commercial",
  "Civil & Infrastructure",
  "Industrial & Energy",
  "Pre-Construction / Design-Build",
  "Not sure yet",
]);

function text(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function parsePayload(value: unknown): ContactPayload | null {
  if (!value || typeof value !== "object") return null;

  const body = value as Record<string, unknown>;
  const payload: ContactPayload = {
    name: text(body.name, 120),
    email: text(body.email, 254),
    company: text(body.company, 160),
    phone: text(body.phone, 50),
    service: text(body.service, 80),
    budget: text(body.budget, 80),
    message: text(body.message, 4000),
    website: text(body.website, 200),
  };

  if (
    payload.name.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) ||
    !serviceOptions.has(payload.service) ||
    payload.message.length < 12
  ) {
    return null;
  }

  return payload;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return Response.json({ error: "Request is too large." }, { status: 413 });
  }

  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "Invalid request origin." }, { status: 403 });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = parsePayload(raw);
  if (!payload) {
    return Response.json({ error: "Please review the form fields." }, { status: 400 });
  }

  // Quietly accept bot submissions that fill the honeypot field.
  if (payload.website) return Response.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const recipients = process.env.CONTACT_TO_EMAIL?.split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  if (!apiKey || !from || !recipients?.length) {
    console.error("Contact email delivery is not configured.");
    return Response.json(
      { error: "Online delivery is temporarily unavailable." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: recipients,
    replyTo: payload.email,
    subject: `New project brief — ${payload.service}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Company: ${payload.company || "Not provided"}`,
      `Phone: ${payload.phone || "Not provided"}`,
      `Service: ${payload.service}`,
      `Budget: ${payload.budget || "Not provided"}`,
      "",
      payload.message,
    ].join("\n"),
  });

  if (error) {
    console.error("Contact email delivery failed:", error.name);
    return Response.json(
      { error: "We could not send your brief. Please try again." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
