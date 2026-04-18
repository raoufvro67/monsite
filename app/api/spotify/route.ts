import { NextResponse } from "next/server";
import { getNowPlaying } from "@/lib/spotify";

export const dynamic = "force-dynamic";

export async function GET() {
  if (
    !process.env.SPOTIFY_CLIENT_ID ||
    !process.env.SPOTIFY_CLIENT_SECRET ||
    !process.env.SPOTIFY_REFRESH_TOKEN
  ) {
    return NextResponse.json(null, { status: 404 });
  }

  try {
    const track = await getNowPlaying();
    if (!track) return NextResponse.json(null, { status: 204 });
    return NextResponse.json(track);
  } catch {
    return NextResponse.json(null, { status: 500 });
  }
}
