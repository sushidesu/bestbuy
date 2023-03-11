import { v4 as uuidv4 } from "uuid"
import { z } from "zod"

import { prisma } from "../prisma"
import { publicProcedure, router } from "../router"
import { createInput, post, postId } from "../types/post"
import { convertCreate, convertGet } from "../types/post"
export const postRouter = router({
  create: publicProcedure
    .input(createInput)
    .output(z.void())
    .mutation(async (req) => {
      await prisma.bestBuy.create({
        data: convertCreate(postId.parse(uuidv4()), req.input),
      })
    }),
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
    .query(async (req) => {
      const data = await prisma.bestBuy.findFirstOrThrow({
        where: { id: req.input.postId },
      })
      return convertGet(data)
    }),
})
