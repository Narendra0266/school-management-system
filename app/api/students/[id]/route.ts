import {
  NextRequest,
  NextResponse,
} from "next/server";

import prisma from "@/lib/prisma";


// GET SINGLE STUDENT
export async function GET(
  req: NextRequest,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {

  try {

    const { id } = await context.params;

    const student =
      await prisma.student.findUnique({
        where: {
          id,
        },
      });

    if (!student) {

      return NextResponse.json(
        {
          error:
            "Student not found",
        },
        {
          status: 404,
        }
      );

    }

    return NextResponse.json(
      student
    );

  } catch (error: any) {

    return NextResponse.json(
      {
        error:
          error.message,
      },
      {
        status: 500,
      }
    );

  }
}


// UPDATE STUDENT
export async function PATCH(
  req: NextRequest,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {

  try {

    const { id } = await context.params;

    const body =
      await req.json();

    const student =
      await prisma.student.update({
        where: {
          id,
        },

        data: body,
      });

    return NextResponse.json(
      student
    );

  } catch (error: any) {

    return NextResponse.json(
      {
        error:
          error.message,
      },
      {
        status: 500,
      }
    );

  }
}


// DELETE STUDENT
export async function DELETE(
  req: NextRequest,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {

  try {

    const { id } = await context.params;

    await prisma.student.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      message:
        "Student deleted",
    });

  } catch (error: any) {

    return NextResponse.json(
      {
        error:
          error.message,
      },
      {
        status: 500,
      }
    );

  }
}