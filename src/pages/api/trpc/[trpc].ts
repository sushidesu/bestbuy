import { createNextApiHandler } from "@trpc/server/adapters/next"
import { appRouter } from "@/server/app"
import { createContext } from "@/server/context"

// export type definition of API
export type AppRouter = typeof appRouter

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext,
})
