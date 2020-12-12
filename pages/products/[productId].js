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

export async function getServerSideProps(context) {
  console.log(context.query);
  let { productId } = context.params;
  let res = await fetch(`https://picsum.photos/id/${productId}/info`);
  let image = await res.json();
  return {
    props: { image }, // will be passed to the page component as props
  };
}
