import { NextRequest, NextResponse } from "next/server";

import { verifyAuth } from "@/utils/authGuard";

export async function GET(req: NextRequest) {
  try {

    const user = verifyAuth(req);

    return NextResponse.json({
      user,
    });

  } catch (error: any) {

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 401,
      }
    );
  }
}