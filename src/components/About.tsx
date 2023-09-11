import { FC, memo } from "react";
import styles from "@/styles/components/about.module.scss";

const About: FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <h2 className={styles.about__sectionTitle}>about</h2>
        <div className={styles.about__textWrap}>
          <p>
            テキストテキストテキストテキストテキストテ
            キストテキストテキストテキスト テキストテ
            キテキストテキストテキストテキストテキスト
            テキストテキストテキストテキスト テキストテ
            キテキストテキストテキストテキストテキスト
            テキストテキストテキストテキスト テキストテ
            キテキストテキストテキストテキストテキスト
            テキストテキストテキストテキスト テキストテ
            キテキストテキストテキスト
          </p>
          <p>
            テキストテキストテキストテキストテキストテ
            キストテキストテキストテキスト テキストテ
            キテキストテキストテキストテキストテキスト
            テキストテキストテキストテキスト テキストテ
            キテキストテキストテキストテキストテキスト
            テキストテキストテキストテキスト テキストテ
            キテキストテキストテキストテキストテキスト
            テキストテキストテキストテキスト テキストテ
            キテキストテキストテキスト
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
