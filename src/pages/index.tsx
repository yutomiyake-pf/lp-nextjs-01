import BaseLayout from "@/components/layout/BaseLayout";
import dynamic from "next/dynamic";
import { FC } from "react";

const HomePage: FC = () => {
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
