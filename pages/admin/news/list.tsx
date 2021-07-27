import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../../../components/Footer";
import "firebase/auth";
import Image from "next/image";


export default function List() {
    return (
        <>
            <Head>
                <Title>News List</Title>
            </Head>
            <Heading>News List</Heading>
            
            <Container>
            <TotalCount><b>Total: 20 news</b></TotalCount>
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
              <TR>
                <TD>
                <Image
                  src="/images/photo1.jpg"
                  alt="Picture of the product"
                  width={80}
                  height={80}
                />

                </TD>
                <TD>News 1</TD>
                <TD>News 1 description</TD>
                <TD> <Button>Edit</Button></TD>
                <TD> <Button>Delete</Button></TD>
              </TR>

              <TR>
                <TD>
                <Image
                  src="/images/photo1.jpg"
                  alt="Picture of the product"
                  width={80}
                  height={80}
                />

                </TD>
                <TD>News 2</TD>
                <TD>News 2 description</TD>
                <TD> <Button>Edit</Button></TD>
                <TD> <Button>Delete</Button></TD>
              </TR>
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
            </Container>
            <Footer />

        </>
    )
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
`;
