import { NextResponse } from "next/server";

import { createUser } from "@/services/user.service";

import { createUserSchema }
from "@/validators/user.validator";

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const validatedData =
      createUserSchema.parse(body);

    const user = await createUser(
      validatedData
    );

    return NextResponse.json(user);

  } catch (error: any) {

    console.error(error);

    return NextResponse.json(
      {
        error:
          error.message ||
          "Failed to create user",
      },
      {
        status: 500,
      }
    );
  }
}