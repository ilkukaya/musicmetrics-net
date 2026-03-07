import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Admin Login", "Admin-only access for MusicMetrics operations.", "/admin/login");

const errorMessages: Record<string, string> = {
  invalid_credentials: "Invalid email or password.",
  missing_config: "Admin credentials are not configured. Set ADMIN_SEED_EMAIL and ADMIN_SEED_PASSWORD."
};

export default function AdminLoginPage({
  searchParams
}: {
  searchParams?: { error?: string };
}) {
  const error = searchParams?.error;
  const errorMessage = error ? errorMessages[error] : null;

  return (
    <section className="mx-auto max-w-xl rounded-2xl border border-border bg-white p-8 shadow-soft">
      <h1 className="text-3xl font-bold text-ink">Admin Login</h1>
      <p className="mt-3 text-slate-600">Use admin credentials configured through environment variables. Default admin email: ilkukaya@gmail.com.</p>
      {errorMessage ? (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      ) : null}
      <form method="post" action="/api/admin/login" className="mt-6 space-y-4">
        <label className="block text-sm font-medium text-slate-700">Email<input name="email" type="email" className="mt-1 w-full rounded-lg border border-border px-3 py-2" required /></label>
        <label className="block text-sm font-medium text-slate-700">Password<input name="password" type="password" className="mt-1 w-full rounded-lg border border-border px-3 py-2" required /></label>
        <button className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white">Sign in</button>
      </form>
    </section>
  );
}
