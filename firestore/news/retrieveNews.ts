import { firebase } from "../../firebase";
import "firebase/firestore";
import {News} from "../../models/news";

export const RetrieveNews = async (limit = 0): Promise<News[]> => {

    const newsList:News[] = [];

    let query = firebase.firestore().collection('news');
    
    if(limit > 0)
    {
        //@ts-ignore
        query = query.limit(limit)
    }
    const  querySnapshot = await query.get();

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