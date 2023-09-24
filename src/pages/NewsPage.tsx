import React from "react";
import { LayoutPage, SearchNotFound } from "@/components";
import { AppContext } from "@/context/AppProvider";
import { AppContextType, INewsArticle } from "@/@types/news";
import { NewsItem } from "@/components/news";
import useBingNewsFetch from "@/hooks/useBingNewsFetch";
import useGoogleNewsFetch from "@/hooks/useGoogleNewsFetch";
import { useSearchParams } from "react-router-dom";
import bingData from "@/sample-data.json";
import googleData from "@/samplegoogledata.json";
import { ClockLoader } from "react-spinners";

export default function NewsPage() {
  const { newsArticles, updatedArticles } = React.useContext(
    AppContext
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

  const newsItems = newsArticles.filter((item) =>
    item.title.toLowerCase().includes(q.toLowerCase())
  );

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
        <div className="mb-14">
          <input
            className="border border-[#4F4557] dark:border-gray-300 outline-none p-3 w-full rounded-lg shadow-md bg-[#F4EEE0] dark:bg-[#6D5D6E] text-[#4F4557] dark:text-[#F4EEE0] placeholder-[#4F4557] dark:placeholder-[#F4EEE0]"
            placeholder="Search news..."
            value={q}
            onChange={(e) =>
              setSearchParams(
                (prev) => {
                  prev.set("q", e.target.value);
                  return prev;
                },
                { replace: true }
              )
            }
          />
        </div>
        <div className="pl-2">
          <h3 className="font-bold text-sm">Top Headlines</h3>
        </div>
        {statusBing === "loading" && statusGoogle === "loading" ? (
          <div className="flex h-[300px] justify-center items-center">
            <div className="space-y-4">
              <div className="flex justify-center">
                <ClockLoader color="#F4EEE0" />
              </div>
              <div className="text-center">
                <h1 className="text-3xl font-bold">Loading...</h1>
                <h3 className="text-lg">Please wait</h3>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-2 divide-y divide-[#6D5D6E]">
            {
              newsItems.length === 0 && <SearchNotFound />
            }
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
