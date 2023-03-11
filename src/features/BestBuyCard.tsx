"use client"

import { FC, useEffect, useState } from "react"

import { useTrpc } from "@/libs/trpc"

type BestBuyCardProps = {
  title: string
}

export const BestBuyCard: FC<BestBuyCardProps> = ({ title }) => {
  const trpc = useTrpc()

  const [text, setText] = useState<string | undefined>()

  useEffect(() => {
    const doFetch = async () => {
      const post = await trpc.post.get.query({ postId: "post_01" })
      if (post) {
        setText(post.first.name)
      }
    }
    doFetch()
  }, [trpc])

  return (
    <div>
      <div>
        <div />
        <div />
        <div />
      </div>
      <div>
        <p>{title}</p>
        <p>{text ? text : "loading..."}</p>
      </div>
    </div>
  )
}
