import Link from "next/link";
import { insights } from "@/lib/content";

export default function AdminInsightsPage() {
  return <section><h1 className="text-3xl font-bold text-ink">Insights Management</h1><Link href="/admin/insights/new" className="mt-4 inline-block rounded-lg bg-ink px-4 py-2 text-white">New insight</Link><div className="mt-6 space-y-2">{insights.map((i)=><Link key={i.id} href={`/admin/insights/${i.id}`} className="block rounded-lg border border-border bg-white p-3">{i.title}</Link>)}</div></section>;
}
