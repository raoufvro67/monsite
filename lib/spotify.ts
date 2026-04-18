const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
const SPOTIFY_NOW_PLAYING_URL =
  "https://api.spotify.com/v1/me/player/currently-playing";
const SPOTIFY_RECENTLY_PLAYED_URL =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

async function getAccessToken() {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const res = await fetch(SPOTIFY_TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
  });

  return res.json() as Promise<{ access_token: string }>;
}

export async function getNowPlaying() {
  const { access_token } = await getAccessToken();

  const res = await fetch(SPOTIFY_NOW_PLAYING_URL, {
    headers: { Authorization: `Bearer ${access_token}` },
    next: { revalidate: 0 },
  });

  if (res.status === 204 || res.status > 400) {
    // Not playing — fallback to recently played
    const recent = await fetch(SPOTIFY_RECENTLY_PLAYED_URL, {
      headers: { Authorization: `Bearer ${access_token}` },
      next: { revalidate: 0 },
    });
    const data = await recent.json();
    const item = data.items?.[0]?.track;
    if (!item) return null;
    return {
      isPlaying: false,
      title: item.name,
      artist: item.artists.map((a: { name: string }) => a.name).join(", "),
      album: item.album.name,
      albumImageUrl: item.album.images[0]?.url ?? "",
      songUrl: item.external_urls.spotify,
    };
  }

  const data = await res.json();
  const item = data.item;

  return {
    isPlaying: data.is_playing,
    title: item.name,
    artist: item.artists.map((a: { name: string }) => a.name).join(", "),
    album: item.album.name,
    albumImageUrl: item.album.images[0]?.url ?? "",
    songUrl: item.external_urls.spotify,
  };
}
