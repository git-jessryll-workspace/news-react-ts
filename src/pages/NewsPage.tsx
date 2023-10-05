import React from "react";
import { LayoutPage, PleaseWaitComponent, SearchNotFound } from "@/components";
import { AppContext } from "@/context/AppProvider";
import { AppContextType, INewsArticle } from "@/@types/news";
import { NewsItem } from "@/components/news";
import { useSearchParams } from "react-router-dom";
import { useBingNewsFetch, useGoogleNewsFetch } from "@/hooks";
import bingData from "@/sample-data.json";
import googleData from "@/samplegoogledata.json";
import SearchNewsForm from "@/components/SearchNewsForm";

export default function NewsPage(): JSX.Element {
  const { newsArticles, updatedArticles } = React.useContext(
    AppContext,
  ) as AppContextType;
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const q: string | null | undefined = searchParams.get("q") ?? "";

  const { data: dataBing, status: statusBing } = useBingNewsFetch();
  const { data: dataGoogle, status: statusGoogle } = useGoogleNewsFetch();

  React.useEffect(() => {
    if (statusBing === "success") {
      updatedArticles(dataBing.value, "bing");
    }
    if (statusBing === "error") {
      updatedArticles(bingData.value, "bing");
    }
  }, [statusBing]);

  React.useEffect(() => {
    if (statusGoogle === "success") {
      updatedArticles(dataGoogle.items, "google");
    }
    if (statusGoogle === "error") {
      updatedArticles(googleData.items, "google");
    }
  }, [statusGoogle]);

  const newsItems: INewsArticle[] = newsArticles.filter((item: INewsArticle) =>
    item.title.toLowerCase().includes(q.toLowerCase()),
  );

  const searchUpdate = (search: string) => {
    setSearchParams(
      (prev: URLSearchParams) => {
        prev.set("q", search);
        return prev;
      },
      { replace: true },
    );
  };

  return (
    <LayoutPage>
      <div className="px-0 md:px-4">
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
        <SearchNewsForm searchUpdate={searchUpdate} search={q} />
        <div className="pl-2">
          <h3 className="font-bold text-sm">Top Headlines</h3>
        </div>
        {statusBing === "loading" && statusGoogle === "loading" ? (
          <PleaseWaitComponent />
        ) : (
          <div className="space-y-2 divide-y divide-[#6D5D6E]">
            {newsItems.length === 0 && <SearchNotFound />}
            {newsItems.map((newsArticle: INewsArticle) => (
              <NewsItem
                key={newsArticle.id}
                data={newsArticle.data}
                type={newsArticle.type}
              />
            ))}
          </div>
        )}
      </div>
    </LayoutPage>
  );
}
