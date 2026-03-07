export type SpotifyArtistResponse = { id: string; name: string; genres: string[]; followers?: { total: number } };
export type SpotifyTrackResponse = { id: string; name: string; popularity?: number; album?: { id: string; name: string } };
