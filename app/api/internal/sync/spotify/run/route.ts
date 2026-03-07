import { NextRequest, NextResponse } from "next/server";
import { validateInternalSecret } from "@/lib/utils/internal-auth";

export async function POST(request: NextRequest) {
  const auth = validateInternalSecret(request.headers.get("x-cron-secret"));
  if (!auth.ok) return NextResponse.json({ ok: false, error: auth.reason }, { status: 401 });

  if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET) {
    return NextResponse.json({ ok: false, error: "Spotify credentials are not configured" }, { status: 400 });
  }

  return NextResponse.json({ ok: true, source: "spotify", status: "queued", message: "Sync scaffold endpoint reachable." });
}
