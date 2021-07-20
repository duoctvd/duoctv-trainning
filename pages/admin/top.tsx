import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../../components/Footer";
import firebase from 'firebase/app';
import 'firebase/auth';
import Link from "next/link";
import { useRouter } from "next/router";

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

export default function Top() {
    // [START auth_current_user]
    const router = useRouter();
    let user_name;
    let photo;
    let user = firebase.auth().currentUser;
   
    if (user != null) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
      console.log("User is signed in");
      user_name = user.displayName;
      photo = user.photoURL
    } else {
      // No user is signed in.
      router.push("/");
      console.log("No user is signed in.");
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
       <img src={`${photo}`} alt="" />
       <br />
       <Link href={`/logout`}>
        <Button>Log out</Button>
        </Link>
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
`;
