
import { firebase } from "../../firebase";
import "firebase/firestore";

export const DeleteNewsById = async(id: string): Promise<void> => {
    await firebase.firestore().collection("news").doc(id).delete();
}