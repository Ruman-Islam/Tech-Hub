import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import cpu from "../../assets/images/4854348.png";
import ram from "../../assets/images/ram.png";
import power from "../../assets/images/computer-power-supply-pc-18d5exA-600.jpg";
import storage from "../../assets/images/storage.jpg";
import monitor from "../../assets/images/monitor.png";
import motherboard from "../../assets/images/motherboard.jpg";
import Link from "next/link";

const categoryImages = [
  {
    imgUrl: cpu,
    title: "CPU / Processor",
    url: "processor",
  },
  {
    imgUrl: ram,
    title: "RAM",
    url: "ram",
  },
  {
    imgUrl: power,
    title: "Power Supply Unit",
    url: "power-supply",
  },
  {
    imgUrl: storage,
    title: "Storage Device",
    url: "storage",
  },
  {
    imgUrl: monitor,
    title: "Monitor",
    url: "monitor",
  },
  {
    imgUrl: motherboard,
    title: "Motherboard",
    url: "motherboard",
  },
];

const FeaturedCategories = () => {
  return (
    <div className="mt-16">
      <div className="flex items-center my-8">
        <div className="border-b w-full"></div>
        <div className="border py-3 px-5 uppercase font-semibold flex items-center gap-x-1 bg-white">
          <AiFillStar /> <span>categories</span>
        </div>
        <div className="border-b w-full"></div>
      </div>

      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 justify-items-center">
              {categoryImages.map((category) => (
                <Link
                  href={`/component/category/${category.url}`}
                  key={category.title}
                >
                  <div className="p-3 max-w-[250px] w-full shadow-lg bg-white cursor-pointer">
                    <div className="relative h-48 rounded overflow-hidden mx-auto flex justify-center">
                      <Image
                        width={500}
                        height={500}
                        layout="responsive"
                        alt="hero"
                        src={category.imgUrl}
                      />
                    </div>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium text-center">
                        {category.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturedCategories;
