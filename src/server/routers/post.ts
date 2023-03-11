import { z } from "zod"
import { router, publicProcedure } from "../router"
import { createPost, post, postId } from "../types/post"

export const postRouter = router({
  create: publicProcedure
    .input(createPost)
    .output(z.void())
    .mutation(() => undefined),

  list: publicProcedure
    .input(z.void())
    .output(z.array(post))
    .query(() => []),

  get: publicProcedure
    .input(
      z.object({
        postId: z.string().min(1),
      })
    )
    .output(post.optional())
    .query(() => ({
      id: "post_01",
      authorName: "すし職人",
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
