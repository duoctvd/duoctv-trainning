import Head from "next/head";
import { createGlobalStyle } from "styled-components";
// This default export is required in a new `pages/_app.tsx` file.
export default function MyApp(
  { Component }: { Component: any },
  { pageProps }: { pageProps: any }
) {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>duoctv trainning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;
