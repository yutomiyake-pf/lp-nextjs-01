import { FC, memo } from "react";
import styles from "@/styles/components/company.module.scss";

const companyData = [
  { term: "社名", description: "株式会社〇〇〇〇" },
  { term: "住所", description: "〒000-0000 東京都〇〇区〇〇〇0-0-0" },
  { term: "設立", description: "2021年0月0日" },
  { term: "資本金", description: "1,000万円" },
  { term: "従業員数", description: "123名" },
  {
    term: "事業内容",
    description: [
      "家具、インテリアの企画・生産",
      "家具、インテリアの販売",
      "店舗の企画・デザイン・設計",
    ],
  },
];

const Company: FC = () => {
  return (
    <section className={styles.company}>
      <div className={styles.company__content}>
        <h2 className={styles.company__sectionTitle}>company</h2>
        <dl className={styles.company__definitionList}>
          {companyData.map((c) => (
            <div className={styles.company__definitionWrap} key={c.term}>
              <dt className={styles.company__definitionTerm}>{c.term}</dt>
              <dd className={styles.company__definitionDes}>
                {Array.isArray(c.description)
                  ? c.description.map((d) => <div key={d}>{d}</div>)
                  : c.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default memo(Company);
