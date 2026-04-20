const AM_BASE_URL = "https://api.music.apple.com/v1";

export async function getRecentlyPlayed() {
  const developerToken = process.env.APPLE_MUSIC_DEVELOPER_TOKEN;
  const musicUserToken = process.env.APPLE_MUSIC_USER_TOKEN;

  if (!developerToken || !musicUserToken) return null;

  const res = await fetch(`${AM_BASE_URL}/me/recent/played/tracks?limit=1`, {
    headers: {
      Authorization: `Bearer ${developerToken}`,
      "Music-User-Token": musicUserToken,
    },
    next: { revalidate: 0 },
  });

  if (!res.ok) return null;

  const data = await res.json();
  const item = data.data?.[0];
  if (!item) return null;

  const attrs = item.attributes;
  const artworkUrl = attrs.artwork?.url
    ?.replace("{w}", "100")
    .replace("{h}", "100");

  return {
    title: attrs.name as string,
    artist: attrs.artistName as string,
    album: attrs.albumName as string,
    artworkUrl: artworkUrl ?? "",
    songUrl: attrs.url as string,
  };
}
