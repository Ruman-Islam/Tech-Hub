import { AiOutlineStar } from "react-icons/ai";
import ProductCard from "./shared/ProductCard";
import { IProduct } from "@/interfaces/common";

const FeaturedProducts = ({ allProducts }: { allProducts: IProduct[] }) => {
  return (
    <div className="lg:mt-16">
      <div className="flex items-center my-6">
        <div className="border-b w-full"></div>
        <div className="border py-3 px-5 uppercase font-semibold flex items-center gap-x-1 bg-white">
          <AiOutlineStar /> <span>products</span>
        </div>
        <div className="border-b w-full"></div>
      </div>

      <div className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
            {allProducts?.map((product: IProduct) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
