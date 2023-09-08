import { FC, memo } from "react";

import styles from "@/styles/components/footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
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
        <small className={styles.footer__copyright}>&copy; yuto miyake</small>
      </div>
    </footer>
  );
};

export default memo(Footer);
