import { Chart } from "./types";

export const charts: Chart[] = [
  {
    slug: "global-spotify-movers",
    title: "Global Spotify Movers",
    description: "Daily breakout artists and tracks gaining traction across Spotify ecosystems.",
    period: "Daily",
    region: "Global",
    metric: "Momentum score"
  },
  {
    slug: "youtube-fastest-risers",
    title: "YouTube Fastest Risers",
    description: "Video-led music growth snapshots across official channels and breakout releases.",
    period: "Weekly",
    region: "Global",
    metric: "View growth"
  },
  {
    slug: "turkey-streaming-watch",
    title: "Turkey Streaming Watch",
    description: "Regional tracking page for artists and releases outperforming their local baseline.",
    period: "Daily",
    region: "Turkey",
    metric: "Acceleration index"
  }
];
