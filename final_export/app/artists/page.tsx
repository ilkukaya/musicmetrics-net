import Link from "next/link";
import { PageIntro } from "@/components/shared/page-intro";
import { artists } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Artists", "Browse artist profiles with country, genre, and momentum context.", "/artists");

export default function ArtistsPage() {
  return (
    <>
      <PageIntro title="Artists" description="Browse canonical artist entities with structured profile and growth context." />
      <section className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-2">
        {artists.map((item) => (
          <Link key={item.slug} href={`/artists/${item.slug}`} className="rounded-3xl border border-border bg-white p-7 shadow-soft">
            <h2 className="text-2xl font-semibold text-ink">{item.name}</h2>
            <p className="mt-3 text-slate-600">{item.profile}</p>
            <p className="mt-2 text-sm text-slate-500">{item.genres.join(" · ")} · {item.monthlyListenersEstimate.toLocaleString()} monthly listeners est.</p>
          </Link>
        ))}
      </section>
    </>
  );
}
