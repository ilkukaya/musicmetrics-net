import Link from "next/link";
import { ContentNote } from "@/components/shared/content-note";
import { PageIntro } from "@/components/shared/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Terms", "Terms of use for MusicMetrics content, platform access, and editorial information.", "/terms");

export default function TermsPage() {
  return (
    <>
      <PageIntro title="Terms" description="Launch-ready terms of use for MusicMetrics visitors and partners." />
      <section className="mx-auto max-w-5xl space-y-6 px-6 py-12">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft text-slate-600">
          <h2 className="text-2xl font-semibold text-ink">Use of content</h2>
          <p className="mt-4">
            MusicMetrics publishes informational analytics and editorial content. Data points and summaries should be treated as reference material,
            not financial, legal, or investment advice.
          </p>
          <h3 className="mt-6 text-lg font-semibold text-ink">Platform availability</h3>
          <p className="mt-2">
            We continuously improve site structure and content quality. Access, features, and sections may evolve without prior notice as the product scales.
          </p>
          <h3 className="mt-6 text-lg font-semibold text-ink">Questions</h3>
          <p className="mt-2">
            For partnership or legal inquiries, please use the <Link href="/contact" className="font-semibold text-ink underline-offset-2 hover:underline">contact page</Link>.
          </p>
        </div>

        <ContentNote lastUpdated="November 2026" note="These terms are reviewed before major product, monetization, or partnership updates." />
      </section>
    </>
  );
}
