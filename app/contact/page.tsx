import { PageIntro } from "@/components/shared/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Contact", "Contact MusicMetrics for partnerships, editorial, and platform requests.", "/contact");

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Contact" description="For partnerships, media, and platform collaboration inquiries." />
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-border bg-white p-6 text-slate-700">
          <p>Current contact operations are managed manually during phase 1.</p>
          <p className="mt-3">Use your internal ownership channel to route inbound requests and update this page when official contact systems are active.</p>
        </div>
      </section>
    </>
  );
}
