import React from "react";
import { useRouter } from "next/router";
import { firebase } from "../firebase";
import "firebase/auth";
import { useEffect } from 'react';

// Here you would fetch and return the user
const useUser = () => ({ user: null, loading: false })

export default function Logout() {
  const router = useRouter();
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      const { user, loading } = useUser()
      const router = useRouter()
    
      useEffect(() => {
        if (!(user || loading)) {
          router.push('/')
        }
      }, [user, loading])
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      // An error happened.
      console.log("An error happened");
    });
  return <></>;
}
