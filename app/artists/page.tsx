import Link from "next/link";
import { PageIntro } from "@/components/shared/page-intro";
import { artists } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Artists", "Explore artist momentum pages on MusicMetrics.", "/artists");

export default function ArtistsPage() {
  return (
    <>
      <PageIntro title="Artists" description="Artist pages are structured for profile-level trend tracking and editorial summaries." />
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {artists.map((item) => (
            <Link key={item.slug} href={`/artists/${item.slug}`} className="rounded-3xl border border-border bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{item.genre} · {item.region}</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink">{item.name}</h2>
              <p className="mt-3 text-slate-600">{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
