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
       .min(10)
       .max(15)
       .optional(),

    gender:
      z.enum([
        "MALE",
        "FEMALE",
        "OTHER",
      ]),

    dateOfBirth:
      z.coerce.date(),

    address:
      z.string()
       .optional(),

    admissionNo:
      z.string()
       .min(1),

    institutionId:
      z.string()
       .min(1),
  });

export type CreateStudentInput =
  z.infer<
    typeof createStudentSchema
  >;