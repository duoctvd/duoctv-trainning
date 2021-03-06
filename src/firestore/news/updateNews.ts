import { firebase } from "../../../firebase";
import "firebase/firestore";
import { News } from "../../models/news";

// export const InsertNews = async (news: News) => {   => OK
// async function UpdateNews(news: News): Promise<any> {  => ok
// async function UpdateNews(news: News): string {  => LỖI :Type 'string' is not a valid async function return type in ES5/ES3 because it does not refer to a Promise-compatible constructor value.
export const UpdateNews = async (news: News): Promise<void> => {
  const dataUpdate: News = {
    title: news.title,
    description: news.description,
    imagePath: news.imagePath,
  };
  await firebase.firestore().collection("news").doc(news.id).update(dataUpdate);
};
