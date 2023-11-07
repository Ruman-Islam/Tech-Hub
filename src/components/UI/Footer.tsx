import Link from "next/link";
import {
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
  TiSocialPinterestCircular,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="body-font bg-[#00071B] mt-5">
      <div className="h-[300px] flex flex-col justify-center items-center text-white">
        <div>
          <h1 className="text-3xl font-bold">TechHub.com</h1>
        </div>
        <div className="my-4 flex gap-2 text-gray-400">
          <Link className="hover:underline" href="/">
            HOME
          </Link>
          <Link className="hover:underline" href="/">
            AGENT
          </Link>
          <Link className="hover:underline" href="/">
            ABOUT
          </Link>
          <Link className="hover:underline" href="/">
            LISTING
          </Link>
          <Link className="hover:underline" href="/">
            BLOG
          </Link>
          <Link className="hover:underline" href="/">
            CONTACT
          </Link>
        </div>

        <div className="flex gap-1 text-blue-400">
          <span className="cursor-pointer" title="Facebook">
            <TiSocialFacebookCircular size={30} />
          </span>
          <span className="cursor-pointer" title="Twitter">
            <TiSocialTwitterCircular size={30} />
          </span>
          <span className="cursor-pointer" title="Pinterest">
            <TiSocialPinterestCircular size={30} />
          </span>
        </div>
        <div>
          <small>
            Copyright @2024 All right reserved |{" "}
            <span className="text-blue-400">TechHub.com</span>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
