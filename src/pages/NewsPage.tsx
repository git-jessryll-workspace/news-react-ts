import React from "react";
import { LayoutPage } from "@/components";
import { AppContext } from "@/context/AppProvider";
import { AppContextType, INewsArticle } from "@/@types/news";
import { NewsItem } from "@/components/news";
import useBingNewsFetch from "@/hooks/useBingNewsFetch";
import useGoogleNewsFetch from "@/hooks/useGoogleNewsFetch";

export default function NewsPage() {
  const fetchBingData = React.useRef(false);
  const fetchGoogleData = React.useRef(false);
  const { newsArticles, updatedArticles } = React.useContext(
    AppContext
  ) as AppContextType;

  const { data: dataBing } = useBingNewsFetch();
  const { data: dataGoogle } = useGoogleNewsFetch();

  React.useEffect(() => {
    if (dataBing?.value) {
      if (!fetchBingData.current) {
        fetchBingData.current = true;
        updatedArticles(dataBing.value, "bing");
      }
    }
    if (dataGoogle?.items) {
      if (!fetchGoogleData.current) {
        fetchGoogleData.current = true;
        updatedArticles(dataGoogle.items, "google");
      }
    }
  }, [dataBing, dataGoogle]);

  return (
    <LayoutPage>
      <div className="px-4">
        <div className="text-center mb-3 pt-10">
          <h3
            className="font-bold text-4xl"
            style={{
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            My News Coffee
          </h3>
        </div>
        <div className="mb-14">
          <input
            className="border border-[#4F4557] dark:border-gray-300 outline-none p-3 w-full rounded-lg shadow-md bg-[#F4EEE0] dark:bg-[#6D5D6E] text-[#4F4557] dark:text-[#F4EEE0] placeholder-[#4F4557] dark:placeholder-[#F4EEE0]"
            placeholder="Search news..."
          />
        </div>
        <div className="pl-2">
          <h3 className="font-bold text-sm">Top Headlines</h3>
        </div>
        <div className="space-y-2 divide-y divide-[#6D5D6E]">
          {newsArticles.map((newsArticle: INewsArticle) => (
            <NewsItem
              key={newsArticle.id}
              data={newsArticle.data}
              type={newsArticle.type}
            />
          ))}
        </div>
      </div>
    </LayoutPage>
  );
}
