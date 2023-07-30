import RootLayout from "@/components/Layout/RootLayout";


const AllProducts = () => {
  return <div>all product</div>;
};

export default AllProducts;

AllProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
