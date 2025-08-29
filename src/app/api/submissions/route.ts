import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://premium-backend.takeuforward.org/api/profile/getProfileV2/rahulkumarpahwa",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch data from TUF+ API" }, { status: 500 });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
