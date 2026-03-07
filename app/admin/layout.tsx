import Link from "next/link";
import { routes } from "@/lib/routes";

const nav = [
  ["Dashboard", routes.adminDashboard],
  ["Artists", routes.adminArtists],
  ["Tracks", routes.adminTracks],
  ["Charts", routes.adminCharts],
  ["Countries", routes.adminCountries],
  ["Insights", routes.adminInsights],
  ["Sync Jobs", routes.adminSyncJobs],
  ["Source Mapping", routes.adminSourceMapping],
  ["SEO", routes.adminSeo],
  ["Redirects", routes.adminRedirects],
  ["Settings", routes.adminSettings]
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[220px_1fr]">
      <aside className="rounded-2xl border border-border bg-white p-4 h-fit">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Admin</p>
        <nav className="space-y-2 text-sm">
          {nav.map(([label, href]) => <Link key={href} href={href} className="block rounded-md px-2 py-1 text-slate-700 hover:bg-slate-100">{label}</Link>)}
        </nav>
      </aside>
      <div>{children}</div>
    </div>
  );
}
