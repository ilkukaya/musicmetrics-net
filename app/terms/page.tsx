import { PageIntro } from "@/components/shared/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Terms", "Basic terms page for the MusicMetrics MVP.", "/terms");

export default function TermsPage() {
  return (
    <>
      <PageIntro title="Terms" description="A launch-ready placeholder for terms of use and content disclaimers." />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft text-slate-600">
          <p>MusicMetrics publishes informational analytics and editorial content. Formal commercial terms can be expanded as monetization and partnerships are added.</p>
        </div>
      </section>
    </>
  );
}
