import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";

const ProductDetail = ({ product }) => {
  if (!product) {
    return <p>Loading......</p>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden mb-10">
      <div className="container pb-5 px-5 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white px-5">
          <div className="flex justify-center text-center">
            <Image
              style={{ width: "100%" }}
              width={800}
              height={600}
              alt={product?.productName}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product?.img}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {product?.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.productName}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <span className="text-gray-600">
                  Rating: {product?.averageRating}
                </span>
              </span>
            </div>
            <div className="mb-5">
              <h1 className="font-bold">Description:</h1>
              <p>{product?.description}</p>
            </div>
            <div>
              <h1 className="font-bold">Specification:</h1>
              {product?.keyFeatures.map((ft) => (
                <p key={ft}>{ft}</p>
              ))}
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex pb-4">
              <span className="title-font font-medium text-2xl text-red-500">
                {product?.price} BDT
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                BUY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

ProductDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://link-backend.vercel.app/api/v1/admin/products`
  );
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths: paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { id } = params;

  const res = await fetch(
    `https://link-backend.vercel.app/api/v1/admin/products/detail?id=${id}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
