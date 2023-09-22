import { AppContextType, IBingNews } from "@/@types/news";
import React from "react";
import { dataBingNews } from "@/utils/datamap";
import useBingNewsFetch from "@/hooks/useBingNewsFetch";

export const AppContext = React.createContext<AppContextType | null>(null);
const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [newsArticles, setNewsArticles] = React.useState<any>([]);

  const { data: bingdata } = useBingNewsFetch();

  React.useEffect(() => {
    if (bingdata?.value) {
      setNewsArticles(
        bingdata.value.map((item: IBingNews) => dataBingNews(item))
      );
    }
  }, [bingdata]);

  return (
    <AppContext.Provider value={{ newsArticles }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
