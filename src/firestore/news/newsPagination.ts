import { firebase } from "../../../firebase";
import "firebase/firestore";
import {News} from "../../models/news";

export const NewsPagination = async (mode = '', currentNewsList:News[] =[]): Promise<News[]> => {

    const newsList:News[] = [];
    let query = firebase.firestore().collection('news');

    if(mode == 'next')
    {
        const last  = currentNewsList[currentNewsList.length-1];
        //@ts-ignore
        query = query.orderBy("title", 'desc').startAfter(last.title).limit(2);
    }

    if(mode == 'prev')
    {
        const last  = currentNewsList[0];
        //@ts-ignore
        query = query.orderBy("title", 'desc').startAfter(last.title).limit(2);
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