import React from "react";
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

  export default function Logout() {
    const router = useRouter();
    firebase.auth().signOut().then(() => {
    // Sign-out successful.
    router.push("/");
    console.log('Sign-out successful.')
    }).catch((error) => {
    // An error happened.
    console.log('An error happened')
    });
    return (
      <>
        
      </>
    );
  }
