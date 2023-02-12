import { Inter } from "@next/font/google"
import { clsx } from "clsx"
import Link from "next/link"
import { FC } from "react"

import styles from "./Footer.module.css"

const inter = Inter({ subsets: ["latin"] })

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

export const Footer: FC = () => {
  return (
    <div className={clsx(styles["footer"])}>
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
    </div>
  )
}
