import React from "react";
import Head from "next/head";
import styled from "styled-components";
import NewsListTemplate from "../../../components/templates/admin/news/list";
import "firebase/auth";
import { firebase } from "../../../../firebase";
import "firebase/firestore";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { InferGetStaticPropsType } from "next";
import { News } from "../../../models/news";
import { RetrieveNews } from "../../../firestore/news/retrieveNews";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import "firebase/storage";

function List({
  newsList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //  // Create a root reference
  //  var storageRef = firebase.storage().ref();
  //  let reader = new FileReader();

  // ;
  //  // Create a reference to 'mountains.jpg'
  //  var mountainsRef = storageRef.child('/photo1.jpg');
  //  mountainsRef.put(reader.readAsText('/photo1.jpg')).then((snapshot) => {
  //   console.log('Uploaded a blob or file!');
  // });

  return <NewsListTemplate newsList={newsList} />;
}

export default List;

export const getServerSideProps: GetServerSideProps = async () => {
  var newsList: News[] = [];
  // await the promise
  newsList = await RetrieveNews();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      newsList,
    },
  };
};
