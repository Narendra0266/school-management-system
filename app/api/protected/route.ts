import { NextRequest, NextResponse } from "next/server";

import { authorize } from "@/lib/authorize";

export async function GET(req: NextRequest) {
  try {
    const authHeader =
      req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const token =
      authHeader.split(" ")[1];

    const user = authorize(
      token,
      "CREATE_USER"
    );

    return NextResponse.json({
      message: "Access granted",
      user,
    });

  } catch (error: any) {

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status:
          error.message === "Forbidden"
            ? 403
            : 401,
      }
    );
  }
}