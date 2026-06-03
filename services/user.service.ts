import prisma from "@/lib/prisma";

import {
  hashPassword,
  comparePassword,
  generateToken,
} from "@/lib/auth";

import type {
  CreateUserInput,
} from "@/validators/user.validator";

export async function createUser(
  data: CreateUserInput
) {
  const hashedPassword =
    await hashPassword(data.password);

  const user =
    await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: data.role,
        organizationId:
          data.organizationId,

        institutionId:
          data.institutionId,
      },
    });

  const {
    password,
    ...safeUser
  } = user;

  return safeUser;
}

export async function loginUser(
  email: string,
  password: string
) {
  const user =
    await prisma.user.findUnique({
      where: { email },
    });

  if (!user) {
    throw new Error(
      "User not found"
    );
  }

  const isMatch =
    await comparePassword(
      password,
      user.password
    );

  if (!isMatch) {
    throw new Error(
      "Password incorrect"
    );
  }

  const token = generateToken({
    userId: user.id,
    role: user.role,
  });

  return {
    message: "Login successful",
    token,
    user,
  };
}