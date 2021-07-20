import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import firebase from 'firebase/app';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyBr9jeCJhhbDCsKoguI9Xz_1EjtmJOIA0I",
  authDomain: "duoctv-trainning.firebaseapp.com",
  databaseURL: "https://duoctv-trainning.firebaseio.com",
  projectId: "duoctv-trainning",
  storageBucket: "duoctv-trainning.appspot.com",
  messagingSenderId: "15394958817",
  appId: "1:15394958817:web:fff4b45b4afaf0b12cb6a0"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default function Login() {

  const router = useRouter();


  // [START auth_google_provider_create]
  var provider = new firebase.auth.GoogleAuthProvider();
  // [END auth_google_provider_create]

  // [START auth_google_provider_scopes]
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  // [END auth_google_provider_scopes]
  
  // [START auth_google_provider_params]
  provider.setCustomParameters({
    'login_hint': 'tranvanduoc2394@gmail.com'
  });

  // [END auth_google_provider_params]
  // [START auth_google_signin_popup]
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      router.push("/admin/top");
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;

      // ...
    });
  // [END auth_google_signin_popup]


  return (
    <>
     
    </>
  );
}
