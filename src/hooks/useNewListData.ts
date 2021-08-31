import "firebase/firestore";
import { News } from "src/models/news";
import useSWR from 'swr';
import { retrieveNews } from "src/firestore/news/retrieveNews";

interface UseNewListData {
  newsList: News[];
  isError: boolean;
  isLoading: boolean;
}

export function useNewListData(): UseNewListData {
    const { data, error } = useSWR("useNewListData", async () => {
      return await retrieveNews();
    });

    return {
      newsList: data!,
      isError: !!error,
      isLoading: !data && !error,
    };
}