import { categories } from "@/constants/navbar";
import Link from "next/link";
import Input from "./shared/Input";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="text-gray-600 body-font mb-4 container mx-auto">
      <div className="bg-color_bg">
        <div className="container mx-auto flex px-4 md:px-8 py-5 gap-x-1 flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row flex-1 gap-x-4 items-center">
            <a className="flex title-font font-medium items-center mb-4 md:mb-0 text-white">
              <Link href="/" className="text-3xl">
                Tech Hub
              </Link>
            </a>
            <Input width="w-7/12" placeholder="Search Something..." />
          </div>
          {session?.user ? (
            <button
              onClick={() => signOut()}
              className="mr-2 text-white font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="b mx-auto h-8 w-24 flex justify-center items-center"
            >
              <span className="text-center text-white font-semibold z-10 pointer-events-none">
                Login
              </span>
            </Link>
          )}

          <Link
            href="/pc-builder"
            className="b mx-auto h-10 w-28 flex justify-center items-center"
          >
            <div className="h-10 w-28 bg-gradient-to-br from-yellow-400 to-yellow-600 items-center rounded shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out flex flex-col justify-center">
              {" "}
              <span className="text-center text-white font-semibold z-10">
                PC Builder
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="shadow-md bg-white py-1">
        <nav className="container mx-auto px-4 md:px-8 py-2 md:border-gray-400 flex flex-wrap items-center text-sm justify-start font-semibold">
          {categories.map(({ category, categorySlug, company }) => (
            <a
              key={category}
              className="group mr-5 relative hover:text-gray-900 font-bold"
            >
              <button>{category}</button>
              <div
                className="hidden left-0 absolute group-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg border-t-2 border-yellow-400 pt-1"
              >
                {company.map((c) => (
                  <Link
                    href={`/component/brand/${categorySlug}/${c}`}
                    key={c}
                    className="px-5 py-1 hover:bg-yellow-400 hover:text-color_bg duration-200 font-normal capitalize"
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
