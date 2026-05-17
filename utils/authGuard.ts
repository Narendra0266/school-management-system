import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "mysecretkey123";

type JwtPayload = {
  userId: string;
  role: string;
};

export function verifyAuth(
  req: NextRequest,
  allowedRoles: string[] = []
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

  const decoded = jwt.verify(
    token,
    JWT_SECRET
  ) as JwtPayload;

  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(decoded.role)
  ) {
    throw new Error("Forbidden");
  }

  return decoded;
}