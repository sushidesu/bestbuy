import { BestBuy, Prisma } from "@prisma/client"
import { z } from "zod"

const item = z.object({
  url: z.string(),
  name: z.string(),
  imageUrl: z.string(),
})

const authorName = z.string().min(1).brand<"authorName">()

export const postId = z.string().brand<"postId">()

type PostId = z.infer<typeof postId>
// type PostId = z.infer<typeof postId>
export const post = z
  .object({
    id: postId,
    authorName,
    first: item,
    second: item,
    third: item,
  })
  .brand<"post">()

type Post = z.infer<typeof post>

/**
 * 新規投稿
 */
export const createInput = z
  .object({
    authorName,
    first: item,
    second: item,
    third: item,
  })
  .brand<"createInput">()

type CreateInput = z.infer<typeof createInput>

export const convertGet = (bestBuy: BestBuy): Post => {
  return post.parse({
    id: postId.parse(bestBuy.id),
    authorName: authorName.parse(bestBuy.authorName),
    first: {
      url: bestBuy.firstUrl,
      name: bestBuy.firstName,
      imageUrl: bestBuy.firstImageUrl,
    },
    second: {
      url: bestBuy.secondUrl,
      name: bestBuy.secondName,
      imageUrl: bestBuy.secondImageUrl,
    },
    third: {
      url: bestBuy.thirdUrl,
      name: bestBuy.thirdName,
      imageUrl: bestBuy.thirdImageUrl,
    },
  })
}

export const convertCreate = (
  id: PostId,
  createInput: CreateInput
): Prisma.BestBuyCreateInput => {
  return {
    id: postId.parse(id),
    authorName: authorName.parse(createInput.authorName),
    firstUrl: createInput.first.url,
    firstName: createInput.first.name,
    firstImageUrl: createInput.first.imageUrl,
    secondUrl: createInput.second.url,
    secondName: createInput.second.name,
    secondImageUrl: createInput.second.imageUrl,
    thirdUrl: createInput.third.url,
    thirdName: createInput.third.name,
    thirdImageUrl: createInput.third.imageUrl,
  }
}

// const amazonProductId = z.string().brand<"amazonProductId">()
// export const amazonItem = z.object({
//   type: z.literal("amazon"),
//   name: z.string(),
//   image: z.string().optional(),
//   amazonProductId,
// }) //.brand<"amazonItem">()

// const customItemId = z.string()
// export const customItem = z.object({
//   type: z.literal("custom"),
//   name: z.string(),
//   image: z.string().optional(),
//   customItemId,
// }) //.brand<"customItem">()

// export const item = z
//   .discriminatedUnion("type", [amazonItem, customItem])
//   .brand("item")

// /**
//  * 新規投稿アイテム
//  */
// export const createItem = z
//   .object({
//     amazonProductId,
//   })
//   .brand<"createItem">()
