import { YouTubeChannelResponse, YouTubeVideoResponse } from "@/lib/integrations/youtube/types";

export function mapYouTubeChannel(payload: YouTubeChannelResponse) {
  return {
    externalId: payload.id,
    title: payload.snippet?.title ?? "",
    subscribers: payload.statistics?.subscriberCount ? Number(payload.statistics.subscriberCount) : null,
    totalViews: payload.statistics?.viewCount ? Number(payload.statistics.viewCount) : null
  };
}

export function mapYouTubeVideo(payload: YouTubeVideoResponse) {
  return {
    externalId: payload.id,
    title: payload.snippet?.title ?? "",
    channelExternalId: payload.snippet?.channelId ?? null,
    views: payload.statistics?.viewCount ? Number(payload.statistics.viewCount) : null
  };
}
