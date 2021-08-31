import React from "react";
import styled from "styled-components";
import "firebase/auth";
import "firebase/firestore";
import { News } from "src/models/news";
import NewsFormTemplate from "src/components/templates/admin/news/form";

export default function Form() {
  var news: News = { id: "", title: "", description: "" };
  console.log("addnew");
  return <NewsFormTemplate news={news} />;
}
