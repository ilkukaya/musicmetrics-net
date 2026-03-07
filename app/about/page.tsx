import Link from "next/link";
import { ContentNote } from "@/components/shared/content-note";
import { PageIntro } from "@/components/shared/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("About", "Learn how MusicMetrics is built to make chart and momentum analysis clearer for global audiences.", "/about");

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="About MusicMetrics"
        description="MusicMetrics is a modern music intelligence layer for global discovery, chart tracking, and editorial analysis."
      />
      <section className="mx-auto max-w-5xl space-y-6 px-6 py-12">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-ink">Our approach</h2>
          <p className="mt-4 text-slate-600">
            We prioritize clarity over noise. Each page is designed to help teams quickly understand momentum, regional context,
            and trend direction without digging through dense dashboards.
          </p>
          <p className="mt-4 text-slate-600">
            The platform is intentionally lightweight today and prepared for broader data and editorial expansion in future phases.
          </p>
        </div>

        <ContentNote lastUpdated="November 2026" />

        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
          <h2 className="text-xl font-semibold text-ink">Continue exploring</h2>
          <p className="mt-3 text-slate-600">
            Jump to the <Link className="font-semibold text-ink underline-offset-2 hover:underline" href="/charts">charts hub</Link>,
            review <Link className="font-semibold text-ink underline-offset-2 hover:underline" href="/artists">artist pages</Link>,
            or read the latest <Link className="font-semibold text-ink underline-offset-2 hover:underline" href="/insights">insights</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
