import { z } from "zod";

export const createStudentSchema =
  z.object({
    firstName:
      z.string().min(2),

    lastName:
      z.string().min(2),

    email:
      z.string()
       .email()
       .optional(),

    phone:
      z.string()
       .optional(),

    gender:
      z.string(),

    dateOfBirth:
      z.string(),

    address:
      z.string()
       .optional(),

    admissionNo:
      z.string(),

    institutionId:
      z.string(),
  });

export type CreateStudentInput =
  z.infer<
    typeof createStudentSchema
  >;