import Head from "next/head";
import styled from "styled-components";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { getUsers } from "./users";

export default function Home() {
  useEffect(() => {
    getUsers();
  }, []);
  
  return (
    <Container>
      <Head>
        <Title>duoctv trainning</Title>
      </Head>

      <Main>
        <Heading>Welcome to duoctv first training!</Heading>
        <ProducGrid>
          <Product
            id={Number(1)}
            photo="photo1.jpg"
            name="Article 1"
            bgrColor=""
          />
          <Product
            id={Number(2)}
            photo="photo2.jpg"
            name="Article 2"
            bgrColor="yellow"
          />
          <Product
            id={Number(3)}
            photo="photo3.jpg"
            name="Article 3"
            bgrColor="green"
          />
          <Product
            id={Number(3)}
            photo="photo4.jpg"
            name="Article 4"
            bgrColor="pink"
          />
        </ProducGrid>
      </Main>

      <Footer />
    </Container>
  );
}

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

const Title = styled.title``;
