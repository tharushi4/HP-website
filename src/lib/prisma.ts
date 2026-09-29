import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function isDatabaseConnected(): Promise<boolean> {
  try {
    // Quick probe to check if PostgreSQL is available
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch (err) {
    return false;
  }
}
