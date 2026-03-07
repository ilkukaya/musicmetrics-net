import Link from "next/link";
import { AdminWorkflow } from "@/lib/admin";

type Props = {
  items: AdminWorkflow[];
};

export function WorkflowList({ items }: Props) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <article key={item.title} className="rounded-2xl border border-border bg-slate-50 p-5">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-semibold text-ink">{item.title}</p>
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${item.status === "On track" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
              {item.status}
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-600">Owner: {item.owner}</p>
          <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          <Link href={item.href} className="mt-3 inline-flex text-sm font-semibold text-ink underline-offset-2 hover:underline">
            Open related page
          </Link>
        </article>
      ))}
    </div>
  );
}
