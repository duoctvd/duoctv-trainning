import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../../components/Footer";

export default function Top() {
  return (
    <>
      <Head>
        <Title>Admin top page</Title>
      </Head>
      <Heading>Admin top page</Heading>
      <Container>
        You have logged in
        <br />
        Hello tranvanduoc2304@gmail.commm!
        <br />
        <Button>Log out</Button>
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
