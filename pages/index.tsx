import Head from 'next/head';
import styled from 'styled-components';
import Product from '../components/Product';
import Footer from '../components/Footer';

export default function Home() {

  const Heading = styled.h1``;
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
          <Product id="1" photo="photo1.jpg" name="Article 1"/>
          <Product id="2" photo="photo2.jpg" name="Article 2"/>
          <Product id="3" photo="photo3.jpg" name="Article 3"/>
          <Product id="4" photo="photo4.jpg" name="Article 4"/>
        </div>
      </main>

      <Footer />
      

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
