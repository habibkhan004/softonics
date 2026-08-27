import nodemailer from "nodemailer";
import { brand } from "@/lib/brand";

export function contactInbox() {
  return process.env.CONTACT_TO_EMAIL || process.env.ADMIN_EMAIL || brand.email;
}

export function isMailConfigured() {
  return Boolean(process.env.RESEND_API_KEY || (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS));
}

export async function sendMail({
  subject,
  html,
  text,
  replyTo,
}: {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}) {
  const to = contactInbox();

  if (process.env.RESEND_API_KEY) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.MAIL_FROM || `${brand.legalName} <onboarding@resend.dev>`,
        to,
        subject,
        html,
        text,
        reply_to: replyTo,
      }),
    });
    if (!res.ok) {
      throw new Error(`Resend failed: ${await res.text()}`);
    }
    return;
  }

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const port = Number(process.env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.MAIL_FROM || `"${brand.legalName}" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      text,
      replyTo,
    });
    return;
  }

  console.warn("[mail] Skipped: set RESEND_API_KEY or SMTP_HOST / SMTP_USER / SMTP_PASS");
}
