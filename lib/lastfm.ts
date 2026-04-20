const LASTFM_BASE = "https://ws.audioscrobbler.com/2.0";

export async function getRecentTrack() {
  const apiKey = process.env.LASTFM_API_KEY;
  const username = process.env.LASTFM_USERNAME;

  if (!apiKey || !username) return null;

  const url = `${LASTFM_BASE}/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;

  const res = await fetch(url, { next: { revalidate: 0 } });
  if (!res.ok) return null;

  const data = await res.json();
  const track = data.recenttracks?.track?.[0];
  if (!track) return null;

  const isPlaying = track["@attr"]?.nowplaying === "true";
  const artworkUrl =
    track.image?.find((img: { size: string; "#text": string }) => img.size === "extralarge")?.["#text"] ||
    track.image?.find((img: { size: string; "#text": string }) => img.size === "large")?.["#text"] ||
    "";

  return {
    isPlaying,
    title: track.name as string,
    artist: track.artist["#text"] as string,
    album: track.album["#text"] as string,
    artworkUrl,
    songUrl: track.url as string,
  };
}
