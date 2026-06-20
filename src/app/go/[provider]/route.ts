import { NextResponse, type NextRequest } from "next/server";
import { type ProviderSlug } from "@/data/providers";
import { resolveAffiliateUrl } from "@/lib/affiliate";

// Redirector runs per request so affiliate links and click tracking stay live.
export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ provider: string }> },
) {
  const { provider } = await params;
  const url = resolveAffiliateUrl(provider as ProviderSlug);
  if (!url) {
    return new NextResponse("Unknown provider", { status: 404 });
  }
  // 302 so the affiliate destination can change without being cached forever.
  return NextResponse.redirect(url, 302);
}
