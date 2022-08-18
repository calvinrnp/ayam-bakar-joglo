import { Html, Head, Main, NextScript } from "next/document";
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { AppConfig } from "@/utils/AppConfig";

export default function Document() {
  return (
    <Html lang={AppConfig.locale}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
