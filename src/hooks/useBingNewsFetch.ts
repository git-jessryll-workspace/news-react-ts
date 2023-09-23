import axios from "axios";
import { useQuery } from "react-query";

export default function useBingNewsFetch() {
  const { VITE_BING_NEWS_API_KEY, VITE_BING_NEWS_API_HOST } = import.meta.env;
  const options = {
    method: "GET",
    url: `https://${VITE_BING_NEWS_API_HOST}/news`,
    params: {
      safeSearch: "Off",
      textFormat: "Raw",
      cc: "ph",
      count: "100",
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": VITE_BING_NEWS_API_KEY,
      "X-RapidAPI-Host": VITE_BING_NEWS_API_HOST,
    },
  };
  const fetchAllBingNews = async () => {
    const {data} = await axios(options);
    return data;
  }
  return useQuery("bing-news", fetchAllBingNews);
}
