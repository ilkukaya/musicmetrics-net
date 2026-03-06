import Link from "next/link";
import { SearchFilter } from "@/components/search/search-filter";
import { AdSlot } from "@/components/shared/ad-slot";
import { SectionHeading } from "@/components/shared/section-heading";
import { artists, charts, countries, insights, tracks } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  "Global music analytics platform",
  "Track chart movement, artist growth, track momentum, and country-level trends with a cleaner, faster interface.",
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
              A cleaner way to explore charts, artist growth, and music momentum.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              MusicMetrics is a global-first music analytics platform built for fans, managers, indie labels, and chart watchers.
              It combines fast navigation, editorial clarity, and future-ready data architecture.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/charts" className="rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white">
                Explore charts
              </Link>
              <Link href="/insights" className="rounded-xl border border-border px-5 py-3 text-sm font-semibold text-ink">
                Read insights
              </Link>
            </div>
          </div>
          <SearchFilter />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow="Featured"
          title="Launch-ready sections for discovery and growth"
          description="The MVP is structured to serve both organic traffic and future monetization, without sacrificing speed or clarity."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {charts.map((item) => (
            <Card key={item.slug} title={item.title} description={item.description} href={`/charts/${item.slug}`} meta={`${item.period} · ${item.region}`} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <AdSlot label="Reserved display ad placement for future monetization" />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Artists" title="Artists gaining traction" description="Sample artist pages already model how MusicMetrics can evolve into a full analytics destination." />
        <div className="grid gap-6 md:grid-cols-3">
          {artists.map((item) => (
            <Card key={item.slug} title={item.name} description={item.summary} href={`/artists/${item.slug}`} meta={`${item.genre} · ${item.monthlyListeners}`} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Tracks" title="Track momentum pages" description="Track detail pages blend performance framing with editorial context, making them more useful than raw tables alone." />
        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((item) => (
            <Card key={item.slug} title={item.title} description={item.summary} href={`/tracks/${item.slug}`} meta={`${item.artist} · ${item.momentum}`} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Countries" title="Country trend pages" description="Country-level pages open stronger long-tail search opportunities and give users clearer context." />
        <div className="grid gap-6 md:grid-cols-3">
          {countries.map((item) => (
            <Card key={item.slug} title={item.name} description={item.summary} href={`/countries/${item.slug}`} meta={item.spotlight} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="How it works" title="A better structure than a flat stats table" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-ink">1. Surface movement</h3>
            <p className="mt-3 text-slate-600">Pages focus on momentum, regional shifts, and context that matter for breakout analysis.</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-ink">2. Add editorial clarity</h3>
            <p className="mt-3 text-slate-600">Every page is designed to support readable summaries, comparisons, and monetizable content layers.</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-ink">3. Scale data later</h3>
            <p className="mt-3 text-slate-600">The MVP uses local mock data today but is structured for future Spotify and YouTube ingestion pipelines.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Insights" title="Editorial + affiliate-ready content zone" description="This section is built to support future long-form SEO articles, product guides, and monetization content." />
        <div className="grid gap-6 md:grid-cols-2">
          {insights.map((item) => (
            <Card key={item.slug} title={item.title} description={item.excerpt} href={`/insights/${item.slug}`} meta={item.category} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] bg-ink px-8 py-10 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">Newsletter placeholder</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Weekly chart movers, breakout artists, and trend notes.</h2>
          <p className="mt-4 max-w-2xl text-slate-200">
            This is intentionally a placeholder in the MVP, ready for future email capture and segmentation.
          </p>
        </div>
      </section>
    </>
  );
}
