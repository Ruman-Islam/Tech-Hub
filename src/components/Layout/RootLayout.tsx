import Footer from "../UI/Footer";
import Navbar from "@/components/UI/Navbar";
// import dynamic from "next/dynamic";
interface Props {
  children: JSX.Element[] | JSX.Element;
}

const RootLayout = ({ children }: Props) => {
  // const DynamicNavbar = dynamic(() => import("@/components/UI/Navbar"), {
  //   ssr: false,
  // });
  return (
    <div className="flex flex-col h-screen justify-between">
      {/* <DynamicNavbar /> */}
      <Navbar />
      <main className="container px-4 md:px-2 xl:px-0 mb-auto mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
