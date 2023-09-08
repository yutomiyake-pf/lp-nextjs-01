import BaseLayout from "@/components/layout/BaseLayout";
import { products } from "@/utils/vars/productVars";
import { GetStaticProps } from "next";
import Image from "next/image";
import { FC } from "react";

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
const ProductDetailPage: FC<Props> = ({ product }) => {
  console.log(product);
  return (
    <BaseLayout>
      <section>
        <div>
          <div>
            <h2>{product.title}</h2>
            <div>
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
              />
              <div>
                <p>{product.description}</p>
                <p>
                  &yen; {product.price.toLocaleString()}
                  <small> +tax</small>
                </p>
              </div>
            </div>
          </div>
          <a href="/">Back To Products</a>
        </div>
      </section>
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
