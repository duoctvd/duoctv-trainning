import { firebase } from "../../firebase";
import "firebase/firestore";
import {News} from "../../models/news";

export const RetrieveNews = async (): Promise<News[]> => {

    const newsList:News[] = [];

    const db = firebase.firestore();
    const querySnapshot = await db.collection('news').get();

    // "then" part after the await
    querySnapshot.forEach(function (doc) {
        newsList.push({
        id: doc.id,
        title: doc.data().title,
        description : doc.data().description,
        });
    })

    return newsList;
}