import { z } from "zod";

import { UserRole } from "@prisma/client";

export const createUserSchema =
  z.object({
    name: z.string().min(2),

    email: z.email(),

    password: z.string().min(6),

    role: z.nativeEnum(UserRole),

    organizationId:
      z.string().optional(),

    institutionId:
      z.string().optional(),
  });

export type CreateUserInput =
  z.infer<typeof createUserSchema>;