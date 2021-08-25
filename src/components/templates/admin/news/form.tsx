import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../../../../components/Footer";
import Link from "next/link";
import { News } from "../../../../models/news";
import { useForm, SubmitHandler } from "react-hook-form";
import { firebase } from "../../../../../firebase";
import "firebase/firestore";
import { InsertNews } from "../../../../firestore/news/insertNews";
import { UpdateNews } from "../../../../firestore/news/updateNews";
import "firebase/storage";

interface Props {
  news: News;
}

export default function NewsFormTemplate({ news }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<News>();

  const onSubmit: SubmitHandler<News> = async (data) => {
    var imagePath = "";
    if (data.imagePath) {
      let imageName = await getRandomString(10);
      const storageRef = await firebase.storage().ref();
      // Create a reference to 'mountains.jpg'


      const photoRef = await storageRef.child(
        "images/news/" + imageName + ".jpg"
      );

     
      let snapshot = await photoRef.put(
        await stringToArrayBuffer(data.imagePath[0])
      );


      // Get metadata properties
      photoRef.getMetadata().then((metadata) => {
        // Metadata now contains the metadata for 'images/forest.jpg'
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });

      photoRef.makePublic().then((data) => {
        const apiResponse = data[0];
        console.log(apiResponse);
      });



      


      imagePath = await snapshot.ref.getDownloadURL();
    }

    let newsID = "";
    if (!news.id) {
      console.log(data.imagePath);

      const insertData: News = {
        title: data.title,
        description: data.description,
        imagePath: imagePath,
        openFlag: true,
        delFlag: false,
      };
      newsID = await InsertNews(insertData);
      alert("Document written " + newsID);
    } else {
      // To update age and favorite color:
      newsID = news.id;
      const updateData: News = {
        id: news.id,
        title: data.title,
        description: data.description,
        imagePath: imagePath,
      };
      UpdateNews(updateData);
      alert("Document successfully updated!");
    }
  };

  function getRandomString(length = 5) {
    var randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }

  function stringToArrayBuffer(string = "", encoding = "UTF-8") {
    return new Blob([string], { type: "text/plain;charset=" + encoding });
  }

  return (
    <>
      <Head>
        <Title>News Edit Form</Title>
      </Head>
      <Heading>News Edit Form</Heading>

      <Container>
        <FormGroup onSubmit={handleSubmit(onSubmit)}>
          <InputHiden defaultValue={news.id} />
          <Label htmlFor="title">Title</Label>
          <Input
            defaultValue={news.title}
            {...register("title", {
              required: { value: true, message: "Title is required" },
            })}
            id="title"
            placeholder="please input title"
          />
          {errors.title && <PValidation>{errors.title.message}</PValidation>}

          <Label htmlFor="description">Description</Label>
          <Textarea
            defaultValue={news.description}
            {...register("description", {
              required: { value: true, message: "Desciption is required" },
            })}
            id="description"
          />
          {errors.description && (
            <PValidation>{errors.description.message}</PValidation>
          )}

          <Label htmlFor="photo">Photo</Label>
          <Input
            {...register("imagePath", {
              required: { value: false, message: "Photo is required" },
            })}
            id="imagePath"
            type="file"
          />
          {errors.imagePath && (
            <PValidation>{errors.imagePath.message}</PValidation>
          )}

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

const InputHiden = styled(Input)`
  display: none;
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
