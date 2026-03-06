import { notFound } from "next/navigation";
import { PageIntro } from "@/components/shared/page-intro";
import { tracks, getTrackBySlug } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return tracks.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props) {
  const item = getTrackBySlug(params.slug);
  if (!item) return {};
  return buildMetadata(item.title, item.summary, `/tracks/${item.slug}`);
}

export default function TrackDetailPage({ params }: Props) {
  const item = getTrackBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      <PageIntro title={item.title} description={item.summary} />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft text-slate-600">
          <p><strong>Artist:</strong> {item.artist}</p>
          <p className="mt-3"><strong>Platform focus:</strong> {item.platformFocus}</p>
          <p className="mt-3"><strong>Momentum:</strong> {item.momentum}</p>
          <p className="mt-6">This page is designed for future release history, chart crossovers, platform notes, and embedded editorial monetization blocks.</p>
        </div>
      </section>
    </>
  );
}
