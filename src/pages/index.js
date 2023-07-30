import RootLayout from "@/components/Layout/RootLayout";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import FeaturedProducts from "@/components/UI/FeaturedProducts";
import dynamic from "next/dynamic";

const HomeScreen = ({ allProducts }) => {
  const DynamicBanner = dynamic(() => import("@/components/UI/HomeBanner"), {
    ssr: false,
  });

  return (
    <>
      <DynamicBanner />
      <FeaturedCategories />
      <FeaturedProducts allProducts={allProducts} />
    </>
  );
};

export default HomeScreen;

HomeScreen.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://link-backend.vercel.app/api/v1/admin/products`
  );
  const data = await res.json();
  const featured = data.slice(0, 10);

  return {
    props: {
      allProducts: featured,
    },
  };
};
