import { PrismaClient } from "@prisma/client"

/**
 * Instantiates a single instance PrismaClient and save it on the global object.
 * @link https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
 * @link https://github.com/trpc/examples-next-prisma-starter/blob/88b2c5fe1cde4fa6fc9d503dfa313f2dda82cc49/src/server/env.js
 */

const prismaGlobal = global as typeof global & {
  prisma?: PrismaClient
}

export const prisma =
  prismaGlobal.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  })

if (process.env.NODE_ENV !== "production") prismaGlobal.prisma = prisma
