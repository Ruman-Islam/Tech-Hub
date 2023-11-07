import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import FeaturedProducts from "@/components/UI/FeaturedProducts";
import { IProduct } from "@/interfaces/common";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const DynamicBanner = dynamic(() => import("@/components/UI/HomeBanner"), {
  ssr: false,
});

const HomeScreen = ({ allProducts }: { allProducts: IProduct[] }) => {
  useEffect(() => {
    const hasPopupShown = Cookies.get("popupShown");
    if (!hasPopupShown) {
      Swal.fire({
        title: "Attention!",
        text: "This website is not fully functional. A successful implementation of TypeScript on NextJS with Redux and more.",
        icon: "info",
      });

      // Set a cookie to indicate that the popup has been shown
      Cookies.set("popupShown", "true", { expires: 7 }); // Expires in 7 days
    }
  }, []);

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
