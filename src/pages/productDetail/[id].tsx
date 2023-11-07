import { IProduct, IReview } from "@/interfaces/common";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";
import Button from "@/components/UI/shared/Button";
import Link from "next/link";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface ITag {
  title: string;
  value: string;
}

const tags: ITag[] = [
  { title: "price", value: "price" },
  { title: "status", value: "status" },
  { title: "product code", value: "_id" },
];

const ProductDetail = ({ product }: { product: IProduct }) => {
  if (!product) {
    return <p>Loading......</p>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden mb-5">
      <div className="container mx-auto">
        <div className="w-full justify-center flex gap-4 px-5 flex-col lg:flex-row">
          <div className="flex justify-center text-center border basis-[40%] shadow-md rounded-md p-20 h-[500px] bg-white">
            <Image
              style={{ width: "100%" }}
              width={1000}
              height={1000}
              alt={product?.productName}
              className="w-full h-full md:object-cover rounded-md"
              src={product?.img}
            />
          </div>

          <div className="basis-[60%] px-4 bg-white rounded-md shadow-md">
            <div className="py-4">
              <h1 className="text-2xl title-font font-medium mb-1 text-blue-800">
                {product?.productName}
              </h1>
              <div className="flex gap-2 py-4">
                {tags.map((item) => (
                  <Button
                    className="bg-[#F5F6FC] px-3 py-0.5 rounded-full border"
                    key={item?.title}
                  >
                    <small>
                      {item.title}:{" "}
                      <span className="font-bold">
                        {item.value === "price" ||
                        item.value === "status" ||
                        item.value === "_id"
                          ? product[item.value as keyof IProduct].toString()
                          : null}
                      </span>
                    </small>
                  </Button>
                ))}
              </div>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <span className="text-gray-600">
                    Rating: {product?.averageRating}
                  </span>
                </span>
              </div>

              <div>
                <h1 className="font-bold">Key Features: </h1>
                {product?.keyFeatures.map((ft) => (
                  <p key={ft} className="py-1">
                    {ft}
                  </p>
                ))}
              </div>
              <div className="flex pt-4 pb-1 border-b w-fit border-red-500">
                <Link
                  href={`/productDetail/${product.id}#detail`}
                  className="text-red-500 flex gap-1 items-center"
                >
                  <span>More Info</span> <AiOutlineInfoCircle />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div id="detail" className="px-5 mt-5 mx-4 rounded-md bg-white py-5">
          <div className="w-full">
            <h1 className="font-bold mb-1">Description:</h1>
            <p className="text-sm">{product?.description}</p>
          </div>
          <br />
          <div className="w-full">
            <h1 className="font-bold mb-1">Review:</h1>

            <div>
              {product?.reviews.map((item: IReview, index: number) => (
                <div className="border-t pt-2" key={index}>
                  <p className="text-sm">{item.text}</p>
                  <br />
                  <p>
                    By{" "}
                    <span className="text-blue-800 font-semibold">
                      {item.name}
                    </span>{" "}
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://link-backend.vercel.app/api/v1/admin/products`
  );
  const products = await res.json();

  const paths = products.map((product: IProduct) => ({
    params: { id: product.id },
  }));

  return { paths: paths, fallback: false };
};

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const { params } = context;

  const res = await fetch(
    `https://link-backend.vercel.app/api/v1/admin/products/detail?id=${params?.id}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
