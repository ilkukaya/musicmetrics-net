import Link from "next/link";
import { ContentNote } from "@/components/shared/content-note";
import { PageIntro } from "@/components/shared/page-intro";
import { StatCard } from "@/components/admin/stat-card";
import { WorkflowList } from "@/components/admin/workflow-list";
import { adminReleaseItems, adminStats, adminWorkflows } from "@/lib/admin";
import { routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  "Admin Studio",
  "MusicMetrics internal admin studio for release readiness, editorial operations, and production quality tracking.",
  "/admin"
);

export default function AdminPage() {
  return (
    <>
      <PageIntro
        title="Admin Studio"
        description="A cleaner internal panel for release quality, editorial operations, and production confidence."
      />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 rounded-3xl border border-indigo-200 bg-indigo-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Internal operations</p>
          <h2 className="mt-2 text-2xl font-semibold text-ink">Professional release command center</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            This page provides a focused read of operational health. It is intentionally lightweight, designed to evolve into
            authenticated tooling in a later secure phase.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {adminStats.map((item) => (
            <StatCard key={item.label} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-border bg-white p-7 shadow-soft">
            <h3 className="text-xl font-semibold text-ink">Workflow board</h3>
            <p className="mt-2 text-slate-600">Track priorities and route owners before each production publish.</p>
            <div className="mt-6">
              <WorkflowList items={adminWorkflows} />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-white p-7 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">Planned releases</h3>
              <ul className="mt-4 space-y-4 text-sm text-slate-600">
                {adminReleaseItems.map((item) => (
                  <li key={item.title}>
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="mt-1">ETA: {item.eta}</p>
                    <p className="mt-1">{item.impact}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-white p-7 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">Quick links</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li><Link href={routes.home} className="hover:text-ink">Home</Link></li>
                <li><Link href={routes.charts} className="hover:text-ink">Charts</Link></li>
                <li><Link href={routes.artists} className="hover:text-ink">Artists</Link></li>
                <li><Link href={routes.contact} className="hover:text-ink">Contact</Link></li>
              </ul>
            </div>

            <ContentNote
              lastUpdated="November 2026"
              note="Admin Studio notes should be reviewed whenever publishing process or SEO setup changes."
            />
          </aside>
        </div>
      </section>
    </>
  );
}
