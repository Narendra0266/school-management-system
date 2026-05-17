import jwt from "jsonwebtoken";

import {
  hasPermission,
  permissions,
} from "./permissions";

const JWT_SECRET =
  process.env.JWT_SECRET || "mysecretkey123";

export function authorize(
  token: string,
  permission: string
) {
  try {
    const decoded = jwt.verify(
      token,
      JWT_SECRET
    ) as {
      userId: string;
      role: keyof typeof permissions;
    };

    const allowed = hasPermission(
      decoded.role,
      permission
    );

    if (!allowed) {
      throw new Error("Forbidden");
    }

    return decoded;

  } catch (error: any) {

    if (
      error.message === "Forbidden"
    ) {
      throw error;
    }

    throw new Error("Unauthorized");
  }
}