import Layout from "@components/Layout"
import Image from "next/image"

import { useRouter } from "next/router"

export default function productId({ image }) {
  let router = useRouter()

  if (router.isFallback) {
    return <h1>Loading... </h1>
  }

  return (
    <Layout>
      <div>
        <h1>Image by {image.author}</h1>

        <a href={image.url} target="_blank">
          <Image
            src={`https://picsum.photos/id/${image.id}/1200`}
            alt=""
            width={1200}
            height={1200}
            layout="responsive"
          />
        </a>
        <p>Height: {image.height}</p>
        <p>Width: {image.width}</p>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  let { productId } = context.params
  let res = await fetch(`https://picsum.photos/id/${productId}/info`)
  let image = await res.json()

  if (image.type === "invalid-json") {
    return {
      notFound: true,
    }
  }

  return {
    props: { image }, // will be passed to the page component as props
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  let res = await fetch("https://picsum.photos/list")
  let data = await res.json()

  let paths = data.map((i) => ({ params: { productId: i.id.toString() } }))

  return {
    paths,
    fallback: true,
  }
}
