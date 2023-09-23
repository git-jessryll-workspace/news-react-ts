import React from "react";
import BingNewsItem from "./BingNewsItem";
import GoogleNewsItem from "./GoogleNewsItem";
import { IBingNews } from "@/@types/bing";
import { IGoogleNews } from "@/@types/google";

const views: any = {
  bing: BingNewsItem,
  google: GoogleNewsItem
};

const NewsItem: React.FC<{ data: IBingNews | IGoogleNews; type: string }> = ({
  data,
  type,
}) => {
  const Component = views[type];

  return <Component data={data} />;
};

export default NewsItem;
