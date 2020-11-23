import { FC, useState } from "react";
import styles from "./Inquiry.module.css";
import { sendMail } from "../../lib/firebase";

const About: FC = () => {
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
    <>
      <h2>お問い合わせ</h2>
      <form className={styles.inquiry} onSubmit={handleSubmit}>
        <div className={styles.formInput}>
          <label htmlFor="name">お名前</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="山田花子"
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
            placeholder="yamada@domain"
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
    </>
  );
};

export default About;
