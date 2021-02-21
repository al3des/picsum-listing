import styles from "./header.module.css"

import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Pictures</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
