import Link from "next/link";
import { ContentNote } from "@/components/shared/content-note";
import { PageIntro } from "@/components/shared/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Contact", "Contact MusicMetrics for partnerships, media, and product feedback.", "/contact");

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Contact" description="Reach the MusicMetrics team for partnerships, media opportunities, or feedback." />
      <section className="mx-auto max-w-5xl space-y-6 px-6 py-12">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-ink">How to reach us</h2>
          <p className="mt-4 text-slate-600">
            This page is ready to connect with Netlify Forms in a future iteration. For now, use your preferred outreach channel via project ownership.
          </p>
          <ul className="mt-6 space-y-3 text-slate-600">
            <li><span className="font-semibold text-ink">Partnerships:</span> sponsorships, affiliate collaborations, and data initiatives.</li>
            <li><span className="font-semibold text-ink">Editorial:</span> trend briefings, media mentions, and quote requests.</li>
            <li><span className="font-semibold text-ink">Product feedback:</span> UX issues, content quality, and roadmap suggestions.</li>
          </ul>
          <p className="mt-6 text-slate-600">
            For legal topics, review our <Link href="/terms" className="font-semibold text-ink underline-offset-2 hover:underline">terms</Link> and
            <Link href="/privacy" className="ml-1 font-semibold text-ink underline-offset-2 hover:underline">privacy policy</Link>.
          </p>
        </div>

        <ContentNote lastUpdated="November 2026" note="Contact operations are updated as dedicated communication workflows are launched." />
      </section>
    </>
  );
}
