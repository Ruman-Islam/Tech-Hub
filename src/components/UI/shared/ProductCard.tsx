import { IProduct } from "@/interfaces/common";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="shadow-md hover:shadow-xl flex flex-col items-center max-w-[230px] lg:max-w-[250px] w-full bg-white rounded">
      <Link
        href={`/productDetail/${product.id}`}
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
          <div className="text-xs uppercase my-1">{product?.category}</div>
          <div className="leading-tight text-sm font-semibold hover:text-red-500 hover:underline duration-100">
            <Link href={`/productDetail/${product.id}`}>
              {product?.productName}
            </Link>
          </div>
          <div className="text-sm my-1">Rating: {product?.averageRating}</div>
          <div className="text-lg uppercase my-1 text-red-500 font-semibold">
            {product?.price} BDT
          </div>
        </div>
        <div>
          <div
            className={`text-sm capitalize text-right ${
              product?.status === "in-stock" ? "text-green-500" : "text-red-500"
            }`}
          >
            {product?.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
