import { NextResponse, type NextRequest } from "next/server";
import { refreshSupabaseSession } from "@/lib/supabase/middleware";
import { isLocalAdminConfigured, isSupabaseConfigured } from "@/lib/env";

function hasLocalSession(request: NextRequest) {
  if (!isLocalAdminConfigured()) return false;
  const token = request.cookies.get("desynt_admin")?.value;
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length < 3) return false;
  const expiry = Number(parts[parts.length - 2]);
  return Number.isFinite(expiry) && expiry > Date.now();
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = await refreshSupabaseSession(request);

  if (!pathname.startsWith("/admin")) return response;

  const isLogin = pathname === "/admin/login";
  const supabaseCookie = request.cookies
    .getAll()
    .some((cookie) => cookie.name.startsWith("sb-") && cookie.value);
  const authed = hasLocalSession(request) || (isSupabaseConfigured() && supabaseCookie);

  if (isLogin && authed) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
  if (!isLogin && !authed) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
