import Link from "next/link";
import { PageIntro } from "@/components/shared/page-intro";
import { tracks } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Tracks", "Explore track momentum pages on MusicMetrics.", "/tracks");

export default function TracksPage() {
  return (
    <>
      <PageIntro title="Tracks" description="Track pages combine platform context, momentum framing, and summary-level analysis." />
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {tracks.map((item) => (
            <Link key={item.slug} href={`/tracks/${item.slug}`} className="rounded-3xl border border-border bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{item.artist} · {item.momentum}</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-3 text-slate-600">{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <p className="text-sm text-slate-600">
          Continue browsing: <Link className="font-semibold text-ink underline-offset-2 hover:underline" href="/">home</Link>,
          <Link className="ml-1 font-semibold text-ink underline-offset-2 hover:underline" href="/charts">charts section</Link>, and
          <Link className="ml-1 font-semibold text-ink underline-offset-2 hover:underline" href="/countries">country pages</Link>.
        </p>
      </section>
    </>
  );
}
