import styles from "./layout-index.module.scss"

export default function NestedLayoutIndex({ children }) {
  return (
    <>
      <div className={styles.container}>
        {/* <div>Custom Layout Home Only</div> */}
        <div className={styles.main}>{children}</div>
      </div>
    </>
  )
}
