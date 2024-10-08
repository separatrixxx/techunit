import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang="cz">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/metropolis-2?styles=21190,21184,21176,21178,21174" rel="stylesheet" />
        <meta name="google-site-verification" content="Qy3kpQErHaDY3HmEnfl8ceRsAAgqkHGK2mS_X844UwA" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
