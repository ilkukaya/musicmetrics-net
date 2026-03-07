import Link from "next/link";
import { ContentNote } from "@/components/shared/content-note";
import { PageIntro } from "@/components/shared/page-intro";
import { routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";

const kpis = [
  { label: "Published pages", value: "18", detail: "Core routes and legal pages active" },
  { label: "Editorial sections", value: "5", detail: "Charts, artists, tracks, countries, insights" },
  { label: "SEO readiness", value: "High", detail: "Canonical + OG defaults configured" },
  { label: "Next release focus", value: "Data ops", detail: "Automation and ingestion prep" }
];

const workflows = [
  {
    title: "Content operations",
    description: "Keep homepage modules and insight summaries fresh each week.",
    cta: "Open insights",
    href: routes.insights
  },
  {
    title: "Catalog health",
    description: "Review chart, artist, and track coverage for missing verticals.",
    cta: "Open charts",
    href: routes.charts
  },
  {
    title: "Trust & compliance",
    description: "Periodically validate policy pages and editorial disclaimers.",
    cta: "Open privacy",
    href: routes.privacy
  }
];

export const metadata = buildMetadata(
  "Admin Console",
  "Internal admin overview for managing MusicMetrics publishing priorities and operational checkpoints.",
  "/admin"
);

export default function AdminPage() {
  return (
    <>
      <PageIntro
        title="Admin Console"
        description="Operational dashboard for MusicMetrics publishing quality, content cadence, and launch reliability."
      />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 rounded-3xl border border-blue-200 bg-blue-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Internal use</p>
          <h2 className="mt-2 text-2xl font-semibold text-ink">Professional control surface for production operations</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            This first admin iteration focuses on editorial and publishing visibility. Authentication, role permissions, and
            write actions can be layered in a future secure phase.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((item) => (
            <article key={item.label} className="rounded-3xl border border-border bg-white p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.label}</p>
              <p className="mt-3 text-3xl font-bold tracking-tight text-ink">{item.value}</p>
              <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-border bg-white p-7 shadow-soft">
            <h3 className="text-xl font-semibold text-ink">Operational workflows</h3>
            <p className="mt-2 text-slate-600">Use these workflows to keep the public site polished and credible.</p>
            <div className="mt-6 space-y-4">
              {workflows.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-slate-50 p-4">
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  <Link href={item.href} className="mt-3 inline-flex text-sm font-semibold text-ink underline-offset-2 hover:underline">
                    {item.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-white p-7 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">Quick links</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li><Link href={routes.home} className="hover:text-ink">Home</Link></li>
                <li><Link href={routes.artists} className="hover:text-ink">Artists index</Link></li>
                <li><Link href={routes.tracks} className="hover:text-ink">Tracks index</Link></li>
                <li><Link href={routes.contact} className="hover:text-ink">Contact page</Link></li>
                <li><Link href={routes.terms} className="hover:text-ink">Terms page</Link></li>
              </ul>
            </div>

            <ContentNote
              lastUpdated="November 2026"
              note="Admin console content should be reviewed alongside each production release."
            />
          </aside>
        </div>
      </section>
    </>
  );
}
