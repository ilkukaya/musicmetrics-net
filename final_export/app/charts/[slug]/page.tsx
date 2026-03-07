import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/shared/page-intro";
import { charts, tracks, findChart } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return charts.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const chart = findChart(params.slug);
  if (!chart) return buildMetadata("Chart not found", "Chart page missing.", "/charts");
  return buildMetadata(chart.title, chart.description, `/charts/${chart.slug}`);
}

export default function ChartDetailPage({ params }: { params: { slug: string } }) {
  const chart = findChart(params.slug);
  if (!chart) notFound();
  const entries = tracks.slice(0, 10);

  return (
    <>
      <PageIntro title={chart.title} description={chart.description} />
      <section className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-sm text-slate-600">Cadence: {chart.cadence} · Source: {chart.sourcePlatform} · Type: {chart.chartType}</p>
        <h2 className="mt-6 text-2xl font-semibold text-ink">Latest entries</h2>
        <ol className="mt-4 space-y-3">
          {entries.map((track, index) => (
            <li key={track.slug} className="rounded-xl border border-border bg-white p-4">
              <p className="font-medium text-ink">#{index + 1} {track.title}</p>
              <p className="text-sm text-slate-600">{track.snapshot}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-slate-600">Methodology summary: rankings are normalized by source cadence and movement over time windows.</p>
        <div className="mt-6 flex gap-4 text-sm">
          <Link href="/methodology" className="font-semibold text-ink underline">Read methodology</Link>
          <Link href="/data-sources" className="font-semibold text-ink underline">View data sources</Link>
        </div>
      </section>
    </>
  );
}
