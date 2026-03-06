import { PageIntro } from "@/components/shared/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Contact", "Contact page placeholder for MusicMetrics partnerships and feedback.", "/contact");

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Contact" description="This placeholder page can later be connected to Netlify Forms or another lead capture flow." />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
          <p className="text-slate-600">Suggested future uses: partnerships, media inquiries, sponsored placements, and data licensing contact.</p>
        </div>
      </section>
    </>
  );
}
