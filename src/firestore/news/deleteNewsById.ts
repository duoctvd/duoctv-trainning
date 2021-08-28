import { firebase } from "../../../firebase";
import "firebase/firestore";

export const releteNewsById = async (id: string): Promise<void> => {
  await firebase.firestore().collection("news").doc(id).delete();
};
