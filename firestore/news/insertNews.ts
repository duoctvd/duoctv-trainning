import { firebase } from "../../firebase";
import "firebase/firestore";
import {News} from "../../models/news";

export const InsertNews = async(news: News): Promise<string> => {  
    const db = firebase.firestore();

    const doc = await db.collection("news").add(news);

    return doc.id;

}