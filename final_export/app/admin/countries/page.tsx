import Link from "next/link";
import { countries } from "@/lib/content";

export default function AdminCountriesPage() {
  return <section><h1 className="text-3xl font-bold text-ink">Countries Management</h1><div className="mt-6 space-y-2">{countries.map((c)=><Link key={c.id} href={`/admin/countries/${c.id}`} className="block rounded-lg border border-border bg-white p-3">{c.name}</Link>)}</div></section>;
}
