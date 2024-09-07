import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prismaBase = globalForPrisma.prisma ?? new PrismaClient();

export const prisma = prismaBase.$extends({
  query: {},
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismaBase;
