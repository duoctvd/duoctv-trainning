import { firebase } from "../../firebase";
import "firebase/firestore";

export const RetrieveNews = async () => {
    const db = firebase.firestore();
    const newsDoc = await db.collection('news').get();
    return newsDoc;
}