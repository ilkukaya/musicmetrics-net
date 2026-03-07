import Link from "next/link";
import { PageIntro } from "@/components/shared/page-intro";
import { countries } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Countries", "Country-level trend pages for regional music intelligence.", "/countries");

export default function CountriesPage() {
  return (
    <>
      <PageIntro title="Countries" description="Regional market intelligence and trend summaries." />
      <section className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-2">
        {countries.map((item) => (
          <Link key={item.slug} href={`/countries/${item.slug}`} className="rounded-3xl border border-border bg-white p-7 shadow-soft">
            <h2 className="text-2xl font-semibold text-ink">{item.name}</h2>
            <p className="mt-2 text-sm text-slate-500">{item.region}</p>
            <p className="mt-3 text-slate-600">{item.summary}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
