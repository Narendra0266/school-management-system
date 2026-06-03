import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  verifyAuth,
} from "@/lib/authGuard";

import {
  UserRole,
} from "@prisma/client";

export async function GET(
  req: NextRequest
) {

  try {

    const user =
      verifyAuth(req, [
        UserRole.DIRECTOR,
      ]);

    return NextResponse.json({
      message:
        "Protected route working",
      user,
    });

  } catch (error: any) {

    return NextResponse.json(
      {
        error:
          error.message ||
          "Unauthorized",
      },
      {
        status:
          error.message ===
          "Forbidden"
            ? 403
            : 401,
      }
    );
  }
}