import { notFound } from "next/navigation";
import { PageIntro } from "@/components/shared/page-intro";
import { countries, getCountryBySlug } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return countries.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props) {
  const item = getCountryBySlug(params.slug);
  if (!item) return {};
  return buildMetadata(item.name, item.summary, `/countries/${item.slug}`);
}

export default function CountryDetailPage({ params }: Props) {
  const item = getCountryBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      <PageIntro title={item.name} description={item.summary} />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft text-slate-600">
          <p><strong>Spotlight:</strong> {item.spotlight}</p>
          <p className="mt-6">Country pages are important because they support regional trend tracking, cleaner user intent, and long-tail search expansion.</p>
        </div>
      </section>
    </>
  );
}
