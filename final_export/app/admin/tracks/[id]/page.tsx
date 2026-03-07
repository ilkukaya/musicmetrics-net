import { notFound } from "next/navigation";
import { tracks } from "@/lib/content";

export default function AdminTrackDetail({ params }: { params: { id: string } }) {
  const track = tracks.find((item) => item.id === params.id);
  if (!track) notFound();
  return <section className="space-y-4"><h1 className="text-3xl font-bold text-ink">{track.title}</h1><p className="text-slate-600">Metadata editing, artist linking, and platform mapping controls are available in this panel.</p></section>;
}
