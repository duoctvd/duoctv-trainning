import "firebase/firestore";
import { News } from "../models/news";
import useSWR from 'swr';
import { retrieveNews } from "../firestore/news/retrieveNews";

interface UseNewListData {
  newsList: News[];
  isError: boolean;
  isLoading: boolean;
}

export function useNewListData() {
    const { data, error } = useSWR("useNewListData", async () => {
      return await retrieveNews();
    });

    return {
      newsList: data,
      isError: !!error,
      isLoading: !data && !error,
    } as UseNewListData;
}