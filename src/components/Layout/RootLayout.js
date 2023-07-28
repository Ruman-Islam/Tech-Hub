import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <main className="container px-8 mb-auto mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
