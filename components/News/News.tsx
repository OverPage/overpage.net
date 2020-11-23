import { FC } from "react";
import { NewsItems } from "./item";
import styles from "./News.module.css";

const About: FC = () => {
  return (
    <>
      <h2>プレスリリース</h2>
      {NewsItems.map((item, index) => (
        <div key={index} className={styles.news}>
          <div className={styles.date}>{item.date}</div>
          <a href={item.url}>{item.subject}</a>
        </div>
      ))}
    </>
  );
};

export default About;
