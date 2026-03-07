import { AdminStat } from "@/lib/admin";

type Props = {
  item: AdminStat;
};

export function StatCard({ item }: Props) {
  const trendColor = item.trend === "up" ? "text-emerald-600" : "text-slate-500";
  const trendLabel = item.trend === "up" ? "Improving" : "Stable";

  return (
    <article className="rounded-3xl border border-border bg-white p-6 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.label}</p>
      <p className="mt-3 text-3xl font-bold tracking-tight text-ink">{item.value}</p>
      <p className={`mt-2 text-xs font-semibold uppercase tracking-[0.16em] ${trendColor}`}>{trendLabel}</p>
      <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
    </article>
  );
}
