import React from "react";
import styled from "styled-components";
import "firebase/auth";
import { firebase } from "../../../../firebase";
import "firebase/firestore";
import {News} from "../../../../models/news";
import NewsFormTemplate from "../../../../components/templates/admin/news/form";


function Form(props: { news: News }) {
    console.log('edit');
    return <NewsFormTemplate news={props.news} mode="edit"/>;
    
  }

  export async function getServerSideProps(context: any) {
  
    const idNews= context.query.id;

    var news:News = {id: '', title: '', description: ''};
    const db = firebase.firestore();
    var docRef = await db.collection("news").doc(idNews);

    await docRef.get().then((doc) => {
        if (doc.exists) {
          news.id =  doc.id;
          news.title = doc.data().title;
          news.description =  doc.data().description;
        } else {
            // doc.data() will be undefined in this case
            console.warn("No such document!");
        }
    }).catch((error) => {
        console.warn("Error getting document:", error);
    });

    return {
      props: {news}, // will be passed to the page component as props
    }
  }


  export default Form
  
 
