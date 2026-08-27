"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getAdminSession, loginAdmin, logoutAdmin } from "@/lib/auth";
import {
  createApplication,
  createInquiry,
  deleteJob,
  deletePost,
  deleteProject,
  deleteTestimonial,
  saveJob,
  savePost,
  saveProject,
  saveTestimonial,
  updateApplicationStatus,
  updateInquiryStatus,
} from "@/lib/queries";
import { uploadMedia } from "@/lib/storage";
import { sendMail } from "@/lib/mail";
import { brand } from "@/lib/brand";
import type { ApplicationStatus, InquiryStatus, ProjectCategory } from "@/lib/types";
import { parseGallery, parseJsonArray, parseMetrics, slugify, splitParagraphs } from "@/lib/utils";

export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return session;
}

export async function loginAction(_prev: { error?: string } | undefined, formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const result = await loginAdmin(email, password);
  if (!result.ok) return { error: result.error };
  redirect("/admin");
}

export async function logoutAction() {
  await logoutAdmin();
  redirect("/admin/login");
}

export async function saveProjectAction(formData: FormData) {
  await requireAdmin();
  const title = String(formData.get("title") ?? "").trim();
  const slug = slugify(String(formData.get("slug") ?? title));
  if (!title || !slug) throw new Error("Title is required.");

  const testimonialQuote = String(formData.get("testimonialQuote") ?? "").trim();

  await saveProject({
    id: String(formData.get("id") ?? "") || undefined,
    title,
    slug,
    client: String(formData.get("client") ?? "").trim(),
    category: String(formData.get("category") ?? "Web Development") as ProjectCategory,
    industry: String(formData.get("industry") ?? "").trim(),
    tags: parseJsonArray(formData.get("tags")),
    techStack: parseJsonArray(formData.get("techStack")),
    summary: String(formData.get("summary") ?? ""),
    overview: String(formData.get("overview") ?? ""),
    challenge: String(formData.get("challenge") ?? ""),
    solution: String(formData.get("solution") ?? ""),
    approach: parseJsonArray(formData.get("approach")),
    results: parseJsonArray(formData.get("results")),
    metrics: parseMetrics(formData.get("metrics")),
    year: String(formData.get("year") ?? ""),
    duration: String(formData.get("duration") ?? ""),
    teamSize: String(formData.get("teamSize") ?? ""),
    liveUrl: String(formData.get("liveUrl") ?? "") || undefined,
    coverImage: String(formData.get("coverImage") ?? ""),
    gallery: parseGallery(formData.get("gallery")),
    featured: formData.get("featured") === "on",
    published: formData.get("published") === "on",
    testimonial: testimonialQuote
      ? {
          quote: testimonialQuote,
          name: String(formData.get("testimonialName") ?? "").trim(),
          role: String(formData.get("testimonialRole") ?? "").trim(),
        }
      : undefined,
  });

  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
}

export async function deleteProjectAction(formData: FormData) {
  await requireAdmin();
  await deleteProject(String(formData.get("id")));
  revalidatePath("/projects");
  revalidatePath("/admin/projects");
}

export async function saveJobAction(formData: FormData) {
  await requireAdmin();
  const title = String(formData.get("title") ?? "").trim();
  const slug = slugify(String(formData.get("slug") ?? title));
  if (!title) throw new Error("Title is required.");

  await saveJob({
    id: String(formData.get("id") ?? "") || undefined,
    title,
    slug,
    department: String(formData.get("department") ?? "").trim(),
    location: String(formData.get("location") ?? "").trim(),
    type: String(formData.get("type") ?? "Full-time"),
    description: String(formData.get("description") ?? ""),
    requirements: parseJsonArray(formData.get("requirements")),
    niceToHave: parseJsonArray(formData.get("niceToHave")),
    published: formData.get("published") === "on",
  });

  revalidatePath("/careers");
  revalidatePath("/admin/careers");
  redirect("/admin/careers");
}

export async function deleteJobAction(formData: FormData) {
  await requireAdmin();
  await deleteJob(String(formData.get("id")));
  revalidatePath("/careers");
  revalidatePath("/admin/careers");
}

export async function savePostAction(formData: FormData) {
  await requireAdmin();
  const title = String(formData.get("title") ?? "").trim();
  const slug = slugify(String(formData.get("slug") ?? title));
  if (!title) throw new Error("Title is required.");

  await savePost({
    id: String(formData.get("id") ?? "") || undefined,
    title,
    slug,
    excerpt: String(formData.get("excerpt") ?? ""),
    category: String(formData.get("category") ?? ""),
    date: String(formData.get("date") ?? new Date().toISOString().slice(0, 10)),
    readTime: String(formData.get("readTime") ?? "5 min read"),
    coverImage: String(formData.get("coverImage") ?? ""),
    author: {
      name: String(formData.get("authorName") ?? "Desynt"),
      role: String(formData.get("authorRole") ?? "Editorial"),
    },
    content: splitParagraphs(String(formData.get("content") ?? "")),
    published: formData.get("published") === "on",
  });

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function deletePostAction(formData: FormData) {
  await requireAdmin();
  await deletePost(String(formData.get("id")));
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
}

export async function saveTestimonialAction(formData: FormData) {
  await requireAdmin();
  await saveTestimonial({
    id: String(formData.get("id") ?? "") || undefined,
    quote: String(formData.get("quote") ?? "").trim(),
    name: String(formData.get("name") ?? "").trim(),
    role: String(formData.get("role") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    published: formData.get("published") === "on",
    sortOrder: Number(formData.get("sortOrder") ?? 0),
  });
  revalidatePath("/");
  revalidatePath("/admin/testimonials");
  redirect("/admin/testimonials");
}

export async function deleteTestimonialAction(formData: FormData) {
  await requireAdmin();
  await deleteTestimonial(String(formData.get("id")));
  revalidatePath("/");
  revalidatePath("/admin/testimonials");
}

export async function setInquiryStatusAction(formData: FormData) {
  await requireAdmin();
  await updateInquiryStatus(String(formData.get("id")), String(formData.get("status")) as InquiryStatus);
  revalidatePath("/admin/inquiries");
}

export async function setApplicationStatusAction(formData: FormData) {
  await requireAdmin();
  await updateApplicationStatus(String(formData.get("id")), String(formData.get("status")) as ApplicationStatus);
  revalidatePath("/admin/applications");
}

export async function submitInquiryAction(_prev: { error?: string; ok?: boolean } | undefined, formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  if (!name || !email || !message) return { error: "Please fill in name, email, and a message." };

  await createInquiry({
    name,
    email,
    company: String(formData.get("company") ?? "").trim() || undefined,
    budget: String(formData.get("budget") ?? "").trim() || undefined,
    message,
    source: "contact",
  });
  revalidatePath("/admin/inquiries");

  const company = String(formData.get("company") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  try {
    await sendMail({
      subject: `New inquiry from ${name}`,
      replyTo: email,
      text: [
        `New contact form submission on ${brand.legalName}`,
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : "",
        budget ? `Budget: ${budget}` : "",
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <h2>New contact inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
        ${budget ? `<p><strong>Budget:</strong> ${escapeHtml(budget)}</p>` : ""}
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });
  } catch (error) {
    console.error("[mail] inquiry failed", error);
  }

  return { ok: true };
}

export async function submitNewsletterAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  if (!email) return;
  await createInquiry({
    name: "Newsletter",
    email,
    message: "Newsletter signup",
    source: "newsletter",
  });
  try {
    await sendMail({
      subject: `Newsletter signup: ${email}`,
      replyTo: email,
      text: `${email} subscribed to the ${brand.legalName} newsletter.`,
      html: `<p><strong>${escapeHtml(email)}</strong> subscribed to the newsletter.</p>`,
    });
  } catch (error) {
    console.error("[mail] newsletter failed", error);
  }
}

export async function submitApplicationAction(_prev: { error?: string; ok?: boolean } | undefined, formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  if (!name || !email) return { error: "Name and email are required." };

  let resumeUrl: string | undefined;
  const resume = formData.get("resume");
  if (resume instanceof File && resume.size > 0) {
    const uploaded = await uploadMedia(resume);
    resumeUrl = uploaded.url;
  }

  await createApplication({
    jobId: String(formData.get("jobId") ?? "") || undefined,
    jobTitle: String(formData.get("jobTitle") ?? "General application"),
    name,
    email,
    phone: String(formData.get("phone") ?? "").trim() || undefined,
    linkedin: String(formData.get("linkedin") ?? "").trim() || undefined,
    resumeUrl,
    coverLetter: String(formData.get("coverLetter") ?? "").trim() || undefined,
  });
  revalidatePath("/admin/applications");

  const jobTitle = String(formData.get("jobTitle") ?? "General application");
  const phone = String(formData.get("phone") ?? "").trim();
  const linkedin = String(formData.get("linkedin") ?? "").trim();
  const coverLetter = String(formData.get("coverLetter") ?? "").trim();
  try {
    await sendMail({
      subject: `New application: ${name} — ${jobTitle}`,
      replyTo: email,
      text: [
        `New job application on ${brand.legalName}`,
        `Role: ${jobTitle}`,
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : "",
        linkedin ? `LinkedIn: ${linkedin}` : "",
        resumeUrl ? `Resume: ${resumeUrl}` : "",
        coverLetter ? `\n${coverLetter}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <h2>New job application</h2>
        <p><strong>Role:</strong> ${escapeHtml(jobTitle)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
        ${linkedin ? `<p><strong>LinkedIn:</strong> ${escapeHtml(linkedin)}</p>` : ""}
        ${resumeUrl ? `<p><strong>Resume:</strong> <a href="${escapeHtml(resumeUrl)}">${escapeHtml(resumeUrl)}</a></p>` : ""}
        ${coverLetter ? `<p>${escapeHtml(coverLetter).replace(/\n/g, "<br/>")}</p>` : ""}
      `,
    });
  } catch (error) {
    console.error("[mail] application failed", error);
  }

  return { ok: true };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
