import Link from "next/link";
import { routes } from "@/lib/routes";

const primaryNav = [
  ["Charts", routes.charts],
  ["Artists", routes.artists],
  ["Tracks", routes.tracks],
  ["Countries", routes.countries],
  ["Insights", routes.insights],
  ["Compare", routes.compare]
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={routes.home} className="text-xl font-bold tracking-tight text-ink">
          MusicMetrics
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {primaryNav.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-slate-600 transition hover:text-ink">
              {label}
            </Link>
          ))}
          <Link href={routes.adminLogin} className="rounded-lg border border-border px-3 py-2 text-sm font-semibold text-ink">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
