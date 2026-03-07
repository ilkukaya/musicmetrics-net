import { NextRequest, NextResponse } from "next/server";
import { adminCookieName } from "@/lib/auth/admin";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  if (email === process.env.ADMIN_SEED_EMAIL && password === process.env.ADMIN_SEED_PASSWORD) {
    const response = NextResponse.redirect(new URL("/admin/dashboard", request.url));
    response.cookies.set(adminCookieName, "active", { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/" });
    return response;
  }

  return NextResponse.redirect(new URL("/admin/login", request.url));
}
