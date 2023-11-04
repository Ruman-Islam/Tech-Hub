import { AiOutlineStar } from "react-icons/ai";
import ProductCard from "./shared/ProductCard";
import { IProduct } from "@/interfaces/common";

const FeaturedProducts = ({ allProducts }: { allProducts: IProduct[] }) => {
  return (
    <div className="my-16">
      <div className="flex items-center my-8">
        <div className="border-b w-full"></div>
        <div className="border py-3 px-5 uppercase font-semibold flex items-center gap-x-1 bg-white">
          <AiOutlineStar /> <span>products</span>
        </div>
        <div className="border-b w-full"></div>
      </div>

      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap gap-5 justify-center">
              {allProducts?.map((product: IProduct) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturedProducts;
