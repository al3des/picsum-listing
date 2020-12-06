import { useState, useEffect } from "react";

import { useRouter } from "next/router";

import Layout from "@components/Layout";
import ProductItem from "@components/ProductItem";
import ProductsPagination from "@components/ProductsPagination";

import styles from "./products.module.css";

export default function Products() {
  let router = useRouter();
  let { page } = router.query;

  let [images, setImages] = useState([]);
  // let [page, setPage] = useState(1);

  let url = `https://picsum.photos/v2/list?page=${page}&limit=9`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, [page]);

  let imagesList = images.map((image) => (
    <ProductItem key={image.id} image={image} />
  ));

  return (
    <div>
      <Layout>
        <ProductsPagination last={images.length < 9 ? true : false} />
        <h1>Products</h1>
        <div className={styles.productsList}>{imagesList}</div>
      </Layout>
    </div>
  );
}
