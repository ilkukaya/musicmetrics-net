export type YouTubeChannelResponse = { id: string; snippet?: { title?: string }; statistics?: { subscriberCount?: string; viewCount?: string } };
export type YouTubeVideoResponse = { id: string; snippet?: { title?: string; channelId?: string }; statistics?: { viewCount?: string; likeCount?: string } };
