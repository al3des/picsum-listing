import styles from "./ProductsPagination.module.css"

import { useRouter } from "next/router"

import Link from "next/link"

export default function ProductsPagination({ last }) {
  let router = useRouter()
  let { page } = router.query
  let nextPage = Number(page) + 1
  let prevPage = Number(page) - 1

  return (
    <div className={styles.root}>
      {page > 1 && (
        <Link href={`/?page=${prevPage}`}>
          <a>{"<<"} Previous Page</a>
        </Link>
      )}
      {!last && (
        <Link href={`/?page=${nextPage ? nextPage : 2}`}>
          <a>Next Page {">>"}</a>
        </Link>
      )}
    </div>
  )
}
