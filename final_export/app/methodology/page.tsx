import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Methodology", "How MusicMetrics structures, normalizes, and interprets chart and platform signals.", "/methodology");

export default function MethodologyPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-ink">Methodology</h1>
      <div className="mt-6 space-y-5 text-slate-700 leading-8">
        <p>MusicMetrics combines source platform data snapshots with editorial interpretation. We distinguish measured signals from commentary.</p>
        <p>Each chart uses an explicit cadence (daily or weekly). Rankings and movement are interpreted within comparable periods to avoid distorted conclusions.</p>
        <p>Entity normalization maps artists, tracks, and countries into canonical records, so cross-platform trends can be analyzed consistently.</p>
      </div>
    </section>
  );
}
