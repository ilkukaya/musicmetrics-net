import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/shared/page-intro";
import { findInsight, insights } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const insight = findInsight(params.slug);
  if (!insight) return buildMetadata("Insight not found", "Insight page missing.", "/insights");
  return buildMetadata(insight.title, insight.excerpt, `/insights/${insight.slug}`);
}

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
  const insight = findInsight(params.slug);
  if (!insight) notFound();

  return (
    <>
      <PageIntro title={insight.title} description={insight.excerpt} />
      <article className="mx-auto max-w-4xl px-6 py-12">
        <p className="text-sm text-slate-500">By {insight.author} · {insight.publishedAt}</p>
        <p className="mt-6 text-lg leading-8 text-slate-700">{insight.body}</p>
        <div className="mt-10 rounded-2xl border border-border bg-white p-5">
          <p className="font-semibold text-ink">Related reading</p>
          <ul className="mt-3 space-y-2">{insights.filter((i) => i.slug !== insight.slug).slice(0, 3).map((item) => <li key={item.slug}><Link className="underline text-ink" href={`/insights/${item.slug}`}>{item.title}</Link></li>)}</ul>
        </div>
      </article>
    </>
  );
}
