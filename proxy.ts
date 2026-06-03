import {
  NextRequest,
  NextResponse,
} from "next/server";

import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET!;

const publicRoutes = [
  "/api/login",
  "/api/users",
  "/api/organizations",
];

export function proxy(
  req: NextRequest
) {

  const path =
    req.nextUrl.pathname;

  if (
    publicRoutes.includes(path)
  ) {
    return NextResponse.next();
  }

  const authHeader =
    req.headers.get(
      "authorization"
    );

  if (
    !authHeader ||
    !authHeader.startsWith(
      "Bearer "
    )
  ) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  const token =
    authHeader.replace(
      "Bearer ",
      ""
    );

  try {

    jwt.verify(
      token,
      JWT_SECRET
    );

    return NextResponse.next();

  } catch {

    return NextResponse.json(
      {
        error: "Invalid token",
      },
      {
        status: 401,
      }
    );
  }
}

export const config = {
  matcher: ["/api/:path*"],
};