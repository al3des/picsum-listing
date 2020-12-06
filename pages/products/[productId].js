import Layout from "@components/Layout";

export default function productId({ image }) {
  return (
    <Layout>
      <div>
        <h1>Image by {image.author}</h1>
        <p>Height: {image.height}</p>
        <p>Width: {image.width}</p>
        <a href={image.url} target="_blank">
          <img src={`https://picsum.photos/id/${image.id}/500`} alt="" />
        </a>
      </div>
    </Layout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://picsum.photos/v2/list");
  const images = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = images.map((image) => ({
    params: { productId: image.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://picsum.photos/id/${params.productId}/info`);
  const image = await res.json();

  // Pass post data to the page via props
  return { props: { image } };
}
