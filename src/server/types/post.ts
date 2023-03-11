import { z } from "zod"

const amazonProductId = z.string().brand<"amazonProductId">()
export const amazonItem = z.object({
  type: z.literal("amazon"),
  name: z.string(),
  image: z.string().optional(),
  amazonProductId,
}) //.brand<"amazonItem">()

const customItemId = z.string()
export const customItem = z.object({
  type: z.literal("custom"),
  name: z.string(),
  image: z.string().optional(),
  customItemId,
}) //.brand<"customItem">()

export const item = z
  .discriminatedUnion("type", [amazonItem, customItem])
  .brand("item")

const postId = z.string().brand<"postId">()
export const post = z
  .object({
    id: postId,
    first: item,
    second: item,
    third: item,
  })
  .brand<"post">()
