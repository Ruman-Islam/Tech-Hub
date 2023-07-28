const Navbar = () => {
  return (
    <header className="text-gray-600 body-font mb-2">
      <div className="bg-color_bg">
        <div className="container mx-auto flex p-5 gap-x-1 flex-col md:flex-row justify-between items-center">
          <div className="flex flex-1 lg:gap-x-5 items-center">
            <a className="flex title-font font-medium items-center mb-4 md:mb-0 text-white">
              <span className="ml-3 text-3xl">Tech Hub</span>
            </a>
            <div className="max-w-[600px] w-full">
              <div className="relative flex items-center w-full h-9 rounded focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  className="peer h-full outline-none text-sm text-gray-700 max-w-[600px] w-full"
                  type="text"
                  id="search"
                  placeholder="Search something.."
                />
              </div>
            </div>
          </div>
          <div className="b mx-auto h-8 w-24 flex justify-center items-center">
            <a className="text-center text-white font-semibold z-10 pointer-events-none">
              Login
            </a>
          </div>
          <div className="b mx-auto h-10 w-28 flex justify-center items-center">
            <div className="i h-10 w-28 bg-gradient-to-br from-yellow-400 to-yellow-600 items-center rounded shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
            <a className="text-center text-white font-semibold z-10 pointer-events-none">
              PC Builder
            </a>
          </div>
        </div>
      </div>

      <div className="shadow-md">
        <nav className="container mx-auto  py-2 md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">CPU / Processo</a>
          <a className="mr-5 hover:text-gray-900">RAM</a>
          <a className="mr-5 hover:text-gray-900">Power Supply Unit</a>
          <a className="mr-5 hover:text-gray-900">Storage Device</a>
          <a className="mr-5 hover:text-gray-900">Monitor</a>
          <a className="mr-5 hover:text-gray-900">Others</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
