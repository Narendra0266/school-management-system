import { NextResponse } from "next/server";
import { createUser } from "@/services/user.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const user = await createUser(body);

    return NextResponse.json(user);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}