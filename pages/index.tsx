import React from "react";
import { About, Inquiry, Layout, News } from "../components";
import styles from "../styles/Home.module.css";

export default function Home(): JSX.Element {
  return (
    <>
      <div className={styles.logo_wrapper}>
        <img className={styles.logo} alt="OverPage" src="/logo.jpg" />
      </div>

      <div className={styles.card}>
        <About />
      </div>

      <div className={styles.card}>
        <News />
      </div>

      <div className={styles.card}>
        <Inquiry />
      </div>
    </>
  );
}

Home.Layout = Layout;
