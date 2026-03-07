import Link from "next/link";
import { artists } from "@/lib/content";

export default function AdminArtistsPage() {
  return <section><h1 className="text-3xl font-bold text-ink">Artists Management</h1><div className="mt-6 space-y-2">{artists.map((a)=><Link key={a.id} href={`/admin/artists/${a.id}`} className="block rounded-lg border border-border bg-white p-3">{a.name}</Link>)}</div></section>;
}
