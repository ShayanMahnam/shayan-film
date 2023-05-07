import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <title>Shayan Film</title>
        <link rel="icon" href="/images/logo.png" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="description" content="This is Shayan Film Full Stack App" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
