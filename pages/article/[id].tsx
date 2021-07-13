import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import ThumnailProduct from "../../components/ThumnailProduct";

import Footer from "../../components/Footer";

export default function Article() {
  const router = useRouter();

  function handleOnclick() {
    router.push("/");
  }

  return (
    <>
      <Head>
        <Title>Article detail</Title>
      </Head>
      <Heading>This is article {router.query.id} detail page</Heading>
      <ProductDetail>
        <ThumnailProduct />
      </ProductDetail>
      <Button onClick={handleOnclick}>Home page</Button>
      <Footer />
    </>
  );
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  text-align: center;
  margin-left: 47%;
`;

const Heading = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const ProductDetail = styled.div``;

const Title = styled.title``;
