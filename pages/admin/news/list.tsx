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


function List({ news }: InferGetStaticPropsType<typeof getStaticProps>) {

  return <NewsListTemplate news={news} />;
}

export default List

export const getStaticProps = async () => {
  const news = [];
  const db = firebase.firestore();

  // await the promise
  const querySnapshot = await db.collection('news').get();

  // "then" part after the await
  querySnapshot.forEach(function (doc) {
    news.push({
      id: doc.id,
      title: doc.data().title,
      description : doc.data().description,
    });
    // console.warn("Document keys:", doc.id);
    console.warn(doc.data());

  })

  // console.log(posts)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      news,
    },
  }
}

