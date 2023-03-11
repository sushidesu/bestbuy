import { z } from "zod"
import { router, publicProcedure } from "../router"
import { post } from "../types/post"

export const postRouter = router({
  create: publicProcedure.output(z.void()).mutation(() => undefined),
  list: publicProcedure.output(z.array(post)).query(() => []),
  get: publicProcedure.output(post.optional()).query(() => ({
    id: "post_01",
    first: {
      type: "amazon",
      amazonProductId: "amazon_01",
      name: "ポケットモンスター ビタミン/ミネラル",
    },
    second: {
      type: "amazon",
      amazonProductId: "amazon_02",
      name: "ゼルダの伝説 5本の指と4つの手足",
    },
    third: {
      type: "amazon",
      amazonProductId: "amazon_03",
      name: "スプラトゥーン 北海道大移動",
    },
  })),
})
