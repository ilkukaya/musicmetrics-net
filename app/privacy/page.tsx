import { PageIntro } from "@/components/shared/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Privacy Policy", "Basic privacy page for the MusicMetrics MVP.", "/privacy");

export default function PrivacyPage() {
  return (
    <>
      <PageIntro title="Privacy Policy" description="A simple placeholder privacy page is included for launch readiness." />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft text-slate-600">
          <p>MusicMetrics currently does not collect user account data in this MVP. Analytics, newsletter, and advertising integrations can be documented here in phase 2.</p>
        </div>
      </section>
    </>
  );
}
