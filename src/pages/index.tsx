import Footer from "@/components/Footer";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import { FC } from "react";

const HomePage: FC = () => {
  const Products = dynamic(() => import("@/components/Products"), {
    ssr: false,
  });

  return (
    <>
      <Header />
      <main>
        <Products />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
