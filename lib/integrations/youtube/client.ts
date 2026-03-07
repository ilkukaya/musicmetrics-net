const YOUTUBE_BASE = "https://www.googleapis.com/youtube/v3";

export async function youtubeRequest(path: string, params: Record<string, string>) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    throw new Error("Missing YOUTUBE_API_KEY");
  }

  const url = new URL(`${YOUTUBE_BASE}${path}`);
  Object.entries({ ...params, key: apiKey }).forEach(([key, value]) => url.searchParams.set(key, value));

  const response = await fetch(url.toString(), { method: "GET" });
  if (!response.ok) {
    throw new Error(`YouTube request failed: ${response.status}`);
  }
  return response.json();
}
