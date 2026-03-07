import Link from "next/link";
import { SearchFilter } from "@/components/search/search-filter";
import { AdSlot } from "@/components/shared/ad-slot";
import { SectionHeading } from "@/components/shared/section-heading";
import { artists, charts, countries, insights, tracks } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  "Global music performance intelligence",
  "Track chart movement, artist momentum, track performance, and country-level market signals with MusicMetrics.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Global music intelligence</p>
            <h1 className="text-5xl font-bold tracking-tight text-ink md:text-6xl">See what is moving in music—before everyone else reacts.</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              MusicMetrics combines editorial clarity with structured performance data across charts, artists, tracks, and countries.
              Built for chart watchers, artist teams, labels, and marketing analysts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/charts" className="rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white">Explore charts</Link>
              <Link href="/insights" className="rounded-xl border border-border px-5 py-3 text-sm font-semibold text-ink">Read insights</Link>
            </div>
          </div>
          <SearchFilter />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16"><SectionHeading eyebrow="Featured charts" title="Priority dashboards" description="Curated chart surfaces for weekly decision making." /><div className="grid gap-6 md:grid-cols-2">{charts.slice(0,4).map((c)=><Link key={c.slug} href={`/charts/${c.slug}`} className="rounded-3xl border border-border bg-white p-6 shadow-soft"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{c.sourcePlatform} · {c.cadence}</p><h3 className="mt-2 text-xl font-semibold text-ink">{c.title}</h3><p className="mt-2 text-slate-600">{c.description}</p></Link>)}</div></section>
      <section className="mx-auto max-w-6xl px-6 pb-6"><AdSlot label="Reserved placement: leaderboard ad slot" /></section>

      <section className="mx-auto max-w-6xl px-6 py-16"><SectionHeading eyebrow="Artists" title="Signals from artist momentum" /><div className="grid gap-6 md:grid-cols-4">{artists.slice(0,8).map((a)=><Link key={a.slug} href={`/artists/${a.slug}`} className="rounded-3xl border border-border bg-white p-5 shadow-soft"><h3 className="text-lg font-semibold text-ink">{a.name}</h3><p className="mt-2 text-sm text-slate-600">{a.genres.join(" · ")}</p><p className="mt-2 text-sm text-slate-500">{a.monthlyListenersEstimate.toLocaleString()} monthly listeners est.</p></Link>)}</div></section>

      <section className="mx-auto max-w-6xl px-6 py-16"><SectionHeading eyebrow="Tracks" title="Momentum snapshots" /><div className="grid gap-6 md:grid-cols-3">{tracks.slice(0,6).map((t)=><Link key={t.slug} href={`/tracks/${t.slug}`} className="rounded-3xl border border-border bg-white p-5 shadow-soft"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{t.momentum}</p><h3 className="mt-2 text-lg font-semibold text-ink">{t.title}</h3><p className="mt-2 text-sm text-slate-600">{t.snapshot}</p></Link>)}</div></section>

      <section className="mx-auto max-w-6xl px-6 py-16"><SectionHeading eyebrow="Countries" title="Regional trend map" /><div className="grid gap-6 md:grid-cols-2">{countries.slice(0,6).map((c)=><Link key={c.slug} href={`/countries/${c.slug}`} className="rounded-3xl border border-border bg-white p-5 shadow-soft"><h3 className="text-lg font-semibold text-ink">{c.name}</h3><p className="mt-2 text-sm text-slate-600">{c.summary}</p></Link>)}</div></section>

      <section className="mx-auto max-w-6xl px-6 py-16"><SectionHeading eyebrow="How it works" title="Methodology built for trust" description="We normalize source data, capture snapshots on defined cadences, and separate measured signals from editorial interpretation." /><div className="grid gap-6 md:grid-cols-3"><div className="rounded-3xl border border-border bg-white p-6">Source ingestion</div><div className="rounded-3xl border border-border bg-white p-6">Normalization and mapping</div><div className="rounded-3xl border border-border bg-white p-6">Editorial intelligence layer</div></div></section>

      <section className="mx-auto max-w-6xl px-6 py-16"><SectionHeading eyebrow="Insights" title="Editorial intelligence" /><div className="grid gap-6 md:grid-cols-2">{insights.slice(0,4).map((i)=><Link key={i.slug} href={`/insights/${i.slug}`} className="rounded-3xl border border-border bg-white p-6 shadow-soft"><h3 className="text-xl font-semibold text-ink">{i.title}</h3><p className="mt-3 text-slate-600">{i.excerpt}</p></Link>)}</div></section>

      <section className="mx-auto max-w-6xl px-6 py-16"><div className="rounded-[2rem] bg-ink px-8 py-10 text-white"><p className="text-sm uppercase tracking-[0.18em] text-blue-200">Newsletter</p><h2 className="mt-2 text-3xl font-bold">Weekly intelligence briefing</h2><p className="mt-3 max-w-2xl text-slate-200">Subscription flow will be connected in phase 2. This section is reserved for sponsorship-ready newsletter growth.</p></div></section>
    </>
  );
}
