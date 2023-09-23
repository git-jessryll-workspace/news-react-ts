import { AppContextType, INewsArticle } from "@/@types/news";
import React from "react";
import { dataBingNews, dataGoogleNews } from "@/utils/datamap";
import { IBingNews } from "@/@types/bing";
import { IGoogleNews } from "@/@types/google";

export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [newsArticles, setNewsArticles] = React.useState<INewsArticle[]>([]);
  const [theme, setTheme] = React.useState<boolean>(false);

  const updatedArticles = (
    newList: IBingNews[] | IGoogleNews[],
    type: string = "bing"
  ) => {
    setNewsArticles((prev: INewsArticle[]) => {
      const list = [
        ...prev,
        ...newList.map((item: any) => {
          if (type === "bing") {
            return dataBingNews(item);
          }
          return dataGoogleNews(item);
        }),
      ];
      return list;
    });
  };

  const toggleDarkMode = () => {
    setTheme(!theme);
  };
  return (
    <AppContext.Provider
      value={{
        newsArticles: [
          ...new Set(
            newsArticles.sort(function (
              item1: INewsArticle,
              item2: INewsArticle
            ) {
              return (
                new Date(item2.publishedAt).getTime() -
                new Date(item1.publishedAt).getTime()
              );
            })
          ),
        ],
        updatedArticles,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
