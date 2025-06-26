/* eslint-disable react/no-unknown-property */
import Head from "next/head"
import styles from "./layout.module.scss"

export const siteTitle = "Tools"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <head>
        {/*
          CookieYes Script
          - strategy="beforeInteractive" ensures it loads and executes before Next.js hydrates the page.
          - This is crucial for consent management to work effectively and block cookies early.
        */}
        <Script
          id="cookieyes" // Use the ID provided by CookieYes
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/0ee8f6e14d5b0008528477de/script.js"
          strategy="beforeInteractive"
        />
        {/* Any other scripts that should load before interactive content but after CookieYes (if any) */}
      </head>
      <main className={styles.main}>{children}</main>
    </div>
  )
}
