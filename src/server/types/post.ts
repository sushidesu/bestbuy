import { z } from "zod"

const authorName = z.string().min(1).brand<"authorName">()

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

export const postId = z.string().brand<"postId">()
export const post = z
  .object({
    id: postId,
    authorName,
    first: item,
    second: item,
    third: item,
  })
  .brand<"post">()

/**
 * 新規投稿アイテム
 */
export const createItem = z
  .object({
    amazonProductId,
  })
  .brand<"createItem">()

/**
 * 新規投稿
 */
export const createPost = z
  .object({
    authorName,
    first: createItem,
    second: createItem,
    third: createItem,
  })
  .brand<"createPost">()
