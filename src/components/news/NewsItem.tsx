import React from "react";
import BingNewsItem from "./BingNewsItem";
import GoogleNewsItem from "./GoogleNewsItem";
import { IBingNews } from "@/@types/bing";
import { IGoogleNews } from "@/@types/google";

type ReactFC = React.FC<{ data: IBingNews }> | React.FC<{ data: IGoogleNews }>;

type ViewsProps = {
  [type: string]: ReactFC;
};
const views: ViewsProps = {
  bing: BingNewsItem as React.FC<{ data: IBingNews }>,
  google: GoogleNewsItem as React.FC<{ data: IGoogleNews }>,
};

const NewsItem: React.FC<{ data: IBingNews | IGoogleNews; type: string }> = ({
  data,
  type,
}) => {
  const Component: ReactFC = views[type];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Component data={data} />;
};

export default NewsItem;
