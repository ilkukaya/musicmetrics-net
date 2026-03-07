import { notFound } from "next/navigation";
import Link from "next/link";
import { artists, findArtist, getArtistTracks, insights } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { PageIntro } from "@/components/shared/page-intro";

export function generateStaticParams() {
  return artists.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const artist = findArtist(params.slug);
  if (!artist) return buildMetadata("Artist not found", "Artist page missing.", "/artists");
  return buildMetadata(artist.name, artist.profile, `/artists/${artist.slug}`);
}

export default function ArtistDetailPage({ params }: { params: { slug: string } }) {
  const artist = findArtist(params.slug);
  if (!artist) notFound();
  const artistTracks = getArtistTracks(artist.slug);
  const relatedInsights = insights.slice(0, 3);

  return (
    <>
      <PageIntro title={artist.name} description={artist.profile} />
      <section className="mx-auto max-w-6xl px-6 py-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-border bg-white p-6">
          <p className="text-sm text-slate-600">Genres: {artist.genres.join(", ")}</p>
          <p className="mt-2 text-sm text-slate-600">Monthly listeners estimate: {artist.monthlyListenersEstimate.toLocaleString()}</p>
          <h2 className="mt-6 text-xl font-semibold text-ink">Trending tracks</h2>
          <ul className="mt-4 space-y-2">
            {artistTracks.map((track) => (
              <li key={track.slug}><Link className="text-ink underline" href={`/tracks/${track.slug}`}>{track.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-white p-6">
          <h2 className="text-xl font-semibold text-ink">Related insights</h2>
          <ul className="mt-4 space-y-3">
            {relatedInsights.map((item) => (
              <li key={item.slug}><Link href={`/insights/${item.slug}`} className="text-ink underline">{item.title}</Link></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
