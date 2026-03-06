import { notFound } from "next/navigation";
import { PageIntro } from "@/components/shared/page-intro";
import { charts, getChartBySlug } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return charts.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props) {
  const item = getChartBySlug(params.slug);
  if (!item) return {};
  return buildMetadata(item.title, item.description, `/charts/${item.slug}`);
}

export default function ChartDetailPage({ params }: Props) {
  const item = getChartBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      <PageIntro title={item.title} description={item.description} />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft text-slate-600">
          <p><strong>Region:</strong> {item.region}</p>
          <p className="mt-3"><strong>Period:</strong> {item.period}</p>
          <p className="mt-3"><strong>Primary metric:</strong> {item.metric}</p>
          <p className="mt-6">This detail page models how future chart pages can combine structured rankings, editorial notes, and monetizable content modules.</p>
        </div>
      </section>
    </>
  );
}
