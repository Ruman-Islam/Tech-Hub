import RootLayout from "@/components/Layout/RootLayout";
import ProductCard from "@/components/UI/shared/ProductCard";
import { useRouter } from "next/router";

const CategoryScreen = ({ products }) => {
  const {
    query: { category },
  } = useRouter();

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
            {category}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryScreen;

CategoryScreen.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://link-backend.vercel.app/api/v1/admin/products`
  );
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { category: product.category },
  }));

  return { paths: paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { category } = params;
  const res = await fetch(
    `https://link-backend.vercel.app/api/v1/admin/products/category?category=${category}`
  );

  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
