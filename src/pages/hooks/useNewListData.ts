import "firebase/firestore";
import { News } from "../../models/news";
import useSWR from 'swr';
import { RetrieveNews } from "../../firestore/news/retrieveNews";

export function useNewListData() {
    const { data, error } = useSWR("useNewListData", async () => {
      return await RetrieveNews();
    });

    return {
      newsList: data as News[],
      isError: !!error,
      isLoading: !data && !error,
    };
}