import { notFound } from "next/navigation";
import { insights } from "@/lib/content";

export default function AdminInsightDetail({ params }: { params: { id: string } }) {
  const insight = insights.find((item) => item.id === params.id);
  if (!insight) notFound();
  return <section><h1 className="text-3xl font-bold text-ink">{insight.title}</h1><p className="mt-3 text-slate-600">Manage body content, SEO overrides, and linked entities from this screen.</p></section>;
}
