import { useState } from "react";
import ProductCard from "@/components/UI/shared/ProductCard";
import { IProduct } from "@/interfaces/common";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import Input2 from "@/components/UI/shared/Input2";

const CategoryScreen = ({ products }: { products: IProduct[] }) => {
  const {
    query: { category },
  } = useRouter();

  const [items, setItems] = useState([
    { id: 1, title: "ASUS", checked: false },
    { id: 2, title: "ADATA", checked: false },
    { id: 3, title: "MSI", checked: false },
    { id: 4, title: "LG", checked: false },
    { id: 5, title: "HP", checked: false },
    { id: 6, title: "Gigabyte", checked: false },
    { id: 7, title: "Kingston", checked: false },
    { id: 8, title: "Toshiba", checked: false },
    { id: 9, title: "Samsung", checked: false },
  ]);

  const handleCheckboxChange = (itemId: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id.toString() === itemId
          ? { ...item, checked: !item.checked }
          : item
      )
    );
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
              <Input2
                type="range"
                className="range accent-red-500 w-full"
                defaultValue={0}
                min={0}
                max={1000}
              />
            </div>
            <div className="flex gap-x-10 mt-5">
              <Input2
                type="text"
                className="accent-red-500 border w-full text-center outline-none"
                defaultValue={0}
              />
              <Input2
                type="text"
                className="accent-red-500 border w-full text-center outline-none"
                defaultValue={1000}
              />
            </div>
          </div>

          <div className="overflow-y-auto p-4">
            {items.map((item) => (
              <div key={item?.id}>
                <label className="text-brand__font__size__sm text-brand__detail__text my-1.5 block text-gray-500">
                  <input
                    type="checkbox"
                    checked={item?.checked}
                    onChange={() => handleCheckboxChange(item?.id.toString())}
                  />{" "}
                  {item?.title}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="capitalize py-2 px-4 bg-white rounded-md font-semibold mb-3">
            {category}
          </div>
          <div className="flex flex-wrap gap-5">
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

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://link-backend.vercel.app/api/v1/admin/products`
  );
  const products = await res.json();

  const paths = products.map((product: IProduct) => ({
    params: { category: product.category },
  }));

  return { paths: paths, fallback: false };
};

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const { params } = context;

  const res = await fetch(
    `https://link-backend.vercel.app/api/v1/admin/products/category?category=${params?.category}`
  );

  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
