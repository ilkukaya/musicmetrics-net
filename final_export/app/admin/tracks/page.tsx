import Link from "next/link";
import { tracks } from "@/lib/content";

export default function AdminTracksPage() {
  return <section><h1 className="text-3xl font-bold text-ink">Tracks Management</h1><div className="mt-6 space-y-2">{tracks.map((t)=><Link key={t.id} href={`/admin/tracks/${t.id}`} className="block rounded-lg border border-border bg-white p-3">{t.title}</Link>)}</div></section>;
}
