import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { firebase } from "../../firebase";
import "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";

export default function Top() {
  // [START auth_current_user]
  const router = useRouter();
  let user_name = null;
  let photo = null;
  let user = firebase.auth().currentUser;

  if (user != null) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
    console.log("User is signed in");
    user_name = user.displayName;
    photo = user.photoURL;
  }
  useEffect(() => {
    // If auth is null and we are no longer loading
    if (user == null) {
      router.push("/");
    }
  }, [user, router]);

  if (user == null) {
    return <p>Redirecting to top...</p>;
  }

  // [END auth_current_user]
  return (
    <>
      <Head>
        <Title>Admin top page</Title>
      </Head>
      <Heading>Admin top page</Heading>
      <Container>
        You have logged in
        <br />
        Hello {user_name}
        <br />
        <Image src={`${photo}`} alt={`${user_name}`} width={200} height={200} />
        <br />
        <ButtonGroup>
        <Link href={`/admin/news/list`} passHref>
          <Button>News List</Button>
        </Link>
        <br />
        <Link href={`/`} passHref>
          <Button>Home</Button>
        </Link>
        <br />
        <Link href={`/logout`} passHref>
          <Button>Log out!</Button>
        </Link>
        </ButtonGroup>
      </Container>
      <Footer />
    </>
  );
}

const Heading = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const Title = styled.title``;

const Container = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: inline-flex;
`;