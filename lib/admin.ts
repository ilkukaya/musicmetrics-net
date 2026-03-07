export type AdminStat = {
  label: string;
  value: string;
  trend: "up" | "stable";
  detail: string;
};

export type AdminWorkflow = {
  title: string;
  owner: string;
  status: "On track" | "Needs review";
  description: string;
  href: string;
};

export type AdminReleaseItem = {
  title: string;
  eta: string;
  impact: string;
};

export const adminStats: AdminStat[] = [
  {
    label: "Indexable pages",
    value: "18",
    trend: "up",
    detail: "Core hubs and policy pages are live and crawlable."
  },
  {
    label: "Editorial freshness",
    value: "Weekly",
    trend: "stable",
    detail: "Homepage and insights copy reviewed in weekly cadence."
  },
  {
    label: "Metadata coverage",
    value: "100%",
    trend: "up",
    detail: "Canonical, OG, and Twitter metadata are in place."
  },
  {
    label: "Operational risk",
    value: "Low",
    trend: "stable",
    detail: "Current release has no route-breaking changes."
  }
];

export const adminWorkflows: AdminWorkflow[] = [
  {
    title: "Content QA sweep",
    owner: "Editorial",
    status: "On track",
    description: "Validate homepage claims, legal page language, and internal links before publish.",
    href: "/insights"
  },
  {
    title: "Catalog gap review",
    owner: "Data / Content",
    status: "Needs review",
    description: "Identify missing artists/tracks/countries with high search potential for next sprint.",
    href: "/charts"
  },
  {
    title: "Trust and compliance check",
    owner: "Ops",
    status: "On track",
    description: "Review privacy, terms, and disclosures after each platform or analytics update.",
    href: "/privacy"
  }
];

export const adminReleaseItems: AdminReleaseItem[] = [
  {
    title: "Analytics environment integration",
    eta: "Phase 1.1",
    impact: "Enable measurable growth decisions without exposing secrets."
  },
  {
    title: "Structured data expansion",
    eta: "Phase 1.2",
    impact: "Strengthen search appearance and entity understanding."
  },
  {
    title: "Data ingestion architecture",
    eta: "Phase 2",
    impact: "Prepare Spotify/YouTube pipelines with clear staging layers."
  }
];
