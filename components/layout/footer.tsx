import Link from "next/link";
import { routes } from "@/lib/routes";

const productLinks = [
  ["Charts", routes.charts],
  ["Artists", routes.artists],
  ["Tracks", routes.tracks],
  ["Countries", routes.countries],
  ["Insights", routes.insights],
  ["Search", routes.search],
  ["Compare", routes.compare]
];

const trustLinks = [
  ["Methodology", routes.methodology],
  ["Data Sources", routes.dataSources],
  ["About", routes.about],
  ["Contact", routes.contact],
  ["Privacy", routes.privacy],
  ["Terms", routes.terms]
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-ink">MusicMetrics</p>
          <p className="mt-3 text-sm text-slate-600">
            Global music performance intelligence for fans, chart watchers, managers, labels, and marketing teams.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-500">Monetization-ready · editorial-grade · data-first</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">Platform</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {productLinks.map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-ink">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">Trust & Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {trustLinks.map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-ink">{label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
