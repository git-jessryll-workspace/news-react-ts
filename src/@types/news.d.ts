import { IBingNews } from "./bing";
import { IGoogleNews } from "./google";

export interface INewsArticle {
  id: string;
  type: string;
  publishedAt: string;
  data: IBingNews | IGoogleNews;
}

export interface IRapidHeaders {
  "X-BingApis-SDK"?: string | undefined;
  "X-RapidAPI-Key": string;
  "X-RapidAPI-Host": string;
}

export type AppContextType = {
  newsArticles: INewsArticle[];
  updatedArticles: (list: IBingNews[] | IGoogleNews[], type: string) => void;
};
