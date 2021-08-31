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
import { nextPage,prevPage } from "src/components/templates/admin/news/list/index";

export default function NewsListTemplate({ newsList }: { newsList: News[] }) {
    const router = useRouter();
    var [newsListResult, setNewsListResult] = useState(newsList);
    const [end, setEnd] = useState(false);
    const [start, setStart] = useState(true);


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
              {newsListResult.map((item, index) => (
                <TR key={item.id}>
                  <TD>
                    {item.imagePath && (
                      <Image
                        src={item.imagePath || ''}
                        alt="Picture of the product"
                        width={80}
                        height={80}
                      />
                    )}
                  </TD>
                  <TD>{item.title}</TD>
                  <TD>{item.description}</TD>
                  <TD>
                    <Link href={`/admin/news/form/${item.id}`} passHref>
                      <Button>Edit</Button>
                    </Link>
                  </TD>
                  <TD>
                    {/* <Link href="#" passHref> */}
                    {/* <Button onClick={handleDelete(`${item.id}`)}>Delete</Button> */}
                    <Button onClick={() => handleDelete(`${item.id}`)}>
                      Delete
                    </Button>
                    {/* </Link> */}
                  </TD>
                </TR>
              ))}
            </TBody>
          </StyledTable>
          <Pagination>
            {start == false ? (
              <PaginationStep onClick={prevPage}>&laquo; Prev</PaginationStep>
            ) : (
              ""
            )}
            {/* <PaginationStep>1</PaginationStep>
            <PaginationStep>2</PaginationStep>
            <PaginationStep>3</PaginationStep>
            <PaginationStep>4</PaginationStep> */}
            {end == false ? (
              <PaginationStep onClick={nextPage}>Next &raquo;</PaginationStep>
            ) : (
              ""
            )}
          </Pagination>
          <br />
          <Link href={`/admin/top`} passHref>
            <Button>Admin</Button>
          </Link>
          <br />
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
  
  const TD = styled.td`
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
