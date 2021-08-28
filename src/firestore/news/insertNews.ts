import { firebase } from "../../../firebase";
import "firebase/firestore";
import { News } from "../../models/news";

export const insertNews = async (news: News): Promise<string> => {
  const doc = await firebase.firestore().collection("news").add(news);

  return doc.id;
};
