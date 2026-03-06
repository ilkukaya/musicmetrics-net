import { PageIntro } from "@/components/shared/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("About", "Why MusicMetrics is designed as a cleaner music analytics destination.", "/about");

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="About MusicMetrics"
        description="MusicMetrics is positioned as a modern music intelligence layer for global discovery, chart tracking, and editorial analysis."
      />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
          <p className="text-slate-600">
            The goal is simple: build a faster, clearer, more usable alternative to old-school stats pages while keeping the structure ready for
            future daily data refreshes, country-level expansion, affiliate content, and revenue growth.
          </p>
        </div>
      </section>
    </>
  );
}
