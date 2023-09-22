import axios from "axios";
import { useState, useEffect, useRef } from "react";

export default function useBingNewsFetch() {
  const [data, setData] = useState<any>(null);
  const fetchData = useRef<any>();

  const newAbortSignal = (timeoutMs: number) => {
    const abortController = new AbortController();
    setTimeout(() => abortController.abort(), timeoutMs || 0);
    return abortController.signal;
  };

  useEffect(() => {
    if (!fetchData.current) {
      fetchData.current = true;
      const options = {
        method: "GET",
        url: "https://bing-news-search1.p.rapidapi.com/news",
        params: {
          safeSearch: "Off",
          textFormat: "Raw",
          cc: 'ph',
          count: '100'
        },
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": import.meta.env.VITE_BING_NEWS_API_KEY,
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
        signal: newAbortSignal(5000),
      };
      axios(options).then((response) => {
        if (response.status === 200) {
          setData(response.data);
        }
      });
    }
  }, []);
  return { data };
}
