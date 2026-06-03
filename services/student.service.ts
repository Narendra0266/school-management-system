import prisma from "@/lib/prisma";
import type {
  CreateStudentInput,
} from "@/validators/student.validator";

export async function createStudent(
  data: CreateStudentInput
) {

  const institution =
    await prisma.institution.findUnique({
      where: {
        id: data.institutionId,
      },
    });

  if (!institution) {
    throw new Error(
      "Institution not found"
    );
  }

  const existingStudent =
    await prisma.student.findUnique({
      where: {
        admissionNo:
          data.admissionNo,
      },
    });

  if (existingStudent) {
    throw new Error(
      "Admission number already exists"
    );
  }

  const existingEmail =
    data.email
      ? await prisma.student.findUnique({
          where: {
            email: data.email,
          },
        })
      : null;

  if (existingEmail) {
    throw new Error(
      "Email already exists"
    );
  }

  return prisma.student.create({
    data: {
      ...data,
      dateOfBirth:
        new Date(
          data.dateOfBirth
        ),
    },
  });
}

export async function getStudents(
  page = 1,
  limit = 10
) {

  const skip =
    (page - 1) * limit;

  return prisma.student.findMany({
    skip,
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });
}