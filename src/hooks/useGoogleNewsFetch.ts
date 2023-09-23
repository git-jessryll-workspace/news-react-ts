
import datajson from "@/samplegoogledata.json";
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
  //   return useFetch({ config: options });
  return { data: datajson };
}
