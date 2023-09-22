import { IBingNews } from "@/@types/news";

export const dataBingNews = (item: IBingNews) => ({
  id: item.datePublished,
  type: "bing",
  data: item,
  publishedAt: item.datePublished,
});
