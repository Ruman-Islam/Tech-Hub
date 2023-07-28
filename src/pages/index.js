import RootLayout from "@/components/Layout/RootLayout";

const HomeScreen = () => {
  return <div>Home</div>;
};

export default HomeScreen;

HomeScreen.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
