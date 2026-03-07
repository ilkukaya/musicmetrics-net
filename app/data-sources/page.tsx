import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Data Sources", "Data source transparency for MusicMetrics chart and performance intelligence.", "/data-sources");

export default function DataSourcesPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-ink">Data Sources</h1>
      <div className="mt-6 space-y-4 text-slate-700">
        <p><strong>Spotify:</strong> artist metadata, track metadata, popularity-adjacent signals where available.</p>
        <p><strong>YouTube Data API:</strong> channel and video metadata, subscriber and view indicators where available.</p>
        <p><strong>Internal editorial layer:</strong> analytical interpretation, context, and market narratives linked to source signals.</p>
      </div>
    </section>
  );
}
