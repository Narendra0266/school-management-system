import { NextRequest, NextResponse } from "next/server";

export default function proxy(
  req: NextRequest
) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/protected/:path*"],
};