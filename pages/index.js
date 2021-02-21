import Layout from "@components/Layout"
import ProductItem from "@components/ProductItem"
import ProductsPagination from "@components/ProductsPagination"

import styles from "./products.module.css"

export default function Products({ images }) {
  let imagesList = images.map((image) => (
    <ProductItem key={image.id} image={image} />
  ))

  return (
    <div className={styles.root}>
      <Layout>
        <ProductsPagination last={images.length < 9 ? true : false} />
        <h1>Products</h1>
        <div className={styles.productsList}>{imagesList}</div>
      </Layout>
    </div>
  )
}

export async function getServerSideProps(context) {
  let page = context.query.page || 1
  let url = `https://picsum.photos/v2/list?page=${page}&limit=9`
  let data = await fetch(url).then((response) => response.json())

  return {
    props: {
      images: data,
    },
  }
}
