import { adminStats } from "@/lib/admin";

export default function AdminDashboardPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-ink">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminStats.map((item) => (
          <div key={item.label} className="rounded-xl border border-border bg-white p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-bold text-ink">{item.value}</p>
            <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
