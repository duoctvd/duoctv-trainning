import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <>
      <Head>
        <Title>Login page</Title>
      </Head>
      <Heading>login page</Heading>
      <Container>
        <Form>
          <Input placeholder="please input email" size="10px" />
          <br />
          <PasswordInput placeholder="please input password" size="10px" />
          <br />
          <Button>Login!</Button>
        </Form>
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
  border: 1px solid;
`;

const Form = styled.form``;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 1px solid black;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
  width: 20%;
`;

const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  border: 1px solid black;
  width: 20%;
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
