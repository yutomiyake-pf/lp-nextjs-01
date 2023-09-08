import Image from "next/image";
import { FC } from "react";

import styles from "@/styles/components/header.module.scss";

const HomePage: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__logoWrap}>
          <Image
            className={styles.header__logo}
            src="images/logo.svg"
            alt="Furniture Design"
            loading="lazy"
            height={20}
            width={180}
          />
        </h1>
        <button className={styles.header__hamburger}></button>
      </div>
    </header>
  );
};

export default HomePage;
