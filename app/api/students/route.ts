import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  createStudentSchema,
} from "@/validators/student.validator";

import {
  createStudent,
  getStudents,
} from "@/services/student.service";

import {
  verifyAuth,
} from "@/lib/authGuard";

import {
  UserRole,
} from "@prisma/client";

export async function POST(
  req: NextRequest
) {

  try {

    verifyAuth(req, [
      UserRole.DIRECTOR,
      UserRole.PRINCIPAL,
    ]);

    const body =
      await req.json();

    const validatedData =
      createStudentSchema.parse(
        body
      );

    const student =
      await createStudent(
        validatedData
      );

    return NextResponse.json(
      student,
      {
        status: 201,
      }
    );

  } catch (error: any) {

    console.error(error);

    return NextResponse.json(
      {
        error:
          error.message ||
          "Failed to create student",
      },
      {
        status:
          error.message ===
          "Forbidden"
            ? 403
            : error.message ===
              "Unauthorized"
            ? 401
            : 500,
      }
    );
  }
}

export async function GET(
  req: NextRequest
) {

  try {

    verifyAuth(req);

    const {
      searchParams,
    } = new URL(req.url);

    const page =
      Number(
        searchParams.get("page")
      ) || 1;

    const limit =
      Number(
        searchParams.get("limit")
      ) || 10;

    const students =
      await getStudents(
        page,
        limit
      );

    return NextResponse.json(
      students
    );

  } catch (error: any) {

    console.error(error);

    return NextResponse.json(
      {
        error:
          error.message ||
          "Failed to fetch students",
      },
      {
        status:
          error.message ===
          "Forbidden"
            ? 403
            : error.message ===
              "Unauthorized"
            ? 401
            : 500,
      }
    );
  }
}