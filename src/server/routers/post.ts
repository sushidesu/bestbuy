import { router, publicProcedure } from "../router"

export const postRouter = router({
  create: publicProcedure.mutation(() => undefined),
  list: publicProcedure.query(() => []),
  get: publicProcedure.query(() => "hello"),
})
