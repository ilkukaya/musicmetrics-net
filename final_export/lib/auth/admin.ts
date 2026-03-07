import { cookies } from "next/headers";

const ADMIN_COOKIE = "mm_admin_session";

export function isAdminSession() {
  return cookies().get(ADMIN_COOKIE)?.value === "active";
}

export function requireAdmin() {
  if (!isAdminSession()) {
    throw new Error("UNAUTHORIZED");
  }
}

export const adminCookieName = ADMIN_COOKIE;
