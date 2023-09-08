import { FC, ReactNode, memo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  children: ReactNode;
}

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default memo(BaseLayout);
