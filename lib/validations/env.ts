const required = ["NEXT_PUBLIC_SITE_URL", "DATABASE_URL", "DIRECT_URL"] as const;

export function validateEnv() {
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}
