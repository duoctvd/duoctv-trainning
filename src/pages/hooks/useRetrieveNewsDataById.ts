import "firebase/firestore";
import { News } from "../../models/news";
import useSWR from 'swr';
import { RetrieveNewsById } from "../../firestore/news/retrieveNewsById";

export function useRetrieveNewsDataById(idNews:string) {
    
    const { data, error } = useSWR("useRetrieveNewsDataById", async () => {
      return await RetrieveNewsById(idNews);
    });

    return {
      news: data as News,
      isError: !!error,
      isLoading: !data && !error,
    };
}