import { IBingNews } from "@/@types/bing";
import { IGoogleNews } from "@/@types/google";

export const dataBingNews = (item: IBingNews) => ({
  id: item.datePublished,
  title: item.name,
  type: "bing",
  data: item,
  publishedAt: item.datePublished,
});

export const dataGoogleNews = (item: IGoogleNews) => ({
  id: `${item.title}-google`,
  title: item.title,
  type: "google",
  data: {
    ...item,
    timestamp: new Date(parseInt(item.timestamp)).toISOString(),
  },
  publishedAt: new Date(parseInt(item.timestamp)).toISOString(),
});
