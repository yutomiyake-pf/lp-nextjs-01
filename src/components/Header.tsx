import Image from "next/image";
import { FC, memo } from "react";

import styles from "@/styles/components/header.module.scss";
import { useToggle } from "react-use";
import Link from "next/link";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useToggle(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__logoWrap}>
          <Link href={"/"}>
            <Image
              className={styles.header__logo}
              src="/images/logo.svg"
              alt="Furniture Design"
              loading="lazy"
              height={20}
              width={180}
            />
          </Link>
        </h1>
        <nav
          className={`${styles.header__navMenu} ${
            isMenuOpen ? styles.active : ""
          }`}
        >
          <ul className={styles.header__navLinks}>
            <li>
              <Link className={styles.header__navLink} href="/">
                Products
              </Link>
            </li>
            <li>
              <Link className={styles.header__navLink} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={styles.header__navLink} href="/company">
                Company
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className={`${styles.header__hamburger} ${
            isMenuOpen ? styles.close : ""
          }`}
          onClick={setIsMenuOpen}
        ></button>
      </div>
    </header>
  );
};

export default memo(Header);
