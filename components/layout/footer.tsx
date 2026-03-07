import Link from "next/link";
import { routes } from "@/lib/routes";

const productLinks = [
  { href: routes.charts, label: "Charts" },
  { href: routes.artists, label: "Artists" },
  { href: routes.tracks, label: "Tracks" },
  { href: routes.countries, label: "Countries" },
  { href: routes.insights, label: "Insights" },
  { href: routes.admin, label: "Admin" }
];

const companyLinks = [
  { href: routes.about, label: "About" },
  { href: routes.contact, label: "Contact" },
  { href: routes.privacy, label: "Privacy" },
  { href: routes.terms, label: "Terms" }
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-ink">MusicMetrics</p>
          <p className="mt-3 max-w-xl text-sm text-slate-600">
            MusicMetrics provides launch-ready music intelligence pages with clearer chart context, artist momentum tracking,
            and editorial-first trend analysis.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-500">Trusted discovery structure for global music audiences</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {productLinks.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-ink" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-ink" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} MusicMetrics. All rights reserved.</p>
          <p>Editorial content is for informational use and may reference third-party platforms.</p>
        </div>
      </div>
    </footer>
  );
}
