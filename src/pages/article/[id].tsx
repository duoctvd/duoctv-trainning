import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import ThumnailProduct from "../../components/ThumnailProduct";
import Footer from "../../components/Footer";
import {News} from "../../models/news";
import { RetrieveNews } from '../../firestore/news/retrieveNews';
import { RetrieveNewsById } from '../../firestore/news/retrieveNewsById';
import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import { InferGetStaticPropsType } from 'next';

export default function Article({ news }: InferGetStaticPropsType<typeof getStaticProps>) {

  const router = useRouter();

  function handleOnclick() {
    router.push("/");
  }

  return (
    <>
      <Head>
        <Title>Article detail</Title>
      </Head>
      <Heading>This is {news.title}</Heading>
      <ProductDetail>
        <ThumnailProduct news={news}/>
      </ProductDetail>
      <Button onClick={handleOnclick}>Home page</Button>
      <Footer />
    </>
  );
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // console.log(context);
  const idNews:string = context.params?.id as string;

  var news:News = {id: '', title: '', description: ''};

  news = await RetrieveNewsById(idNews);

  // Pass post data to the page via props
  return { props: { news } }
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  var newsList:News[] = [];
  // await the promise
  newsList = await RetrieveNews();

  // Get the paths we want to pre-render based on posts
  const paths = newsList.map((news) => ({
    params: { id: news.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
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
