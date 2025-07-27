
import { PrismaClient } from "../generated/prisma";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

console.log("GITHUB_ID:", process.env.GITHUB_CLIENT_ID);
console.log("GITHUB_SECRET:", process.env.GITHUB_CLIENT_SECRET);
console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET);
console.log("DATABASE_URL:", process.env.DATABASE_URL);

 