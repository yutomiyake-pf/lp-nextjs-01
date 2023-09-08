import Header from "@/components/Header";
import { FC } from "react";

import styles from "@/styles/components/footer.module.scss";

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <section>
        <h2>Product</h2>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footer__content}>
          <nav>
            <ul className={styles.footer__lists}>
              <li>
                <a className={styles.footer__link} href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className={styles.footer__link} href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className={styles.footer__link} href="#">
                  X
                </a>
              </li>
            </ul>
          </nav>
          <small className={styles.footer__copyright}>&copy; yuto miyake</small>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
