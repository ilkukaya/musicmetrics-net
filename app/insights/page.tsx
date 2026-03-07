import Link from "next/link";
import { AdSlot } from "@/components/shared/ad-slot";
import { PageIntro } from "@/components/shared/page-intro";
import { insights } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Insights", "Editorial analysis and future affiliate-ready content on MusicMetrics.", "/insights");

export default function InsightsPage() {
  return (
    <>
      <PageIntro title="Insights" description="This section is designed for analysis articles, SEO content clusters, and future affiliate/editorial monetization." />
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <AdSlot label="Reserved sponsorship or affiliate content block" />
        </div>
        <div className="grid gap-6">
          {insights.map((item) => (
            <Link key={item.slug} href={`/insights/${item.slug}`} className="rounded-3xl border border-border bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{item.category}</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-3 text-slate-600">{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <p className="text-sm text-slate-600">
          Continue browsing: <Link className="font-semibold text-ink underline-offset-2 hover:underline" href="/">home</Link>,
          <Link className="ml-1 font-semibold text-ink underline-offset-2 hover:underline" href="/charts">charts</Link>, and
          <Link className="ml-1 font-semibold text-ink underline-offset-2 hover:underline" href="/artists">artists</Link>.
        </p>
      </section>
    </>
  );
}
