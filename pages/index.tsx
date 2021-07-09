import Head from 'next/head';
import styled from 'styled-components';
import Product from '../components/Product';
import Footer from '../components/Footer';

export default function Home() {

  const Container = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Heading = styled.h1`
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;
  `;

  const Main = styled.main`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const ProducGrid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 3rem;
    @media (max-width: 600px) {
      width: 100%;
      flex-direction: column;
    }
  `;

  return (
    <Container>
      <Head>
        <title>duoctv trainning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Heading>
          Welcome to <a href="#">duoctv first training!</a >
        </Heading>
        <ProducGrid>
          <Product id="1" photo="photo1.jpg" name="Article 1"/>
          <Product id="2" photo="photo2.jpg" name="Article 2" bgr_color="yellow"/>
          <Product id="3" photo="photo3.jpg" name="Article 3" bgr_color="green"/>
          <Product id="4" photo="photo4.jpg" name="Article 4" bgr_color="pink"/>
        </ProducGrid>
      </Main>

      <Footer />
 

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
    </Container>
  )
}
