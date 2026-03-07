import Link from "next/link";
import { SearchFilter } from "@/components/search/search-filter";
import { AdSlot } from "@/components/shared/ad-slot";
import { ContentNote } from "@/components/shared/content-note";
import { SectionHeading } from "@/components/shared/section-heading";
import { artists, charts, countries, insights, tracks } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  "Global music analytics platform",
  "Explore chart movement, artist growth, track momentum, and country-level trends with a clean, editorial-first music intelligence experience.",
  "/"
);

function Card({ title, description, href, meta }: { title: string; description: string; href: string; meta?: string }) {
  return (
    <Link href={href} className="rounded-3xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-accent">
      {meta ? <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{meta}</p> : null}
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-slate-600">{description}</p>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Global music intelligence</p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-ink md:text-6xl">
              Turn fragmented music data into clear weekly decisions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              MusicMetrics helps fans, managers, indie labels, and analysts understand what is actually moving across charts,
              artists, tracks, and countries—without the clutter of legacy dashboards.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/charts" className="rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white">
                Explore charts
              </Link>
              <Link href="/insights" className="rounded-xl border border-border px-5 py-3 text-sm font-semibold text-ink">
                Read insights
              </Link>
              <Link href="/about" className="rounded-xl border border-border px-5 py-3 text-sm font-semibold text-ink">
                Why MusicMetrics
              </Link>
            </div>
            <div className="mt-6">
              <ContentNote
                lastUpdated="November 2026"
                note="Homepage sections are updated as new editorial and data layers ship in production."
              />
            </div>
          </div>
          <SearchFilter />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow="Featured"
          title="Launch-ready sections designed for discoverability"
          description="Built to support search growth, editorial trust, and future monetization without sacrificing speed or readability."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {charts.map((item) => (
            <Card key={item.slug} title={item.title} description={item.description} href={`/charts/${item.slug}`} meta={`${item.period} · ${item.region}`} />
          ))}
        </div>
        <p className="mt-5 text-sm text-slate-600">
          Need a broader view? Visit the complete <Link href="/charts" className="font-semibold text-ink underline-offset-2 hover:underline">charts hub</Link> for all available chart pages.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <AdSlot label="Reserved display ad placement for future monetization" />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Artists" title="Artists gaining measurable traction" description="Profile pages combine concise context with momentum indicators for quicker market reads." />
        <div className="grid gap-6 md:grid-cols-3">
          {artists.map((item) => (
            <Card key={item.slug} title={item.name} description={item.summary} href={`/artists/${item.slug}`} meta={`${item.genre} · ${item.monthlyListeners}`} />
          ))}
        </div>
        <p className="mt-5 text-sm text-slate-600">
          Browse all profiles in the <Link href="/artists" className="font-semibold text-ink underline-offset-2 hover:underline">artists index</Link> and compare growth narratives.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Tracks" title="Track momentum pages built for context" description="Understand where songs are accelerating with cleaner framing than flat rankings alone." />
        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((item) => (
            <Card key={item.slug} title={item.title} description={item.summary} href={`/tracks/${item.slug}`} meta={`${item.artist} · ${item.momentum}`} />
          ))}
        </div>
        <p className="mt-5 text-sm text-slate-600">
          Open the full <Link href="/tracks" className="font-semibold text-ink underline-offset-2 hover:underline">track library</Link> to review more momentum snapshots.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Countries" title="Country trend pages with local context" description="Regional pages highlight where genres, artists, and chart dynamics are evolving fastest." />
        <div className="grid gap-6 md:grid-cols-3">
          {countries.map((item) => (
            <Card key={item.slug} title={item.name} description={item.summary} href={`/countries/${item.slug}`} meta={item.spotlight} />
          ))}
        </div>
        <p className="mt-5 text-sm text-slate-600">
          Explore all regions from the <Link href="/countries" className="font-semibold text-ink underline-offset-2 hover:underline">countries hub</Link>.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="How it works" title="A focused structure for trustworthy music analytics" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-ink">1. Surface movement</h3>
            <p className="mt-3 text-slate-600">Pages focus on momentum, regional shifts, and context that matter for breakout analysis.</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-ink">2. Add editorial clarity</h3>
            <p className="mt-3 text-slate-600">Every page supports readable summaries, comparisons, and transparent interpretation notes.</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-ink">3. Scale coverage responsibly</h3>
            <p className="mt-3 text-slate-600">The MVP is structured for broader ingestion pipelines while protecting current route stability.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Insights" title="Editorial analysis with long-term trust potential" description="Publishers, marketers, and teams can use insight pages as credible explainers behind the numbers." />
        <div className="grid gap-6 md:grid-cols-2">
          {insights.map((item) => (
            <Card key={item.slug} title={item.title} description={item.excerpt} href={`/insights/${item.slug}`} meta={item.category} />
          ))}
        </div>
        <p className="mt-5 text-sm text-slate-600">
          Read more in the <Link href="/insights" className="font-semibold text-ink underline-offset-2 hover:underline">insights center</Link> and connect trends across charts and artists.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] bg-ink px-8 py-10 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">Newsletter placeholder</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Weekly chart movers, breakout artists, and regional trend notes.</h2>
          <p className="mt-4 max-w-2xl text-slate-200">
            This placeholder keeps the conversion slot ready for production email capture while the editorial cadence matures.
          </p>
        </div>
      </section>
    </>
  );
}
