import { FC } from "react";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      © OverPage, Inc. All rights Reserved.
    </footer>
  );
};

export default Footer;
