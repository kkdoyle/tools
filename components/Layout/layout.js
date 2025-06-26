/* eslint-disable react/no-unknown-property */
import Head from "next/head"
import styles from "./layout.module.scss"

export const siteTitle = "Tools"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <head>
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/0ee8f6e14d5b0008528477de/script.js"
        ></script>
      </head>
      <main className={styles.main}>{children}</main>
    </div>
  )
}
