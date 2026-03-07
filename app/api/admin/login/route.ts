import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { adminCookieName } from "@/lib/auth/admin";

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = normalizeEmail(String(formData.get("email") || ""));
  const password = String(formData.get("password") || "");

  const configuredAdminEmail = normalizeEmail(String(process.env.ADMIN_SEED_EMAIL || ""));
  const configuredAdminPassword = String(process.env.ADMIN_SEED_PASSWORD || "");

  if (!configuredAdminEmail || !configuredAdminPassword) {
    return NextResponse.redirect(new URL("/admin/login?error=missing_config", request.url));
  }

  const emailMatches = safeEqual(email, configuredAdminEmail);
  const passwordMatches = safeEqual(password, configuredAdminPassword);

  if (emailMatches && passwordMatches) {
    const response = NextResponse.redirect(new URL("/admin/dashboard", request.url));
    response.cookies.set(adminCookieName, "active", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 8
    });
    return response;
  }

  return NextResponse.redirect(new URL("/admin/login?error=invalid_credentials", request.url));
}
