import { PageIntro } from "@/components/shared/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Terms", "Terms of use for MusicMetrics platform content and analytics.", "/terms");

export default function TermsPage() {
  return (
    <>
      <PageIntro title="Terms" description="Terms of use for MusicMetrics readers, partners, and operators." />
      <section className="mx-auto max-w-4xl px-6 py-12 space-y-4 text-slate-700">
        <p>MusicMetrics content is informational and should not be interpreted as legal or financial advice.</p>
        <p>Features, routes, and data surfaces may change as the product evolves.</p>
        <p>Commercial usage and redistribution rights require explicit permission.</p>
      </section>
    </>
  );
}
