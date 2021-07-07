import Head from 'next/head'
import Link from 'next/link'

import styled from 'styled-components';

export default function Home() {

  const Heading = styled.h1``;
  const Thing = styled.div``;
  const Image = styled.img``;
  const Conainer = styled.div``;

  return (
    <Conainer className="container">
      <Head>
        <title>duoctv trainning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading className="title">
          Welcome to <a href="">duoctv first training!</a >
        </Heading>

        <p className="description">
          This is home page
        </p>

        <div className="grid">
          <Thing href="" className="card">
            <Link href="/article/1"><h3>Article 1 &rarr;</h3></Link>
            <Image src="/images/photo1.jpg" />
            <p>This is article 1.</p>
          </Thing>

          <Thing href="" className="card">
            <Link href="/article/2"><h3>Article 2 &rarr;</h3></Link>
            <Image src="/images/photo2.jpg" />
            <p>This is article 2!</p>
          </Thing>

          <Thing href="" className="card">
            <Link href="/article/3"><h3>Article 31 &rarr;</h3></Link>
            <Image src="/images/photo3.jpg" />
            <p>This is article 3.</p>
          </Thing>

          <Thing href="" className="card" >
            <Link href="/article/4"><h3>Article 4 &rarr;</h3></Link>
            <Image src="/images/photo4.jpg" />
            <p>
              This is article 4
            </p>
          </Thing>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
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
      `}</style>
    </Conainer>
  )
}
