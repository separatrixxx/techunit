import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { setLocale } from '../../helpers/locale.helper';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>{setLocale(router.locale).techunit}</title>
        <meta name='description' content={setLocale(router.locale).techunit} />
        <meta property='og:title' content={setLocale(router.locale).techunit} />
        <meta property='og:description' content={setLocale(router.locale).techunit} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
