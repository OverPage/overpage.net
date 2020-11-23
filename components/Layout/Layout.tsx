import { FC } from "react";
import Footer from "./Footer";
import styles from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
