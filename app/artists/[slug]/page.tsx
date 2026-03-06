import { notFound } from "next/navigation";
import { PageIntro } from "@/components/shared/page-intro";
import { artists, getArtistBySlug } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return artists.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props) {
  const item = getArtistBySlug(params.slug);
  if (!item) return {};
  return buildMetadata(item.name, item.summary, `/artists/${item.slug}`);
}

export default function ArtistDetailPage({ params }: Props) {
  const item = getArtistBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      <PageIntro title={item.name} description={item.summary} />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft text-slate-600">
          <p><strong>Genre:</strong> {item.genre}</p>
          <p className="mt-3"><strong>Region:</strong> {item.region}</p>
          <p className="mt-3"><strong>Monthly listeners:</strong> {item.monthlyListeners}</p>
          <p className="mt-6">This structure is ready for future listener charts, platform splits, release tracking, and editorial comparison blocks.</p>
        </div>
      </section>
    </>
  );
}
