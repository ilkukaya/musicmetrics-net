import Link from "next/link";
import { PageIntro } from "@/components/shared/page-intro";
import { charts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Charts", "Browse global and country chart intelligence across Spotify and YouTube.", "/charts");

export default function ChartsPage() {
  return (
    <>
      <PageIntro title="Charts" description="Track movement by source, region, and cadence with a cleaner analytics surface." />
      <section className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-2">
        {charts.map((item) => (
          <Link key={item.slug} href={`/charts/${item.slug}`} className="rounded-3xl border border-border bg-white p-7 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.sourcePlatform} · {item.chartType} · {item.cadence}</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink">{item.title}</h2>
            <p className="mt-3 text-slate-600">{item.description}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
