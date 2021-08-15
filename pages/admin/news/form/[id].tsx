import React from "react";
import styled from "styled-components";
import "firebase/auth";
import { firebase } from "../../../../firebase";
import "firebase/firestore";
import {News} from "../../../../models/news";
import NewsFormTemplate from "../../../../components/templates/admin/news/form";
import { GetServerSideProps } from 'next';
import { InferGetServerSidePropsType } from 'next';
import { RetrieveNewsById } from '../../../../firestore/news/retrieveNewsById';

function Form({ news }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log('edit');
    return <NewsFormTemplate news={news} mode="edit"/>;
    
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const idNews:string = context.query.id as string;
  var news:News = {id: '', title: '', description: ''};

  news = await RetrieveNewsById(idNews);

  return {
    props: {news}, // will be passed to the page component as props
  }

}

export default Form
  
 
