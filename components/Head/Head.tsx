import { FC } from "react";
import NextHead from "next/head";
import { DefaultSeo } from "next-seo";

const config = {
  title: "株式会社OverPage | OverPage Inc.",
  titleTemplate: "%s - ACME Storefront",
  description: "株式会社OverPageのコーポレートサイトです。",
  canonical: "https://overpage.net",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://overpage.net",
    site_name: "OverPage",
  },
  twitter: {
    handle: "@nextjs",
    site: "@nextjs",
    cardType: "summary_large_image",
  },
};

const Head: FC = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="pEGjtrDuCrxEtWbEHFR8PQk8lwZW4E-jpgoXniFZMFk"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Material+Icons"
        />
      </NextHead>
    </>
  );
};

export default Head;
