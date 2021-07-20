import Head from "next/head";
import styled from "styled-components";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Link from "next/link";
import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBr9jeCJhhbDCsKoguI9Xz_1EjtmJOIA0I",
  authDomain: "duoctv-trainning.firebaseapp.com",
  databaseURL: "https://duoctv-trainning.firebaseio.com",
  projectId: "duoctv-trainning",
  storageBucket: "duoctv-trainning.appspot.com",
  messagingSenderId: "15394958817",
  appId: "1:15394958817:web:fff4b45b4afaf0b12cb6a0"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default function Home() {

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

        <Link href={`/login`}>
        <Button>Log in</Button>
        </Link>

        <Link href={`/admin/top`}>
        <Button>admin</Button>
        </Link>

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


const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

