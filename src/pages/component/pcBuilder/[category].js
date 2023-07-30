import RootLayout from "@/components/Layout/RootLayout";
import { addComponent } from "@/redux/pc-builder/pc-builderSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const PcBuilderCategoryScreen = ({ products }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToBuilder = (product) => {
    dispatch(addComponent(product));
    router.push("/pc-builder");
  };

  if (!products) {
    return <p>Loading......</p>;
  }

  return (
    <div className="mb-5">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
        <div className="max-w-[250px] w-full bg-white rounded-md hidden lg:block">
          <div className="border-b py-2 px-4 font-semibold">Price Range</div>
          <div className="p-4 mt-5">
            <div>
              <input
                type="range"
                className="range accent-red-500 w-full"
                defaultValue="0"
                min="0"
                max="1000"
              />
            </div>
            <div className="flex gap-x-10 mt-5">
              <input
                type="text"
                className="accent-red-500 border w-full text-center outline-none"
                defaultValue="0"
              />
              <input
                type="text"
                className="accent-red-500 border w-full text-center outline-none"
                defaultValue="0"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="capitalize py-2 px-4 bg-white rounded-md font-semibold mb-3">
            {router.query.category}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {products.map((product) => (
              <div
                key={product.id}
                className="shadow-md hover:shadow-xl flex flex-col items-center max-w-[230px] lg:max-w-[250px] w-full bg-white rounded"
              >
                <Link
                  href={`/component/productDetail/${product.id}`}
                  className="border-b w-full flex justify-center p-4 cursor-pointer"
                >
                  <Image
                    style={{ width: "100%" }}
                    width={600}
                    height={600}
                    src={product?.img}
                    alt=""
                  />
                </Link>
                <div className="p-3">
                  <div>
                    <div className="text-xs uppercase my-1">
                      {product?.category}
                    </div>
                    <div className="leading-tight text-sm font-semibold hover:text-red-500 hover:underline duration-100">
                      <Link href={`/component/productDetail/${product.id}`}>
                        {product?.productName}
                      </Link>
                    </div>
                    <div className="text-sm my-1">
                      Rating: {product?.averageRating}
                    </div>
                    <div className="text-lg uppercase my-1 text-red-500 font-semibold">
                      {product?.price} BDT
                    </div>
                  </div>
                  <div>
                    <div
                      className={`text-sm capitalize text-right ${
                        product?.status === "in-stock"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {product?.status}
                    </div>
                    <button
                      onClick={() => handleAddToBuilder(product)}
                      className="mt-3 sm:mt-0 w-full btn btn-accent border text-blue-800 font-semibold border-blue-800 hover:bg-blue-800 hover:text-white duration-150"
                    >
                      Add To Builder
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuilderCategoryScreen;

PcBuilderCategoryScreen.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async function (context) {
  const { params } = context;
  const res = await fetch(
    `https://link-backend.vercel.app/api/v1/admin/products/category?category=${params.category}`
  );
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
