import Link from "next/link";
import { PageIntro } from "@/components/shared/page-intro";
import { countries } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Countries", "Explore country-level music trend pages on MusicMetrics.", "/countries");

export default function CountriesPage() {
  return (
    <>
      <PageIntro title="Countries" description="Country pages are designed for regional discovery, trend mapping, and long-tail SEO value." />
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {countries.map((item) => (
            <Link key={item.slug} href={`/countries/${item.slug}`} className="rounded-3xl border border-border bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{item.spotlight}</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink">{item.name}</h2>
              <p className="mt-3 text-slate-600">{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
