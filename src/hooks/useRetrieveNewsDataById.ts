import "firebase/firestore";
import { News } from "../models/news";
import useSWR from 'swr';
import { retrieveNewsById } from "../firestore/news/retrieveNewsById";

interface useRetrieveNewsDataById {
  news: News;
  isError: boolean;
  isLoading: boolean;
}

export function useRetrieveNewsDataById(newsId:string): useRetrieveNewsDataById {
   
    const { data, error } = useSWR(newsId ? "useRetrieveNewsDataById" : null, async () => {
      return await retrieveNewsById(newsId);
    });

    return {
      news: data,
      isError: !!error,
      isLoading: !data && !error,
    } as useRetrieveNewsDataById;
}