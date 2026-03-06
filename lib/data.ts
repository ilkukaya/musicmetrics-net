import { artists } from "@/data/artists";
import { charts } from "@/data/charts";
import { countries } from "@/data/countries";
import { insights } from "@/data/insights";
import { tracks } from "@/data/tracks";

export { artists, charts, countries, insights, tracks };

export const getChartBySlug = (slug: string) => charts.find((item) => item.slug === slug);
export const getArtistBySlug = (slug: string) => artists.find((item) => item.slug === slug);
export const getTrackBySlug = (slug: string) => tracks.find((item) => item.slug === slug);
export const getCountryBySlug = (slug: string) => countries.find((item) => item.slug === slug);
export const getInsightBySlug = (slug: string) => insights.find((item) => item.slug === slug);
