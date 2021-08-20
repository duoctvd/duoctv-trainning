import Head from "next/head";
import { InferGetStaticPropsType } from 'next';
import { GetStaticProps } from 'next';
import {News} from "../../models/news";
import { RetrieveNews } from '../../firestore/news/retrieveNews';
import TopTemplate from "../components/templates/top";

function Home({ newsList }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <TopTemplate newsList={newsList} />;
  
}

export default Home;


export const getStaticProps: GetStaticProps = async () => {
  var newsList:News[] = [];
  // await the promise
  newsList = await RetrieveNews(4);
  return {
    props: {
      newsList,
    },
    revalidate: 5, // In seconds
  }

}
