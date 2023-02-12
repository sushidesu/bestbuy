import { FC } from "react"
import { clsx } from "clsx"

import styles from "./page.module.css"
import { BestBuyCardList } from "@/features/BestBuyCardList"
import { BestBuyForm } from "@/features/BestBuyForm"

const TITLE = "【ベストバイ】みんなが買ってよかったもの3選！【永久保存版】"
const DESCRIPTION =
  "好きなものを集めて投稿しよう。まだ見ぬベストバイとの出会いがここに！"

const sampleCards: string[] = ["すし職人", "うめ職人", "まるごとみおん"]

const Home: FC = () => {
  return (
    <main className={styles["main"]}>
      <section className={clsx(styles["section"], styles["happy"])}>
        <h1>{TITLE}</h1>
        <p>{DESCRIPTION}</p>
      </section>
      <section className={clsx(styles["section"], styles["cute"])}>
        <h2>最新の投稿</h2>
        <BestBuyCardList
          cards={sampleCards.map((title) => ({ id: title, title }))}
        />
      </section>
      <section className={clsx(styles["section"], styles["cool"])}>
        <h2>ベストバイを投稿する</h2>
        <BestBuyForm />
      </section>
    </main>
  )
}

export default Home
