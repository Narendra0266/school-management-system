import { NextRequest } from "next/server";
import * as jwt from "jsonwebtoken";
import { hasPermission } from "./permissions";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET missing");
}

type TokenPayload = {
  userId: string;
  role: keyof typeof import("./permissions").permissions;
};

export function authorize(
  req: NextRequest,
  permission?: string
) {
  const authHeader =
    req.headers.get("authorization");

  if (!authHeader) {
    throw new Error("Unauthorized");
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    throw new Error("Token missing");
  }

  try {
    const decoded =
  jwt.verify(
    token,
    JWT_SECRET as string
  ) as TokenPayload;

    if (
      permission &&
      !hasPermission(
        decoded.role,
        permission
      )
    ) {
      throw new Error("Forbidden");
    }

    return decoded;

  } catch (error: any) {

    if (error.message === "Forbidden") {
      throw error;
    }

    throw new Error("Unauthorized");
  }
}