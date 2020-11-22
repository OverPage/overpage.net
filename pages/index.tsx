import Head from "next/head";
import { useState } from "react";
import { sendMail } from "../lib/firebase";
import styles from "../styles/Home.module.css";

export default function Home() {
  // form state
  const [sendData, setSendData] = useState({
    email: "",
    name: "",
    content: "",
  });

  const validate = () => {
    if (
      sendData.name.length === 0 ||
      sendData.email.length === 0 ||
      sendData.content.length === 0
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    if (!validate()) {
      alert("入力されていない項目があります。");
      return;
    }

    const payload = { ...sendData };
    sendMail(payload)
      .then(() => {
        alert("お問い合わせありがとうございます。送信完了しました。");
      })
      .catch((err) => {
        alert("送信に失敗しました。時間をおいて再度お試しください。");
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setSendData({ ...sendData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="pEGjtrDuCrxEtWbEHFR8PQk8lwZW4E-jpgoXniFZMFk"
        />
        <meta
          content="株式会社OverPageのコーポレートサイトです。"
          name="description"
        />
        <meta
          content="株式会社OverPageのコーポレートサイトです。"
          property="og:description"
        />
        <title>株式会社OverPage/OverPage Inc.</title>
        <link rel="canonical" href="https://overpage.net" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Material+Icons"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo_wrapper}>
          <img className={styles.logo} alt="OverPage" src="/logo.jpg" />
        </div>

        <div className={styles.card}>
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
        </div>

        <div className={styles.card}>
          <h2>プレスリリース</h2>
          <div className={styles.news}>
            <a href="https://prtimes.jp/main/html/rd/p/000000005.000041982.html">
              2020/3/27
              YouTuber/VTuber向けマーケティング支援ツール「アポイタカラ
              」で3Dファイルのサポート開始およびVRのカスタマイズツールを公開
            </a>
            <a href="https://prtimes.jp/main/html/rd/p/000000004.000041982.html">
              2019/12/26
              ブロックチェーンを活用したYouTuber/VTuber向けマーケティング支援ツール「アポイタカラ
              」でツイキャスをサポート開始！
            </a>
            <a href="https://prtimes.jp/main/html/rd/p/000000003.000041982.html">
              2019/9/22
              ブロックチェーンを活用したYouTuber/VTuber向けマーケティング支援ツール「アポイタカラ
              」をメインネットに移行
            </a>
            <a href="https://prtimes.jp/main/html/rd/p/000000002.000041982.html">
              2019/4/30
              ブロックチェーンを活用したYouTuber/VTuber向けマーケティング支援ツール「アポイタカラ
              」で音声ファイルのトークンを開始
            </a>
            <a href="https://prtimes.jp/main/html/rd/p/000000001.000041982.html">
              2019/3/13
              株式会社OverPage、ブロックチェーンを活用したYouTuber/VTuber向けマーケティング支援ツール「アポイタカラ
              」のアルファ版を開始
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <h2>お問い合わせ</h2>
          <form className={styles.inquiry} onSubmit={handleSubmit}>
            <div className={styles.formInput}>
              <label htmlFor="name">お名前</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="田中太郎"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formInput}>
              <label htmlFor="email">返信用メールアドレス</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@domain"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formInput}>
              <label htmlFor="content">お問い合わせ内容</label>
              <textarea
                name="content"
                id="content"
                rows={5}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.submitButtonWrapper}>
              <button type="submit">送信する</button>
            </div>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        © OverPage, Inc. All rights Reserved.
      </footer>
    </div>
  );
}
