import "./globals.css"

import { Inter } from "@next/font/google"
import Link from "next/link"
import { FC } from "react"

import styles from "./layout.module.css"

const inter = Inter({ subsets: ["latin"] })

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

const COPYRIGHT = "©︎ splarate"
const FOOTER_LINKS: { label: string; href: string }[] = [
  {
    label: "運営",
    href: "/",
  },
  {
    label: "利用規約",
    href: "/",
  },
  {
    label: "お問合わせ",
    href: "/",
  },
]

const Footer: FC = () => {
  return (
    <section>
      <div>
        <ul>
          {FOOTER_LINKS.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className={inter.className}>{COPYRIGHT}</p>
      </div>
    </section>
  )
}
