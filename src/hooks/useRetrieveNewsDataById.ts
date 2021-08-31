import "firebase/firestore";
import { News } from "src/models/news";
import useSWR from 'swr';
import { retrieveNewsById } from "src/firestore/news/retrieveNewsById";

interface UseRetrieveNewsDataById {
  news: News;
  isError: boolean;
  isLoading: boolean;
}

export function useRetrieveNewsDataById(newsId:string): UseRetrieveNewsDataById {
   
    const { data, error } = useSWR(newsId ? "useRetrieveNewsDataById" : null, async () => {
      return await retrieveNewsById(newsId);
    });

    return {
      news: data!,
      isError: !!error,
      isLoading: !data && !error,
    };
}