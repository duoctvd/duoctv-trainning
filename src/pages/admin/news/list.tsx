import React from "react";
import Head from "next/head";
import styled from "styled-components";
import NewsListTemplate from "../../../components/templates/admin/news/list";
import "firebase/auth";
import { firebase } from "../../../../firebase";
import "firebase/firestore";
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { InferGetStaticPropsType } from 'next';
import {News} from "../../../../models/news";
import { RetrieveNews } from '../../../../firestore/news/retrieveNews';
import { GetServerSideProps } from 'next';
import { InferGetServerSidePropsType } from 'next';


function List({ newsList }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <NewsListTemplate newsList={newsList} />;
}


export default List

export const getServerSideProps: GetServerSideProps = async () => {
  var newsList:News[] = [];
  // await the promise
  newsList = await RetrieveNews();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      newsList,
    },
  }

}

