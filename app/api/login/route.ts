import { NextResponse } from "next/server";
import { loginUser } from "@/services/user.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await loginUser(
      body.email,
      body.password
    );

    return NextResponse.json(result);

  } catch (error: any) {

    console.log("LOGIN ERROR:", error);

    return NextResponse.json(
      {
        error: error.message || "Login failed",
      },
      {
        status: 500,
      }
    );
  }
}