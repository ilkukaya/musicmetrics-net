import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { artists, charts, countries, tracks } from "@/lib/content";

export const metadata = buildMetadata("Search", "Search across charts, artists, tracks, countries, and insights.", "/search");

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = (searchParams.q || "").toLowerCase();
  const results = [
    ...artists.map((a) => ({ title: a.name, href: `/artists/${a.slug}`, type: "Artist" })),
    ...tracks.map((t) => ({ title: t.title, href: `/tracks/${t.slug}`, type: "Track" })),
    ...charts.map((c) => ({ title: c.title, href: `/charts/${c.slug}`, type: "Chart" })),
    ...countries.map((c) => ({ title: c.name, href: `/countries/${c.slug}`, type: "Country" }))
  ].filter((item) => !q || item.title.toLowerCase().includes(q));

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-ink">Search</h1>
      <p className="mt-3 text-slate-600">Use query parameter <code>?q=</code> for pre-filtered results.</p>
      <div className="mt-8 grid gap-4">
        {results.slice(0, 40).map((item) => (
          <Link key={`${item.type}-${item.href}`} href={item.href} className="rounded-xl border border-border bg-white p-4">
            <p className="font-medium text-ink">{item.title}</p>
            <p className="text-sm text-slate-500">{item.type}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
