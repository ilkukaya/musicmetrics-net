export function validateInternalSecret(secret: string | null) {
  const expected = process.env.CRON_SECRET;
  if (!expected) return { ok: false, reason: "CRON_SECRET is not configured" };
  if (!secret || secret !== expected) return { ok: false, reason: "Unauthorized secret" };
  return { ok: true };
}
