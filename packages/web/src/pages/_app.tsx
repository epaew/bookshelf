import { AppProps } from 'next/app';
import Head from 'next/head';
import { StrictMode } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StrictMode>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1.0, initial-scale=1.0, width=device-width" />
        <title>BookShelf</title>
      </Head>
      <Component {...pageProps} />
    </StrictMode>
  );
};

export default MyApp;
