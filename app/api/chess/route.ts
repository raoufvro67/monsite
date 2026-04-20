import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch("https://api.chess.com/pub/player/raf_vro/stats", {
      headers: { "User-Agent": "portfolio-site" },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return NextResponse.json(null, { status: 500 });

    const data = await res.json();

    return NextResponse.json({
      blitz: data.chess_blitz?.last?.rating ?? null,
      rapid: data.chess_rapid?.last?.rating ?? null,
      bullet: data.chess_bullet?.last?.rating ?? null,
    });
  } catch {
    return NextResponse.json(null, { status: 500 });
  }
}
