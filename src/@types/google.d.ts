export interface IGoogleNews {
  title: string;
  snippet: string;
  publisher: string;
  timestamp: string;
  newsUrl: string;
  hasSubnews: boolean;
  images?: {
    thumbnail: string;
    original: string;
  };
  subnews?: {}[];
}

export interface IGoogleNewsParams {
  lr: string;
}
