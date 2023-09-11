import BaseLayout from "@/components/layout/BaseLayout";
import { products } from "@/utils/vars/productVars";
import { GetStaticProps, NextPage } from "next";

import ProductDetail from "@/components/ProductDetail";

interface Props {
  product: {
    id: string;
    title: string;
    description: string;
    price: number;
    size: string;
    color: string;
    Material: string;
    image: string;
  };
}
const ProductDetailPage: NextPage<Props> = ({ product }) => {
  return (
    <BaseLayout>
      <ProductDetail product={product} />
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const productId = ctx.params?.id as string;
  const product = products.find((p) => p.id.toString() === productId);
  if (!product) return { notFound: true };

  return {
    props: {
      product,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default ProductDetailPage;
