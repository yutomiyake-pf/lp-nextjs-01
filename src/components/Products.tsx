import { products } from "@/utils/vars/productVars";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "@/styles/components/products.module.scss";

const Products: FC = () => {
  return (
    <section className={styles.products}>
      <div className={styles.products__content}>
        <h2 className={styles.products__sectionTitle}>Product</h2>
        <ul className={styles.products__listWrap}>
          {products.map((p) => (
            <li className={styles.products__productWrap} key={p.id}>
              <Link
                className={styles.products__productLinkWrap}
                href={`/product/${p.id}`}
              >
                <div>
                  <Image
                    className={styles.products__productImage}
                    src={p.image}
                    alt={p.title}
                    height={294}
                    width={294}
                    loading="lazy"
                  />
                </div>
                <div className={styles.products__infoWrap}>
                  <strong className={styles.products__title}>{p.title}</strong>
                  <p>
                    &yen; {p.price.toLocaleString()} <small>+tax</small>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
