import React from "react";
import { LayoutPage } from "@/components";
import { AppContext } from "@/context/AppProvider";
import { AppContextType, INewsArticle } from "@/@types/news";
import { NewsItem } from "@/components/news";

export default function NewsPage() {
  const { newsArticles } = React.useContext(AppContext) as AppContextType;
  return (
    <LayoutPage>
      <div>
        <input
          className="border border-gray-400 p-2 text-sm w-full"
          placeholder="Search news..."
        />
      </div>
      <div className="space-y-2 mt-3 divide-y">
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
