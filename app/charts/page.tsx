import Link from "next/link";
import { PageIntro } from "@/components/shared/page-intro";
import { charts } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Charts", "Explore chart movement and trend pages on MusicMetrics.", "/charts");

export default function ChartsPage() {
  return (
    <>
      <PageIntro title="Charts" description="Chart pages focus on movement, context, and usability instead of raw tables alone." />
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {charts.map((item) => (
            <Link key={item.slug} href={`/charts/${item.slug}`} className="rounded-3xl border border-border bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{item.period} · {item.region}</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <p className="text-sm text-slate-600">
          Continue browsing: <Link className="font-semibold text-ink underline-offset-2 hover:underline" href="/">home</Link>,
          <Link className="ml-1 font-semibold text-ink underline-offset-2 hover:underline" href="/artists">artists pages</Link>, and
          <Link className="ml-1 font-semibold text-ink underline-offset-2 hover:underline" href="/insights">insights</Link>.
        </p>
      </section>
    </>
  );
}
