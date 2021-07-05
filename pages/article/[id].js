import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router'

export default function Article() {

    const router = useRouter();

    function handleOnclick() {
        router.push('/');
    }
    return (
        <>
            <Head>
                <title>Article detail</title>
            </Head>
            <h1>This is article {router.query.id} detail page</h1>
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <div className="thumbnail">
                    <img alt="pr" src="/images/photo1.jpg"/>
                    <div className="caption">
                        <h3>Article {router.query.id}</h3>
                        <p>This is article{router.query.id}</p>
                    </div>
                    </div>
                </div>
            </div>
            <button onClick={handleOnclick}>Home page</button>
        </>

    )
}