import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/shared/page-intro";
import { findArtist, findTrack, insights, tracks } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return tracks.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const track = findTrack(params.slug);
  if (!track) return buildMetadata("Track not found", "Track page missing.", "/tracks");
  return buildMetadata(track.title, track.snapshot, `/tracks/${track.slug}`);
}

export default function TrackDetailPage({ params }: { params: { slug: string } }) {
  const track = findTrack(params.slug);
  if (!track) notFound();
  const artist = findArtist(track.artistSlug);

  return (
    <>
      <PageIntro title={track.title} description={track.snapshot} />
      <section className="mx-auto max-w-6xl px-6 py-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-border bg-white p-6">
          <p className="text-sm text-slate-600">Release date: {track.releaseDate}</p>
          <p className="mt-2 text-sm text-slate-600">Momentum: {track.momentum}</p>
          {artist ? <p className="mt-2 text-sm text-slate-600">Artist: <Link className="underline text-ink" href={`/artists/${artist.slug}`}>{artist.name}</Link></p> : null}
        </div>
        <div className="rounded-3xl border border-border bg-white p-6">
          <h2 className="text-xl font-semibold text-ink">Related insights</h2>
          <ul className="mt-4 space-y-3">
            {insights.slice(0, 3).map((item) => (
              <li key={item.slug}><Link href={`/insights/${item.slug}`} className="text-ink underline">{item.title}</Link></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
