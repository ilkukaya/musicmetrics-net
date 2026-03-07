import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/shared/page-intro";
import { countries, findCountry, artists, tracks, charts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return countries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const country = findCountry(params.slug);
  if (!country) return buildMetadata("Country not found", "Country page missing.", "/countries");
  return buildMetadata(country.name, country.summary, `/countries/${country.slug}`);
}

export default function CountryDetailPage({ params }: { params: { slug: string } }) {
  const country = findCountry(params.slug);
  if (!country) notFound();
  const topArtists = artists.filter((a) => a.countryCode === country.code).slice(0, 5);
  const topTracks = tracks.slice(0, 5);

  return (
    <>
      <PageIntro title={country.name} description={country.summary} />
      <section className="mx-auto max-w-6xl px-6 py-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-white p-6">
          <h2 className="text-xl font-semibold text-ink">Trending artists</h2>
          <ul className="mt-4 space-y-2">{topArtists.map((item) => <li key={item.slug}><Link className="underline text-ink" href={`/artists/${item.slug}`}>{item.name}</Link></li>)}</ul>
        </div>
        <div className="rounded-3xl border border-border bg-white p-6">
          <h2 className="text-xl font-semibold text-ink">Trending tracks</h2>
          <ul className="mt-4 space-y-2">{topTracks.map((item) => <li key={item.slug}><Link className="underline text-ink" href={`/tracks/${item.slug}`}>{item.title}</Link></li>)}</ul>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <p className="text-sm text-slate-600">Relevant charts: {charts.filter((c) => c.countryCode === country.code || !c.countryCode).slice(0,3).map((c) => c.title).join(" · ")}</p>
      </section>
    </>
  );
}
