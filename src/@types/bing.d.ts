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

export interface IBingNewsParams {
  safeSearch: string;
  textFormat: string;
  cc: string;
  count: string;
}
