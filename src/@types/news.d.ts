export interface INewsArticle {
  id: string;
  type: string;
  publishedAt: string;
  data: IBingNews;
}

export interface IBingProvider {
  _type: string;
  name: string;
  image: {
    _type: string;
    thumbnail: {
      _type: string;
      contentUrl: string;
    };
  };
}
export interface IBingNews {
  datePublished: string;
  description: string;
  name: string;
  image: {
    thumbnail: {
      contentUrl: string;
      width: number;
      height: number;
    };
  };
  provider: IBingProvider[];
  url: string;
  _type: string;
}

export type AppContextType = {
  newsArticles: INewsArticle[];
  // updateNewsArticles: (items: NewsArticleInterface[]) => void;
};
