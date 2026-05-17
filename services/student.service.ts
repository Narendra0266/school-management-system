import { prisma }
from "@/lib/prisma";

import type {
  CreateStudentInput,
} from "@/validators/student.validator";

export async function createStudent(
  data: CreateStudentInput
) {

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