import { firebase } from "../../../../firebase";
import "firebase/firestore";
import { News } from "../../../models/news";

export default async function handler(req, res) {
  const newsList: News[] = [];

  let query = firebase.firestore().collection("news").orderBy("title", "desc").limit(10);
  const querySnapshot = await query.get();

  // "then" part after the await
  querySnapshot.forEach(function (doc) {
    newsList.push({
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      imagePath: doc.data().imagePath,
    });
  });
  

  res.status(200).json(newsList);
}
