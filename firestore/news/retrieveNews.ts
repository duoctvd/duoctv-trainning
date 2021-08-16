import { firebase } from "../../firebase";
import "firebase/firestore";
import {News} from "../../models/news";

export const RetrieveNews = async (limit = 0): Promise<News[]> => {

    const newsList:News[] = [];

    const db = firebase.firestore();
    
    if(limit > 0)
    {
        var querySnapshot = await db.collection('news').limit(limit).get();
    } else {
        var querySnapshot = await db.collection('news').get();
    }

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