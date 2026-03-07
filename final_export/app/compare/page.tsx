import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("Compare", "Compare artists, tracks, and chart momentum in one place.", "/compare");

export default function ComparePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-ink">Compare</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        Phase-1 compare foundation: this page establishes UX and route architecture for side-by-side comparisons of artists,
        tracks, and chart trends. In phase 2, it will be powered by normalized daily metrics.
      </p>
      <div className="mt-8 rounded-2xl border border-border bg-white p-6">
        <p className="font-semibold text-ink">Planned compare dimensions</p>
        <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-2">
          <li>Artist growth trajectory</li>
          <li>Track momentum and chart spread</li>
          <li>Country-level adoption speed</li>
        </ul>
      </div>
    </section>
  );
}
