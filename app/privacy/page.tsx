import { PageIntro } from "@/components/shared/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Privacy", "Privacy policy for MusicMetrics platform and analytics processing.", "/privacy");

export default function PrivacyPage() {
  return (
    <>
      <PageIntro title="Privacy Policy" description="How MusicMetrics handles data and analytics in the current release." />
      <section className="mx-auto max-w-4xl px-6 py-12 space-y-4 text-slate-700">
        <p>MusicMetrics does not provide public user accounts in phase 1.</p>
        <p>Platform analytics may be used for aggregate traffic insights and product quality improvements.</p>
        <p>Policy updates are published on this page as integration scope expands.</p>
      </section>
    </>
  );
}
