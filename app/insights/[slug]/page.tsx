import { notFound } from "next/navigation";
import { PageIntro } from "@/components/shared/page-intro";
import { insights, getInsightBySlug } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props) {
  const item = getInsightBySlug(params.slug);
  if (!item) return {};
  return buildMetadata(item.title, item.excerpt, `/insights/${item.slug}`);
}

export default function InsightDetailPage({ params }: Props) {
  const item = getInsightBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      <PageIntro title={item.title} description={item.excerpt} />
      <section className="mx-auto max-w-4xl px-6 py-12">
        <article className="rounded-3xl border border-border bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{item.category}</p>
          <div className="mt-6 space-y-5 text-slate-700">
            {item.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
