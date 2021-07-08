import Head from 'next/head';
// This default export is required in a new `pages/_app.tsx` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <div className="root-app">
            <Head>
                <title>duoctv trainning</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/css/bootstrap.min.css" />
            </Head>
            <Component {...pageProps} />
        </div>

    )
}