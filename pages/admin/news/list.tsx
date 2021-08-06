import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../../../components/Footer";
import "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { firebase } from "../../../firebase";
import "firebase/firestore";

type News = {
  id: string;
  title: string;
  description: string;
};

function List(news: News) {

  console.log(news);
  return (
    <>
      <Head>
        <Title>News List</Title>
      </Head>
      <Heading>News List</Heading>

      <Container>
        <TotalCount>
          <B>Total: 20 news</B>
          
          <Link href={`/admin/news/form`} passHref>
            <AddNewsButton>Add new</AddNewsButton>
          </Link>
          
        </TotalCount>
       
        <StyledTable>
          <THead>
            <TR>
              <TH>Photo</TH>
              <TH>Title</TH>
              <TH>Descrption</TH>
              <TH>Edit</TH>
              <TH>Delete</TH>
            </TR>
          </THead>
          <TBody>
          {news.news.map((item, index) => (
            <TR>
              <TD>
                <Image
                  src="/images/photo1.jpg"
                  alt="Picture of the product"
                  width={80}
                  height={80}
                />
              </TD>
              <TD>{item.title}</TD>
              <TD>{item.description}</TD>
              <TD>
              <Link href={`/admin/news/form/${item.id}`} passHref>
                <Button>Edit</Button>
                </Link>
              </TD>
              <TD>
              <Link href={`/admin/top`} passHref>
                <Button>Delete</Button>
              </Link>
              </TD>
            </TR>
           ))} 
          </TBody>
        </StyledTable>
        <Pagination>
          <PaginationStep>&laquo;</PaginationStep>
          <PaginationStep>1</PaginationStep>
          <PaginationStep>2</PaginationStep>
          <PaginationStep>3</PaginationStep>
          <PaginationStep>4</PaginationStep>
          <PaginationStep>&raquo;</PaginationStep>
        </Pagination>
        < br/>
        <Link href={`/admin/top`} passHref>
            <Button>Admin</Button>
        </Link>
        < br/>
      </Container>
      
      <Footer />
    </>
  );
}

export default List

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  let news = new Array();
  let db = firebase.firestore();

  // await the promise
  const querySnapshot = await db.collection('news').get();

  // "then" part after the await
  querySnapshot.forEach(function (doc) {
    news.push({
      id: doc.id,
      title: doc.data().title,
      description : doc.data().description,
    });
    console.warn("Document keys:", doc.id);
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

const Heading = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const Title = styled.title``;

const Container = styled.div`
  text-align: center;
  padding: 0 0.5rem;
  align-items: center;

  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const TotalCount = styled.p`
  text-align: left;
  color: red;
`;
const StyledTable = styled.table`
  // custom css goes here
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
`;

const THead = styled.thead`
  // custom css goes here
`;

const TFoot = styled.tfoot`
  // custom css goes here
`;

const TBody = styled.tbody`
  // custom css goes here
`;

const TR = styled.tr`
  // custom css goes here
`;

const TH = styled.th`
  // custom css goes here
  border: 1px solid black;
  border-collapse: collapse;
`;

export const TD = styled.td`
  // custom css goes here
  border: 1px solid black;
  border-collapse: collapse;
`;

const Pagination = styled.div`
  display: inline-block;
`;

const PaginationStep = styled.a`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
`;

const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

const AddNewsButton = styled(Button)`
  position: absolute;
  right: 200px;
`;

const B = styled.b``;