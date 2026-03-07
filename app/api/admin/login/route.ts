import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { adminCookieName } from "@/lib/auth/admin";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

type AttemptStore = Map<string, number[]>;

function getAttemptStore() {
  const globalWithStore = globalThis as typeof globalThis & {
    __mmAdminLoginAttempts?: AttemptStore;
  };

  if (!globalWithStore.__mmAdminLoginAttempts) {
    globalWithStore.__mmAdminLoginAttempts = new Map();
  }

  return globalWithStore.__mmAdminLoginAttempts;
}

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

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(clientIp: string) {
  const now = Date.now();
  const store = getAttemptStore();
  const timestamps = store.get(clientIp) || [];
  const freshAttempts = timestamps.filter((time) => now - time < WINDOW_MS);

  store.set(clientIp, freshAttempts);

  return freshAttempts.length >= MAX_ATTEMPTS;
}

function trackFailedAttempt(clientIp: string) {
  const now = Date.now();
  const store = getAttemptStore();
  const timestamps = store.get(clientIp) || [];
  const freshAttempts = timestamps.filter((time) => now - time < WINDOW_MS);

  freshAttempts.push(now);
  store.set(clientIp, freshAttempts);
}

function clearFailedAttempts(clientIp: string) {
  getAttemptStore().delete(clientIp);
}

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp)) {
    return NextResponse.redirect(new URL("/admin/login?error=rate_limited", request.url));
  }

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
    clearFailedAttempts(clientIp);

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

  trackFailedAttempt(clientIp);
  return NextResponse.redirect(new URL("/admin/login?error=invalid_credentials", request.url));
}
