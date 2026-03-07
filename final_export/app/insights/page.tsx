import Link from "next/link";
import { PageIntro } from "@/components/shared/page-intro";
import { insights } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Insights", "Editorial analysis for music performance intelligence.", "/insights");

export default function InsightsPage() {
  return (
    <>
      <PageIntro title="Insights" description="Editorial analysis built to explain the signals behind chart and audience movement." />
      <section className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-2">
        {insights.map((item) => (
          <Link key={item.slug} href={`/insights/${item.slug}`} className="rounded-3xl border border-border bg-white p-7 shadow-soft">
            <h2 className="text-2xl font-semibold text-ink">{item.title}</h2>
            <p className="mt-3 text-slate-600">{item.excerpt}</p>
            <p className="mt-3 text-sm text-slate-500">{item.author} · {item.publishedAt}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
