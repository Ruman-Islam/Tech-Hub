const links = ["First Link", "Second Link", "Third Link", "Fourth Link"];

const Footer = () => {
  return (
    <footer className="body-font bg-color_bg text-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-yellow-400 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              {links.map((item) => (
                <li key={item}>
                  <a className="hover:text-yellow-400">{item}</a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-yellow-400 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              {links.map((item) => (
                <li key={item}>
                  <a className="hover:text-yellow-400">{item}</a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-yellow-400 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              {links.map((item) => (
                <li key={item}>
                  <a className="hover:text-yellow-400">{item}</a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-yellow-400 tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Bitters fanny pack
              <br className="lg:block hidden" />
              waistcoat green juice
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Tech Hub</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2020 Tech Hub —
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
