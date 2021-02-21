import Link from "next/link"
import Image from "next/image"
import styles from "./ProductItem.module.css"

export default function ProductItem({ image }) {
  return (
    <div className={styles.productItem}>
      <Link href={`/products/[productId]?productId=${image.id}`}>
        <a>
          {
            <Image
              src={`https://picsum.photos/id/${image.id}/300`}
              width={300}
              height={300}
              layout="responsive"
              alt={`Photo by ${image.author}`}
            />
          }
        </a>
      </Link>
    </div>
  )
}
