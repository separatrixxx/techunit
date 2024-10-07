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
        <meta name='description' content={setLocale(router.locale).about_text} />
        <meta property='og:title' content={setLocale(router.locale).techunit} />
        <meta property='og:description' content={setLocale(router.locale).about_text} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.svg" sizes="120x120" type="image/svg+xml" />
        <link rel="icon" href="/favicon-48x48.ico" sizes="48x48" type="image/x-icon" />
        <link rel="icon" href="/favicon-144x144.ico" sizes="144x144" type="image/x-icon" />
        <link rel="icon" href="/favicon-192x192.ico" sizes="192x192" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon-167x167.ico" sizes="167x167" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon-180x180.ico" sizes="180x180" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
