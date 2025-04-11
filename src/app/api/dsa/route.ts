import { NextResponse } from "next/server";
import data from "@/components/dsa/data.json";

export async function GET() {
    return NextResponse.json(data);
}
