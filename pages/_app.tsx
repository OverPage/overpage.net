import { FC } from "react";
import { Head } from "../components";
import "../styles/globals.css";

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
