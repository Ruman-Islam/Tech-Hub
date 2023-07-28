import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <main className="container px-5 mb-auto mx-auto border">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
