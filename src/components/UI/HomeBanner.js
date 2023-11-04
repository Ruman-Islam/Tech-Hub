import Image from "next/image";
import Input from "./shared/Input";
import { categories } from "@/constants/navbar";

const HomeBanner = () => {
  return (
    <section className="text-gray-600 body-font mb-4">
      <div className="container mx-auto flex lg:flex-row flex-col-reverse gap-x-5 items-center ">
        <div className="lg:max-w-lg lg:w-1/4 w-full flex flex-col mb-auto bg-white">
          {/* <div className="bg-[#FFE8A1] p-5">
            <h2 className="text-center mb-2 font-semibold">Compare Products</h2>
            <div>
              <Input width="w-full" placeholder="Search and Select Product" />
              <div className="h-2"></div>
              <Input width="w-full" placeholder="Search and Select Product" />
              <button className="w-full mt-2 py-2 border-2 rounded border-blue-800 hover:bg-blue-800 duration-300 hover:text-white font-semibold">
                View Comparison
              </button>
            </div>
          </div> */}
          <div className="flex-1 shadow">
            <h1 className="text-center border-b mt-2 pb-1 font-semibold">
              Categories
            </h1>
            <div className="p-4 h-[368px]">
              {categories.map(({ category }) => (
                <a
                  key={category}
                  className="group mb-2 relative hover:text-gray-900 block"
                >
                  <button>{category}</button>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 w-full flex flex-col md:items-start md:text-left items-center text-center mb-2">
          <Image
            width={1000}
            height={500}
            layout="responsive"
            alt="hero"
            src="https://storage.pixteller.com/designs/designs-images/2020-12-21/05/laptop-new-arrival-sales-banner-1-5fe0c47813869.png"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
