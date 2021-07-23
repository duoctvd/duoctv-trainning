import React from "react";
import { useRouter } from "next/router";
import { firebase } from "../firebase";
import "firebase/auth";

export default function Logout() {
  const router = useRouter();
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      router.push('/');
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      // An error happened.
      console.log("An error happened");
    });
  return <></>;
}
