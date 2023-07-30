import RootLayout from "@/components/Layout/RootLayout";
import Link from "next/link";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Image from "next/image";
import cpu from "../assets/images/4854348.png";
import ram from "../assets/images/ram.png";
import power from "../assets/images/computer-power-supply-pc-18d5exA-600.jpg";
import storage from "../assets/images/storage.jpg";
import monitor from "../assets/images/monitor.png";
import motherboard from "../assets/images/motherboard.jpg";

const categoryImages = [
  {
    imgUrl: cpu,
    title: "CPU",
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

const PcBuilderScreen = () => {
  const { pc } = useSelector((state) => state?.pcBuilder);

  const buildPc = () => {
    toast.success("Congratulations! You have successfully build your PC");
  };

  return (
    <div className="min-h-screen py-5 text-black">
      <div className="border border-t-0 max-w-[950px] w-full mx-auto bg-white">
        <div className="border border-l-0 border-r-0 p-5">
          <h1 className="text-xl font-semibold">PC Builder</h1>
        </div>
        <div className="py-5 px-10">
          {categoryImages?.map((category, i) => {
            return (
              <div key={i}>
                <div className="w-full my-2">
                  <div className="flex border rounded-lg border-opacity-50 px-4 py-0.5 sm:flex-row flex-col items-center">
                    <div className="w-10 h-10 sm:mr-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                      <Image
                        className="contain h-full w-full rounded-full"
                        src={category?.imgUrl}
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div className="flex-grow items-center flex">
                      <h2 className="text-gray-900 text-sm title-font font-medium">
                        {category?.title}
                      </h2>
                    </div>
                    <div className="flex items-center border rounded text-blue-800 font-semibold border-blue-800 py-0.5 px-4">
                      <Link href={`/component/pcBuilder/${category?.url}`}>
                        <button className="btn btn-primary mt-3 sm:mt-0">
                          Choose
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                {Object.keys(pc)?.map((key, i) => {
                  return (
                    key === category?.url && (
                      <div key={i} className="rounded border p-4 my-2">
                        <div className="flex rounded sm:flex-row flex-col">
                          <div className="max-w-[100px] w-full">
                            <Image
                              src={pc[key]?.img}
                              className="w-full h-full rounded-lg"
                              width={400}
                              height={400}
                              alt=""
                            />
                          </div>
                          <div className="flex-grow  flex flex-col">
                            <h2 className="text-gray-900 text-xs title-font font-medium ml-2 uppercase">
                              {pc[key]?.category}
                            </h2>
                            <h2 className="text-gray-900 text-sm title-font font-medium ml-2">
                              {pc[key]?.productName}
                            </h2>
                            <h2 className="text-gray-900 text-sm title-font font-medium ml-2">
                              Rating: {pc[key]?.averageRating}
                            </h2>
                            <h2
                              className={`text-sm title-font font-medium ml-2 ${
                                pc[key]?.status === "in-stock"
                                  ? "text-green-500"
                                  : "text-red-500"
                              }`}
                            >
                              {pc[key]?.status}
                            </h2>
                            <h2
                              className={`text-sm title-font font-medium ml-2 text-red-500`}
                            >
                              {pc[key]?.price} BDT
                            </h2>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center my-5">
          <button
            className="border border-blue-800 p-2 rounded text-blue-800 font-semibold"
            onClick={() => buildPc()}
            disabled={Object.keys(pc)?.length < 6}
          >
            Complete Build
          </button>
        </div>
      </div>
    </div>
  );
};

export default PcBuilderScreen;

PcBuilderScreen.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getServerSideProps = async function () {
//   const categoriesRes = await fetch(
//     "http://localhost:5000/api/v1/admin/products"
//   );
//   const categories = await categoriesRes.json();
//   return {
//     props: {
//       categories: categories,
//     },
//   };
// };
