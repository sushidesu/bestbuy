import { useMemo } from "react"
import type { AppRouter } from "@/server/app"
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"

export const createClient = () =>
  createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: "http://localhost:3000/api/trpc",
      }),
    ],
  })

export const useTrpc = () => useMemo(() => createClient(), [])
