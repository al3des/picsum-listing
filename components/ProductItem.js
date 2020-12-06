import Link from "next/link";
import styles from "./ProductItem.module.css";

export default function ProductItem({ image }) {
  return (
    <div className={styles.productItem}>
      <Link href={`/products/[productId]?productId=${image.id}`}>
        <a>
          {
            <img
              src={`https://picsum.photos/id/${image.id}/300`}
              alt={`Photo by ${image.author}`}
            />
          }
        </a>
      </Link>
    </div>
  );
}
