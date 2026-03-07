import { SpotifyArtistResponse, SpotifyTrackResponse } from "@/lib/integrations/spotify/types";

export function mapSpotifyArtist(payload: SpotifyArtistResponse) {
  return {
    externalId: payload.id,
    displayName: payload.name,
    genres: payload.genres,
    followerCount: payload.followers?.total ?? null
  };
}

export function mapSpotifyTrack(payload: SpotifyTrackResponse) {
  return {
    externalId: payload.id,
    title: payload.name,
    popularity: payload.popularity ?? null,
    albumExternalId: payload.album?.id ?? null
  };
}
