import "./globals.css"

import styles from "./layout.module.css"
import { Footer } from "@/features/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={styles["html"]}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={styles["body"]}>
        <div className={styles["main"]}>{children}</div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
