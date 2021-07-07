import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';
import productPic from '../../public/images/photo1.jpg';

export default function Article() {

    const router = useRouter();

    function handleOnclick() {
        router.push('/');
    }

    const Button = styled.button`
        background: transparent;
        border-radius: 3px;
        color: palevioletred;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
        text-align: center;
        margin-left: 47%;
    `;

    const Heading = styled.h1`
        font-size: 2em;
        text-align: center;
        color: palevioletred;
    `;

    const Productname = styled.h3`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;

    const Thing = styled.div``;

    return (
        <>
            <Head>
                <title>Article detail</title>
            </Head>
            <Heading>This is article {router.query.id} detail page</Heading>
            <Thing>
                <Thing>
                    <Thing className="thumbnail">
                    <Image src={productPic} alt="Picture of the product" width={200} height={200} /> {/* error https://gyazo.com/18ceae4b5d6ab4fea18173ffb2ab06a3  */}
                    {/* <Image src="/images/photo1.jpg" alt="Picture of the product" width={200} height={200} /> */}   {/* => image can be displayed */}
                    <Thing className="caption">
                        <Productname>Article {router.query.id}</Productname>
                        <p>
                        This is article{router.query.id}This is article{router.query.id}This is article{router.query.id}This is article{router.query.id}
                        This is article{router.query.id}This is article{router.query.id}This is article{router.query.id}
                        This is article{router.query.id}This is article{router.query.id}This is article{router.query.id}
                        This is article{router.query.id}This is article{router.query.id}This is article{router.query.id}
                        This is article{router.query.id}This is article{router.query.id}This is article{router.query.id}This is article{router.query.id}
                        This is article{router.query.id}This is article{router.query.id}This is article{router.query.id}
                        This is article{router.query.id}This is article{router.query.id}
                        </p>
                    </Thing>
                    </Thing>
                </Thing>
            </Thing>

            <Button onClick={handleOnclick}>Home page</Button>

            <style jsx>{`
                .thumbnail {
                    display: block;
                    padding: 4px;
                    margin-bottom: 20px;
                    line-height: 1.42857143;
                    background-color: #fff;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                }

                .thumbnail a>img, .thumbnail>img {
                    margin-right: auto;
                    margin-left: auto;
                    display: block;
                    max-width: 100%;
                    height: auto;
                }
            `}</style>
        </>

    )
}

