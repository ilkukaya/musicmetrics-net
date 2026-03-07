"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { artists, charts, countries, tracks } from "@/lib/content";

export function SearchFilter() {
  const [query, setQuery] = useState("");

  const items = useMemo(
    () => [
      ...charts.map((item) => ({ label: item.title, sub: "Chart", href: `/charts/${item.slug}` })),
      ...artists.map((item) => ({ label: item.name, sub: "Artist", href: `/artists/${item.slug}` })),
      ...tracks.map((item) => ({ label: item.title, sub: "Track", href: `/tracks/${item.slug}` })),
      ...countries.map((item) => ({ label: item.name, sub: "Country", href: `/countries/${item.slug}` }))
    ],
    []
  );

  const filtered = items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())).slice(0, 8);

  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
      <p className="mb-4 text-lg font-semibold text-ink">Quick search</p>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search artists, tracks, charts, countries"
        className="w-full rounded-xl border border-border px-4 py-3"
      />
      <div className="mt-4 space-y-2">
        {filtered.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-xl border border-border p-3 hover:border-accent">
            <p className="font-medium text-ink">{item.label}</p>
            <p className="text-sm text-slate-500">{item.sub}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
