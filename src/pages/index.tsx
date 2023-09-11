import BaseLayout from "@/components/layout/BaseLayout";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const HomePage: NextPage = () => {
  const Products = dynamic(() => import("@/components/Products"), {
    ssr: false,
  });

  return (
    <BaseLayout>
      <Products />
    </BaseLayout>
  );
};

export default HomePage;
