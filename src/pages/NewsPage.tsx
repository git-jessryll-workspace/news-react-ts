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
      <div className="text-center mb-3">
        <h3
          className="font-bold text-4xl text-gray-700"
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          My News Coffee
        </h3>
      </div>
      <div className="mb-4">
        <input
          className="border border-gray-300 p-3 w-full rounded-lg shadow-md"
          placeholder="Search news..."
        />
      </div>
      <div>
        <h3 className="font-bold text-gray-500 text-sm">Top Headlines</h3>
      </div>
      <div className="space-y-2 divide-y">
        {newsArticles.map((newsArticle: INewsArticle) => (
          <NewsItem
            key={newsArticle.id}
            data={newsArticle.data}
            type={newsArticle.type}
          />
        ))}
      </div>
    </LayoutPage>
  );
}
