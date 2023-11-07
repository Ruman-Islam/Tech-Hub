import Image from "next/image";
import Link from "next/link";
import Input from "./shared/Input";
import { categories } from "@/constants/navbar";
import cpuImg from "../../assets/icons/4617522.png";
import monitor from "../../assets/icons/monitor.png";
import psu from "../../assets/icons/psu.png";
import ram from "../../assets/icons/ram.png";
import storage from "../../assets/icons/storage.png";
import motherboard from "../../assets/icons/motherboard.png";
import Button from "./shared/Button";

const images = [cpuImg, monitor, psu, ram, storage, motherboard];

const HomeBanner = () => {
  return (
    <section className="text-gray-600 body-font mb-4">
      <div className="container mx-auto flex lg:flex-row flex-col-reverse gap-x-5">
        <div className="flex flex-col bg-white lg:max-w-[300px] w-full">
          <div className="bg-[#FFE8A1] p-5">
            <h2 className="text-center mb-2 font-semibold">Compare Products</h2>
            <div>
              <Input width="w-full" placeholder="Search and Select Product" />
              <div className="h-2"></div>
              <Input width="w-full" placeholder="Search and Select Product" />
              <Button className="w-full mt-2 py-2 border-2 rounded border-blue-800 hover:bg-blue-800 duration-300 hover:text-white font-semibold">
                View Comparison
              </Button>
            </div>
          </div>
          <div className="h-fit border">
            <h1 className="text-center border-b mt-2 pb-1 font-semibold">
              Categories
            </h1>
            <div className="p-4 h-full flex lg:flex-col gap-4 lg:gap-0 flex-wrap">
              {categories.map(({ category, categorySlug }, i) => (
                <Link
                  href={`/category/${categorySlug}`}
                  key={category}
                  className="group mb-2 relative hover:text-gray-950 hover:font-semibold flex gap-x-1 items-center w-fit duration-300"
                >
                  <Image
                    src={images[i]}
                    width={200}
                    height={200}
                    className="w-4 h-4"
                    alt=""
                  />{" "}
                  <span>{category}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="basis-[80%] w-full border h-[466px] shadow bg-white">
          <Image
            width={1000}
            height={1000}
            className="h-[466px] w-full"
            alt="hero"
            src="https://i.pinimg.com/originals/c3/32/1a/c3321a98ad07d570f0b3d568dcb00cf0.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
