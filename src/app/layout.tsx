import "./globals.css"

import { Metadata } from "next"

import { Footer } from "@/features/Footer"

import styles from "./layout.module.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={styles["html"]}>
      <body className={styles["body"]}>
        <div className={styles["main"]}>{children}</div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Best Buy",
  description: "みんなのベストバイが集まるWEBサイト",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
}
