import { NextResponse } from "next/server";
import { getRecentTrack } from "@/lib/lastfm";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!process.env.LASTFM_API_KEY || !process.env.LASTFM_USERNAME) {
    return NextResponse.json(null, { status: 404 });
  }

  try {
    const track = await getRecentTrack();
    if (!track) return NextResponse.json(null, { status: 204 });
    return NextResponse.json(track);
  } catch {
    return NextResponse.json(null, { status: 500 });
  }
}
