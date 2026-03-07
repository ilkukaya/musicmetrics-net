import { NextRequest, NextResponse } from "next/server";
import { adminCookieName } from "@/lib/auth/admin";

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = normalizeEmail(String(formData.get("email") || ""));
  const password = String(formData.get("password") || "");

  const configuredAdminEmail = normalizeEmail(String(process.env.ADMIN_SEED_EMAIL || ""));
  const configuredAdminPassword = String(process.env.ADMIN_SEED_PASSWORD || "");

  if (email === configuredAdminEmail && password === configuredAdminPassword) {
    const response = NextResponse.redirect(new URL("/admin/dashboard", request.url));
    response.cookies.set(adminCookieName, "active", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/"
    });
    return response;
  }

  return NextResponse.redirect(new URL("/admin/login?error=invalid_credentials", request.url));
}
