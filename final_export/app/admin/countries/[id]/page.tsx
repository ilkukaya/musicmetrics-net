import { notFound } from "next/navigation";
import { countries } from "@/lib/content";

export default function AdminCountryDetail({ params }: { params: { id: string } }) {
  const country = countries.find((item) => item.id === params.id);
  if (!country) notFound();
  return <section className="space-y-4"><h1 className="text-3xl font-bold text-ink">{country.name}</h1><p className="text-slate-600">Country metadata, featuring, and market notes are managed here.</p></section>;
}
