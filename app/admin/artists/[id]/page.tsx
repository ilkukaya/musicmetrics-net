import { notFound } from "next/navigation";
import { artists } from "@/lib/content";

export default function AdminArtistDetail({ params }: { params: { id: string } }) {
  const artist = artists.find((item) => item.id === params.id);
  if (!artist) notFound();
  return <section className="space-y-4"><h1 className="text-3xl font-bold text-ink">{artist.name}</h1><p className="text-slate-600">Editorial fields, source mappings, and manual resync actions belong here.</p></section>;
}
