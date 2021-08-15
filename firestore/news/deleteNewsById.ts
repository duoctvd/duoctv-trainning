
import { firebase } from "../../firebase";
import "firebase/firestore";

export const DeleteNewsById = async(id: string): Promise<void> => {
    const db = firebase.firestore();
    await db.collection("news").doc(id).delete();
}