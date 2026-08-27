import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { isLocalAdminConfigured, isSupabaseConfigured } from "@/lib/env";
import { createServerSupabase } from "@/lib/supabase/server";

const COOKIE = "desynt_admin";
const WEEK = 60 * 60 * 24 * 7;

export type AdminSession = {
  email: string;
  source: "supabase" | "local";
};

function secret() {
  const value = process.env.AUTH_SECRET;
  if (!value) throw new Error("AUTH_SECRET is not set");
  return value;
}

function sign(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("hex");
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export async function createLocalSession(email: string) {
  const expiry = Date.now() + WEEK * 1000;
  const payload = `${email}.${expiry}`;
  const token = `${payload}.${sign(payload)}`;
  const store = await cookies();
  store.set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: WEEK,
  });
}

export async function clearLocalSession() {
  const store = await cookies();
  store.delete(COOKIE);
}

export async function readLocalSession(): Promise<AdminSession | null> {
  if (!isLocalAdminConfigured()) return null;
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length < 3) return null;
  const signature = parts.pop()!;
  const expiry = parts.pop()!;
  const email = parts.join(".");
  const payload = `${email}.${expiry}`;
  if (!safeEqual(sign(payload), signature)) return null;
  if (Number(expiry) < Date.now()) return null;
  return { email, source: "local" };
}

export async function getAdminSession(): Promise<AdminSession | null> {
  if (isSupabaseConfigured()) {
    const supabase = await createServerSupabase();
    const { data } = await supabase!.auth.getUser();
    if (data.user?.email) return { email: data.user.email, source: "supabase" };
  }
  return readLocalSession();
}

export async function loginAdmin(email: string, password: string) {
  if (isSupabaseConfigured()) {
    const supabase = await createServerSupabase();
    const { error } = await supabase!.auth.signInWithPassword({ email, password });
    if (!error) return { ok: true as const };
  }

  if (
    isLocalAdminConfigured() &&
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    await createLocalSession(email);
    return { ok: true as const };
  }

  return { ok: false as const, error: "Invalid email or password." };
}

export async function logoutAdmin() {
  if (isSupabaseConfigured()) {
    const supabase = await createServerSupabase();
    await supabase?.auth.signOut();
  }
  await clearLocalSession();
}
