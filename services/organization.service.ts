import prisma from "@/lib/prisma";

export async function createOrganization(name: string) {
  return prisma.organization.create({
    data: {
      name,
    },
  });
}

export async function getOrganizations() {
  return prisma.organization.findMany();
}
