import { FC, memo } from "react";

import styles from "@/styles/components/productDetail.module.scss";
import Image from "next/image";
import Link from "next/link";

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

const ProductDetail: FC<Props> = ({ product }) => {
  return (
    <section className={styles.productDetail}>
      <div className={styles.productDetail__content}>
        <h2 className={styles.productDetail__sectionTitle}>{product.title}</h2>
        <div className={styles.productDetail__infoWrap}>
          <Image
            className={styles.productDetail__image}
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
          />
          <div className={styles.productDetail__info}>
            <p className={styles.productDetail__des}>{product.description}</p>
            <p className={styles.productDetail__price}>
              &yen; {product.price.toLocaleString()}
              <small> +tax</small>
            </p>
            <dl className={styles.productDetail__descriptionList}>
              <div className={styles.productDetail__descriptionWrap}>
                <dt className={styles.productDetail__term}>Size:</dt>
                <dd className={styles.productDetail__definition}>
                  {product.size}
                </dd>
              </div>
              <div className={styles.productDetail__descriptionWrap}>
                <dt className={styles.productDetail__term}>Color:</dt>
                <dd className={styles.productDetail__definition}>
                  {product.color}
                </dd>
              </div>
              <div className={styles.productDetail__descriptionWrap}>
                <dt className={styles.productDetail__term}>Material:</dt>
                <dd className={styles.productDetail__definition}>
                  {product.Material}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className={styles.productDetail__linkWrap}>
          <Link className={styles.productDetail__link} href="/">
            Back To Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(ProductDetail);
