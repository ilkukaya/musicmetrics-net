import Link from "next/link";
import { routes } from "@/lib/routes";

const items = [
  ["Charts", routes.charts],
  ["Artists", routes.artists],
  ["Tracks", routes.tracks],
  ["Countries", routes.countries],
  ["Insights", routes.insights]
];

export function Header() {
  return (
    <header className="border-b border-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={routes.home} className="text-xl font-bold tracking-tight text-ink">
          MusicMetrics
        </Link>
        <nav className="hidden gap-6 md:flex">
          {items.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-slate-600 transition hover:text-ink">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
