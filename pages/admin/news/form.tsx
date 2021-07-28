import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../../../components/Footer";
import "firebase/auth";
import { useForm } from "react-hook-form";

type FormValues = {
  title: string;
  description: string;
  photo: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <>
      <Head>
        <Title>News Form</Title>
      </Head>
      <Heading>News Form</Heading>

      <Container>
        <form onSubmit={handleSubmit((data) => {})}>
          <label htmlFor="title">Title</label>
          <input
            {...register("title", {
              required: { value: true, message: "Title is required" },
            })}
            id="title"
          />
          {errors.title && <p>{errors.title.message}</p>}

          <label htmlFor="description">Description</label>
          <textarea
            {...register("description", {
              required: { value: true, message: "Desciption is required" },
            })}
            id="description"
          />
          {errors.description && <p>{errors.description.message}</p>}

          <label htmlFor="photo">Photo</label>
          <input
            {...register("photo", {
              required: { value: true, message: "Photo is required" },
            })}
            id="photo"
            type="file"
          />
          {errors.photo && <p>{errors.photo.message}</p>}

          <input type="submit" />
        </form>
      </Container>
      <Footer />

      <style jsx>{`
        label {
          line-height: 2;
          text-align: left;
          display: block;
          margin-bottom: 13px;
          margin-top: 20px;
          color: black;
          font-size: 20px;
          font-weight: 200;
        }
        input {
          display: block;
          box-sizing: border-box;
          width: 100%;
          border-radius: 4px;
          border: 1px solid black;
          padding: 10px 15px;
          margin-bottom: 10px;
          font-size: 14px;
        }

        textarea {
          display: block;
          box-sizing: border-box;
          width: 100%;
          height: 100px;
          border-radius: 4px;
          border: 1px solid black;
          padding: 10px 15px;
          margin-bottom: 10px;
          font-size: 14px;
        }
        p {
          color: red;
          text-align: left;
        }
      `}</style>
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
