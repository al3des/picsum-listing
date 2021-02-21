import styles from "./Layout.module.css"

import Header from "@components/Header"
import Footer from "@components/Footer"

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
