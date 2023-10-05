import { useQuery } from "react-query";
import axios from "axios";

export default function useGoogleNewsFetch() {
  const { VITE_GOOGLE_NEWS_API_KEY, VITE_GOOGLE_NEWS_API_HOST } = import.meta
    .env;
  const options = {
    method: "GET",
    url: `https://google-news13.p.rapidapi.com/latest`,
    params: {
      lr: "en-PH",
    },
    headers: {
      "X-RapidAPI-Key": VITE_GOOGLE_NEWS_API_KEY,
      "X-RapidAPI-Host": VITE_GOOGLE_NEWS_API_HOST,
    },
  };
  const fetchAllGoogleNews = async () => {
    const { data } = await axios(options);
    return data;
  };
  return useQuery("google-news", fetchAllGoogleNews, {
    enabled: true,
    staleTime: Infinity,
    retry: false,
  });
}
