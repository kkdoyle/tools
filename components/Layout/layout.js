/* eslint-disable react/no-unknown-property */
import Head from "next/head"
import styles from "./layout.module.scss"

export const siteTitle = "Tools"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head></Head>
      <main className={styles.main}>{children}</main>
    </div>
  )
}
