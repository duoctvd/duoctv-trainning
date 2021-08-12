import React from "react";
import Head from "next/head";
import styled from "styled-components";
import NewsListTemplate from "../../../components/templates/admin/news/list";
import "firebase/auth";
import { firebase } from "../../../firebase";
import "firebase/firestore";
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { InferGetStaticPropsType } from 'next';
import {News} from "../../../models/news";
import { RetrieveNews } from '../../../firestore/news/retrieveNews';


function List({ newsList }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <NewsListTemplate newsList={newsList} />;
}

export default List

export const getStaticProps = async () => {
  const newsList:News[] = [];
  // await the promise
  const querySnapshot = await RetrieveNews();

  // "then" part after the await
  querySnapshot.forEach(function (doc) {
    newsList.push({
      id: doc.id,
      title: doc.data().title,
      description : doc.data().description,
    });
    console.warn(doc.data());

  })

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      newsList,
    },
  }
}

