import Link from "next/link";
import { PageIntro } from "@/components/shared/page-intro";
import { tracks } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Tracks", "Browse track momentum by movement and market signals.", "/tracks");

export default function TracksPage() {
  return (
    <>
      <PageIntro title="Tracks" description="Track-level intelligence with momentum and release context." />
      <section className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-2">
        {tracks.map((item) => (
          <Link key={item.slug} href={`/tracks/${item.slug}`} className="rounded-3xl border border-border bg-white p-7 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.momentum}</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink">{item.title}</h2>
            <p className="mt-3 text-slate-600">{item.snapshot}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
