import type { CreateNextContextOptions } from "@trpc/server/adapters/next"

export const createContext = async (_options: CreateNextContextOptions) => {
  return {
    hello: "hello",
  }
}
