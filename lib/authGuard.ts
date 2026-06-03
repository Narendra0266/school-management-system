import { NextRequest }
from "next/server";

import jwt from "jsonwebtoken";

import type {
  UserRole,
} from "@prisma/client";

const JWT_SECRET =
  process.env.JWT_SECRET!;

if (!JWT_SECRET) {
  throw new Error(
    "JWT_SECRET missing"
  );
}

type JwtPayload = {
  userId: string;
  role: UserRole;
};

export function verifyAuth(
  req: NextRequest,
  allowedRoles: UserRole[] = []
) {

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
    throw new Error(
      "Unauthorized"
    );
  }

  const token =
    authHeader.replace(
      "Bearer ",
      ""
    );

  try {

    const decoded =
      jwt.verify(
        token,
        JWT_SECRET
      ) as JwtPayload;

    if (
      allowedRoles.length > 0 &&
      !allowedRoles.includes(
        decoded.role
      )
    ) {
      throw new Error(
        "Forbidden"
      );
    }

    return decoded;

  } catch {

    throw new Error(
      "Unauthorized"
    );
  }
}