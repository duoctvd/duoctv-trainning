
import firebase from "firebase/app";
import "firebase/firestore";

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

const firestore = firebase.firestore();
firestore.settings({timestampsInSnapshots: true})

export { firestore };
