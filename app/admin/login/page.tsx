import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Admin Login", "Admin-only access for MusicMetrics operations.", "/admin/login");

export default function AdminLoginPage() {
  return (
    <section className="mx-auto max-w-xl rounded-2xl border border-border bg-white p-8 shadow-soft">
      <h1 className="text-3xl font-bold text-ink">Admin Login</h1>
      <p className="mt-3 text-slate-600">Use admin credentials configured through environment variables. Default admin email: ilkukaya@gmail.com.</p>
      <form method="post" action="/api/admin/login" className="mt-6 space-y-4">
        <label className="block text-sm font-medium text-slate-700">Email<input name="email" type="email" className="mt-1 w-full rounded-lg border border-border px-3 py-2" required /></label>
        <label className="block text-sm font-medium text-slate-700">Password<input name="password" type="password" className="mt-1 w-full rounded-lg border border-border px-3 py-2" required /></label>
        <button className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white">Sign in</button>
      </form>
    </section>
  );
}
