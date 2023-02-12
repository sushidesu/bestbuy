import { FC } from "react"

import styles from "./page.module.css"

const TITLE = "【ベストバイ】みんなが買ってよかったもの3選！【永久保存版】"
const DESCRIPTION =
  "好きなものを集めて投稿しよう。まだ見ぬベストバイとの出会いがここに！"

const Home: FC = () => {
  return (
    <main className={styles["main"]}>
      <section className={styles["section"]}>
        <h1>{TITLE}</h1>
        <p>{DESCRIPTION}</p>
      </section>
      <section className={styles["section"]}>
        <h2>最新の投稿</h2>
        <div>cards</div>
      </section>
      <section className={styles["section"]}>
        <h2>ベストバイを投稿する</h2>
        <div>form</div>
      </section>
    </main>
  )
}

export default Home
