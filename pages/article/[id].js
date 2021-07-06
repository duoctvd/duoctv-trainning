import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import styled from 'styled-components';

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

    const Image = styled.img``;

    const Thing = styled.div``;
    return (
        <>
            <Head>
                <title>Article detail</title>
            </Head>
            <Heading>This is article {router.query.id} detail page</Heading>
            <Thing className="row">
                <Thing className="col-sm-12 col-md-12">
                    <Thing className="thumbnail">
                    <Image src="/images/photo1.jpg" />
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
        </>

    )
}