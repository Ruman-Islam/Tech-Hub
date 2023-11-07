import { IProduct } from "@/interfaces/common";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="shadow-md hover:shadow-xl flex flex-col items-center max-w-[230px] lg:max-w-[300px] w-full bg-white rounded border">
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
      <div className="py-3 px-4 h-full flex flex-col justify-between">
        <div>
          <div className="text-xs uppercase my-1">{product?.category}</div>
          <div className="leading-tight text-sm font-semibold hover:text-red-500 hover:underline duration-100">
            <Link
              href={`/productDetail/${product.id}`}
              title={product?.productName}
            >
              {product?.productName.length >= 100
                ? product?.productName.slice(0, 100) + "..."
                : product?.productName}
            </Link>
          </div>

          <div className="text-sm mt-4"></div>
        </div>

        <div
          className={`text-sm capitalize text-right flex items-center justify-between ${
            product?.status === "in-stock" ? "text-green-500" : "text-red-500"
          }`}
        >
          <span className="text-lg uppercase text-red-500 font-semibold">
            {" "}
            <span>{product?.price.toLocaleString()}</span>{" "}
            <span className="text-sm">BDT</span>
          </span>
          <span> {product?.status}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
