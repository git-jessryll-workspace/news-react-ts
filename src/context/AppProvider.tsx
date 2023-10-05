import React from "react";
import { AppContextType, INewsArticle } from "@/@types/news";
import { dataBingNews, dataGoogleNews } from "@/utils/datamap";
import { IBingNews } from "@/@types/bing";
import { IGoogleNews } from "@/@types/google";

export const AppContext = React.createContext<AppContextType | null>(null);
type Props = {
  children: React.ReactNode;
};
const AppProvider: React.FC<Props> = ({ children }) => {
  const [newsArticles, setNewsArticles] = React.useState<INewsArticle[]>([]);
  const [theme, setTheme] = React.useState<string>("dark");
  const colorTheme: "dark" | "light" = theme === "dark" ? "light" : "dark";

  React.useEffect((): void => {
    const root: HTMLElement = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  const updatedArticles = (
    newList: IBingNews[] | IGoogleNews[],
    type: string = "bing",
  ): void => {
    setNewsArticles((prev: INewsArticle[]) => {
      return [
        ...prev,
        ...newList.map((item: IBingNews | IGoogleNews) => {
          if (type === "bing") {
            return dataBingNews(item as IBingNews);
          }
          return dataGoogleNews(item as IGoogleNews);
        }),
      ];
    });
  };

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <AppContext.Provider
      value={{
        newsArticles: [
          ...new Set(
            newsArticles.sort(function (
              item1: INewsArticle,
              item2: INewsArticle,
            ) {
              return (
                new Date(item2.publishedAt).getTime() -
                new Date(item1.publishedAt).getTime()
              );
            }),
          ),
        ],
        theme,
        updatedArticles,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
