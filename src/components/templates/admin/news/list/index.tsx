import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "src/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { News } from "src/models/news";
import "firebase/firestore";
import { useRouter } from "next/router";
import { deleteNewsById } from "src/firestore/news/deleteNewsById";
import { useState } from "react";
import { newsPagination } from "src/firestore/news/newsPagination";

// export default function NewsListTemplate({ newsList }: { newsList: News[] }) { 

    // const router = useRouter();
    // var [newsListResult, setNewsListResult] = useState(newsList);
    // const [end, setEnd] = useState(false);
    // const [start, setStart] = useState(true);

export  const nextPage = async () => {
    // setEnd(false);


    // const newNewsList = await newsPagination("next", newsListResult);
    // setNewsListResult((newsListResult = newNewsList));
    // if (newsListResult.length < 2) {
    // setEnd(true);
    // }
    // setStart(false);
    // return <NewsListTemplate newsList={newsList} />;
    // return 1;
};

export  const prevPage = async () => {
    alert(33);
    // setEnd(false);


    // const newNewsList = await newsPagination("next", newsListResult);
    // setNewsListResult((newsListResult = newNewsList));
    // if (newsListResult.length < 2) {
    // setEnd(true);
    // }
    // setStart(false);
};


async function handleDelete(id: string) {
    // // e.preventDefault();
    // await deleteNewsById(id);
    // alert("Document successfully deleted!" + id);
    // router.replace("/admin/news/list");
  }

// }

