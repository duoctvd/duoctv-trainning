import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../../../../components/Footer";
import "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { firebase } from "../../../../firebase";
import "firebase/firestore";
import { useRouter } from 'next/router';

type FormValues = {
  title: string;
  description: string;
  photo: string;
};

function Form({ news }) {
    console.log('edit');
    console.log(news);

    let db = firebase.firestore();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
      let db = firebase.firestore();
      db.collection("news").add({
          title: data.title,
          description: data.description,
          openFlag: 1,
          delFlag: 0
      })
      .then((docRef) => {
          alert("Document written with ID: "+ docRef.id +"("+data.title+")");
          console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
          alert("ERROR");
          console.error("Error adding document: ", error);
      });
    };
  
    return (
      <>
        <Head>
          <Title>News Edit Form</Title>
        </Head>
        <Heading>News Edit Form</Heading>
  
        <Container>
          <FormGroup onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="title">Title</Label>
            <Input
              {...register("title", {
                required: { value: true, message: "Title is required" },
              })}
              id="title"
              placeholder="please input title"
            />
            {errors.title && <PValidation>{errors.title.message}</PValidation>}
  
            <Label htmlFor="description">Description</Label>
            <Textarea
              {...register("description", {
                required: { value: true, message: "Desciption is required" },
              })}
              id="description"
            />
            {errors.description && <PValidation>{errors.description.message}</PValidation>}
  
            <Label htmlFor="photo">Photo</Label>
            <Input
              {...register("photo", {
                required: { value: false, message: "Photo is required" },
              })}
              id="photo"
              type="file"
            />
            {errors.photo && <PValidation>{errors.photo.message}</PValidation>}
  
            <InputButton type="submit">Submit</InputButton>
  
            <Link href={`/admin/news/list`} passHref>
              <Button>Back</Button>
            </Link>
          </FormGroup>
        </Container>
        <Footer />
      </>
    );
  }

    // // // This also gets called at build time
    // export async function getStaticProps() {
    //     // params contains the post `id`.
    //     // If the route is like /posts/1, then params.id is 1

    //     // let db = firebase.firestore();

    //     // var docRef = db.collection("news").doc(params.id);
    //     // console.log(docRef);

    
    //     // // Pass post data to the page via props
    //     // return { props: { docRef } }
    //   }
  // This function gets called at build time
export async function getStaticPaths() {
    // Get the paths we want to pre-render based on posts

    let db = firebase.firestore();

    var docRef = db.collection("news").doc("3ayR2E1naSC6R3AxaCFx");

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    

    // const paths = posts.map(() => ({
    //   params: { id: post.id },
    // }))

    const paths = [
        { params: { id: '3ayR2E1naSC6R3AxaCFx' } },
      ];

  //  let paths: any;
  //  const router = useRouter();
    

    // console.log(paths);
  
    // // We'll pre-render only these paths at build time.
    // // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

  // This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1

    let db = firebase.firestore();

    var docRef = db.collection("news").doc(params.id);
    let res = false;
    docRef.get().then((doc) => {
        if (doc.exists) {
            res = doc.data();
            console.log("No suewewch document!");
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    const news = res;
    
  
    // Pass post data to the page via props
    return { props: { news } }
  }


  export default Form
  
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
  
  const FormGroup = styled.form`
    width: 40%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  `;
  
  const Input = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid black;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  `;
  
  const Label = styled.label`
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    color: black;
    font-size: 20px;
    font-weight: 200;
  `;
  const Textarea = styled(Input)`
    height: 100px;
  `;
  
  const PValidation = styled.p`
    color: red;
    text-align: left;
  `;
  
  const Button = styled.button`
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid black;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
    cursor: pointer;
  `;
  
  const InputButton = styled(Button)``;
