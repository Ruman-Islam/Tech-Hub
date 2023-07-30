import Footer from "../UI/Footer";

const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <main className="container px-4 md:px-8 mb-auto mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
