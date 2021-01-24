import { AppProps } from 'next/app';
import Head from 'next/head';
import { StrictMode } from 'react';

import { ThemeProvider } from '../components/providers';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StrictMode>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1.0, initial-scale=1.0, width=device-width" />
        <title>BookShelf</title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </StrictMode>
  );
};

export default MyApp;
