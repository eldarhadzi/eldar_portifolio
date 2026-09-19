import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { validateContact } from "@/lib/contactValidation";

export const runtime = "nodejs";

// Best-effort rate limit: per-IP timestamps held in this server instance's memory.
// It resets on cold starts and isn't shared across serverless instances, which is
// acceptable for blocking casual spam without adding storage.
const RATE_LIMIT = { max: 3, windowMs: 10 * 60 * 1000 };
const hits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT.windowMs);
  if (recent.length >= RATE_LIMIT.max) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);

  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT.windowMs)) hits.delete(key);
    }
  }
  return false;
}

function getIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return (forwarded ? forwarded.split(",")[0].trim() : request.headers.get("x-real-ip")) || "unknown";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Prevents CR/LF in values that end up in mail headers.
const singleLine = (value) => String(value).replace(/[\r\n]+/g, " ");

export async function POST(request) {
  let body;
  try {
    const raw = await request.text();
    if (raw.length > 20000) {
      return NextResponse.json({ success: false, error: "Request too large." }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. Answer as if it worked.
  if (typeof body?.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  const { errors, values } = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, error: "Please fix the highlighted fields.", errors },
      { status: 400 }
    );
  }

  if (isRateLimited(getIp(request))) {
    return NextResponse.json(
      { success: false, error: "Too many messages. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Contact email is not configured: EMAIL_USER / EMAIL_PASS missing.");
    return NextResponse.json(
      { success: false, error: "Message could not be sent right now." },
      { status: 500 }
    );
  }

  const { firstname, lastname, email, phone, message } = values;
  const fullName = singleLine(`${firstname} ${lastname}`);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: { name: fullName.replace(/["<>]/g, ""), address: email },
      subject: `New message from ${fullName}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\r?\n/g, "<br>")}</p>
      `,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email send failed:", err?.code || err?.name || "unknown error");
    return NextResponse.json(
      { success: false, error: "Message could not be sent right now." },
      { status: 500 }
    );
  }
}
