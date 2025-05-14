import { NextResponse } from "next/server";
import { testimonials } from "../../../lib/testimonials";

export async function GET() {
  return NextResponse.json(testimonials);
}