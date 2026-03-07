import Link from "next/link";
import { ContentNote } from "@/components/shared/content-note";
import { PageIntro } from "@/components/shared/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Privacy Policy", "Read how MusicMetrics handles information, analytics tooling, and platform privacy expectations.", "/privacy");

export default function PrivacyPage() {
  return (
    <>
      <PageIntro title="Privacy Policy" description="How MusicMetrics handles data in the current production-ready MVP." />
      <section className="mx-auto max-w-5xl space-y-6 px-6 py-12">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft text-slate-600">
          <h2 className="text-2xl font-semibold text-ink">Overview</h2>
          <p className="mt-4">
            MusicMetrics currently does not provide user accounts, payments, or direct personal profile features. The site is focused on
            publicly visible music intelligence and editorial content.
          </p>
          <h3 className="mt-6 text-lg font-semibold text-ink">Analytics and cookies</h3>
          <p className="mt-2">
            Lightweight analytics tooling may be added in future production releases to understand aggregate traffic and improve content quality.
            Any such updates will be reflected on this page.
          </p>
          <h3 className="mt-6 text-lg font-semibold text-ink">Contact</h3>
          <p className="mt-2">
            For privacy-related questions, use the <Link href="/contact" className="font-semibold text-ink underline-offset-2 hover:underline">contact page</Link>.
          </p>
        </div>

        <ContentNote lastUpdated="November 2026" note="This policy will expand as analytics and newsletter integrations are introduced." />
      </section>
    </>
  );
}
