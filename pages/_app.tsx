import { FC } from "react";
import { Head } from "../components";
import "../styles/globals.css";

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp(props: { Component; pageProps }): JSX.Element {
  const Layout = props.Component.Layout || Noop;

  return (
    <>
      <Head />
      <Layout>
        <props.Component {...props.pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
