import { notFound } from "next/navigation";
import { charts } from "@/lib/content";

export default function AdminChartDetail({ params }: { params: { id: string } }) {
  const chart = charts.find((item) => item.id === params.id);
  if (!chart) notFound();
  return <section className="space-y-4"><h1 className="text-3xl font-bold text-ink">{chart.title}</h1><p className="text-slate-600">Chart definition, cadence, and visibility controls live here.</p></section>;
}
