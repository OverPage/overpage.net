import { FC } from "react";
import styles from "./About.module.css";

const About: FC = () => {
  return (
    <>
      <h2>会社概要</h2>
      <table className={styles.company}>
        <tbody>
          <tr>
            <th>会社名</th>
            <td>
              株式会社OverPage
              <br />
              (OverPage, Inc.)
            </td>
          </tr>
          <tr>
            <th>設立年月日</th>
            <td>2018年8月24日</td>
          </tr>
          <tr>
            <th>本店所在地</th>
            <td>東京都江東区富岡１丁目２５番５号</td>
          </tr>
          <tr>
            <th>代表者</th>
            <td>田中 俊也</td>
          </tr>
          <tr>
            <th>事業内容</th>
            <td>
              ・web、MixedReality、Blockchain等の次世代インターネットに関する調査及び研究開発
              <br />
              ・インターネットサービス及びコンテンツの企画、開発並びに販売、運営
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default About;
