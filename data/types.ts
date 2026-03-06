export type Chart = {
  slug: string;
  title: string;
  description: string;
  period: string;
  region: string;
  metric: string;
};

export type Artist = {
  slug: string;
  name: string;
  genre: string;
  region: string;
  monthlyListeners: string;
  summary: string;
};

export type Track = {
  slug: string;
  title: string;
  artist: string;
  platformFocus: string;
  momentum: string;
  summary: string;
};

export type Country = {
  slug: string;
  name: string;
  spotlight: string;
  summary: string;
};

export type Insight = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: string[];
};
