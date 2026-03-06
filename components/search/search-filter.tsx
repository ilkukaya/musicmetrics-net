"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { artists, charts, countries, tracks } from "@/lib/data";

type SearchItem = {
  label: string;
  href: string;
  meta: string;
};

export function SearchFilter() {
  const [query, setQuery] = useState("");

  const items: SearchItem[] = [
    ...charts.map((item) => ({ label: item.title, href: `/charts/${item.slug}`, meta: `${item.region} chart` })),
    ...artists.map((item) => ({ label: item.name, href: `/artists/${item.slug}`, meta: `${item.genre} artist` })),
    ...tracks.map((item) => ({ label: item.title, href: `/tracks/${item.slug}`, meta: `${item.artist} track` })),
    ...countries.map((item) => ({ label: item.name, href: `/countries/${item.slug}`, meta: "country page" }))
  ];

  const filtered = useMemo(() => {
    if (!query.trim()) return items.slice(0, 8);
    const q = query.toLowerCase();
    return items.filter((item) => `${item.label} ${item.meta}`.toLowerCase().includes(q)).slice(0, 8);
  }, [items, query]);

  return (
    <div className="rounded-3xl border border-border bg-white p-5 shadow-soft">
      <label htmlFor="site-search" className="mb-3 block text-sm font-semibold text-ink">
        Search charts, artists, tracks, and countries
      </label>
      <input
        id="site-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search MusicMetrics"
        className="w-full rounded-xl border border-border px-4 py-3 outline-none ring-0 transition focus:border-accent"
      />
      <div className="mt-4 grid gap-3">
        {filtered.map((item) => (
          <Link key={`${item.href}-${item.label}`} href={item.href} className="rounded-2xl border border-border p-4 transition hover:border-accent hover:bg-blue-50">
            <div className="font-semibold text-ink">{item.label}</div>
            <div className="text-sm text-slate-500">{item.meta}</div>
          </Link>
        ))}
        {filtered.length === 0 ? <p className="text-sm text-slate-500">No matching entries yet.</p> : null}
      </div>
    </div>
  );
}
