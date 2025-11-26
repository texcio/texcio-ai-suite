import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  console.log("📩 Contact Form Submission → ", data);

  // Later we can add email sending / DB storage / Slack notification
  return NextResponse.json({ success: true });
}
