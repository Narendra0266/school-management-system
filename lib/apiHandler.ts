import { NextResponse } from "next/server";

export async function apiHandler(
  callback: Function
) {
  try {

    return await callback();

  } catch (error: any) {

    console.error(error);

    return NextResponse.json(
      {
        error:
          error.message ||
          "Internal server error",
      },
      {
        status:
          error.message === "Forbidden"
            ? 403
            : error.message ===
              "Unauthorized"
            ? 401
            : 500,
      }
    );
  }
}