import Link from "next/link";
import { charts } from "@/lib/content";

export default function AdminChartsPage() {
  return <section><h1 className="text-3xl font-bold text-ink">Charts Management</h1><div className="mt-6 space-y-2">{charts.map((c)=><Link key={c.id} href={`/admin/charts/${c.id}`} className="block rounded-lg border border-border bg-white p-3">{c.title}</Link>)}</div></section>;
}
