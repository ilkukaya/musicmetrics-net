export type Country = {
  id: string;
  code: string;
  slug: string;
  name: string;
  region: string;
  summary: string;
};

export type Artist = {
  id: string;
  slug: string;
  name: string;
  countryCode: string;
  genres: string[];
  monthlyListenersEstimate: number;
  profile: string;
  image: string;
};

export type Track = {
  id: string;
  slug: string;
  title: string;
  artistSlug: string;
  releaseDate: string;
  momentum: "Rising" | "Stable" | "Breakout";
  snapshot: string;
};

export type Chart = {
  id: string;
  slug: string;
  title: string;
  chartType: "Top 50" | "Viral" | "Breakout";
  sourcePlatform: "Spotify" | "YouTube";
  countryCode: string | null;
  cadence: "Daily" | "Weekly";
  description: string;
};

export type Insight = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  body: string;
  related: { artists?: string[]; tracks?: string[]; charts?: string[]; countries?: string[] };
};

export const countries: Country[] = [
  { id: "c-tr", code: "TR", slug: "turkiye", name: "Türkiye", region: "Europe / MENA", summary: "Strong pop and rap acceleration with short chart cycles." },
  { id: "c-us", code: "US", slug: "united-states", name: "United States", region: "North America", summary: "Cross-platform momentum with rapid creator-led spikes." },
  { id: "c-gb", code: "GB", slug: "united-kingdom", name: "United Kingdom", region: "Europe", summary: "Editorial playlists and radio still shape sustained discovery." },
  { id: "c-de", code: "DE", slug: "germany", name: "Germany", region: "Europe", summary: "Catalog loyalty and local-language growth create durable runs." },
  { id: "c-fr", code: "FR", slug: "france", name: "France", region: "Europe", summary: "High replay behavior with local and francophone strength." },
  { id: "c-br", code: "BR", slug: "brazil", name: "Brazil", region: "LATAM", summary: "Genre communities trigger large breakout velocity." },
  { id: "c-mx", code: "MX", slug: "mexico", name: "Mexico", region: "LATAM", summary: "Streaming depth supports long-tail artist growth." },
  { id: "c-in", code: "IN", slug: "india", name: "India", region: "APAC", summary: "Video-first discovery and regional diversity drive scale." },
  { id: "c-jp", code: "JP", slug: "japan", name: "Japan", region: "APAC", summary: "High catalog retention with unique local hit trajectories." },
  { id: "c-kr", code: "KR", slug: "south-korea", name: "South Korea", region: "APAC", summary: "Fan intensity and social velocity create sharp ranking shifts." }
];

export const artists: Artist[] = [
  { id: "a1", slug: "nova-saint", name: "Nova Saint", countryCode: "US", genres: ["Alt Pop", "Synth Pop"], monthlyListenersEstimate: 4200000, profile: "US alt-pop act with strong short-form discovery conversion.", image: "/icon.svg" },
  { id: "a2", slug: "aris-kade", name: "Aris Kade", countryCode: "GB", genres: ["Electronic", "Dance"], monthlyListenersEstimate: 3800000, profile: "UK producer-artist with consistent playlist retention.", image: "/icon.svg" },
  { id: "a3", slug: "leya-rossi", name: "Leya Rossi", countryCode: "IT", genres: ["Pop", "Latin Pop"], monthlyListenersEstimate: 5100000, profile: "Bilingual vocalist with strong Mediterranean market overlap.", image: "/icon.svg" },
  { id: "a4", slug: "midnight-radio", name: "Midnight Radio", countryCode: "DE", genres: ["Indie", "Alternative"], monthlyListenersEstimate: 2600000, profile: "German indie project with deep catalog engagement.", image: "/icon.svg" },
  { id: "a5", slug: "violet-line", name: "Violet Line", countryCode: "FR", genres: ["Pop", "R&B"], monthlyListenersEstimate: 3400000, profile: "French duo balancing editorial support and fan traffic.", image: "/icon.svg" },
  { id: "a6", slug: "atlas-kid", name: "Atlas Kid", countryCode: "TR", genres: ["Hip-Hop", "Pop Rap"], monthlyListenersEstimate: 6200000, profile: "Top Turkish crossover artist with rapid chart re-entry cycles.", image: "/icon.svg" },
  { id: "a7", slug: "nara-echo", name: "Nara Echo", countryCode: "JP", genres: ["J-Pop", "Dance"], monthlyListenersEstimate: 4700000, profile: "Japan-based singer known for high replay rates.", image: "/icon.svg" },
  { id: "a8", slug: "seoul-bloom", name: "Seoul Bloom", countryCode: "KR", genres: ["K-Pop", "Electronic"], monthlyListenersEstimate: 7500000, profile: "Group with synchronized growth across video and streaming.", image: "/icon.svg" },
  { id: "a9", slug: "rio-drive", name: "Rio Drive", countryCode: "BR", genres: ["Brazilian Pop", "Funk"], monthlyListenersEstimate: 5500000, profile: "Brazilian act with major user-generated content traction.", image: "/icon.svg" },
  { id: "a10", slug: "luna-rivera", name: "Luna Rivera", countryCode: "MX", genres: ["Regional Pop", "Latin"], monthlyListenersEstimate: 4900000, profile: "Mexico-based artist with sustained regional momentum.", image: "/icon.svg" },
  { id: "a11", slug: "signal-room", name: "Signal Room", countryCode: "US", genres: ["Indie Rock"], monthlyListenersEstimate: 1800000, profile: "Alternative band with high completion rates on long-form tracks.", image: "/icon.svg" },
  { id: "a12", slug: "aurora-vega", name: "Aurora Vega", countryCode: "ES", genres: ["Pop", "Dance"], monthlyListenersEstimate: 2950000, profile: "European pop artist with strong festival-season spikes.", image: "/icon.svg" },
  { id: "a13", slug: "delta-haus", name: "Delta Haus", countryCode: "DE", genres: ["House", "Electronic"], monthlyListenersEstimate: 2400000, profile: "Club-focused project with consistent underground-to-mainstream crossover.", image: "/icon.svg" },
  { id: "a14", slug: "ocean-ink", name: "Ocean Ink", countryCode: "GB", genres: ["Indie Pop"], monthlyListenersEstimate: 2100000, profile: "Band with rising college-market conversion in English-speaking countries.", image: "/icon.svg" },
  { id: "a15", slug: "prism-park", name: "Prism Park", countryCode: "KR", genres: ["Pop", "R&B"], monthlyListenersEstimate: 5300000, profile: "Korean quartet with balanced growth and low churn.", image: "/icon.svg" },
  { id: "a16", slug: "samir-vale", name: "Samir Vale", countryCode: "IN", genres: ["Hindi Pop", "Film"], monthlyListenersEstimate: 6800000, profile: "India-based vocalist with strong release-week velocity.", image: "/icon.svg" },
  { id: "a17", slug: "arya-noir", name: "Arya Noir", countryCode: "IN", genres: ["Indie", "Soul"], monthlyListenersEstimate: 1700000, profile: "Independent artist with high save-to-stream conversion.", image: "/icon.svg" },
  { id: "a18", slug: "north-harbor", name: "North Harbor", countryCode: "CA", genres: ["Singer-Songwriter"], monthlyListenersEstimate: 1900000, profile: "Acoustic-led project with strong editorial anchor placements.", image: "/icon.svg" },
  { id: "a19", slug: "echo-madrid", name: "Echo Madrid", countryCode: "ES", genres: ["Latin", "Urban"], monthlyListenersEstimate: 3600000, profile: "Urban-pop artist performing strongly in Iberia and LATAM.", image: "/icon.svg" },
  { id: "a20", slug: "kyoto-lights", name: "Kyoto Lights", countryCode: "JP", genres: ["City Pop", "Indie"], monthlyListenersEstimate: 2250000, profile: "Nostalgia-forward project with repeat-listen heavy audience.", image: "/icon.svg" }
];

export const tracks: Track[] = [
  { id: "t1", slug: "afterglow-signal", title: "Afterglow Signal", artistSlug: "nova-saint", releaseDate: "2026-08-11", momentum: "Breakout", snapshot: "+18 chart positions in 7 days" },
  { id: "t2", slug: "hollow-sun", title: "Hollow Sun", artistSlug: "aris-kade", releaseDate: "2026-07-02", momentum: "Rising", snapshot: "Strong multi-country uptake" },
  { id: "t3", slug: "night-bloom", title: "Night Bloom", artistSlug: "leya-rossi", releaseDate: "2026-06-21", momentum: "Stable", snapshot: "High retention in EU markets" },
  { id: "t4", slug: "raster-heart", title: "Raster Heart", artistSlug: "midnight-radio", releaseDate: "2026-05-12", momentum: "Rising", snapshot: "Playlist support returning" },
  { id: "t5", slug: "blue-static", title: "Blue Static", artistSlug: "violet-line", releaseDate: "2026-08-30", momentum: "Breakout", snapshot: "Viral clips translating to streams" },
  { id: "t6", slug: "city-current", title: "City Current", artistSlug: "atlas-kid", releaseDate: "2026-09-03", momentum: "Breakout", snapshot: "Turkey Top 10 entry" },
  { id: "t7", slug: "mirror-run", title: "Mirror Run", artistSlug: "nara-echo", releaseDate: "2026-04-09", momentum: "Stable", snapshot: "Sustained APAC replay" },
  { id: "t8", slug: "neon-march", title: "Neon March", artistSlug: "seoul-bloom", releaseDate: "2026-08-01", momentum: "Rising", snapshot: "Video-to-audio conversion improving" },
  { id: "t9", slug: "rio-lines", title: "Rio Lines", artistSlug: "rio-drive", releaseDate: "2026-07-13", momentum: "Breakout", snapshot: "Brazil viral top-tier performance" },
  { id: "t10", slug: "frontera", title: "Frontera", artistSlug: "luna-rivera", releaseDate: "2026-09-01", momentum: "Rising", snapshot: "Fast LATAM spread" },
  { id: "t11", slug: "aperture", title: "Aperture", artistSlug: "signal-room", releaseDate: "2026-03-11", momentum: "Stable", snapshot: "Long-tail catalog support" },
  { id: "t12", slug: "viento", title: "Viento", artistSlug: "aurora-vega", releaseDate: "2026-08-08", momentum: "Rising", snapshot: "Festival uplift" },
  { id: "t13", slug: "glass-floor", title: "Glass Floor", artistSlug: "delta-haus", releaseDate: "2026-07-29", momentum: "Rising", snapshot: "Club chart crossover" },
  { id: "t14", slug: "northbound", title: "Northbound", artistSlug: "ocean-ink", releaseDate: "2026-06-05", momentum: "Stable", snapshot: "Steady UK performance" },
  { id: "t15", slug: "saturn-room", title: "Saturn Room", artistSlug: "prism-park", releaseDate: "2026-09-02", momentum: "Breakout", snapshot: "High fan-campaign intensity" },
  { id: "t16", slug: "loud-silence", title: "Loud Silence", artistSlug: "samir-vale", releaseDate: "2026-07-14", momentum: "Rising", snapshot: "India top playlists" },
  { id: "t17", slug: "opal-street", title: "Opal Street", artistSlug: "arya-noir", releaseDate: "2026-05-28", momentum: "Stable", snapshot: "Consistent indie discovery" },
  { id: "t18", slug: "harborline", title: "Harborline", artistSlug: "north-harbor", releaseDate: "2026-07-07", momentum: "Rising", snapshot: "Canada/US crossover" },
  { id: "t19", slug: "solar-fade", title: "Solar Fade", artistSlug: "echo-madrid", releaseDate: "2026-08-17", momentum: "Breakout", snapshot: "Spain and Mexico dual momentum" },
  { id: "t20", slug: "yume-echo", title: "Yume Echo", artistSlug: "kyoto-lights", releaseDate: "2026-08-03", momentum: "Rising", snapshot: "Japan city-pop revival" },
  { id: "t21", slug: "quiet-circuit", title: "Quiet Circuit", artistSlug: "nova-saint", releaseDate: "2026-04-18", momentum: "Stable", snapshot: "Back-catalog resurfacing" },
  { id: "t22", slug: "open-grid", title: "Open Grid", artistSlug: "aris-kade", releaseDate: "2026-08-09", momentum: "Rising", snapshot: "Climbing electronic charts" },
  { id: "t23", slug: "rosa-norte", title: "Rosa Norte", artistSlug: "leya-rossi", releaseDate: "2026-08-20", momentum: "Breakout", snapshot: "Strong southern Europe growth" },
  { id: "t24", slug: "after-rain", title: "After Rain", artistSlug: "midnight-radio", releaseDate: "2026-02-13", momentum: "Stable", snapshot: "Catalog retention" },
  { id: "t25", slug: "pulse-code", title: "Pulse Code", artistSlug: "violet-line", releaseDate: "2026-09-04", momentum: "Breakout", snapshot: "High first-week acceleration" },
  { id: "t26", slug: "ankara-nights", title: "Ankara Nights", artistSlug: "atlas-kid", releaseDate: "2026-06-18", momentum: "Rising", snapshot: "Regional-to-global spillover" },
  { id: "t27", slug: "shibuya-signal", title: "Shibuya Signal", artistSlug: "nara-echo", releaseDate: "2026-05-01", momentum: "Stable", snapshot: "Steady long-tail streams" },
  { id: "t28", slug: "ultraviolet-run", title: "Ultraviolet Run", artistSlug: "seoul-bloom", releaseDate: "2026-09-06", momentum: "Breakout", snapshot: "Global fanbase activation" },
  { id: "t29", slug: "rio-afterhours", title: "Rio Afterhours", artistSlug: "rio-drive", releaseDate: "2026-09-07", momentum: "Breakout", snapshot: "Massive short-form pickup" },
  { id: "t30", slug: "casa-abierta", title: "Casa Abierta", artistSlug: "luna-rivera", releaseDate: "2026-07-01", momentum: "Rising", snapshot: "Playlist + editorial boost" }
];

export const charts: Chart[] = [
  { id: "ch1", slug: "global-spotify-top-50", title: "Global Spotify Top 50", chartType: "Top 50", sourcePlatform: "Spotify", countryCode: null, cadence: "Daily", description: "Global stream-weighted top performers across Spotify markets." },
  { id: "ch2", slug: "global-youtube-movers", title: "Global YouTube Movers", chartType: "Breakout", sourcePlatform: "YouTube", countryCode: null, cadence: "Daily", description: "Tracks with fastest velocity gain in short time windows." },
  { id: "ch3", slug: "turkiye-streaming-watch", title: "Türkiye Streaming Watch", chartType: "Top 50", sourcePlatform: "Spotify", countryCode: "TR", cadence: "Weekly", description: "Key Turkish chart movements and regional breakout tracking." },
  { id: "ch4", slug: "us-viral-radar", title: "US Viral Radar", chartType: "Viral", sourcePlatform: "YouTube", countryCode: "US", cadence: "Daily", description: "Rapidly rising tracks in US creator-driven video ecosystems." },
  { id: "ch5", slug: "latam-velocity-index", title: "LATAM Velocity Index", chartType: "Breakout", sourcePlatform: "Spotify", countryCode: null, cadence: "Weekly", description: "Cross-country breakout signals in Latin American markets." },
  { id: "ch6", slug: "japan-retention-50", title: "Japan Retention 50", chartType: "Top 50", sourcePlatform: "Spotify", countryCode: "JP", cadence: "Weekly", description: "Tracks with strongest week-over-week retention in Japan." },
  { id: "ch7", slug: "korea-video-surge", title: "Korea Video Surge", chartType: "Viral", sourcePlatform: "YouTube", countryCode: "KR", cadence: "Daily", description: "Video-led breakout map for the South Korean market." },
  { id: "ch8", slug: "europe-cross-market-growth", title: "Europe Cross-Market Growth", chartType: "Breakout", sourcePlatform: "Spotify", countryCode: null, cadence: "Weekly", description: "Artists and tracks expanding from one EU market to another." }
];

export const insights: Insight[] = [
  { id: "i1", slug: "why-chart-velocity-matters-more-than-peak-rank", title: "Why Chart Velocity Matters More Than Peak Rank", excerpt: "Peak position is useful, but acceleration reveals where attention is compounding.", author: "MusicMetrics Editorial", publishedAt: "2026-09-01", body: "Velocity captures direction, not just status. Teams that react to velocity early can allocate campaign and content resources before a track plateaus.", related: { charts: ["global-spotify-top-50"], tracks: ["afterglow-signal"] } },
  { id: "i2", slug: "the-new-breakout-path-from-short-video-to-streaming", title: "The New Breakout Path: From Short Video to Streaming", excerpt: "The strongest growth loops now start in video and stabilize in audio platforms.", author: "MusicMetrics Editorial", publishedAt: "2026-08-27", body: "A healthy breakout now often requires conversion beyond a trend clip. Durable growth appears when listener intent moves from passive exposure to repeat streaming behavior.", related: { charts: ["global-youtube-movers"], artists: ["seoul-bloom"] } },
  { id: "i3", slug: "what-label-teams-should-track-weekly", title: "What Label Teams Should Track Weekly", excerpt: "A practical KPI stack for A&R, digital marketing, and release management.", author: "MusicMetrics Editorial", publishedAt: "2026-08-20", body: "Monitoring position change, coverage spread, replay behavior, and cross-market adoption gives a balanced view that prevents overreacting to single-day spikes.", related: { artists: ["atlas-kid", "luna-rivera"] } },
  { id: "i4", slug: "country-level-signals-that-predict-global-lift", title: "Country-Level Signals That Predict Global Lift", excerpt: "Some local markets repeatedly act as breakout launchpads.", author: "MusicMetrics Editorial", publishedAt: "2026-08-12", body: "Country-level analysis helps teams detect early trend migration. Repeated local traction patterns often forecast broader international expansion.", related: { countries: ["turkiye", "brazil", "south-korea"] } },
  { id: "i5", slug: "editorial-trust-and-seo-in-music-intelligence", title: "Editorial Trust and SEO in Music Intelligence", excerpt: "Authority grows when analysis is transparent, not sensational.", author: "MusicMetrics Editorial", publishedAt: "2026-08-04", body: "Clear methodology, source transparency, and update cadence increase both user trust and organic search performance over time.", related: { charts: ["europe-cross-market-growth"] } },
  { id: "i6", slug: "how-indie-managers-can-prioritize-campaigns", title: "How Indie Managers Can Prioritize Campaigns", excerpt: "A resource-conscious framework for release-week decision making.", author: "MusicMetrics Editorial", publishedAt: "2026-07-29", body: "Use directional metrics to decide where to concentrate spend and creative output. Avoid blanket campaigns when only specific markets show real conversion.", related: { artists: ["arya-noir", "north-harbor"] } },
  { id: "i7", slug: "from-chart-entry-to-sustained-presence", title: "From Chart Entry to Sustained Presence", excerpt: "Getting in is one challenge; staying in is another.", author: "MusicMetrics Editorial", publishedAt: "2026-07-21", body: "Retention and repeated recommendation loops drive sustained presence. Teams should focus on content sequencing after initial chart entry.", related: { tracks: ["city-current", "pulse-code"] } },
  { id: "i8", slug: "the-role-of-methodology-pages-in-platform-credibility", title: "The Role of Methodology Pages in Platform Credibility", excerpt: "Trust is a product feature, not an afterthought.", author: "MusicMetrics Editorial", publishedAt: "2026-07-15", body: "Methodology and source pages signal seriousness to both users and search engines, and help reduce misinterpretation of analytics outputs.", related: { charts: ["latam-velocity-index"] } }
];

export const findArtist = (slug: string) => artists.find((artist) => artist.slug === slug);
export const findTrack = (slug: string) => tracks.find((track) => track.slug === slug);
export const findChart = (slug: string) => charts.find((chart) => chart.slug === slug);
export const findCountry = (slug: string) => countries.find((country) => country.slug === slug);
export const findInsight = (slug: string) => insights.find((insight) => insight.slug === slug);

export const getArtistTracks = (artistSlug: string) => tracks.filter((track) => track.artistSlug === artistSlug);
