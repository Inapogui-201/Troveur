// Corrected the syntax for the test API route.
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hello: "salut tout le monde",
  });
}