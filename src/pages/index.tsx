import dynamic from "next/dynamic";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import FeaturedProducts from "@/components/UI/FeaturedProducts";
import { IProduct } from "@/interfaces/common";

const DynamicBanner = dynamic(() => import("@/components/UI/HomeBanner"), {
  ssr: false,
});

const HomeScreen = ({ allProducts }: { allProducts: IProduct[] }) => {
  return (
    <>
      <DynamicBanner />
      <FeaturedCategories />
      <FeaturedProducts allProducts={allProducts} />
    </>
  );
};

export default HomeScreen;

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
