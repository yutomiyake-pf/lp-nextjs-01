import BaseLayout from "@/components/layout/BaseLayout";
import { NextPage } from "next";

import About from "@/components/About";

const AboutPage: NextPage = () => {
  return (
    <BaseLayout>
      <About />
    </BaseLayout>
  );
};

export default AboutPage;
