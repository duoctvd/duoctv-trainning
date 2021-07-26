import Head from "next/head";
import styled from "styled-components";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Link from "next/link";
import { firebase } from "../firebase";
import "firebase/auth";

export default function Home() {
  // [START auth_current_user]
  let isLoggedIn = false;
  let user = firebase.auth().currentUser;

  if (user != null) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
    isLoggedIn = true;
  } else {
    // No user is signed in.
  }

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

        {!isLoggedIn && (
          <Link href={`/login`} passHref>
            <Button>Log in</Button>
          </Link>
        )}

        {isLoggedIn && (
          <Link href={`/admin/top`} passHref>
            <Button>admin</Button>
          </Link>
        )}
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
