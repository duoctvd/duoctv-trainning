
import { firebase } from "../../firebase";
import "firebase/firestore";
import {News} from "../../models/news";


export const RetrieveNewsById = async (id:string) => {
    const db = firebase.firestore();
    const news:News = {id: '', title: '', description: ''};

    var docRef = await db.collection("news").doc(id);

    const doc = await docRef.get();

    news.id =  doc.id;
    news.title = doc.data()?.title;
    news.description =  doc.data()?.description;


    return news;

    // var news:News = {id: '', title: '', description: ''};

    // await docRef.get().then((doc) => {
    //     if (doc.exists) {
    //     //   news.id =  doc.id;
    //     //   news.title = doc.data()?.title;
    //     //   news.description =  doc.data()?.description;
    //     return doc;
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.warn("No such document!");
    //         return null;
    //     }
    // }).catch((error) => {
    //     console.warn("Error getting document:", error);
    //     return null;
    // });


}