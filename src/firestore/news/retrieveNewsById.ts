import { firebase } from "../../../firebase";
import "firebase/firestore";
import { News } from "src/models/news";

export const retrieveNewsById = async (id: string): Promise<News> => {
  const doc = await firebase.firestore().collection("news").doc(id).get();
  return {
    id: doc.id,
    title: doc.data()?.title,
    description: doc.data()?.description,
  } as News;

};
