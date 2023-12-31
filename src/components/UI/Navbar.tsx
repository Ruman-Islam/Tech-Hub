import { categories } from "@/constants/navbar";
import Link from "next/link";
import Input from "./shared/Input";
import { useSession, signOut } from "next-auth/react";
import Button from "./shared/Button";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="text-gray-600 body-font mb-4 w-full mx-auto">
      <div className="bg-[#00071B]">
        <div className="container mx-auto flex px-4 md:px-1 py-5 gap-x-1  md:flex-row justify-between items-center">
          <div className="flex flex-1 gap-x-4 items-center">
            <a className="flex title-font font-medium items-center text-white">
              <Link href="/" className="text-xl lg:text-3xl">
                Tech Hub
              </Link>
            </a>

            <div className="w-7/12 hidden md:block">
              <Input width="w-full" placeholder="Search Something..." />
            </div>
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
            <div className="h-10 w-28 bg-gradient-to-br from-blue-600 to-blue-800 items-center rounded shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out flex flex-col justify-center">
              {" "}
              <span className="text-center text-white font-semibold z-10">
                PC Builder
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="shadow-md bg-white py-1">
        <nav className="container mx-auto px-4 md:px-1 py-2 md:border-gray-400 flex flex-wrap items-center text-sm justify-start font-semibold">
          {categories.map(({ category, categorySlug, company }) => (
            <a
              key={category}
              className="group mr-5 relative hover:text-gray-900 font-bold"
            >
              <Button>{category}</Button>
              <div
                className="hidden left-0 absolute group-hover:flex hover:flex
           w-[200px]
           flex-col bg-white drop-shadow-lg border-t-2 border-blue-800 pt-1 z-10"
              >
                {company.map((c) => (
                  <Link
                    href={`/brand/${categorySlug}/${c}`}
                    key={c}
                    className="px-5 py-1 hover:bg-blue-800 hover:text-white duration-200 font-normal capitalize"
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
