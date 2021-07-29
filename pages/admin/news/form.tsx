import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../../../components/Footer";
import "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

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
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  return (
    <>
      <Head>
        <Title>News Form</Title>
      </Head>
      <Heading>News Form</Heading>

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
              required: { value: true, message: "Photo is required" },
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
const Textarea = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
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

const InputButton = styled.button`
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