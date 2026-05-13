import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().min(2),
  revenue: z.enum(["< 1M€", "1-2M€", "2-5M€", "5-10M€", "10M€+"]),
  source: z.enum([
    "LinkedIn",
    "Referral Letizia",
    "Google Search",
    "Caso studio/articolo",
    "Altro",
  ]),
  problem: z.string().min(20).max(500),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = leadSchema.parse(body);
    // TODO: Send to CRM / Google Sheets
    // TODO: Email notification to Letizia
    // eslint-disable-next-line no-console
    console.log("New lead:", validated);
    return NextResponse.json({ success: true });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Lead validation error:", error);
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
}
