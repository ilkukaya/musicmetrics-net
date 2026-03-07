import { PageIntro } from "@/components/shared/page-intro";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("About", "About MusicMetrics and its product philosophy.", "/about");

export default function AboutPage() {
  return (
    <>
      <PageIntro title="About MusicMetrics" description="We build editorial-grade music performance intelligence for global decision makers." />
      <section className="mx-auto max-w-4xl px-6 py-12 space-y-4 text-slate-700">
        <p>MusicMetrics is designed for teams that need speed and clarity, not dashboard noise.</p>
        <p>Our mission is to combine structured data with credible editorial interpretation, making trend signals usable for planning and execution.</p>
      </section>
    </>
  );
}
