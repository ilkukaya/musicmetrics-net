import Link from "next/link";
import { routes } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-ink">MusicMetrics</p>
          <p className="max-w-xl text-sm text-slate-600">
            Cleaner music intelligence for fans, managers, indie labels, and chart watchers.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          <Link href={routes.about}>About</Link>
          <Link href={routes.contact}>Contact</Link>
          <Link href={routes.privacy}>Privacy</Link>
          <Link href={routes.terms}>Terms</Link>
        </div>
      </div>
    </footer>
  );
}
